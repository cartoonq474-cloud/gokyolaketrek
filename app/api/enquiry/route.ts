import { NextResponse } from "next/server";

/**
 * Enquiry endpoint. Validates, then hands the enquiry to whichever delivery channel is
 * configured by environment variable.
 *
 * Delivery is deliberately fail-loud: if no channel is configured the route returns 503
 * and the form tells the visitor to use WhatsApp instead. A booking form that appears to
 * send and silently drops the enquiry is worse than one that admits it is not wired up,
 * that was the previous behaviour and it lost every enquiry.
 *
 * To activate, set in `.env.local`:
 *   ENQUIRY_TO_EMAIL=the operator's own inbox, never rendered on the page
 *   RESEND_API_KEY=re_...          # https://resend.com, no SDK needed, plain HTTPS
 *   ENQUIRY_FROM_EMAIL=enquiries@annapurnacircuittrek.co.uk   # must be a verified sender
 */

export const runtime = "nodejs";
// The route reads request headers (origin, forwarded IP) and sends mail, so it
// must never be prerendered or cached. Stated rather than inferred.
export const dynamic = "force-dynamic";

/**
 * The host this form is allowed to be posted from. Everything else, including
 * a POST carrying `Origin: https://evil.example`, is refused.
 *
 * Without this the route is an unauthenticated, unthrottled outbound-email
 * trigger on someone else's Resend account: direct cost, inbox flooding, and
 * a sending domain whose reputation decides whether genuine booking
 * correspondence reaches a UK inbox.
 */
const CANONICAL_HOST = "annapurnacircuittrek.co.uk";

/**
 * Preview deployments and local development are legitimate origins for their
 * own host, so the allowed set is the canonical domain plus whatever host the
 * request itself arrived on. That still refuses a cross-origin POST, which is
 * the whole point: an attacker cannot forge Host and Origin into agreement
 * through a browser.
 */
function allowedHosts(request: Request): Set<string> {
  const hosts = new Set([CANONICAL_HOST, `www.${CANONICAL_HOST}`]);
  const host = request.headers.get("host");
  if (host) hosts.add(host);
  return hosts;
}

function sameOrigin(request: Request): boolean {
  // Every browser that can run this form sends Sec-Fetch-Site on fetch(), and
  // our own form only ever produces "same-origin".
  const site = request.headers.get("sec-fetch-site");
  if (site) return site === "same-origin";

  // No Sec-Fetch-Site means an older browser or a non-browser client. fetch()
  // always sets Origin on a POST, so fall back to that.
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return allowedHosts(request).has(new URL(origin).host);
  } catch {
    return false;
  }
}

/**
 * Per-IP rate limit, in memory.
 *
 * LIMITATION, read before relying on this: the map lives in one serverless
 * instance. Vercel runs several, and recycles them, so a determined attacker
 * spreading requests across instances gets the limit multiplied by the number
 * of live instances, and a cold start resets the window. It stops casual
 * scripted abuse and accidental double-submits, which is most of the traffic
 * this route will ever see. If enquiry volume or abuse justifies it, move the
 * counter to Vercel KV or put @vercel/firewall in front of the route.
 */
const RATE_LIMIT = { max: 6, windowMs: 10 * 60 * 1000, maxKeys: 5000 };
const hits = new Map<string, number[]>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  // Left-most entry is the client; the rest are proxies.
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (at) => now - at < RATE_LIMIT.windowMs,
  );
  recent.push(now);

  // Map preserves insertion order, so deleting the first key evicts the least
  // recently created entry. Re-inserting on every hit makes that "least
  // recently used", which is what we want when the map is full.
  hits.delete(ip);
  hits.set(ip, recent);
  while (hits.size > RATE_LIMIT.maxKeys) {
    const oldest = hits.keys().next().value;
    if (oldest === undefined) break;
    hits.delete(oldest);
  }

  return recent.length > RATE_LIMIT.max;
}

/**
 * Honeypot hits, counted for the life of this instance.
 *
 * The honeypot used to accept and discard in silence. That is correct for a
 * bot and wrong for the agent or autofill tool that fills every labelled input
 * it can parse: that visitor is shown "enquiry sent" and the enquiry is gone,
 * invisible from both sides. The form now marks the field readOnly, and this
 * counter makes anything that still gets through observable in the logs.
 */
let honeypotHits = 0;

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  dates?: string;
  groupSize?: string;
  itinerary?: string;
  message?: string;
  /** Honeypot, real users never fill this. */
  website?: string;
};

const MAX = { name: 120, email: 200, phone: 40, country: 80, dates: 120, groupSize: 10, itinerary: 160, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Errors come back keyed by the input they belong to, so the form can print
 * each one under the field that caused it rather than stacking every message
 * in one block at the top. `errors` is still returned as a flat list for any
 * caller that just wants to show something.
 */
function validate(body: Payload) {
  const fieldErrors: Record<string, string> = {};
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2) fieldErrors.name = "Please give your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please give a valid email address.";
  if (message.length < 10) fieldErrors.message = "Please tell us a little about your plans, rough dates and group size is enough.";

  for (const [key, limit] of Object.entries(MAX)) {
    const value = (body as Record<string, string | undefined>)[key];
    // A field already flagged above keeps its more specific message.
    if (value && value.length > limit && !fieldErrors[key]) {
      fieldErrors[key] = `Please keep this under ${limit} characters.`;
    }
  }
  return { fieldErrors, errors: Object.values(fieldErrors), name, email, message };
}

function asText(body: Payload, name: string, email: string, message: string) {
  return [
    `New Annapurna Circuit enquiry`,
    ``,
    `Name:      ${name}`,
    `Email:     ${email}`,
    `Phone:     ${body.phone?.trim() || "n/a"}`,
    `Country:   ${body.country?.trim() || "n/a"}`,
    `Dates:     ${body.dates?.trim() || "n/a"}`,
    `Group:     ${body.groupSize?.trim() || "n/a"}`,
    `Itinerary: ${body.itinerary?.trim() || "n/a"}`,
    ``,
    `Message:`,
    message,
    ``,
    `Sent from annapurnacircuittrek.co.uk`,
  ].join("\n");
}

async function deliver(subject: string, text: string, replyTo: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!key || !to || !from) return { ok: false as const, reason: "not-configured" as const };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, text, reply_to: replyTo }),
  });
  if (!res.ok) {
    return { ok: false as const, reason: "provider-error" as const, detail: await res.text() };
  }
  return { ok: true as const };
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, errors: ["Refused."] }, { status: 403 });
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    console.warn(`[enquiry] rate limit hit for ${ip}`);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "That is a few enquiries in a short space of time. Please wait a few minutes, or message us on WhatsApp.",
        ],
      },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: ["Malformed request."] }, { status: 400 });
  }

  // Honeypot: silently accept so bots do not learn anything, but deliver
  // nothing. Counted rather than dropped in silence, so the cost of the false
  // positives (see honeypotHits above) is visible in the logs.
  if (body.website) {
    honeypotHits += 1;
    console.warn(
      `[enquiry] honeypot fired, enquiry NOT sent. Count this instance: ${honeypotHits}. From: ${body.email?.trim() || "no email given"}`,
    );
    return NextResponse.json({ ok: true });
  }

  const { fieldErrors, errors, name, email, message } = validate(body);
  if (errors.length) return NextResponse.json({ ok: false, errors, fieldErrors }, { status: 422 });

  const text = asText(body, name, email, message);
  const result = await deliver(`Annapurna Circuit enquiry: ${name}`, text, email);

  if (!result.ok && result.reason === "not-configured") {
    // Log it so nothing is lost in development, and tell the client honestly.
    console.warn("[enquiry] no delivery channel configured, enquiry NOT sent:\n" + text);
    return NextResponse.json(
      {
        ok: false,
        notConfigured: true,
        errors: ["Our enquiry form is not connected yet. Please message us on WhatsApp, we reply within the hour."],
      },
      { status: 503 },
    );
  }

  if (!result.ok) {
    console.error("[enquiry] delivery failed:", result.detail);
    return NextResponse.json(
      { ok: false, errors: ["Something went wrong sending your enquiry. Please try WhatsApp instead."] },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

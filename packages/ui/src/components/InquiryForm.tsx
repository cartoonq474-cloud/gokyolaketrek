"use client";

import { useId, useState } from "react";
import { Icon } from "./Icon";
import type { TrekConfig } from "../data/types";

/**
 * `errors` here is only for problems that belong to the form as a whole:
 * the server being unreachable, delivery not being configured. Anything
 * traceable to a single input travels in `fieldErrors` and is printed under
 * that input instead, because a wrong email is far easier to fix when the
 * message sits next to the box you typed it in.
 */
type Status =
  | { state: "idle" | "sending" | "sent" }
  | { state: "error"; errors: string[]; whatsapp: boolean };

type FieldErrors = Record<string, string>;

// Mirrors the server's rule in app/api/enquiry/route.ts. Checking here too
// means a typo is caught before the round trip, not after it.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Focus order for the first offending field, so submitting an invalid form
// lands the caret on the topmost problem.
const FIELD_ORDER = [
  "name",
  "email",
  "phone",
  "country",
  "dates",
  "groupSize",
  "itinerary",
  "message",
];

function validate(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  const read = (key: string) => String(data[key] ?? "").trim();

  if (read("name").length < 2) errors.name = "Please give your name.";
  if (!EMAIL_RE.test(read("email")))
    errors.email = "Please give a valid email address.";
  if (read("message").length < 10)
    errors.message =
      "Please tell us a little about your plans, rough dates and group size is enough.";

  return errors;
}

export function InquiryForm({
  config,
  variant = "rail",
  heading = "Enquiry",
  submitLabel = "Send",
}: {
  config: TrekConfig;
  variant?: "rail" | "full";
  heading?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const waHref = `https://wa.me/${config.whatsapp}`;

  /**
   * /contact mounts this component twice, the rail and the full form, and the
   * ids used to be literals, so seven of them appeared twice in one document.
   * A duplicate id makes <label for> ambiguous and leaves an agent resolving
   * "#iq-name" with whichever the parser happened to see first. useId gives
   * each instance its own suffix, so the ids stay readable and stay unique
   * however many forms a page decides to mount.
   */
  const uid = useId();
  const fid = (field: string) => `iq-${field}-${uid}`;

  /**
   * The two forms also need to be told apart by name, not just by id. The rail
   * is the quick version, the full form is the one on /contact.
   */
  const formLabel =
    variant === "rail"
      ? `Quick enquiry about the ${config.trekName}`
      : `Enquire about the ${config.trekName}`;

  // Put the caret on the first field that failed. Without this the messages
  // appear but a long form can scroll them out of sight.
  function focusFirstError(form: HTMLFormElement, errors: FieldErrors) {
    const first = FIELD_ORDER.find((name) => errors[name]);
    if (!first) return;
    const el = form.elements.namedItem(first);
    if (el instanceof HTMLElement) el.focus();
  }

  // Typing in a field clears its own message. Leaving it up while the visitor
  // fixes the value makes the form feel broken.
  function clearFieldError(name: string) {
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const localErrors = validate(data);
    if (Object.keys(localErrors).length) {
      setFieldErrors(localErrors);
      setStatus({ state: "idle" });
      focusFirstError(form, localErrors);
      return;
    }

    setFieldErrors({});
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus({ state: "sent" });
        form.reset();
        return;
      }

      // The server disagreed about a specific field, so show it there and
      // leave the form-level banner out of it.
      const serverFieldErrors: FieldErrors = json.fieldErrors ?? {};
      if (Object.keys(serverFieldErrors).length) {
        setFieldErrors(serverFieldErrors);
        setStatus({ state: "idle" });
        focusFirstError(form, serverFieldErrors);
        return;
      }

      setStatus({
        state: "error",
        errors: json.errors ?? [
          "Something went wrong. Please try WhatsApp instead.",
        ],
        whatsapp: Boolean(json.notConfigured) || res.status >= 500,
      });
    } catch {
      setStatus({
        state: "error",
        errors: [
          "We could not reach the server. Please check your connection, or message us on WhatsApp.",
        ],
        whatsapp: true,
      });
    }
  }

  // Everything an input needs to report its own error: the red rule, the
  // accessible wiring to the message below it, and the clear-on-type.
  const errorProps = (name: string) => ({
    "aria-invalid": fieldErrors[name] ? true : undefined,
    "aria-describedby": fieldErrors[name] ? `${fid(name)}-error` : undefined,
    onInput: () => clearFieldError(name),
  });

  const inputClass = (name: string) =>
    fieldErrors[name]
      ? `${inputClasses} border-b-red-500 focus:border-b-red-600`
      : inputClasses;

  const selectClass = (name: string) =>
    fieldErrors[name]
      ? `${selectClasses} border-b-red-500 focus:border-b-red-600`
      : selectClasses;

  // Rendered in one branch or the other depending on variant, never both, so
  // the two branches can share an id.
  const itineraryOptions = (
    <>
      {/*
        The operator's real product list, matching content/config.ts. An earlier
        pass guessed at 9, 12, 15 and 18 days before their site was read; those
        lengths do not exist. Keep this in step with the nav.
      */}
      <option value="">Itinerary</option>
      <option value="15 days, the standard Gokyo Lake trek">
        15 days, the standard Gokyo Lake trek
      </option>
      <option value="19 days, Gokyo and Everest Base Camp via Cho La">
        19 days, Gokyo and Everest Base Camp via Cho La
      </option>
      <option value="21 days, Gokyo and the Three Passes">
        21 days, Gokyo and the Three Passes
      </option>
      <option value="Not sure yet, please advise">
        Not sure yet, please advise
      </option>
    </>
  );

  if (status.state === "sent") {
    return (
      <form
        className="mx-auto w-full max-w-xl  border border-slate-200 bg-white p-6 shadow-[0_28px_60px_rgba(15,23,42,0.08)]"
        aria-label={formLabel}
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Enquiry sent
          </p>
          <h3 className="text-2xl font-semibold text-[var(--ink)]">Thank you</h3>
        </div>

        <p
          className="mt-4 text-sm leading-relaxed text-slate-600"
          role="status"
        >
          Your enquiry is with us. We reply within an hour during Nepal working
          hours (06:00–22:00 NPT), seven days a week.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          If it is urgent, message us on{" "}
          <a
            href={waHref}
            className="font-semibold text-[var(--brand-ink)] underline-offset-4 transition hover:text-[var(--brand-hover)] hover:underline"
          >
            WhatsApp
          </a>
          .
        </p>
      </form>
    );
  }

  const sending = status.state === "sending";

  return (
    <form
      className="mx-auto  w-full max-w-xl rounded-md border border-slate-200 bg-white p-6 shadow-[0_28px_60px_rgba(15,23,42,0.08)]"
      aria-label={formLabel}
      onSubmit={onSubmit}
      noValidate
    >
      <div className="flex flex-col gap-2">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.15rem] text-[var(--brand-ink)]">
          {variant === "rail" ? "Quick enquiry" : "Let’s chat"}
        </p> */}
        <h3 className="text-2xl font-semibold text-[var(--brand-ink)]">{heading}</h3>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Send us your dates, group size and any questions.
        </p>
      </div>

      {status.state === "error" && (
        <div
          role="alert"
          className="mt-4 rounded-3xl border border-red-100 bg-red-50 p-4 text-sm text-red-800 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Icon glyph="warning" />
            <div className="space-y-2">
              {status.errors.map((e) => (
                <p key={e} className="m-0">
                  {e}
                </p>
              ))}
              {status.whatsapp && (
                <p className="m-0">
                  <a href={waHref} className="font-semibold underline">
                    Message us on WhatsApp →
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 grid gap-4">
        <Field
          id={fid("name")}
          label="Full name"
          error={fieldErrors.name}
        >
          <input
            id={fid("name")}
            type="text"
            name="name"
            placeholder="Full Name *"
            autoComplete="name"
            required
            className={inputClass("name")}
            {...errorProps("name")}
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id={fid("email")}
            label="Email address"
            error={fieldErrors.email}
          >
            <input
              id={fid("email")}
              type="email"
              name="email"
              placeholder="Email *"
              autoComplete="email"
              required
              className={inputClass("email")}
              {...errorProps("email")}
            />
          </Field>
          <Field
            id={fid("phone")}
            label="Mobile number"
            error={fieldErrors.phone}
          >
            <input
              id={fid("phone")}
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              autoComplete="tel"
              className={inputClass("phone")}
              {...errorProps("phone")}
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            id={fid("country")}
            name="country"
            label="Where you are booking from"
            error={fieldErrors.country}
            defaultValue=""
            autoComplete="country-name"
            className={selectClass("country")}
            {...errorProps("country")}
            onChange={() => clearFieldError("country")}
          >
            {/*
              This was a UK-only list defaulting to "United Kingdom", inherited
              from the Annapurna build whose market really is UK-only. This site
              is international and prices in USD, so a UK default was both wrong
              and quietly misleading about who the trek is sold to.

              Regions rather than a 200-entry country list: the field exists so
              the operator can judge time zone and flight routing when they
              reply, not for anything that needs a precise country.
            */}
            <option value="">Where you are booking from</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Europe">Europe</option>
            <option value="United States or Canada">
              United States or Canada
            </option>
            <option value="Australia or New Zealand">
              Australia or New Zealand
            </option>
            <option value="India">India</option>
            <option value="Other Asia">Other Asia</option>
            <option value="Middle East">Middle East</option>
            <option value="Elsewhere">Elsewhere</option>
          </Select>
          {variant === "full" ? (
            <Field
              id={fid("dates")}
              label="Rough dates"
              error={fieldErrors.dates}
            >
              <input
                id={fid("dates")}
                type="text"
                name="dates"
                placeholder="Rough dates (e.g. October 2026)"
                className={inputClass("dates")}
                {...errorProps("dates")}
              />
            </Field>
          ) : (
            <Select
              id={fid("itinerary")}
              name="itinerary"
              label="Which itinerary"
              error={fieldErrors.itinerary}
              className={selectClass("itinerary")}
              {...errorProps("itinerary")}
              onChange={() => clearFieldError("itinerary")}
            >
              {itineraryOptions}
            </Select>
          )}
        </div>

        {variant === "full" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id={fid("groupSize")}
              label="Group size"
              error={fieldErrors.groupSize}
            >
              <input
                id={fid("groupSize")}
                type="number"
                name="groupSize"
                placeholder="Group size"
                min="1"
                max="20"
                className={inputClass("groupSize")}
                {...errorProps("groupSize")}
              />
            </Field>
            <Select
              id={fid("itinerary")}
              name="itinerary"
              label="Which itinerary"
              error={fieldErrors.itinerary}
              className={selectClass("itinerary")}
              {...errorProps("itinerary")}
              onChange={() => clearFieldError("itinerary")}
            >
              {itineraryOptions}
            </Select>
          </div>
        ) : null}
      </div>

      <div className="mt-4">
        <Field
          id={fid("message")}
          label="Your message"
          error={fieldErrors.message}
        >
          <textarea
            id={fid("message")}
            name="message"
            rows={4}
            placeholder={
              variant === "full"
                ? "Your message: fitness level, altitude experience, dietary needs, kit questions *"
                : "Your message: rough dates & group size *"
            }
            required
            className={`w-full resize-none rounded-md border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              fieldErrors.message
                ? "border-red-500 focus:ring-red-500/20"
                : "border-slate-200 focus:border-b-black focus:ring-emerald-500/20"
            }`}
            {...errorProps("message")}
          />
        </Field>
      </div>

      {/*
        Honeypot. `aria-hidden` keeps it away from screen readers and from
        anything driving the accessibility tree, but it does nothing to an agent
        or autofill tool that parses raw HTML and fills every labelled input it
        finds. Those submissions used to be silently discarded while the visitor
        was shown "enquiry sent", so `readOnly` now makes the field unfillable
        rather than invisible-and-fatal, and the server logs it when it does
        fire. See app/api/enquiry/route.ts.
      */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor={fid("website")}>Website</label>
        <input
          id={fid("website")}
          type="text"
          name="website"
          tabIndex={-1}
          readOnly
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-4 flex w-full items-center justify-center rounded-md bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-hover)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : submitLabel}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        We reply within 1 hour · no deposit to enquire
      </p>
    </form>
  );
}

const inputClasses =
  "w-full  border-b border-b-slate-300  py-3  pr-4 text-sm  placeholder:text-slate-400 focus:border-b-black  ";

// Matches inputClasses, with room on the right for the chevron drawn in Select
// and the native arrow turned off so the control looks the same on every platform.
const selectClasses =
  "w-full appearance-none border-b border-b-slate-300 bg-transparent py-3 pr-8 text-sm text-slate-900 focus:border-b-black focus:outline-none";

/**
 * A native select wearing the same bottom rule as the text inputs. The chevron
 * is drawn here rather than left to the browser, because the native arrow sits
 * in a different place and colour on each platform and broke the line of the
 * form. Wrapped in Field so it gets its label and reports errors exactly like
 * an input does.
 */
function Select({
  id,
  name,
  label,
  error,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  error?: string;
}) {
  return (
    <Field id={id} label={label} error={error}>
      <span className="relative block">
        <select id={id} name={name} {...props}>
          {children}
        </select>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </Field>
  );
}

/**
 * Wraps one control: its label, the control itself, and the space under it
 * where that control's error goes. The error id matches the aria-describedby
 * the control carries when it is invalid.
 *
 * `label` is required rather than optional on purpose. Every control here used
 * to be named by its placeholder alone, which disappears the moment anyone
 * types, and the two selects had no accessible name at all: a browsing agent
 * could not act on "set the country" or "choose the 14-day itinerary", the two
 * fields that qualify the lead. Making the prop required means a new field
 * cannot ship without one.
 */
function Field({
  id,
  label,
  error,
  children,
}: {
  /** The control's own id. The label points at it and the error hangs off it. */
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Visible design is placeholder-led, so the label is for assistive tech
          and for anything reading the accessibility tree, not for the eye. */}
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs leading-snug text-red-600 ">
          {error}
        </p>
      ) : null}
    </div>
  );
}

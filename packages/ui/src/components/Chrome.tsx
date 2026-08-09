import type { ReactNode } from "react";
import { Icon, type Glyph } from "./Icon";
import type { TrekConfig } from "../data/types";

/**
 * Page chrome: the trust band, the contacts strip and the sticky mobile action
 * bar. All three sit at the foot of every page, so they share one palette and
 * one icon language rather than each inventing their own.
 *
 * Colours come from the CSS custom properties in global.css, never from
 * Tailwind's default slate/emerald/orange ramps. That keeps the documented
 * three-colour system intact (cyan, white, WhatsApp green) and keeps the
 * contrast decisions recorded there true: --brand-ink for anything text-bearing,
 * bright --brand for decoration only, --ink on the WhatsApp green.
 */

/* ---------------------------------------------------------------- helpers */

/**
 * The shared 24x24 glyphs are drawn as single filled shapes, but they carry no
 * intrinsic size, so an unwrapped <Icon> lays out at the SVG default of
 * 300x150. Every use here goes through a sized box.
 */
function Mark({ glyph, className }: { glyph: Glyph; className: string }) {
  return (
    <span className={`inline-grid place-items-center ${className}`}>
      <Icon glyph={glyph} />
    </span>
  );
}

/* ------------------------------------------------------------ trust strip */

/**
 * Line art, not solids: these read as credentials rather than as interface
 * buttons. Drawn on the same 24x24 grid as the Icon set, open paths only, so
 * they need the stroke attributes below. Filling them (the previous default)
 * turned every one into an ink blob.
 */
const TRUST_ICONS: Record<string, ReactNode> = {
  // Certificate with a wax seal: company registration.
  registered: (
    <>
      <rect x="2.5" y="3" width="12.5" height="16" rx="2" />
      <path d="M5.8 7.5h6M5.8 11h6M5.8 14.5h3.4" />
      <circle cx="17.6" cy="15" r="3.4" />
      <path d="M15.6 17.9V22l2-1.2 2 1.2v-4.1" />
    </>
  ),
  // Shield and tick: licensed to operate.
  licensed: (
    <>
      <path d="M12 2.6l7.2 2.6v5.4c0 4.4-3 8.2-7.2 9.4-4.2-1.2-7.2-5-7.2-9.4V5.2z" />
      <path d="M8.9 11.9l2.2 2.2 4.1-4.4" />
    </>
  ),
  // Two figures: an association of agencies.
  taan: (
    <>
      <circle cx="9" cy="8.4" r="3.1" />
      <path d="M3.4 19.4a5.6 5.6 0 0 1 11.2 0" />
      <circle cx="17.4" cy="10.2" r="2.3" />
      <path d="M15.6 19.4a5.2 5.2 0 0 1 5-5.2 5.2 5.2 0 0 1 1 .1" />
    </>
  ),
  // Summit flag: the mountaineering body.
  nma: (
    <>
      <path d="M2 20h20" />
      <path d="M4 20l5.5-9.5 3 5 2.5-4L20 20" />
      <path d="M15 11.5V4.2" />
      <path d="M15 4.6l3.6 1.2L15 7.1" />
    </>
  ),
};

function TrustItem({
  icon,
  title,
  body,
}: {
  icon: keyof typeof TRUST_ICONS;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3.5 rounded-lg border border-[var(--line)] bg-white p-4 transition-colors duration-150 hover:border-[var(--brand)] hover:bg-[var(--tint)]">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-lg bg-[var(--tint)] text-[var(--brand-ink)]">
        <svg
          viewBox="0 0 24 24"
          className="h-[22px] w-[22px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          {TRUST_ICONS[icon]}
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-[1rem] font-semibold leading-tight text-[var(--ink)]">
          {title}
        </p>
        <p className="mt-1 text-[length:var(--t-sm)] leading-5 text-[var(--muted)]">
          {body}
        </p>
      </div>
    </div>
  );
}

/**
 * The credentials band. Sits on white above the mountain divider, so it stays
 * light: a dark band here fought the divider art and the navy footer below it.
 *
 * Each cell prints its actual number when one is supplied. Before this the band
 * carried four unnumbered claims and TrekLayout called it with no props at all,
 * so the licence number the config had been carrying was never rendered on any
 * page. A credential a buyer cannot look up is decoration.
 */
export function TrustStrip({
  credentials,
}: { credentials?: TrekConfig["credentials"] } = {}) {
  const withNumber = (label: string, value?: string) =>
    value ? `${label} · No. ${value}` : label;

  return (
    <section
      aria-labelledby="trust-heading"
      className="border-t border-[var(--line)] bg-white py-11"
    >
      <div className="mx-auto max-w-[var(--maxw)] px-5">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2
            id="trust-heading"
            className="text-[length:var(--t-md)] font-semibold uppercase tracking-[0.14em] text-[var(--brand-ink)]"
          >
            Registered and licensed in Nepal
          </h2>
          <p className="text-[length:var(--t-sm)] text-[var(--muted)]">
            Every number here can be checked with the body that issued it.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <TrustItem
            icon="registered"
            title="Govt-registered"
            body={withNumber(
              "Office of the Company Registrar",
              credentials?.companyRegistration,
            )}
          />
          <TrustItem
            icon="licensed"
            title="Licensed trekking agency"
            body={withNumber(
              "Nepal Dept. of Tourism",
              credentials?.tourismLicence,
            )}
          />
          <TrustItem
            icon="taan"
            title="TAAN member"
            body={withNumber(
              "Trekking Agencies' Association of Nepal",
              credentials?.taanId,
            )}
          />
          <TrustItem
            icon="nma"
            title="NMA member"
            body={withNumber(
              "Nepal Mountaineering Association",
              credentials?.nmaId,
            )}
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- contacts bar */

type ContactCell = {
  href: string;
  external?: boolean;
  glyph: Glyph;
  label: string;
  value: string;
  title?: string;
  /** The WhatsApp cell is the filled one, it is the action we actually want. */
  wa?: boolean;
};

/**
 * Three equal cells split by hairlines: the layout global.css already
 * describes for `.reps`. Hairlines run down the row on desktop and across the
 * stack on mobile, so the first cell drops its leading rule at each breakpoint.
 */
function ContactCellLink({ cell }: { cell: ContactCell }) {
  const base =
    "group flex items-center justify-center gap-3.5 px-5 py-6 text-center transition-colors duration-150 border-t border-[var(--line)] first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0";

  const tone = cell.wa
    ? "bg-[var(--wa)] text-[var(--ink)] border-l-[var(--wa)] hover:bg-[var(--wa-hover)]"
    : "bg-white text-[var(--ink)] hover:bg-[var(--tint)]";

  return (
    <a
      href={cell.href}
      title={cell.title}
      {...(cell.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`${base} ${tone}`}
    >
      <Mark
        glyph={cell.glyph}
        className={`h-7 w-7 flex-none [&>svg]:h-full [&>svg]:w-full ${
          cell.wa ? "text-[var(--ink)]" : "text-[var(--brand-ink)]"
        }`}
      />
      <span className="text-left">
        <b className="block text-[1rem] font-bold leading-tight">
          {cell.label}
        </b>
        <span
          className={`block text-[length:var(--t-sm)] leading-tight ${
            cell.wa ? "text-[var(--ink)]/75" : "text-[var(--muted)]"
          }`}
        >
          {cell.value}
        </span>
      </span>
    </a>
  );
}

/**
 * Email · Reviews · WhatsApp. Every cell is a full-bleed target, so the tap
 * area is the whole third rather than the label alone.
 *
 * `reviewScore` / `reviewCount` are optional: pass config.reviews to show the
 * real aggregate instead of the generic line.
 */
export function ContactsBar({
  whatsapp,
  phoneDisplay,
  email,
  reviewScore,
  reviewCount,
}: {
  whatsapp: string;
  phoneDisplay: string;
  email: string;
  reviewScore?: number;
  reviewCount?: number;
}) {
  const cells: ContactCell[] = [
    {
      href: `mailto:${email}`,
      glyph: "email",
      label: "Email",
      value: email,
    },
    {
      href: "/reviews",
      glyph: "star",
      label: "Reviews",
      value:
        reviewScore && reviewCount
          ? `${reviewScore} from ${reviewCount}+ reviews`
          : "What trekkers say",
    },
    {
      href: `https://wa.me/${whatsapp}`,
      external: true,
      glyph: "whatsapp",
      label: "WhatsApp",
      value: phoneDisplay,
      title: phoneDisplay,
      wa: true,
    },
  ];

  return (
    <section
      aria-label="Contact us"
      className="border-y border-[var(--line)] bg-white"
    >
      <div className="mx-auto grid max-w-[var(--maxw)] sm:grid-cols-3">
        {cells.map((cell) => (
          <ContactCellLink key={cell.label} cell={cell} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------- sticky mobile actionbar */

/**
 * Two filled halves rather than white cells with coloured text: on a phone this
 * is the primary conversion surface and it has to hold its own over whatever
 * photography scrolls behind it.
 *
 * The spacer matches the bar exactly, safe-area inset included, so the last
 * section of a page is never left under the bar on an iPhone.
 */
export function Mbar({
  whatsapp,
  phoneDisplay,
  fromPrice,
  currency = "GBP",
  inquiryHref = "#inquiry",
}: {
  whatsapp: string;
  phoneDisplay: string;
  /**
   * Null when the operator has not published a price. The bar then says so
   * rather than printing a number nobody has agreed to honour. The Annapurna
   * clone hardcoded both the figure and a pound sign, which is how a GBP price
   * ended up on a site selling in USD.
   */
  fromPrice: number | null;
  /** ISO 4217, drives the symbol via Intl rather than a hardcoded glyph. */
  currency?: string;
  /** Where the enquire half goes. Pages without the rail have no #inquiry. */
  inquiryHref?: string;
}) {
  /**
   * The inset padding sits on the cells, not on the bar. On the bar it would
   * leave an unpainted strip over the home indicator; on the cells each fill
   * runs to the bottom of the screen and the labels ride above the indicator.
   */
  const inset = { paddingBottom: "env(safe-area-inset-bottom)" };
  const cell =
    "flex min-h-14 items-center justify-center gap-2.5 text-[0.95rem] font-bold transition-colors duration-150";
  const markSize = "h-[18px] w-[18px] flex-none [&>svg]:h-full [&>svg]:w-full";

  return (
    <>
      <div
        aria-hidden="true"
        className="lg:hidden"
        style={{ height: "calc(3.5rem + env(safe-area-inset-bottom))" }}
      />

      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-[120] grid grid-cols-2 shadow-[0_-6px_20px_rgba(0,0,0,0.12)] lg:hidden"
      >
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          title={phoneDisplay}
          style={inset}
          className={`${cell} bg-[var(--wa)] text-[var(--ink)] active:bg-[var(--wa-hover)]`}
        >
          <Mark glyph="whatsapp" className={markSize} />
          <span>WhatsApp</span>
        </a>

        <a
          href={inquiryHref}
          style={inset}
          className={`${cell} bg-[var(--brand-ink)] text-white active:bg-[var(--brand-hover)]`}
        >
          <Mark glyph="email" className={markSize} />
          <span>
            Enquire{" "}
            <span className="font-medium text-white/80">
              {fromPrice === null
                ? "for a price"
                : `from ${new Intl.NumberFormat("en", {
                    style: "currency",
                    currency,
                    maximumFractionDigits: 0,
                  }).format(fromPrice)}`}
            </span>
          </span>
        </a>
      </nav>
    </>
  );
}

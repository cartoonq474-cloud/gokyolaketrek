// The page-level design kit. Section rhythm, prose scale, cards, buttons and
// the day-card, lifted verbatim from annapurnacircuittrek.co.uk so the two
// sites render as the same product.
//
// Two layers of design exist in this project and they are not the same thing:
//
//   packages/ui   the chrome. Header, hero, footer, rail, tables, FAQ. Shared
//                 across every trek domain, knows nothing about this site.
//   this file     what a page body is made of. Imported by content/pages/*.
//
// On the Annapurna build these primitives lived at the top of home.tsx, so the
// second page to want a Section or a DayCard would have had to copy them. They
// are pulled out here instead, which is the one deliberate structural change in
// the clone.
//
// Styled entirely with Tailwind. Pages that use this kit set `selfStyled: true`,
// so <main> drops the global `content` class and none of the `.content h2` /
// `.content img` / `.content > section` rules in global.css apply. Those rules
// are unlayered and would otherwise beat Tailwind's utilities whatever the
// specificity. Colours still come from the CSS custom properties in global.css,
// so pages stay on the documented three-colour system: --brand for decoration,
// --brand-ink for anything text-bearing, WhatsApp green for WhatsApp only.
import type { ReactNode } from "react";
import { Icon } from "@6ktreks/ui";
import type { Glyph } from "@6ktreks/ui";

/* ------------------------------------------------------------------ tokens */

/**
 * Body copy and everything nested inside it. The typography plugin is not
 * installed, so descendant styling is done with arbitrary variants rather than
 * a `prose` class. Buttons and chips are kept outside these wrappers so they
 * do not inherit the link underline.
 */
export const PROSE =
  "space-y-4 text-[1.0625rem] leading-[1.75] text-[var(--body)] " +
  "[&_strong]:font-semibold [&_strong]:text-[var(--ink)] " +
  "[&_a]:font-medium [&_a]:text-[var(--brand-ink)] [&_a]:underline [&_a]:underline-offset-[3px] " +
  "[&_a:hover]:text-[var(--brand)]";

export const PROSE_SM =
  "text-[0.95rem] leading-[1.7] text-[var(--body)] " +
  "[&_strong]:font-semibold [&_strong]:text-[var(--ink)] " +
  "[&_a]:font-medium [&_a]:text-[var(--brand-ink)] [&_a]:underline [&_a]:underline-offset-[3px] " +
  "[&_a:hover]:text-[var(--brand)]";

export const CARD = "rounded-xl border border-[var(--line)] bg-white";

export const BTN_SOLID =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-ink)] px-6 py-3 text-[0.95rem] font-bold text-white transition-colors duration-150 hover:bg-[var(--brand-hover)]";

export const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-6 py-3 text-[0.95rem] font-bold text-[var(--brand-ink)] transition-colors duration-150 hover:border-[var(--brand)] hover:bg-[var(--tint)]";

/* ------------------------------------------------------------ small blocks */

/**
 * The shared glyphs carry no intrinsic size, so an unwrapped <Icon> lays out at
 * the SVG default of 300x150. Everything here goes through a sized box.
 */
export function Gl({
  glyph,
  className = "h-4 w-4",
}: {
  glyph: Glyph;
  className?: string;
}) {
  return (
    <span
      className={`inline-grid shrink-0 place-items-center [&>svg]:h-full [&>svg]:w-full ${className}`}
    >
      <Icon glyph={glyph} />
    </span>
  );
}

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span
      className="inline-flex gap-0.5 text-[var(--brand-ink)]"
      aria-label="5 out of 5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Gl key={i} glyph="star" className={className} />
      ))}
    </span>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--brand-ink)]">
        {eyebrow}
      </p>
      <h2 className="mt-2.5 text-[1.7rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--ink)] sm:text-[2rem]">
        {title}
      </h2>
      <div className="mt-6 h-px w-16 bg-[var(--brand)]" />
      <div className="mt-7">{children}</div>
    </section>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[1.15rem] font-semibold leading-snug text-[var(--ink)]">
      {children}
    </h3>
  );
}

/** Tinted aside. The bar on the left is the only decorative use of bright cyan. */
export function Note({ children }: { children: ReactNode }) {
  return (
    <div
      className={`flex gap-3.5 rounded-lg border-l-[3px] border-[var(--brand)] bg-[var(--tint)] p-4 ${PROSE_SM}`}
    >
      <span
        className="mt-0.5 grid h-5 w-5 flex-none place-items-center text-[var(--brand-ink)]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 7.6v.6" />
        </svg>
      </span>
      <div>{children}</div>
    </div>
  );
}

/** Boxed prompt with an action. Used where the page asks for the enquiry. */
export function ActionCard({
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div
      className={`${CARD} flex flex-wrap items-center gap-5 border-[var(--brand)] bg-[var(--tint)] p-5`}
    >
      <div className="min-w-[220px] flex-1">
        <p className="text-[1.05rem] font-semibold text-[var(--ink)]">
          {title}
        </p>
        <p className="mt-1 text-[0.92rem] leading-6 text-[var(--muted)]">
          {body}
        </p>
      </div>
      <a className={BTN_SOLID} href={ctaHref}>
        {ctaLabel}
      </a>
    </div>
  );
}

/** Tick and cross lists. Same component, two tones. */
export function MarkList({
  tone,
  items,
}: {
  tone: "inc" | "exc";
  items: ReactNode[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className={`flex gap-3 ${PROSE_SM}`}>
          <span
            className={`mt-[3px] grid h-[19px] w-[19px] flex-none place-items-center rounded-full ${
              tone === "inc"
                ? "bg-[var(--tint-2)] text-[var(--brand-ink)]"
                : "bg-black/[0.055] text-[var(--muted)]"
            }`}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[11px] w-[11px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {tone === "inc" ? (
                <path d="M4 12.5l5.5 5.5L20 6.5" />
              ) : (
                <path d="M6 6l12 12M18 6L6 18" />
              )}
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------- day details */

export type StatIcon = "clock" | "mtn" | "meal" | "bed" | "car";

/**
 * Drawn on the same 24x24 grid as the shared Icon set. These carry a viewBox,
 * which the equivalents in Blocks.tsx do not, so nothing is clipped.
 */
export const STAT_PATHS: Record<StatIcon, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mtn: <path d="M3 20l6-9 3.5 4.5L16 10l5 10z" />,
  meal: (
    <path d="M6 3v18M4 3v5a2 2 0 0 0 2 2M8 3v5a2 2 0 0 1-2 2M17 3c-1.5 0-2 3-2 6h4v12" />
  ),
  bed: <path d="M3 18V8h13a4 4 0 0 1 4 4v6M3 18v-4h18M3 18h18" />,
  car: <path d="M5 16l1.4-5h11.2L19 16M4 16h16v3H4zM7 19v1M17 19v1" />,
};

export function DayStatRow({ stats }: { stats: { icon: StatIcon; label: string }[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-3 border-t border-[var(--line-2)] pt-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-center gap-2.5 text-[0.9rem] text-[var(--body)]"
        >
          <span className="grid h-[18px] w-[18px] flex-none place-items-center text-[var(--brand-ink)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {STAT_PATHS[stat.icon]}
            </svg>
          </span>
          {stat.label}
        </li>
      ))}
    </ul>
  );
}

export function DayCard({
  title,
  image,
  alt,
  width,
  height,
  stats,
  children,
}: {
  title: string;
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  stats: { icon: StatIcon; label: string }[];
  children: ReactNode;
}) {
  return (
    <article className={`${CARD} overflow-hidden`}>
      <div className="space-y-4 p-5 sm:p-6">
        <Sub>{title}</Sub>
        <div className={PROSE}>{children}</div>
      </div>
      {image && (
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      )}
      <div className="p-5 sm:p-6">
        <DayStatRow stats={stats} />
      </div>
    </article>
  );
}


/* ------------------------------------------------------------- itineraries */

export type ItineraryDay = {
  n: number;
  title: string;
  /** The day's headline altitude, as the operator publishes it. */
  alt: string;
  dist?: string;
  time?: string;
  text?: ReactNode;
  /** Highlight the row: acclimatisation days, summits and pass crossings. */
  hi?: boolean;
};

/**
 * The day-by-day table, shared by all three itinerary pages.
 *
 * The altitude sits in the row's bold line rather than in a separate column,
 * because every competitive itinerary in the SERP research put altitude in the
 * day heading itself and ours originally buried it in body text.
 *
 * Scrolls inside its own box below roughly 680px. Four columns cannot compress
 * further without breaking words, and the page must never scroll sideways.
 */
export function ItineraryTable({ days }: { days: ItineraryDay[] }) {
  return (
    <div className={`${CARD} overflow-hidden`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-[var(--bg-alt)]">
              <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                Day
              </th>
              <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                Stage and altitude
              </th>
              <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                Distance
              </th>
              <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr
                key={day.n}
                className={`border-b border-[var(--line-2)] last:border-b-0 ${
                  day.hi ? "bg-[var(--tint-2)]" : ""
                }`}
              >
                <th
                  scope="row"
                  className="w-[3.5rem] px-4 py-3.5 align-top text-center text-[0.92rem] font-bold tabular-nums text-[var(--brand-ink)] sm:px-5"
                >
                  {day.n}
                </th>
                <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                  <b className="text-[var(--ink)]">
                    {day.title}, {day.alt}
                  </b>
                  {day.text ? (
                    <span className="mt-1 block text-[0.85rem] leading-6 text-[var(--body)]">
                      {day.text}
                    </span>
                  ) : null}
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.88rem] tabular-nums text-[var(--muted)] sm:px-5">
                  {day.dist ?? "n/a"}
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.88rem] tabular-nums text-[var(--muted)] sm:px-5">
                  {day.time ?? "n/a"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

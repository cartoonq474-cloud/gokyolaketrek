import type { ReactNode } from "react";
import { Icon, isGlyph, type Glyph } from "./Icon";
import { DayStats, type StatRow } from "./Blocks";

/**
 * Building blocks for the itinerary and guide pages.
 *
 * These exist because the page modules in `content/pages` were hand-writing the
 * same markup over and over: a fourteen-row `<tr><th>Day 1</th><td>...</td></tr>`
 * table per itinerary, a `div.day-sec` wrapper around every day, the same
 * included/excluded grid, the same WhatsApp bar with the phone number typed out
 * again each time. The classes they emit are defined in global.css, so the look
 * lives in one stylesheet and the markup lives in one file.
 *
 * Everything here is domain-agnostic. Anything that knows about this site's
 * routes or phone number belongs in `content/blocks.tsx`, not here, because
 * packages/ui is shared across the trek domains.
 */

/* ------------------------------------------------------------------ tables */

/** A row of a DataTable: either the cells alone, or cells plus a flag. */
export type DataRow = ReactNode[] | { cells: ReactNode[]; hi?: boolean };

const rowCells = (row: DataRow) => (Array.isArray(row) ? row : row.cells);
const rowHi = (row: DataRow) => (Array.isArray(row) ? false : !!row.hi);

/**
 * A multi-column table in a horizontal scroll box.
 *
 * Four and five column tables cannot compress below roughly 640px without
 * breaking words mid-syllable, so `.table-scroll` lets them scroll inside their
 * own bounds rather than pushing the page sideways. Mark the row a reader is
 * looking for (the pass day, the acclimatisation day) with `hi`.
 */
export function DataTable({
  head,
  rows,
  variant,
  caption,
}: {
  head: ReactNode[];
  rows: DataRow[];
  /** Extra class on the table, e.g. "glance" for the day-number column. */
  variant?: string;
  caption?: string;
}) {
  return (
    <div className="table-scroll">
      <table className={variant ? `gtable ${variant}` : "gtable"}>
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {head.map((cell, i) => (
              <th key={i} scope="col">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={rowHi(row) ? "hi" : undefined}>
              {rowCells(row).map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * The two-column "Day 1 | Kathmandu to Besisahar" summary every itinerary page
 * opens with. Same markup as FactsTable, named for what it holds so a reader of
 * the page module can tell the two apart at a glance.
 */
export function DayList({
  rows,
}: {
  rows: { day: ReactNode; route: ReactNode; hi?: boolean }[];
}) {
  return (
    <table className="facts">
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={row.hi ? "hi" : undefined}>
            <th scope="row">{row.day}</th>
            <td>{row.hi ? <strong>{row.route}</strong> : row.route}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* -------------------------------------------------------------- day detail */

/**
 * One day, or one span of days, in the day-by-day timeline. The rail and its
 * node are drawn by `.day-sec` in global.css.
 *
 * `children` is the prose. `stats` renders the icon row beneath it, and
 * `footer` is for a note that has to sit after the stats rather than before,
 * which is how the pass day and the High Camp decision are written.
 */
export function DaySection({
  title,
  stats,
  footer,
  children,
}: {
  title: ReactNode;
  stats?: StatRow[];
  footer?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="day-sec">
      <h3>{title}</h3>
      {children}
      {stats?.length ? <DayStats stats={stats} /> : null}
      {footer}
    </div>
  );
}

/** A photograph inside a day section. */
export function DayFigure({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="day-fig">
      {/* `decoding="async"` keeps the decode off the main thread. On a lazy
          image there is nothing to gain from blocking for it, and these sit
          well below the fold. */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/** The tinted aside used for route notes and safety pointers. */
export function ItinNote({ children }: { children: ReactNode }) {
  return <div className="itin-note">{children}</div>;
}

/* ---------------------------------------------------------------- listings */

/**
 * The included / not included pair. Collapses to one column below 640px, which
 * the hand-written inline grid it replaces did not do: the second column was
 * squeezing to about 130px on a phone.
 */
export function IncludedExcluded({
  included,
  excluded,
  includedTitle = "Included",
  excludedTitle = "Not included",
}: {
  included: ReactNode[];
  excluded: ReactNode[];
  includedTitle?: string;
  excludedTitle?: string;
}) {
  return (
    <div className="ie-grid">
      <div>
        <p className="ie-head">{includedTitle}</p>
        <ul className="ie inc">
          {included.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="ie-head">{excludedTitle}</p>
        <ul className="ie exc">
          {excluded.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** A plain tick list, for the "what the extra days buy you" style sections. */
export function TickList({
  items,
  tone = "inc",
}: {
  items: ReactNode[];
  tone?: "inc" | "exc";
}) {
  return (
    <ul className={`ie ${tone}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------- navigation */

export type PillItem = {
  label: ReactNode;
  href: string;
  active?: boolean;
  /** Glyph shown after the label, used to mark the current itinerary. */
  icon?: Glyph;
};

/**
 * A row of pill links. The itinerary pages use it to switch between the 12, 14,
 * 16, 18 and 21-day versions; the active one is filled rather than outlined.
 */
export function PillNav({
  items,
  label,
}: {
  items: PillItem[];
  /** Accessible name for the nav landmark. */
  label: string;
}) {
  return (
    <nav className="itin-variants" aria-label={label}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={`btn pill pill-sm ${item.active ? "pill-green" : "pill-ghost"}`}
        >
          {item.label}
          {item.icon && isGlyph(item.icon) && <Icon glyph={item.icon} />}
        </a>
      ))}
    </nav>
  );
}

/** The full-width green contact bar. */
export function MessageBar({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="msgbar" href={href}>
      {children}
    </a>
  );
}

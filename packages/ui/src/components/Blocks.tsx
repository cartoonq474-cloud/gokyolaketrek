import { Icon, isGlyph, type Glyph } from "./Icon";

export type StatRow = {
  icon: "clock" | "pin" | "mtn" | "meal" | "bed" | "car";
  label: string;
};

const iconPaths: Record<StatRow["icon"], React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  mtn: <path d="M3 20l6-9 3.5 4.5L16 10l5 10z" />,
  meal: (
    <>
      <path d="M6 3v18M4 3v5a2 2 0 0 0 2 2M8 3v5a2 2 0 0 1-2 2M17 3c-1.5 0-2 3-2 6h4v12" />
    </>
  ),
  bed: <path d="M3 18V8h13a4 4 0 0 1 4 4v6M3 18v-4h18M3 18h18" />,
  car: (
    <>
      <path d="M5 16l1.4-5h11.2L19 16M4 16h16v3H4zM7 19v1M17 19v1" />
    </>
  ),
};

export function DayStats({ stats }: { stats: StatRow[] }) {
  return (
    <ul className="stats">
      {stats.map((stat, i) => (
        <li key={i}>
          <span className="si">
            {/* The paths are drawn on a 24x24 grid. Without a viewBox the SVG
                maps one user unit to one pixel and clips them at 18x18. */}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {iconPaths[stat.icon]}
            </svg>
          </span>{" "}
          {stat.label}
        </li>
      ))}
    </ul>
  );
}

export function FactsTable({
  rows,
}: {
  rows: [React.ReactNode, React.ReactNode][];
}) {
  return (
    <table className="facts">
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i}>
            <th>{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PriceTable({
  rows,
  highlightFirst = true,
}: {
  rows: [React.ReactNode, React.ReactNode][];
  highlightFirst?: boolean;
}) {
  return (
    <table className="ptable">
      <tbody>
        {rows.map(([label, price], i) => (
          <tr key={i} className={highlightFirst && i === 0 ? "hi" : undefined}>
            <td>{label}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DayTable({
  rows,
}: {
  rows: [React.ReactNode, React.ReactNode][];
}) {
  return (
    <table className="dtable">
      <tbody>
        {rows.map(([day, activity], i) => (
          <tr key={i}>
            <td>{day}</td>
            <td>{activity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Callout({
  icon = "download",
  title,
  body,
  ctaLabel,
  ctaHref = "#inquiry",
  ctaClass = "btn-green",
}: {
  /** A glyph name, or a short literal such as "G" for a brand badge. */
  icon?: Glyph | string;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Omit for the informational callouts that carry no button. */
  ctaLabel?: string;
  ctaHref?: string;
  ctaClass?: string;
}) {
  return (
    <div className="callout">
      <span className="ci">{isGlyph(icon) ? <Icon glyph={icon} /> : icon}</span>
      <div className="ct">
        <b>{title}</b>
        <span>{body}</span>
      </div>
      {ctaLabel && (
        <a className={`btn ${ctaClass}`} href={ctaHref}>
          {ctaLabel}
        </a>
      )}
    </div>
  );
}

export function NoteBox({
  title,
  tone = "info",
  children,
}: {
  title?: React.ReactNode;
  /** "warn" keeps the warning triangle these notes originally carried. */
  tone?: "info" | "warn";
  children: React.ReactNode;
}) {
  return (
    <div className={tone === "warn" ? "note-box note-warn" : "note-box"}>
      <span className="nb-i" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          {tone === "warn" ? (
            <>
              <path d="M12 3.6l9 15.8H3z" />
              <path d="M12 9.6v4M12 16.4v.4" />
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 7.6v.6" />
            </>
          )}
        </svg>
      </span>
      <div>
        {title && <b>{title} </b>}
        {children}
      </div>
    </div>
  );
}

export function FaqList({
  items,
}: {
  items: { q: React.ReactNode; a: React.ReactNode }[];
}) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={i} open={i === 0}>
          <summary>{item.q}</summary>
          <div className="a">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function ReviewCard({
  initials,
  name,
  context,
  source,
  rating = 5,
  text,
}: {
  initials: string;
  name: string;
  /** Which trek and when, real reviews carry no city. */
  context: string;
  source: string;
  rating?: number;
  text: string;
}) {
  return (
    <div className="rev">
      <div className="stars" aria-label={`${rating} out of 5`}>
        {Array.from({ length: rating }, (_, i) => (
          <Icon key={i} glyph="star" />
        ))}
      </div>
      <q>{text}</q>
      <div className="who">
        <span className="av">{initials}</span>
        <b>{name}</b> · {context}
        <span className="src">{source}</span>
      </div>
    </div>
  );
}

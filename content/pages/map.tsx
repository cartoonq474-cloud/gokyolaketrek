// /map, the cheapest win on the site: three map variants at KD 4, and AllTrails
// ranks twice on the head term because distance, elevation gain and a route
// picture are what this query actually wants.
//
// The competitive problem is format parity, not word count. A page of prose
// loses here however well written. So the route is built as real page
// structure: a stage table carrying every overnight stop, and an altitude
// profile drawn as inline SVG.
//
// WHY INLINE SVG, and not an image or an embed:
//   1. No third-party script. next.config.ts ships a deliberately strict header
//      set and the site loads zero external JS. A Google or Mapbox embed would
//      be the first exception, and it would be made for a decoration.
//   2. No network request, no layout shift, no 350 KB budget to argue with.
//   3. It scales, it is selectable text at the labels, and it carries a real
//      accessible name.
//
// FACTS: every altitude and distance below is the operator's published 15-day
// itinerary, via content/pages/itinerary-15-day.tsx and
// seo/research/operator-nepalintrepidtreks.md. Nothing here is estimated. The
// only derived number on the page is the 97.6 km total, which is the sum of the
// published daily distances and is labelled as such.
//
// TODO: a printable sheet map and a GPX download are both still to be produced.
// Neither exists yet, so neither is referenced anywhere on this page. When the
// GPX lands it belongs in public/ with a download link in the "What is missing"
// section, and the printable map needs a print stylesheet before it is worth
// having. Do not substitute a screenshot of somebody else's map.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

type Peak = {
  /** Metres. A day trip above the sleeping altitude, back down the same day. */
  m: number;
  label: string;
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
};

type Night = {
  /** Day number in the 15-day itinerary. Day 15 is the flight home. */
  n: number;
  place: string;
  /** Sleeping altitude in metres. The profile line is drawn from these. */
  sleep: number;
  stage: string;
  dist: string;
  /** Running total of walked kilometres. Flights add nothing. */
  cum: string;
  change: string;
  /** Label under the x-axis. Only where the overnight stop changes. */
  axis?: string;
  peak?: Peak;
};

/**
 * The fourteen nights of the trek, in order. Day 15 is a transfer to the
 * airport and has no altitude, so it is not a point on the profile.
 *
 * Dhole is also written Dole, including on two consecutive days of the
 * operator's own itinerary. It is one village. Spelled Dhole throughout here.
 */
const NIGHTS: Night[] = [
  {
    n: 1,
    place: "Kathmandu",
    sleep: 1355,
    stage: "Arrive, transfer from the airport",
    dist: "n/a",
    cum: "n/a",
    change: "n/a",
    axis: "Kathmandu",
  },
  {
    n: 2,
    place: "Kathmandu",
    sleep: 1355,
    stage: "Sightseeing, kit check, permits started",
    dist: "n/a",
    cum: "n/a",
    change: "level",
  },
  {
    n: 3,
    place: "Phakding",
    sleep: 2650,
    stage: "Fly to Lukla at 2,850 m, then walk down the Dudh Koshi",
    dist: "7.5 km",
    cum: "7.5 km",
    change: "+1,295 m, nearly all of it in the aircraft",
    axis: "Phakding",
  },
  {
    n: 4,
    place: "Namche Bazaar",
    sleep: 3443,
    stage: "Up the Dudh Koshi, park gate at Monjo, then the climb to Namche",
    dist: "12 km",
    cum: "19.5 km",
    change: "+793 m",
    axis: "Namche",
  },
  {
    n: 5,
    place: "Namche Bazaar",
    sleep: 3443,
    stage: "Acclimatisation. Climb to the Everest View Hotel and come back down",
    dist: "7 km",
    cum: "26.5 km",
    change: "level, after 437 m up and back",
    peak: {
      m: 3880,
      label: "Namche hike, 3,880 m",
      anchor: "end",
      dx: -9,
      dy: 4,
    },
  },
  {
    n: 6,
    place: "Dhole",
    sleep: 4038,
    stage: "Leave the Everest Base Camp trail above Namche, north into the Gokyo valley",
    dist: "11.5 km",
    cum: "38 km",
    change: "+595 m",
    axis: "Dhole",
  },
  {
    n: 7,
    place: "Machhermo",
    sleep: 4447,
    stage: "A deliberately short day, first night above 4,400 m",
    dist: "6 km",
    cum: "44 km",
    change: "+409 m",
    axis: "Machhermo",
  },
  {
    n: 8,
    place: "Gokyo",
    sleep: 4750,
    stage: "Past the first two lakes to the village on the third",
    dist: "6 km",
    cum: "50 km",
    change: "+303 m",
    axis: "Gokyo",
  },
  {
    n: 9,
    place: "Gokyo",
    sleep: 4750,
    stage: "Gokyo Ri before dawn, back down for breakfast",
    dist: "4.6 km",
    cum: "54.6 km",
    change: "level, after 607 m up and back",
    peak: {
      m: 5357,
      label: "Gokyo Ri, 5,357 m",
      anchor: "middle",
      dx: 0,
      dy: -11,
    },
  },
  {
    n: 10,
    place: "Dhole",
    sleep: 4038,
    stage: "Back down the Gokyo valley the way you came",
    dist: "12 km",
    cum: "66.6 km",
    change: "down 712 m",
  },
  {
    n: 11,
    place: "Namche Bazaar",
    sleep: 3443,
    stage: "Rejoin the main Khumbu trail above Namche",
    dist: "11.5 km",
    cum: "78.1 km",
    change: "down 595 m",
  },
  {
    n: 12,
    place: "Lukla",
    sleep: 2850,
    stage: "The longest walking day of the trek, and almost all downhill",
    dist: "19.5 km",
    cum: "97.6 km",
    change: "down 593 m",
    axis: "Lukla",
  },
  {
    n: 13,
    place: "Kathmandu",
    sleep: 1355,
    stage: "Fly out of Lukla, weather permitting",
    dist: "n/a",
    cum: "97.6 km",
    change: "down 1,495 m, in the aircraft",
    axis: "Kathmandu",
  },
  {
    n: 14,
    place: "Kathmandu",
    sleep: 1355,
    stage: "Spare day. The buffer for a delayed Lukla flight",
    // Both pages are registered now, so this cross-link is live. See the note
    // the route agent left: /map deliberately held off while it was unwired.
    dist: "n/a",
    cum: "97.6 km",
    change: "level",
  },
];

/* ------------------------------------------------------- altitude profile */

/**
 * Chart geometry. Everything is computed from NIGHTS, so correcting an altitude
 * in the table above corrects the drawing too and the two can never disagree.
 *
 * The scale runs 1,000 m to 5,600 m: low enough to hold Kathmandu at 1,355 m,
 * high enough to hold Gokyo Ri at 5,357 m with room for its label.
 */
const V_MIN = 1000;
const V_MAX = 5600;
const CHART = { w: 840, h: 340, top: 34, right: 20, bottom: 48, left: 56 };
const PLOT_W = CHART.w - CHART.left - CHART.right;
const PLOT_H = CHART.h - CHART.top - CHART.bottom;
const BASE_Y = CHART.top + PLOT_H;

const px = (i: number) => CHART.left + (i * PLOT_W) / (NIGHTS.length - 1);
const py = (m: number) =>
  BASE_Y - ((m - V_MIN) / (V_MAX - V_MIN)) * PLOT_H;

const round = (n: number) => Math.round(n * 10) / 10;

/** The sleeping line. One vertex per night, no smoothing, no invented points. */
const SLEEP_LINE = NIGHTS.map(
  (night, i) => `${i === 0 ? "M" : "L"}${round(px(i))} ${round(py(night.sleep))}`,
).join(" ");

const SLEEP_AREA = [
  SLEEP_LINE,
  `L${round(px(NIGHTS.length - 1))} ${BASE_Y}`,
  `L${round(px(0))} ${BASE_Y}`,
  "Z",
].join(" ");

const GRID = [
  { m: 1000, label: "1,000" },
  { m: 2000, label: "2,000" },
  { m: 3000, label: "3,000" },
  { m: 4000, label: "4,000" },
  { m: 5000, label: "5,000" },
];

const PROFILE_ALT =
  "Altitude profile of the 15-day Gokyo Lake Trek. The line plots the sleeping " +
  "altitude for each of the fourteen nights, from Kathmandu at 1,355 m up to " +
  "two nights in the Gokyo valley at 4,750 m and back down. Two dashed spikes " +
  "mark day trips above the sleeping altitude: the Namche acclimatisation hike " +
  "to 3,880 m on day 5, and Gokyo Ri at 5,357 m on day 9. Every figure is " +
  "listed in the stage table below this chart.";

function AltitudeProfile() {
  return (
    <svg
      viewBox={`0 0 ${CHART.w} ${CHART.h}`}
      role="img"
      aria-label={PROFILE_ALT}
      preserveAspectRatio="xMidYMid meet"
      // w-full and h-auto make it scale with the column. The min-width keeps
      // the labels legible on a phone: below roughly 640px the figure scrolls
      // inside its own box rather than shrinking the type to nothing.
      className="h-auto w-full min-w-[640px]"
    >
      <title>Altitude profile of the 15-day Gokyo Lake Trek</title>
      <desc>{PROFILE_ALT}</desc>

      <text x="8" y="14" fontSize="10" fill="var(--muted)">
        metres
      </text>

      {GRID.map((line) => (
        <g key={line.m}>
          <line
            x1={CHART.left}
            y1={round(py(line.m))}
            x2={CHART.w - CHART.right}
            y2={round(py(line.m))}
            stroke="var(--line-2)"
            strokeWidth="1"
          />
          <text
            x={CHART.left - 8}
            y={round(py(line.m))}
            fontSize="10"
            fill="var(--muted)"
            textAnchor="end"
            dominantBaseline="middle"
          >
            {line.label}
          </text>
        </g>
      ))}

      <path d={SLEEP_AREA} fill="var(--tint)" />
      <path
        d={SLEEP_LINE}
        fill="none"
        stroke="var(--brand-ink)"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {NIGHTS.map((night, i) =>
        night.peak ? (
          <g key={`peak-${night.n}`}>
            <line
              x1={round(px(i))}
              y1={round(py(night.sleep))}
              x2={round(px(i))}
              y2={round(py(night.peak.m))}
              stroke="var(--brand-ink)"
              strokeWidth="1.6"
              strokeDasharray="3 3"
            />
            <circle
              cx={round(px(i))}
              cy={round(py(night.peak.m))}
              r="4.5"
              fill="var(--brand-ink)"
            />
            <text
              x={round(px(i) + night.peak.dx)}
              y={round(py(night.peak.m) + night.peak.dy)}
              fontSize="11"
              fontWeight="600"
              fill="var(--ink)"
              textAnchor={night.peak.anchor}
            >
              {night.peak.label}
            </text>
          </g>
        ) : null,
      )}

      {NIGHTS.map((night, i) => (
        <circle
          key={`night-${night.n}`}
          cx={round(px(i))}
          cy={round(py(night.sleep))}
          r="3.4"
          fill="var(--bg)"
          stroke="var(--brand-ink)"
          strokeWidth="2"
        />
      ))}

      <line
        x1={CHART.left}
        y1={BASE_Y}
        x2={CHART.w - CHART.right}
        y2={BASE_Y}
        stroke="var(--line)"
        strokeWidth="1"
      />

      {NIGHTS.map((night, i) => (
        <text
          key={`day-${night.n}`}
          x={round(px(i))}
          y={BASE_Y + 16}
          fontSize="10"
          fill="var(--muted)"
          textAnchor="middle"
        >
          {night.n}
        </text>
      ))}

      {NIGHTS.map((night, i) =>
        night.axis ? (
          <text
            key={`axis-${night.n}`}
            x={round(px(i))}
            y={BASE_Y + 32}
            fontSize="10"
            fontWeight="600"
            fill="var(--body)"
            textAnchor="middle"
          >
            {night.axis}
          </text>
        ) : null,
      )}
    </svg>
  );
}

export const page: TrekPage = {
  slug: "map",
  route: "/map",
  title: "Gokyo Lake Trek Map and Altitude Profile",
  description:
    "The route from Lukla to Gokyo and back, with every overnight stop, the daily distances and an altitude profile showing where the trek gains and loses height.",
  hero: {
    title: "Route and altitude profile",
    subtitle:
      "Fourteen nights, ten walking days, and a high point of 5,357 m. Every overnight stop with its altitude, and the shape of the climb.",
    image: "/images/ngozumpa-glacier.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [{ label: "See the 15-day itinerary", href: "/itinerary/15-day", variant: "green" }],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="route" eyebrow="The short answer" title="The route, Lukla to Gokyo and back">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek is an out-and-back route from Lukla at 2,850 m
              to the Gokyo valley at 4,750 m, walked in ten days. You go up the
              Dudh Koshi to Namche Bazaar, leave the Everest Base Camp trail
              above it, follow the Gokyo valley north along the Ngozumpa glacier,
              and return by the same trail.
            </p>
            <p>
              Adding up the published daily distances gives{" "}
              <strong>97.6 km of walking</strong> across those ten days. The high
              point is Gokyo Ri at 5,357 m on day 9, which is a morning out from
              the village rather than a place you sleep. The highest night is
              4,750 m, twice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${CARD} p-5`}>
              <p className="text-[1.5rem] font-semibold leading-none text-[var(--brand-ink)]">
                97.6 km
              </p>
              <p className={`mt-2 ${PROSE_SM}`}>
                Total walking, summed from the ten daily distances in the
                itinerary. Out and back on the same trail.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <p className="text-[1.5rem] font-semibold leading-none text-[var(--brand-ink)]">
                5,357 m
              </p>
              <p className={`mt-2 ${PROSE_SM}`}>
                Highest point, Gokyo Ri, reached on day 9 and left the same
                morning.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <p className="text-[1.5rem] font-semibold leading-none text-[var(--brand-ink)]">
                4,750 m
              </p>
              <p className={`mt-2 ${PROSE_SM}`}>
                Highest night, the Gokyo valley, and the only place on this trek
                you sleep above 4,447 m.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="profile" eyebrow="Altitude profile" title="Where the trek gains and loses height">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Almost all the height is gained between day 3 and day 8, and almost
              all of it is given back in three days at the end. The profile below
              plots the altitude you sleep at, not the altitude you touch, which
              is the number that decides how you feel.
            </p>
          </div>

          <figure className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto p-4 sm:p-5">
              <AltitudeProfile />
            </div>
            <figcaption className="border-t border-[var(--line-2)] px-4 py-3 text-[0.8rem] leading-6 text-[var(--muted)] sm:px-5">
              Sleeping altitude for each of the fourteen nights. The two dashed
              spikes are day trips you come back down from: the acclimatisation
              hike above Namche to 3,880 m on day 5, and Gokyo Ri at 5,357 m on
              day 9. Every value is in the table below.
            </figcaption>
          </figure>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>The two flat steps are the point</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Nights 4 and 5 sit at the same height, and so do nights 8 and 9.
                Those are the two days the schedule spends going up and coming
                back down to sleep low. They are why the line is a staircase
                rather than a ramp.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>The steepest rise is the flight</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                The jump on day 3 is 1,295 m and you gain nearly all of it
                sitting down, landing at Lukla. That is also why day 3 then walks
                downhill to Phakding at 2,650 m instead of pressing on.
              </p>
            </div>
          </div>

          <Note>
            Read the descent honestly. Days 10 to 12 drop 1,900 m over 43 km,
            and day 12 alone is 19.5 km. Going down is easier on the lungs and
            considerably harder on the knees, and it is the part of the profile
            people are least prepared for.
          </Note>
        </div>
      </Section>

      <Section id="stages" eyebrow="Every stop" title="Every overnight stop, with the numbers">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Fourteen nights. Two in Kathmandu at the start, ten on the trail,
              two in Kathmandu at the end. Day 15 is a transfer to the airport
              and has no altitude of its own.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Day
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Sleep at
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Altitude
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Walk
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Cumulative
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Height change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {NIGHTS.map((night) => (
                    <tr
                      key={night.n}
                      className={`border-b border-[var(--line-2)] last:border-b-0 ${
                        night.peak ? "bg-[var(--tint-2)]" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className="w-[3.5rem] px-4 py-3.5 align-top text-center text-[0.92rem] font-bold tabular-nums text-[var(--brand-ink)] sm:px-5"
                      >
                        {night.n}
                      </th>
                      <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                        <b className="text-[var(--ink)]">{night.place}</b>
                        <span className="mt-1 block text-[0.85rem] leading-6 text-[var(--body)]">
                          {night.stage}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] tabular-nums text-[var(--body)] sm:px-5">
                        {night.sleep.toLocaleString("en-GB")} m
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.88rem] tabular-nums text-[var(--muted)] sm:px-5">
                        {night.dist}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.88rem] tabular-nums text-[var(--muted)] sm:px-5">
                        {night.cum}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.85rem] leading-6 text-[var(--muted)] sm:px-5">
                        {night.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            The 97.6 km total is arithmetic on the itinerary's own daily
            distances, not a surveyed length. GPS traces of the same trail
            disagree with each other by a few kilometres, because the trail
            braids and because watches lose signal in the valley. Use it to
            compare itineraries, not to settle an argument.
          </Note>

          <div className={PROSE}>
            <p>
              Walking hours for each of these days, plus what actually happens on
              them, are on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>. If you
              are comparing this against shorter versions,{" "}
              <Link href="/how-many-days">how many days you need</Link> sets out
              what each one removes.
            </p>
          </div>
        </div>
      </Section>

      <Section id="ground" eyebrow="On the ground" title="The route described, valley by valley">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The whole trek happens in two river valleys and one glacier trough.
              Knowing which one you are in explains most of what the map would
              tell you.
            </p>
          </div>

          <div className="space-y-4">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Lukla to Namche, up the Dudh Koshi</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                You land at Lukla, 2,850 m, on a strip cut into the hillside, and
                walk downhill to join the Dudh Koshi. The river is the whole
                first section: the trail follows its west bank through Phakding
                at 2,650 m, crosses it repeatedly on suspension bridges, and
                passes the Sagarmatha National Park gate at Monjo where your
                permits are checked. The climb to Namche Bazaar at 3,443 m starts
                at the last of those bridges and does not really stop.
              </p>
            </div>

            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Above Namche, where the trek leaves the crowd</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Everything to this point is shared with Everest Base Camp. Above
                Namche the trail forks: most of the traffic carries straight on
                east towards Tengboche and Base Camp, and the Gokyo route turns
                north. This is the single most useful thing to know about the
                route, and it is why the valley beyond is so much quieter than
                the numbers on the Lukla flight suggest.
              </p>
            </div>

            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Dhole and Machhermo, into the Gokyo valley</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                North of the fork the trail climbs to Dhole at 4,038 m, the first
                night in the new valley, then makes a short day of it to
                Machhermo at 4,447 m. The trees run out somewhere in between. It
                is six kilometres between those two, which looks trivial on a
                map and is not, because you are sleeping above 4,400 m for the
                first time.
              </p>
            </div>

            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>The Gokyo valley, alongside the Ngozumpa glacier</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                From Machhermo the trail rises onto the lateral moraine of the
                Ngozumpa glacier and stays beside it. The glacier is the reason
                the last stretch looks like a rubble field rather than ice, and
                the reason the water is that colour. The lakes come one after
                another on the left, and the village sits on the third at
                4,750 m. Gokyo Ri is the ridge rising straight off the far shore.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/gokyo-village-lakeshore.webp"
              alt="Lodges at the far end of the Gokyo valley standing on the shore of the third lake, with the moraine ridge behind"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The end of the line. The village on the third lake, with the
              Ngozumpa moraine forming the ridge on the right of the frame.
            </figcaption>
          </figure>

          <div className={PROSE}>
            <p>
              The lakes themselves, all six of them named and measured, are on{" "}
              <Link href="/lakes">the Gokyo Lakes page</Link>. The climb above the
              third one has <Link href="/gokyo-ri">its own page for Gokyo Ri</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="missing" eyebrow="Honestly" title="What this page does not have yet">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              There is no downloadable GPX file and no printable sheet map here
              yet. Both are being produced, and when they exist they will be on
              this page rather than behind an enquiry form.
            </p>
            <p>
              What you will not find here is an embedded third-party map. This
              site loads no external scripts at all, which is a deliberate choice
              for a site that takes booking enquiries, and a map widget would be
              the first thing to break it. The profile above is drawn in the page
              itself, so it costs you nothing to load and works with the images
              turned off.
            </p>
            <p>
              For navigation on the trail, none of this replaces a paper map. A
              trekking map of the Khumbu is included in what we hand you before
              you fly, and the route is signposted and busy enough that people
              rarely use it. The permits you will be asked for at Monjo are on{" "}
              <Link href="/permits">the permits page</Link>.
            </p>
            <p>
              One thing the profile cannot show you is the part of the route that
              is not walked. Both ends depend on a flight into a mountain
              airstrip that closes for weather, which is what the spare day at
              the end of the itinerary is for.{" "}
              <Link href="/route/lukla-flights">
                Lukla flights, Ramechhap and what happens when yours is cancelled
              </Link>
              .
            </p>
          </div>

          <Note>
            If you want the route as a file for your watch or your phone before
            we publish one, ask us. We would rather send you something checked
            than have you download a stranger's trace of a different itinerary.
          </Note>
        </div>
      </Section>
    </div>
  ),
  selfStyled: true,
  narrow: false,
  withRail: true,
  withTrust: true,
  withContacts: true,
  jsonLd: [],
};

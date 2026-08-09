// /gokyo-ri, 480/mo, KD 13, and the highest CPC in the cluster at $1.31.
//
// It also owns "gokyo peak", which the keyword data shows is a synonym sitting
// at the same 480 volume, and "gokyo ri trek" (90/mo, CPC $1.22). The itinerary
// pages link here and must not target these terms themselves.
//
// FACTS: 5,357 m, the 4.6 km / 3 to 4 hour climb and the day-9 placement are the
// operator's own published figures. The peaks visible from the summit are the
// four named on their trip page.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

const FACTS: [string, string][] = [
  ["Altitude", "5,357 m, the high point of the trek"],
  ["Also called", "Gokyo Peak"],
  ["Start point", "Gokyo village, 4,750 m, on the third lake"],
  ["Height gained", "roughly 600 m"],
  ["Distance", "4.6 km there and back"],
  ["Time", "3 to 4 hours round trip"],
  ["Technical difficulty", "none, it is a walk-up"],
  ["When you climb it", "day 9 of the 15-day itinerary"],
];

const SEEN = [
  { peak: "Everest", height: "8,849 m", note: "the summit pyramid, north-east across the glacier" },
  { peak: "Lhotse", height: "8,516 m", note: "immediately right of Everest" },
  { peak: "Makalu", height: "8,485 m", note: "further east, on a clear morning" },
  { peak: "Cho Oyu", height: "8,188 m", note: "north, at the head of the valley" },
];

export const page: TrekPage = {
  slug: "gokyo-ri",
  route: "/gokyo-ri",
  title: "Gokyo Ri: The 5,357 m View Over Everest",
  description:
    "Gokyo Ri, also called Gokyo Peak, is the walk-up summit above the third lake. How long the climb takes, what you see from the top, whether sunrise beats sunset, and why it needs no technical skill.",
  hero: {
    title: "Gokyo Ri",
    subtitle:
      "600 m above the lake, four eight-thousanders in one view, and not a rope or crampon in sight.",
    image: "/images/ngozumpa-glacier.webp",
    aspect: "4 / 3",
    ctas: [
      { label: "See the 15-day trek", href: "/itinerary/15-day", variant: "green" },
      { label: "Gokyo Ri or Kala Patthar?", href: "/gokyo-ri-vs-kala-patthar", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="what" eyebrow="The short answer" title="What Gokyo Ri is">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Gokyo Ri is a 5,357 m hill above the third Gokyo lake, climbed as a
              dawn out-and-back from the village. It takes 3 to 4 hours for the
              round trip, gains about 600 m, and needs no rope, no crampons and
              no climbing experience. It is a steep walk.
            </p>
            <p>
              <em>Ri</em> is Tibetan for peak, so "Gokyo Ri" and "Gokyo Peak" are
              the same summit and you will see both on maps and in trip listings.
              It is not a mountaineering objective and it is not a trekking peak
              in the permit sense: no climbing permit is required, only the two{" "}
              <Link href="/permits">trekking permits</Link> the whole route needs.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <table className="w-full border-collapse text-left">
              <tbody>
                {FACTS.map(([label, value]) => (
                  <tr
                    key={label}
                    className="border-b border-[var(--line-2)] last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="w-[42%] px-4 py-3.5 align-top text-[0.92rem] font-semibold text-[var(--ink)] sm:px-5"
                    >
                      {label}
                    </th>
                    <td className="px-4 py-3.5 align-top text-[0.92rem] leading-6 text-[var(--body)] sm:px-5">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section id="view" eyebrow="From the top" title="What you can see">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              This is the reason the trek exists. Four of the world's six highest
              mountains are visible from the summit in clear conditions, with the
              Ngozumpa glacier running below you and the lakes strung out behind.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {SEEN.map((item) => (
              <li key={item.peak} className={`${CARD} p-5`}>
                <div className="flex items-baseline justify-between gap-3">
                  <b className="text-[1.05rem] text-[var(--ink)]">{item.peak}</b>
                  <span className="text-[0.85rem] font-semibold tabular-nums text-[var(--brand-ink)]">
                    {item.height}
                  </span>
                </div>
                <p className={`mt-1.5 ${PROSE_SM}`}>{item.note}</p>
              </li>
            ))}
          </ul>

          <Note>
            The honest version: on a bad morning you see cloud. The peaks are
            there roughly four mornings in five through October and November, less
            reliably in spring when afternoon build-up starts earlier in the day.
            Anyone promising you a guaranteed view is selling something.
          </Note>
        </div>
      </Section>

      <Section id="climb" eyebrow="The climb" title="What the ascent is actually like">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              You start from the village in the dark, usually between 4 and 5 in
              the morning, on a path that begins climbing immediately off the
              lake shore. There is no flat section and no warm-up. The trail is
              loose in places and zigzags up the face directly behind the
              village.
            </p>
            <p>
              The difficulty is not the terrain, it is that you are gaining 600 m
              starting from 4,750 m, which is already higher than almost anywhere
              in Europe. Expect to move slowly and to stop often. Most people
              take 2 to 3 hours up and about an hour back down.
            </p>
            <p>
              It is cold. You are climbing before sunrise at altitude in still
              air, and the top is exposed. A down jacket, gloves and a hat are
              not optional, and the{" "}
              <Link href="/plan/packing-list">packing list</Link> assumes this
              morning specifically.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Why dawn</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                The valley reliably clouds over through the middle of the day.
                Early light also puts the sun behind Everest, which is what makes
                the view from here so distinctive.
              </p>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>Sunset instead?</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Possible, warmer, and much less crowded. You trade the clearest
                air of the day for descending in the dark, and the light comes
                from behind you rather than through the peaks.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="hard" eyebrow="Difficulty" title="How hard is it, honestly">
        <div className={PROSE}>
          <p>
            Almost everyone who reaches Gokyo village in reasonable shape gets up
            Gokyo Ri. It is the single hardest morning of the trek and it is
            still only a few hours of steep walking.
          </p>
          <p>
            The people who do not make it are usually not the unfit ones. They
            are the ones who arrived at 4,750 m feeling poorly and went up anyway.
            Altitude, not fitness, is what decides this morning, which is why the
            schedule spends a whole day acclimatising at Namche first. That
            reasoning is on{" "}
            <Link href="/plan/acclimatisation">the acclimatisation page</Link>,
            and the symptoms that mean you should stay in the village are on{" "}
            <Link href="/plan/altitude-sickness">altitude sickness</Link>.
          </p>
          <p>
            If you want the wider picture of how demanding the whole trek is, see{" "}
            <Link href="/plan/difficulty">difficulty and fitness</Link>.
          </p>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="Where Gokyo Ri fits">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              Gokyo Ri is day 9 of our{" "}
              <Link href="/itinerary/15-day">15-day Gokyo Lake Trek</Link>, the
              morning after you walk into the village. If you are weighing it
              against the other great Everest viewpoint, that comparison is on{" "}
              <Link href="/gokyo-ri-vs-kala-patthar">
                Gokyo Ri versus Kala Patthar
              </Link>
              . For the lakes it looks down on, see{" "}
              <Link href="/lakes">the Gokyo lakes</Link>.
            </p>
          </div>
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

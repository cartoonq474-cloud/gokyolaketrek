// /gokyo-ri-vs-kala-patthar, the biggest coverage gap the topical map audit
// found. These are the two viewpoints of the Everest region, choosing between
// them is the comparison this audience actually runs, and it sits directly on
// the site's central argument that the reward here is a panorama rather than
// standing at base camp.
//
// FACTS: 5,357 m, the 4.6 km round trip, the 600 m of ascent and the four peaks
// visible from Gokyo Ri are the operator's own published figures. Kala Patthar
// at 5,545 m and its day placement come from their 19-day and 21-day itineraries.
// The 188 m difference is arithmetic on those two numbers.
//
// No ascent figure is given for Kala Patthar and no Gorak Shep altitude is
// stated, because neither is in the research. Descriptive beats invented.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Sub,
} from "../design-kit";

type Row = { what: string; ri: ReactNode; kp: ReactNode };

const ROWS: Row[] = [
  {
    what: "Altitude",
    ri: "5,357 m",
    kp: "5,545 m, higher by 188 m",
  },
  {
    what: "Where it is",
    ri: "In the Gokyo valley, straight above the village on the third lake",
    kp: "On the Everest Base Camp trail, above Gorak Shep",
  },
  {
    what: "Which of our treks",
    ri: "Day 9 of the 15-day trek, day 14 of the 19-day, day 15 of the 21-day",
    kp: "Not on the 15-day trek at all. Day 11 of the 19-day, day 12 of the 21-day",
  },
  {
    what: "The climb",
    ri: "4.6 km there and back, 3 to 4 hours, roughly 600 m of ascent from 4,750 m",
    kp: "A dawn out and back from the lodges at Gorak Shep, before the day's walking starts",
  },
  {
    what: "What you see",
    ri: "Everest, Lhotse, Makalu and Cho Oyu, with the Ngozumpa glacier and the lakes below",
    kp: "Everest head-on from the south, close, above the Khumbu glacier",
  },
  {
    what: "Technical skill",
    ri: "None. A steep walk on a loose path",
    kp: "None. A steep walk, at a higher altitude",
  },
  {
    what: "Crowds",
    ri: "Only the people who turned up the Gokyo valley, which is a small share of Khumbu traffic",
    kp: "Effectively everyone walking to Base Camp climbs it",
  },
  {
    what: "Eight-thousanders in view",
    ri: "Four: Everest 8,849 m, Lhotse 8,516 m, Makalu 8,485 m, Cho Oyu 8,188 m",
    kp: "Everest, as close as you get on foot without a climbing permit",
  },
];

export const page: TrekPage = {
  slug: "gokyo-ri-vs-kala-patthar",
  route: "/gokyo-ri-vs-kala-patthar",
  title: "Gokyo Ri vs Kala Patthar: Which Everest Viewpoint?",
  description:
    "The two great viewpoints of the Everest region compared. Which is higher, which climb is harder, which shows you more of Everest, and whether you can reasonably do both.",
  hero: {
    title: "Gokyo Ri or Kala Patthar",
    subtitle:
      "One is higher. One shows you four eight-thousanders. Neither is the better one, and here is how to tell which is yours.",
    image: "/images/prayer-flags-peak.webp",
    aspect: "1 / 1",
    minHeight: 520,
    ctas: [
      { label: "About Gokyo Ri", href: "/gokyo-ri", variant: "green" },
      { label: "The trek that does both", href: "/itinerary/with-everest-base-camp", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="Which viewpoint to climb">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Kala Patthar is higher, at 5,545 m against Gokyo Ri's 5,357 m, and
              it gives the classic head-on view of Everest from the south. Gokyo
              Ri gives a wider view: Everest, Lhotse, Makalu and Cho Oyu, four
              eight-thousanders at once, across the Ngozumpa glacier and above
              the lakes. Neither is better. They answer different questions.
            </p>
            <p>
              If you want to look at Everest itself, as close and as directly as
              walking will take you, that is Kala Patthar. If you want the
              Khumbu laid out in one view with Everest as part of it, that is
              Gokyo Ri.
            </p>
            <p>
              The practical constraint decides it for most people anyway. They
              are in different valleys. Kala Patthar sits on the Everest Base
              Camp trail and Gokyo Ri sits above the Gokyo lakes, so the trek you
              book usually picks the viewpoint. Doing both in one trip means 19
              days or 21, and that is covered below.
            </p>
          </div>
        </div>
      </Section>

      <Section id="compare" eyebrow="Side by side" title="The two viewpoints compared">
        <div className="space-y-7">
          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      What you are comparing
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--brand-ink)] sm:px-5">
                      Gokyo Ri
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Kala Patthar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.what}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="w-[22%] px-4 py-3.5 align-top text-[0.9rem] font-semibold text-[var(--ink)] sm:px-5"
                      >
                        {row.what}
                      </th>
                      <td className="px-4 py-3.5 align-top text-[0.9rem] leading-6 text-[var(--body)] sm:px-5">
                        {row.ri}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.9rem] leading-6 text-[var(--body)] sm:px-5">
                        {row.kp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            Both are walk-ups. Neither needs a rope, crampons or any climbing
            experience, and neither is a summit in the mountaineering sense.{" "}
            <em>Ri</em> is Tibetan for peak, and Kala Patthar means black rock,
            which is a fair description of what you are standing on.
          </Note>
        </div>
      </Section>

      <Section id="view" eyebrow="The view" title="What each one actually shows you">
        <div className="space-y-7">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Gokyo Ri, 5,357 m</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Breadth. Everest sits north-east across the glacier with Lhotse
                beside it, Makalu further east and Cho Oyu at the head of the
                valley. Below you the Ngozumpa runs the length of the view and
                the lakes are strung out along its edge, which is the part no
                photograph of Everest ever includes.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                Everest is not the biggest thing in the frame from here. It is
                further away than it is from Kala Patthar and it shares the view
                with three other giants. Some people find that a better picture
                and some find it a disappointment.
              </p>
            </div>
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Kala Patthar, 5,545 m</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Proximity. This is the view of Everest people have in their heads
                before they book anything: the south face head-on, close, rising
                above the Khumbu glacier. It is the closest a walker gets to the
                mountain without a climbing permit.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                It is also the answer to the awkward fact about the Base Camp
                trek, which is that base camp itself has no view of the summit.
                Kala Patthar is where that itinerary delivers the mountain.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              Ask ten people who have climbed both and you will not get a
              consensus, which is the most useful thing anyone can tell you about
              this question. The split is roughly between people who came for
              Everest and people who came for the Himalaya.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lake-mirror-peaks.webp"
              alt="A still Gokyo lake reflecting the surrounding peaks, seen from the valley floor"
              width={1350}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The lakes from the valley floor. From Gokyo Ri they are below you,
              in the same view as Everest.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="climb" eyebrow="The climb" title="Which is the harder morning">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Kala Patthar, on altitude alone. It is 188 m higher, it starts from
              a higher village, and everything above 5,000 m costs more than the
              contour lines suggest. Neither climb is hard in the sense of
              needing skill. Both are a few hours of steep walking in cold air
              before sunrise.
            </p>
            <p>
              Where Gokyo Ri can be the harder of the two is on our{" "}
              <Link href="/itinerary/15-day">15-day trek</Link>, where you climb
              it on day 9 having slept two nights at 4,750 m. On the{" "}
              <Link href="/itinerary/with-everest-base-camp">19-day route</Link>{" "}
              you reach it three days after Kala Patthar, already acclimatised to
              5,545 m, and most people find it a straightforward morning by then.
            </p>
            <p>
              What decides both climbs is the same thing: how you are handling
              the altitude that morning, not how fit you are. The detail of the
              Gokyo Ri ascent, including what it is like in the dark and why
              dawn is worth the cold, is on{" "}
              <Link href="/gokyo-ri">the Gokyo Ri page</Link>.
            </p>
          </div>

          <Note>
            Neither viewpoint guarantees you anything. Cloud takes mornings on
            both sides of the Cho La, and the honest expectation on Gokyo Ri is
            roughly four clear mornings in five through October and November, and
            less reliably in spring. Anyone promising a view is selling one.
          </Note>
        </div>
      </Section>

      <Section id="who" eyebrow="Which is yours" title="Which one suits whom">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Climb Kala Patthar if</Sub>
            <p className={`mt-3 ${PROSE_SM}`}>
              Everest is the reason you are going. You want the mountain close
              and head-on, you are already walking to Base Camp, and the extra
              188 m of altitude does not worry you. If this is your one trip to
              Nepal and Everest itself is the point, this is your viewpoint and
              the Gokyo valley is a different holiday.
            </p>
          </div>
          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Climb Gokyo Ri if</Sub>
            <p className={`mt-3 ${PROSE_SM}`}>
              You want the whole skyline rather than one mountain, you would
              rather share the top with a handful of people than a crowd, and
              the lakes and the glacier are part of what you came for. It is also
              the only one of the two you reach without walking the busiest
              trail in the Khumbu.
            </p>
          </div>
        </div>
      </Section>

      <Section id="both" eyebrow="Or both" title="Doing both in one trip">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              You need 19 days or 21. The two viewpoints sit in different valleys
              separated by the Cho La at 5,420 m, so no short itinerary reaches
              both, and our{" "}
              <Link href="/itinerary/15-day">15-day Gokyo trek</Link> does not
              include Kala Patthar at all.
            </p>
            <p>
              The{" "}
              <Link href="/itinerary/with-everest-base-camp">
                19-day route with Everest Base Camp
              </Link>{" "}
              gives you Kala Patthar on day 11 and Gokyo Ri on day 14, with the
              Cho La crossing in between, at US $1,860. The{" "}
              <Link href="/itinerary/three-passes">21-day Three Passes</Link>{" "}
              does the same and adds Kongma La and Renjo La, at US $2,075. Both
              are compared against the shorter versions on{" "}
              <Link href="/how-many-days">how many days you need</Link>.
            </p>
            <p>
              Doing both in three days of each other is also the only way to
              settle this argument for yourself, and the people who have done it
              are the ones who disagree most.
            </p>
          </div>

          <ActionCard
            title="Not sure which trek to book?"
            body="Tell us which of the two views you came for and how long you have. We will tell you which itinerary gets you it."
            ctaLabel="Ask us"
            ctaHref="#inquiry"
          />

          <div className={PROSE}>
            <p>
              If you are choosing between the two treks rather than the two
              viewpoints, the full comparison is on{" "}
              <Link href="/vs-everest-base-camp">
                Gokyo Lakes versus Everest Base Camp
              </Link>
              .
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

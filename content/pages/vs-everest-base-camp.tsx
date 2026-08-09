// /vs-everest-base-camp, Seed of the decision cluster.
//
// The SERP for this query is won by forums: Reddit at 1, a Facebook group at 3,
// four operator pages below them. They win on candour, not authority. Nobody
// trusts a company that sells both treks to compare them, so the only version of
// this page that can outrank a thread is one that names the reader who should
// walk to Base Camp instead and then sends them there.
//
// FACTS: altitudes, durations and the two published prices are the operator's
// own figures, from seo/research/operator-nepalintrepidtreks.md. The crowd
// difference is quoted from a reviewer who walked both routes in one trip in
// spring 2026. No price is given for the 15-day Gokyo trek, because none is
// published, and inventing one is worse than saying so.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  MarkList,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Sub,
} from "../design-kit";

type Row = { what: string; gokyo: ReactNode; ebc: ReactNode };

/**
 * Ordered by what people actually decide on, not by what is easiest to write.
 * Crowds and the Everest view are the two rows the forums argue about.
 */
const ROWS: Row[] = [
  {
    what: "Crowds",
    gokyo:
      "A fraction of the traffic. The trails part above Namche and most people carry straight on east.",
    ebc: "One of the most popular routes in Nepal in spring and autumn. You walk it in company the whole way.",
  },
  {
    what: "View of Everest",
    gokyo:
      "Everest, Lhotse, Makalu and Cho Oyu from Gokyo Ri, four of the world's six highest mountains in one sweep.",
    ebc: "None from base camp itself. The head-on view comes from Kala Patthar, climbed on a separate morning.",
  },
  {
    what: "Highest point walked",
    gokyo: "5,357 m, Gokyo Ri, on day 9",
    ebc: "5,545 m, Kala Patthar. Base camp itself is 5,364 m",
  },
  {
    what: "Highest night",
    gokyo: "4,750 m, in Gokyo village on the third lake",
    ebc: "Gorak Shep, higher than anywhere on the Gokyo trek",
  },
  {
    what: "Difficulty",
    gokyo:
      "Marginally harder day to day. The valley gains height faster above Namche and has fewer lodges to stop at.",
    ebc: "Goes higher, over more days. As we walk it, the Base Camp trail gets a second acclimatisation day at Dingboche.",
  },
  {
    what: "Duration",
    gokyo: "15 days with us, 10 of them walking",
    ebc: "16 days with us. 19 if you want both",
  },
  {
    what: "The lakes",
    gokyo:
      "Six on the trail, nineteen in the system, a Ramsar wetland since 2007.",
    ebc: "Nothing comparable. The Base Camp side is glacier, moraine and rock.",
  },
  {
    what: "Cost",
    gokyo: "Quoted on enquiry. We have not published a figure for this one",
    // Deliberately does not quote a Base Camp-only price. We run one, but this
    // site does not list or sell it, and quoting a figure a reader cannot then
    // book is worse than quoting none. The 19-day IS listed here, so it can be.
    ebc: "We do not sell a Base Camp-only trek through this site. The 19-day trip that does both is US $1,860",
  },
];

const PICK_EBC: ReactNode[] = [
  "Standing at the foot of Everest is something you have wanted for years. A panorama will not replace it, and we would rather you did the trek you actually came for.",
  "You want the Khumbu set pieces on the way: Tengboche, Dingboche, and the walk up the Khumbu glacier to the camp itself.",
  "You are going in the spring climbing season and want to see base camp working rather than empty.",
  "This is your first trek at altitude and you would rather be on the trail with the most lodges, the most traffic and the most help on it.",
  "Someone at home will ask whether you got to Base Camp, and you know the answer will matter to you.",
];

const PICK_GOKYO: ReactNode[] = [
  "You want the Everest region without walking it in a column.",
  "You would rather look at Everest from a summit than stand underneath it.",
  "The lakes are a reason on their own rather than scenery on the way to something else.",
  "You are comfortable with fewer lodges, fewer people and fewer places to stop early.",
];

export const page: TrekPage = {
  slug: "vs-everest-base-camp",
  route: "/vs-everest-base-camp",
  title: "Gokyo Lakes vs Everest Base Camp: How to Choose",
  description:
    "The honest comparison from an operator that runs both. Which is harder, which is quieter, which has the better view of Everest, what each costs, and who should pick Base Camp instead.",
  hero: {
    title: "Gokyo Lakes or Everest Base Camp",
    subtitle:
      "We run both, so treat this accordingly. It includes the part where you should book the other one.",
    image: "/images/gokyo-village-lakeshore.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "See the 15-day Gokyo trek", href: "/itinerary/15-day", variant: "green" },
      { label: "The 19-day trip that does both", href: "/itinerary/with-everest-base-camp", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="Which one you should walk">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Walk to Everest Base Camp if standing at the foot of the mountain
              is the point. Walk the Gokyo valley if seeing the mountain is. That
              is the whole decision. Everything below is detail, and none of it
              overturns it.
            </p>
            <p>
              The two treks are the same trek for four days. Both fly into Lukla,
              both climb to Namche Bazaar, both need{" "}
              <Link href="/permits">the same two permits</Link>. They separate
              above Namche: the Base Camp trail carries on east up the Khumbu,
              and the Gokyo trail turns north into a quieter valley running
              alongside the Ngozumpa glacier.
            </p>
            <p>
              Here is the fact most comparisons leave out, including ones written
              by people selling Base Camp trips.{" "}
              <strong>
                Everest Base Camp has no view of Everest's summit.
              </strong>{" "}
              You stand on the moraine at 5,364 m and the mountain is hidden
              behind the ridges immediately above you. The photograph everybody
              has in mind is taken from Kala Patthar at 5,545 m, which is a
              separate dawn climb on the same itinerary.
            </p>
            <p>
              That is a real point in Gokyo's favour and it is still not a reason
              to pick Gokyo if base camp is what you want. Plenty of people go to
              Everest Base Camp knowing exactly what is and is not visible from
              it, because being there was never about the view.
            </p>
          </div>
        </div>
      </Section>

      <Section id="compare" eyebrow="Side by side" title="The comparison, row by row">
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
                      Gokyo Lakes
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Everest Base Camp
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
                        {row.gokyo}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.9rem] leading-6 text-[var(--body)] sm:px-5">
                        {row.ebc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            The one row we cannot fill properly is cost, and that is our fault
            rather than a tactic. There is no published price for the 15-day
            Gokyo trek yet, so the honest entry is that you have to ask.
            Advertising a range and then adjusting it once you enquire is the
            thing we are trying not to do. The two figures on the Base Camp side
            are real published prices you can hold us to.
          </Note>
        </div>
      </Section>

      <Section id="everest" eyebrow="The view" title="What you actually see of Everest">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              From Gokyo Ri you see Everest for the whole time you are on top of
              it. The summit sits north-east across the Ngozumpa glacier with
              Lhotse beside it, Makalu further east and Cho Oyu at the head of
              the valley, so four eight-thousanders are in the same view as the
              lakes below you. Details of the climb are on{" "}
              <Link href="/gokyo-ri">the Gokyo Ri page</Link>.
            </p>
            <p>
              From Everest Base Camp you see the Khumbu icefall, a lot of
              moraine, and in April a working expedition camp. What you do not
              see is the summit. The Base Camp itinerary answers that with Kala
              Patthar the next morning, which gives the closest and most direct
              view of Everest anyone gets without a climbing permit.
            </p>
            <p>
              So both routes show you Everest, from different distances and in
              different company. Which of the two viewpoints suits you is a
              question of its own, and it is on{" "}
              <Link href="/gokyo-ri-vs-kala-patthar">
                Gokyo Ri versus Kala Patthar
              </Link>
              .
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/ngozumpa-moraine.webp"
              alt="The rubble-covered moraine of the Ngozumpa glacier with snow peaks rising behind it"
              width={1350}
              height={1012}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The Ngozumpa glacier from the Gokyo side. Gokyo Ri looks across
              this at Everest rather than up at it from underneath.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section
        id="harder"
        eyebrow="Quieter and harder"
        title="Why the quiet and the difficulty are the same fact"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Gokyo is quieter because fewer people go, and it is marginally
              harder for exactly the same reason. Fewer trekkers means fewer
              lodges, which means longer gaps between places you can stop, and
              the valley gains height faster above Namche than the Base Camp
              trail does.
            </p>
            <p>
              A trekker who walked both in one trip in spring 2026 put the
              difference plainly in a review: Everest Base Camp is one of Nepal's
              most popular routes in the peak seasons, and far fewer trekkers
              venture onto the Gokyo circuit.
            </p>
            <p>
              Neither route is technical. Nobody uses a rope on either of them.
              The thing that turns people back on both is altitude, and on the
              Base Camp side you go higher, so calling one of them the hard one
              is not really honest. Most people find the walking comparable.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>What the quiet gives you</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Lodges that are not full, a trail you often have to yourself
                above Dole, and a summit morning on Gokyo Ri with a handful of
                people rather than a queue.
              </p>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>What the quiet costs you</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Fewer lodges to bail out at, fewer people around if something
                goes wrong, and quieter evenings. Some people go to the Khumbu
                for the company on the trail, and that is a fair reason.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="instead"
        eyebrow="Be honest with yourself"
        title="Choose Base Camp instead if"
      >
        <div className="space-y-7">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>Book Everest Base Camp</Sub>
              <div className="mt-4">
                <MarkList tone="exc" items={PICK_EBC} />
              </div>
            </div>
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Book Gokyo</Sub>
              <div className="mt-4">
                <MarkList tone="inc" items={PICK_GOKYO} />
              </div>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              We run Base Camp trips as well, so this is not us sending business
              elsewhere out of good manners. It is that the worst outcome on this
              page is not picking the wrong trek, it is booking Gokyo to avoid
              the crowds and then spending ten days wishing you had gone to base
              camp. That is an expensive way to find out what you wanted.
            </p>
          </div>
        </div>
      </Section>

      <Section id="both" eyebrow="Or both" title="You can do both in one trip">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              Nineteen days gets you both, joined by the Cho La pass at 5,420 m.
              You walk to Everest Base Camp and Kala Patthar first, cross west
              into the Gokyo valley, and climb Gokyo Ri already acclimatised to
              5,545 m, which makes it a considerably easier morning than doing it
              on day 9 of the standard trek. That route is{" "}
              <Link href="/itinerary/with-everest-base-camp">
                19 days at US $1,860
              </Link>
              .
            </p>
            <p>
              If you have three weeks and want the fullest version,{" "}
              <Link href="/itinerary/three-passes">
                the 21-day Three Passes
              </Link>{" "}
              adds Kongma La and Renjo La and leaves Gokyo over a pass instead of
              walking back down the valley. It is a harder trip than either trek
              on this page and it is not the place to start.
            </p>
            <p>
              The trade is four extra days and one genuinely serious mountain
              day. Whether you have those days is the practical question, and
              every length is compared on{" "}
              <Link href="/how-many-days">how many days you need</Link>.
            </p>
          </div>

          <ActionCard
            title="Still not sure which one?"
            body="Tell us what you want out of the trip and how long you have. We will tell you which of the three to book, including when it is not the Gokyo one."
            ctaLabel="Ask us"
            ctaHref="#inquiry"
          />

          <div className={PROSE}>
            <p>
              If Gokyo is the answer, the day-by-day is on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link> and the
              reason the valley is worth the walk is on{" "}
              <Link href="/lakes">the lakes</Link>.
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

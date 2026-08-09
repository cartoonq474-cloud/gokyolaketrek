// /plan/difficulty.
//
// "Moderately challenging, 5 to 7 hours a day" is the SERP consensus and every
// competitor says it (seo/research/serp-consensus.md, module 1). Saying it
// first and accurately is table stakes, not a differentiator.
//
// The differentiator is the framing in the "who turns back" section: the people
// who do not finish are usually not the unfit ones, they are the ones who
// arrived at altitude feeling unwell and carried on anyway. Fitness decides
// whether you enjoy it. Acclimatisation decides whether you finish. Two of the
// six forum threads outranking operators on our SERPs are altitude-anxiety
// threads (seo/query-network.md, source C), and none of them is answered by a
// paragraph of boilerplate about drinking water.
//
// NO SUCCESS-RATE FIGURES ANYWHERE ON THIS PAGE. Every "97% completion rate" in
// this niche is unsourced, and inventing one would be the fastest way to lose
// the credibility the whole site is built on.
//
// FACTS: distances, durations and altitudes are the published itinerary in
// seo/research/operator-nepalintrepidtreks.md and the canonical table in
// seo/WRITING-BRIEF.md. Kala Patthar at 5,545 m is on the 19 and 21-day routes
// only.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  MarkList,
  PROSE,
  PROSE_SM,
  Note,
  Section,
  Sub,
} from "../design-kit";

type HardDay = {
  day: string;
  title: string;
  stats: string;
  why: string;
};

const HARD_DAYS: HardDay[] = [
  {
    day: "Day 4",
    title: "Phakding to Namche Bazaar",
    stats: "12 km, about 6 hours, finishing at 3,443 m",
    why: "The first genuinely hard day, and it arrives before you have acclimatised to anything. A long climb after the two suspension bridges, with the national park checkpoint at Monjo on the way. People who found days 1 to 3 easy tend to reassess here.",
  },
  {
    day: "Day 9",
    title: "Gokyo Ri, 5,357 m",
    stats: "4.6 km, 3 to 4 hours round trip, about 600 m of climb",
    why: "The steepest ground on the trek and the highest. It is a walk-up with no rope, no scrambling and no technical skill required, but it is a relentless zigzag off the lake shore starting before dawn from 4,750 m. Short on the map, longest in the memory.",
  },
  {
    day: "Day 12",
    title: "Namche Bazaar to Lukla",
    stats: "19.5 km, 7 to 8 hours, dropping to 2,850 m",
    why: "The longest walking day of the whole trek and almost entirely downhill, which sounds like a reward and is not. Quads and knees take it, on tired legs, ten days in. This is the day trekking poles earn their place in the duffle.",
  },
];

const ARRIVE_WITH: ReactNode[] = [
  "The ability to walk five to six hours on hilly ground, then get up and do it again the next day. Consecutive days are what this trek asks for, not one heroic long one.",
  "Hill or stair work with a light pack. The trail gains height for six days running, and steady ascent is a different muscle memory from flat distance.",
  "Legs that can take descent. Day 12 is 19.5 km of it, and the knee complaints on this trek outnumber the lung complaints.",
  "Three or four months of preparation if you are starting from a desk. That is enough. Nothing about this trek needs a gym membership or an altitude tent.",
  "Broken-in boots and poles you have actually used. Neither is fitness, both change how hard the days feel.",
];

const DO_NOT_BOOK: ReactNode[] = [
  "You have a heart or lung condition, or you are on medication, and no doctor who understands altitude has looked at it. Get cleared first, then book. Not the other way round.",
  "You cannot currently walk five hours on hills two days running. This is a timing problem rather than a permanent no: train, then come.",
  "You would push on through a headache and nausea at 4,447 m rather than lose a day. This is the mindset that ends treks badly, and it does not care how fit you are.",
  "You need a guaranteed date home with no slack. Lukla flights are weather-dependent and the schedule already carries a buffer day for that reason.",
  "You want the altitude without the ten days of walking. There is no road to Gokyo, no lift and no shortcut other than a helicopter.",
];

export const page: TrekPage = {
  slug: "plan/difficulty",
  route: "/plan/difficulty",
  title: "How Difficult Is the Gokyo Lake Trek?",
  description:
    "Five to seven hours of walking a day for ten days, no technical ground, and altitude that decides most of it. What fitness you need, who finishes, who turns back, and how it compares with Everest Base Camp.",
  hero: {
    title: "How hard is it?",
    subtitle:
      "Moderately challenging. Ten walking days at five to seven hours, no technical ground anywhere, and altitude that decides far more of the outcome than fitness does.",
    image: "/images/ngozumpa-glacier.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "See the 15-day itinerary", href: "/itinerary/15-day", variant: "green" },
      { label: "When should I go?", href: "/plan/best-time", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="Moderately challenging, and what that means">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek is moderately challenging. You walk five to
              seven hours on a typical day for ten days, on trails and stone
              staircases with no technical ground anywhere on the route, and you
              go from 2,650 m at Phakding to 5,357 m on Gokyo Ri. The altitude,
              not the walking, is what decides how it goes.
            </p>
            <p>
              There is no rope, no scrambling, no ice axe and no glacier travel on
              the 15-day route. If you can walk uphill for most of a day, the
              individual steps of this trek are all within you. What is not
              automatic is doing that at 4,750 m, on the tenth morning, having
              slept badly in the cold.
            </p>
            <p>
              It is harder than a hut-to-hut week in the Alps and easier than
              anything that needs a rope. Add the Cho La at 5,420 m and you are
              in a different conversation, which is the{" "}
              <Link href="/itinerary/with-everest-base-camp">19-day route</Link>{" "}
              rather than this one.
            </p>
          </div>

          <Note>
            The single most useful sentence on this page, and the one most
            operators will not write: <strong>fitness decides whether you enjoy
            the trek, acclimatisation decides whether you finish it.</strong> They
            are two different problems and being excellent at the first does not
            solve the second.
          </Note>
        </div>
      </Section>

      <Section id="days" eyebrow="The walking" title="What ten days of walking actually looks like">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Ten walking days inside a 15-day trip. Add the daily distances up
              and it comes to a little under 100 km, which is not a large number
              for ten days. Spread over that many days, at that height, it walks
              a great deal longer than it reads.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${CARD} p-5`}>
              <p className="text-[1.6rem] font-semibold leading-none text-[var(--brand-ink)]">
                6 km
              </p>
              <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                Shortest days
              </p>
              <p className={`mt-2 ${PROSE_SM}`}>
                Days 7 and 8, into Machhermo and then Gokyo, about 4 hours each.
                They are short deliberately, because you are gaining sleeping
                altitude fast on both.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <p className="text-[1.6rem] font-semibold leading-none text-[var(--brand-ink)]">
                11 to 12 km
              </p>
              <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                A normal day
              </p>
              <p className={`mt-2 ${PROSE_SM}`}>
                Five to seven hours, with a lodge lunch stop in the middle of it.
                Days 4, 6, 10 and 11 all sit in this band.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <p className="text-[1.6rem] font-semibold leading-none text-[var(--brand-ink)]">
                19.5 km
              </p>
              <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                The longest day
              </p>
              <p className={`mt-2 ${PROSE_SM}`}>
                Day 12, Namche to Lukla, 7 to 8 hours. It is the last walking day
                of the trek and the one people underestimate most.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              A day starts early, usually with breakfast at the lodge you slept
              in, and finishes at the next one in the early or middle afternoon.
              Nobody is walking into the dark. The pace is deliberately slower
              than feels natural, which is the single hardest instruction for fit
              trekkers to follow, and the guide setting it is not being
              cautious for the sake of it.
            </p>
            <p>
              Every day with its distance, altitude and walking hours is on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="hardest" eyebrow="The hard bits" title="The three days that actually hurt">
        <div className="space-y-4">
          {HARD_DAYS.map((item) => (
            <div key={item.day} className={`${CARD} p-5 sm:p-6`}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)]">
                  {item.day}
                </span>
                <Sub>{item.title}</Sub>
              </div>
              <p className="mt-2 text-[0.85rem] font-semibold tabular-nums text-[var(--muted)]">
                {item.stats}
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>{item.why}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="altitude" eyebrow="Who turns back" title="Why altitude decides it, not fitness">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The trekkers who do not finish are usually not the unfit ones. They
              are the ones who arrived at altitude already feeling unwell and
              pushed on rather than lose a day.
            </p>
            <p>
              That pattern is worth sitting with, because it inverts what most
              people are worried about. Marathon runners get altitude sickness.
              So do people who train for a year. Being strong lets you walk
              through symptoms you should be stopping for, which is exactly the
              wrong superpower to bring above 4,000 m.
            </p>
            <p>
              The trek is built to work against that. Day 5 at Namche is not a
              rest day, it is a climb to 3,880 m at the Everest View Hotel and
              back down to sleep at 3,443 m. Days 7 and 8 into Machhermo and Gokyo
              are only 6 km each, which looks like a wasted afternoon on a
              spreadsheet and is the reason people reach 5,357 m feeling fine.
            </p>
            <p>
              What we ask of you is the part a schedule cannot do: say what you
              are feeling, honestly, on the day you first feel it. A headache
              reported at Dhole at 4,038 m is a manageable problem. The same
              headache admitted at Gokyo two days later is a descent.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lakeshore-trail.webp"
              alt="A narrow trail running along the shore of a Gokyo lake with the valley walls rising on both sides"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The ground itself is not the difficulty. This is a walking trail at
              4,700 m, and it is the air rather than the terrain that makes it
              slow.
            </figcaption>
          </figure>

          <Note>
            Nobody publishes a real completion rate for this trek, ourselves
            included, and the percentages you will see quoted on other sites are
            not sourced to anything. What we can tell you is what actually ends
            treks in this valley, and it is almost never a lack of stamina.
          </Note>
        </div>
      </Section>

      <Section id="fitness" eyebrow="Fitness" title="What to arrive with, and who should not book">
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              You do not need to be an athlete. You need to be an unremarkable
              walker who is used to consecutive days. Age is a weaker predictor
              than most people expect: how you handle thin air does not read off
              your birth date, and a steady sixty-year-old who paces themselves
              regularly does better than a thirty-year-old who charges.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">Arrive with this</b>
              <div className="mt-4">
                <MarkList tone="inc" items={ARRIVE_WITH} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">
                Do not book this trek if
              </b>
              <div className="mt-4">
                <MarkList tone="exc" items={DO_NOT_BOOK} />
              </div>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              Children and teenagers do walk in the Everest region, and the
              question is not really about the walking. It is whether a young
              trekker will report how they feel accurately and accept being
              turned round. Talk to us about the specific child rather than the
              age.
            </p>
          </div>
        </div>
      </Section>

      <Section id="ebc" eyebrow="Compared" title="Harder than Everest Base Camp?">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Broadly comparable, with the difficulty distributed differently.
              The walking is similar in both length and daily hours. Gokyo gains
              height faster once you are past Namche, and it has fewer lodges
              along the way to stop at if a day goes wrong. Base Camp goes higher
              if you include Kala Patthar at 5,545 m.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${CARD} p-5`}>
              <Sub>Gokyo gains faster</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Above Namche at 3,443 m the Gokyo valley climbs to Dhole at
                4,038 m, Machhermo at 4,447 m and Gokyo at 4,750 m in three days.
                That is why days 7 and 8 are only 6 km each.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Base Camp goes higher</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Gokyo Ri tops out at 5,357 m. Kala Patthar, on the Base Camp
                side, is 5,545 m. If the highest number matters to you, Base Camp
                wins it by 188 m.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Fewer places to bail</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                The Base Camp trail is lined with settlements. The Gokyo valley
                has far fewer, and that thinness is the real difference in
                difficulty rather than any individual climb.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              The trade is a fair one. Gokyo is quieter, and the summit view from
              Gokyo Ri takes in Everest, Lhotse, Makalu and Cho Oyu at once,
              which Base Camp itself does not. If you want both, they combine
              over the Cho La at 5,420 m on the{" "}
              <Link href="/itinerary/with-everest-base-camp">19-day route</Link>,
              and that pass is a real step up in difficulty from everything
              described on this page.
            </p>
          </div>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="If that sounds like you">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The day-by-day, with every distance and altitude, is on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>. Why 15
              days and not 12, and what the shorter versions cut out of your
              acclimatisation, is on{" "}
              <Link href="/how-many-days">how many days you need</Link>.
            </p>
            <p>
              The month you choose changes how hard the trek feels more than most
              people allow for, and that is{" "}
              <Link href="/plan/best-time">the best time to trek to Gokyo</Link>.
              The climb itself has its own page at{" "}
              <Link href="/gokyo-ri">Gokyo Ri, 5,357 m</Link>.
            </p>
          </div>

          <ActionCard
            title="Not sure whether you are fit enough?"
            body="Tell us what you walk in a normal month and the highest you have slept. We will give you a straight answer, including when it is no."
            ctaLabel="Ask us"
            ctaHref="#inquiry"
          />
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

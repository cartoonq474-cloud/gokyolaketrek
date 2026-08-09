// /plan/best-time.
//
// The problem this page has to solve: the season answer is identical on every
// ranking page. "Spring, March to May. Autumn, September to November." Six
// competitors, one sentence, no differentiation. Repeating it wins nothing.
//
// So the page is built on the two things we hold that they do not:
//
//   1. Our own managing director's standing advice that November and December
//      work for anyone comfortable with cold. First-party, and against the
//      grain of the consensus.
//   2. Two trekker reviews that confirm it independently. One trekked in
//      November on that advice and said it was the right call. One walked
//      28 March to 15 April and reported light snow on the Gokyo section and
//      slick descents from the melt, with no major obstacle.
//
// See seo/research/operator-nepalintrepidtreks.md, reviews 2 and 3, and
// seo/query-network.md under /best-time-to-trek.
//
// FACTS: season windows are the SERP consensus in seo/research/serp-consensus.md.
// Altitudes are the canonical values in seo/WRITING-BRIEF.md. No temperatures
// appear anywhere on this page, because we do not have sourced ones.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { ActionCard, CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

type Month = {
  name: string;
  season: string;
  note: string;
  verdict: string;
  /** Highlight the months this site actually argues for. */
  hi?: boolean;
};

const MONTHS: Month[] = [
  {
    name: "January",
    season: "Deep winter",
    note: "The coldest nights of the year at 4,750 m, often with still, clear air. The lakes are frozen and not every lodge in the upper valley is open.",
    verdict: "Cold specialists",
  },
  {
    name: "February",
    season: "Late winter",
    note: "Cold, clear and close to empty. The ice is still on the lakes and fresh snow can sit on the trail for days.",
    verdict: "Cold specialists",
  },
  {
    name: "March",
    season: "Early spring",
    note: "The season restarts. Expect snow still lying on the Gokyo section and the higher lakes part-frozen while the third is open water.",
    verdict: "Good, and quieter",
  },
  {
    name: "April",
    season: "Spring",
    note: "The busy spring month. Longer days and warmer walking, with melting snow that makes the descents slick.",
    verdict: "Peak, book early",
  },
  {
    name: "May",
    season: "Late spring",
    note: "Warm and long-dayed low down. Haze tends to build through the month as the pre-monsoon air arrives.",
    verdict: "Good, hazier",
  },
  {
    name: "June",
    season: "Monsoon arrives",
    note: "Cloud takes the mountains. The walking is still walking. The view is the thing you came for and it is not reliably there.",
    verdict: "Poor",
  },
  {
    name: "July",
    season: "Monsoon",
    note: "Rain, low cloud and Lukla flights that go when the weather allows, which is often not today.",
    verdict: "Poor",
  },
  {
    name: "August",
    season: "Monsoon",
    note: "As July. Green and flowering low down, and mountains you largely have to take on trust.",
    verdict: "Poor",
  },
  {
    name: "September",
    season: "Early autumn",
    note: "The monsoon clears from the north. The first half of the month is unpredictable, the second half can be excellent.",
    verdict: "Mixed, then good",
  },
  {
    name: "October",
    season: "Autumn",
    note: "The month everyone means when they say autumn. The most settled weather of the year, and the most people on the trail.",
    verdict: "Peak, book early",
  },
  {
    name: "November",
    season: "Late autumn",
    note: "Cold at night, clear by day, and the October crowds have gone home. This is the month we push hardest.",
    verdict: "Our pick",
    hi: true,
  },
  {
    name: "December",
    season: "Early winter",
    note: "Colder again, very quiet and often very clear. Workable if your kit is honest about the temperature.",
    verdict: "Our pick, if cold suits you",
    hi: true,
  },
];

export const page: TrekPage = {
  slug: "plan/best-time",
  route: "/plan/best-time",
  title: "Best Time to Trek to Gokyo, Season by Season",
  description:
    "Spring and autumn are the obvious answers. What November and December are actually like, when the lakes freeze, when the valley is quietest, and which month suits which trekker.",
  hero: {
    title: "When to go",
    subtitle:
      "Spring and autumn, like everybody else says. The more useful answer is November, and here is why we keep sending people then.",
    image: "/images/gokyo-village-lakeshore.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "See the 15-day itinerary", href: "/itinerary/15-day", variant: "green" },
      { label: "How hard is it?", href: "/plan/difficulty", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="The best months to trek to Gokyo">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Spring, March to May, and autumn, September to November. Those are
              the two settled-weather windows in the Everest region and every
              page you read will tell you the same thing, because it is true.
            </p>
            <p>
              The part almost nobody tells you is which of those months to pick.
              They are not equivalent. October and April give you the most
              reliable weather and the most company. March gives you snow on the
              Gokyo section. May gives you haze.{" "}
              <strong>
                November is the month we recommend most often, and December works
                too if you are genuinely comfortable with cold.
              </strong>
            </p>
            <p>
              That last sentence is our managing director's standing advice, not
              a marketing line, and it points people away from the months
              everyone else is selling. The reasoning, and a trekker who tested
              it, are further down this page.
            </p>
          </div>

          <Note>
            One thing the season does not change: the walking. The trek is the
            same ten days of five to seven hours in every month of the year. What
            the season changes is what you can see, how cold the nights are, how
            many people are on the trail, and how likely your Lukla flight is to
            go. See <Link href="/plan/difficulty">how hard the trek is</Link>.
          </Note>
        </div>
      </Section>

      <Section id="months" eyebrow="All twelve" title="Month by month, with a verdict">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Verdicts are ours. They assume you want to see the mountains,
              because that is why people walk to 5,357 m rather than somewhere
              warmer.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Month
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Season
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      What you get
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Verdict
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MONTHS.map((month) => (
                    <tr
                      key={month.name}
                      className={`border-b border-[var(--line-2)] last:border-b-0 ${
                        month.hi ? "bg-[var(--tint-2)]" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-4 py-3.5 align-top text-[0.92rem] font-bold text-[var(--brand-ink)] sm:px-5"
                      >
                        {month.name}
                      </th>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.88rem] text-[var(--muted)] sm:px-5">
                        {month.season}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.85rem] leading-6 text-[var(--body)] sm:px-5">
                        {month.note}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.85rem] font-semibold text-[var(--ink)] sm:px-5">
                        {month.verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section id="late" eyebrow="What we actually advise" title="Why we send people in November and December">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Because you keep the clear post-monsoon air and lose the queues.
              November sits inside the autumn window everybody quotes, but it is
              the end of it, so it gets skipped in favour of October. December
              sits outside the window entirely and gets written off.
            </p>
            <p>
              Our managing director's advice on this has not changed: November
              and December are good months in the Everest region if you are
              comfortable with cold. Nights at 4,750 m are the cost. Air that has
              had the monsoon washed out of it, an emptier valley and lodges that
              are not full are what you buy with it.
            </p>
            <p>
              We would rather you heard that from a trekker than from us. One who
              walked the Gokyo valley on exactly that advice wrote afterwards
              that choosing November over October had been the right call and
              that the weather was excellent. It was their second trek with us,
              which is to say not a first-timer taking our word for it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>What you gain</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Clear, dry air after the monsoon. A valley that has emptied out.
                Lodges at Gokyo with space in them, and a summit ridge on Gokyo
                Ri you are not queueing along.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>What it costs</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Cold, mostly at night and mostly at 4,750 m. Shorter daylight, so
                the pre-dawn start for Gokyo Ri is colder than the same start in
                October. A down jacket that is actually up to the job.
              </p>
            </div>
          </div>

          <Note>
            Be honest with yourself about the cold rather than optimistic. The
            advice is "if you are comfortable with cold", and that is a real
            condition, not a formality. If you dislike being cold at home, you
            will dislike it a great deal more at 4,750 m with no heating in the
            room. Take October or April instead and accept the company.
          </Note>
        </div>
      </Section>

      <Section id="seasons" eyebrow="All four" title="What each season actually costs you">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Spring, March to May</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                The trail wakes up. Rhododendron in flower on the lower sections,
                warming days, and lodges reopening after the winter. It is the
                other genuinely good window and it is a fair choice.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                <b className="font-semibold text-[var(--ink)]">What it costs:</b>{" "}
                snow and then meltwater. A trekker who walked 28 March to 15 April
                found light snow on the Gokyo section, which was no major
                obstacle, and slick descents where it was melting. Later in May
                the air hazes over and the long views soften. April is also the
                busiest month of the spring.
              </p>
            </div>

            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Monsoon, June to August</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Possible, and we will not pretend otherwise. The valley is green,
                the flowers are out, the lodges are quiet and nothing is booked
                up. People do walk it.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                <b className="font-semibold text-[var(--ink)]">What it costs:</b>{" "}
                the mountains. Cloud sits on the range for days at a time, and
                you can climb to 5,357 m and see the inside of it. Lukla flights
                are weather-dependent in every month and this is the season that
                punishes that hardest. If the view is the point, and on this trek
                it is, the monsoon is the wrong three months.
              </p>
            </div>

            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Autumn, September to November</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                The strongest window of the year, but not evenly. Early September
                is still shaking off the monsoon and can go either way. October is
                the most settled month there is. November is clear and cold and
                quiet.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                <b className="font-semibold text-[var(--ink)]">What it costs:</b>{" "}
                October costs you solitude. It is the single busiest month on the
                trail, lodges fill, and the Namche stretch feels like a queue.
                September costs you certainty in the first half of the month.
              </p>
            </div>

            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Winter, December to February</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                December is the workable end of it, which is why it sits in our
                recommendation. January and February are for people who
                specifically want a frozen, empty valley and know what that
                involves.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                <b className="font-semibold text-[var(--ink)]">What it costs:</b>{" "}
                cold at the top end of the trek, short daylight, and lodges. The
                Gokyo valley is the highest and coldest part of the route, and not
                every lodge above Machhermo stays open through the deep winter,
                so there is less to fall back on if a day goes wrong. Heavy snow
                can also shut the upper valley for a few days at a time.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/prayer-flags-peak.webp"
              alt="Prayer flags strung across a ridge with a snow peak behind under a hard blue sky"
              width={1350}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Late autumn light. The colour of that sky is what the monsoon takes
              away in June and hands back in late September.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="ice" eyebrow="The lakes" title="When the lakes freeze, and when the ice goes">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The Gokyo Lakes ice over through the deep winter, January and
              February most reliably, and hold ice at the edges well into spring.
              They sit around 4,700 m, which is high enough that the thaw runs
              late.
            </p>
            <p>
              In practice that means late March and April trekkers regularly find
              the higher lakes still part-frozen while the third lake, the one
              Gokyo village stands on, is open water. By May everything on the
              trekking route is liquid again. Come back in December and the ice is
              returning.
            </p>
            <p>
              A frozen lake is not a consolation prize, it is simply a different
              photograph from the turquoise one that brought you here. Every
              lake, with its altitude and its size, is on{" "}
              <Link href="/lakes">the lakes page</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="crowds" eyebrow="The awkward part" title="The best weather months are the busiest months">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              October and April give you the most dependable weather in the year.
              They also put the most people on the trail, and that partly undoes
              the reason a lot of trekkers choose Gokyo in the first place.
            </p>
            <p>
              Gokyo is quieter than the Everest Base Camp trail in every month.
              That is the honest comparison and it holds. A trekker who did both
              routes on the same trip put it plainly: while Base Camp remains one
              of Nepal's most popular routes during the peak seasons, March to May
              and September to November, far fewer trekkers venture onto the
              Gokyo circuit.
            </p>
            <p>
              But you share the first two days with everyone. Lukla, Phakding and
              the climb to Namche at 3,443 m are common to both treks, and in
              mid-October that stretch is busy. You only get the valley to
              yourself after day 6, when the Base Camp traffic carries straight on
              and you turn north.
            </p>
            <p>
              If quiet is high on your list, the ranking is roughly November,
              then March, then December, then late September. If certainty of
              weather matters more than solitude, take October and accept it.
            </p>
          </div>

          <Note>
            Booking timing follows from this. October and April fill first, and
            lodge space at Gokyo is finite at 4,750 m. November and December
            rarely need the same lead time, which is another small argument for
            them.
          </Note>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="Pick a month, then pick a length">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Once you have a month, the next decision is how many days you can
              give it. That question has more disagreement in it than the season
              does, and it is answered on{" "}
              <Link href="/how-many-days">how many days you need</Link>, with the
              full day-by-day on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>.
            </p>
            <p>
              If you are weighing whether the trek is within you at all rather
              than when to do it, that is{" "}
              <Link href="/plan/difficulty">how difficult the Gokyo Lake Trek is</Link>.
              And the climb the whole season question really turns on is{" "}
              <Link href="/gokyo-ri">Gokyo Ri at 5,357 m</Link>.
            </p>
          </div>

          <ActionCard
            title="Tell us your month and we will tell you the truth about it"
            body="If you are looking at late November, or February, or the last week of September, say so. We will tell you what to expect rather than what sells."
            ctaLabel="Ask about dates"
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

// /plan/acclimatisation, the schedule page.
//
// HARD BORDER, from seo/query-network.md: acclimatisation is THE SCHEDULE,
// altitude sickness is THE MEDICAL EVENT. This page explains how the 15-day
// itinerary is built and why every day is where it is. It does not list
// symptoms, does not discuss Diamox, and does not cover evacuation or
// insurance. All of that belongs to /plan/altitude-sickness and is linked once,
// never repeated. If a paragraph here starts describing an illness, it is on
// the wrong page.
//
// FACTS: every altitude, distance and duration is the operator's own published
// 15-day itinerary, captured in seo/research/operator-nepalintrepidtreks.md.
// The change-per-night column is arithmetic on those figures and nothing else:
// 3,443 − 2,650 = 793, 4,038 − 3,443 = 595, 4,447 − 4,038 = 409,
// 4,750 − 4,447 = 303, 4,750 − 4,038 = 712.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { ActionCard, CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

type Night = {
  day: string;
  place: string;
  alt: string;
  change: string;
  note: string;
  /** The two nights that gain nothing. They are the reason the schedule works. */
  hi?: boolean;
};

/**
 * The trek as a single column: where you sleep, and how much higher that is
 * than the night before. Walking height is not what acclimatisation responds
 * to, so the table deliberately ignores the day's high point except where the
 * high point is the whole point of the day.
 */
const NIGHTS: Night[] = [
  {
    day: "Day 3",
    place: "Phakding",
    alt: "2,650 m",
    change: "first night up",
    note: "You land at Lukla at 2,850 m and walk downhill to sleep 200 m lower than you arrived.",
  },
  {
    day: "Day 4",
    place: "Namche Bazaar",
    alt: "3,443 m",
    change: "up 793 m",
    note: "The biggest single jump of the trek, and the one the schedule cannot design away.",
  },
  {
    day: "Day 5",
    place: "Namche Bazaar",
    alt: "3,443 m",
    change: "level",
    hi: true,
    note: "The acclimatisation day. You hike to 3,880 m and come back down to the same bed.",
  },
  {
    day: "Day 6",
    place: "Dhole",
    alt: "4,038 m",
    change: "up 595 m",
    note: "11.5 km and about 7 hours. The day you leave the Everest Base Camp trail and turn north.",
  },
  {
    day: "Day 7",
    place: "Machhermo",
    alt: "4,447 m",
    change: "up 409 m",
    note: "6 km and about 4 hours. Short on purpose, and the first night above 4,400 m.",
  },
  {
    day: "Day 8",
    place: "Gokyo",
    alt: "4,750 m",
    change: "up 303 m",
    note: "The highest bed on the trek, on the shore of the third lake.",
  },
  {
    day: "Day 9",
    place: "Gokyo",
    alt: "4,750 m",
    change: "level",
    hi: true,
    note: "Gokyo Ri at 5,357 m before dawn, then back down to the lodge you slept in.",
  },
  {
    day: "Day 10",
    place: "Dhole",
    alt: "4,038 m",
    change: "down 712 m",
    note: "The night most people sleep properly for the first time in a week.",
  },
];

const DAY_FIVE = [
  { figure: "3,880 m", label: "The Everest View Hotel, the high point of day 5." },
  { figure: "3,443 m", label: "Namche, where you sleep that night and the night before." },
  { figure: "437 m", label: "Handed back before bed. That is the entire trick." },
  { figure: "7 km, 4 h", label: "Short enough to walk it slowly and still be down for lunch." },
];

export const page: TrekPage = {
  slug: "plan/acclimatisation",
  route: "/plan/acclimatisation",
  title: "Altitude and Acclimatisation on the Gokyo Trek",
  description:
    "How the trek gains height, why the Namche day exists, what the ascent rate is above Dole, and how the schedule is built to get you to 5,357 m safely.",
  hero: {
    title: "Altitude and acclimatisation",
    subtitle:
      "From 2,650 m at Phakding to 5,357 m on Gokyo Ri in six walking days. Two of those six days are built to gain nothing at all, and they are the reason the other four work.",
    image: "/images/gokyo-village-lakeshore.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "See the day-by-day itinerary", href: "/itinerary/15-day", variant: "green" },
      { label: "Altitude sickness", href: "/plan/altitude-sickness", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="How the trek gains its height">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek climbs from 2,650 m at Phakding to 5,357 m on
              Gokyo Ri over six walking days, and never sleeps higher than
              4,750 m. Two of those six days deliberately gain nothing: day 5 at
              Namche and day 9 at Gokyo both put you back in the bed you woke up
              in.
            </p>
            <p>
              What your body responds to is not how high you walked. It is how
              high you slept, and how much that number moved since the night
              before. So the useful way to read this trek is not as a line on a
              profile but as a list of beds.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Night
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Where you sleep
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Altitude
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {NIGHTS.map((night) => (
                    <tr
                      key={night.day}
                      className={`border-b border-[var(--line-2)] last:border-b-0 ${
                        night.hi ? "bg-[var(--tint-2)]" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] font-bold tabular-nums text-[var(--brand-ink)] sm:px-5"
                      >
                        {night.day}
                      </th>
                      <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                        <b className="text-[var(--ink)]">{night.place}</b>
                        <span className="mt-1 block text-[0.85rem] leading-6 text-[var(--body)]">
                          {night.note}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] tabular-nums text-[var(--body)] sm:px-5">
                        {night.alt}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] font-semibold tabular-nums text-[var(--ink)] sm:px-5">
                        {night.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              Read the change column downwards: 793, level, 595, 409, 303,
              level. The trek takes its one unavoidable jump early, stops dead
              for a full day, and then makes every following night smaller than
              the one before it. By the time you are sleeping at 4,750 m you are
              moving 303 m a night, well under half of the day-4 climb.
            </p>
            <p>
              That shape is the product. The trail, the lodges and the lakes are
              the same for everybody who walks up this valley. The order and the
              spacing of the nights are the part an itinerary actually decides.
            </p>
          </div>

          <Note>
            Dhole and Dole are the same village, spelt both ways on maps, on
            lodge signs and on our own itinerary. Machhermo also appears as
            Machermo. Nothing about the altitudes changes with the spelling.
          </Note>
        </div>
      </Section>

      <Section id="namche" eyebrow="Day 5" title="Why day 5 at Namche is not a rest day">
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              On day 5 you walk up to the Everest View Hotel at 3,880 m, spend a
              while looking at Everest, and come back down to sleep at 3,443 m
              in the same lodge as the night before. Net gain for the day:
              nothing.
            </p>
            <p>
              That is the point, and it has a name. Climb high, sleep low. It is
              the single clearest thing this trek teaches, and day 5 is where it
              is taught.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DAY_FIVE.map((item) => (
              <div key={item.figure} className={`${CARD} p-5`}>
                <p className="text-[1.45rem] font-semibold leading-none text-[var(--brand-ink)]">
                  {item.figure}
                </p>
                <p className={`mt-3 ${PROSE_SM}`}>{item.label}</p>
              </div>
            ))}
          </div>

          <div className={PROSE}>
            <p>
              The air at 3,880 m holds the same proportion of oxygen as the air
              at home. There is simply less air in each breath. The adjustments
              your body makes to that are slow, they take days rather than
              hours, and the thing that triggers them is time spent high. The
              repair work, on the other hand, goes better low: you eat more,
              your sleep is less broken, and you are not asking your body to
              adapt and recover in the same breath.
            </p>
            <p>
              So day 5 gives you the stimulus in the afternoon and takes it away
              at night. You climb 437 m and hand all of it back before dinner.
            </p>
            <p>
              <strong>It looks like a wasted day on a spreadsheet</strong>, which
              is exactly why compressed itineraries delete it first. It is also
              the most useful day on the trek. The one way to get it wrong is to
              treat it as a lie-in: spend it in the lodge with a book and you
              have taken the rest and skipped the acclimatisation.
            </p>
          </div>

          <Note>
            Walk day 5 slowly, slower than feels necessary. Nearly everyone
            walks the first days of a Himalayan trek too fast, because at 3,000 m
            you still can. This is the day to find the pace you will need at
            4,700 m, while the cost of getting it wrong is a slightly dull
            afternoon rather than a night you remember for the wrong reasons.
          </Note>
        </div>
      </Section>

      <Section id="short-day" eyebrow="Day 7" title="The 6 km day that looks like a waste">
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              Day 7 walks 6 km from Dhole to Machhermo in about 4 hours, and it
              is short on purpose. The day before it was 11.5 km and 7 hours.
              This one is a long morning, and trekkers who feel strong at Dhole
              find it faintly insulting.
            </p>
            <p>
              Here is what it is buying. You gain 409 m, and you sleep above
              4,400 m for the first time, which for most people on this trail is
              the first time ever. The walking is not the event. The night is.
              Arriving at lunchtime means you spend the whole afternoon at the
              new altitude awake, warm, eating and drinking, rather than
              stumbling in at dusk with no appetite.
            </p>
            <p>
              Look at what merging it away would do. Dhole straight to Gokyo is
              12 km and lifts your sleeping altitude 712 m in one move, from
              4,038 m to the highest bed on the trek. That is arithmetic on our
              own itinerary, not a scare story, and it is the shape a compressed
              version takes when the days have to come from somewhere.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lakeshore-trail.webp"
              alt="A narrow stone trail running along the shore of a high lake with snow ridges above it"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Above Machhermo the valley opens and the trail flattens. The
              short days are not short because the ground is hard. They are
              short because of where they end.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="high-point" eyebrow="Day 9" title="Reaching 5,357 m from a bed at 4,750 m">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              You climb Gokyo Ri on day 9 and you are back down for breakfast.
              The 5,357 m on the front of this trek is somewhere you stand for
              half an hour, not somewhere you sleep, and that distinction is
              what makes the number manageable.
            </p>
            <p>
              Your highest night is 4,750 m in Gokyo, twice, on days 8 and 9.
              The summit adds roughly 600 m of climbing and gives all of it back
              inside a morning. It is climb high, sleep low again, on the day it
              matters most.
            </p>
            <p>
              By the time you start up it you have slept three nights above
              4,000 m, two of them above 4,400 m. That is the difference between
              a hard pre-dawn climb and a bad idea. Everything the climb
              involves, including whether sunset is a better plan, is on{" "}
              <Link href="/gokyo-ri">the Gokyo Ri page</Link>.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>Highest you sleep</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                4,750 m, in Gokyo village on the third lake, on two consecutive
                nights.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Highest you stand</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                5,357 m, on Gokyo Ri, for as long as the cold lets you enjoy it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="compressed" eyebrow="Shorter versions" title="What a compressed itinerary takes out">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Shorter Gokyo itineraries are real and they are sold widely. The
              days they remove are almost always the acclimatisation day, the
              buffer day at the end, or both, because those are the two days that
              look like they do nothing.
            </p>
            <p>
              The table above shows why they are the wrong two to lose. Day 5
              gains no altitude and day 7 walks 6 km. On a spreadsheet they are
              the poorest value days on the trek. In the valley they are the two
              doing the most work.
            </p>
            <p>
              Take out day 5 and the 793 m climb to Namche has nothing after it:
              you jump, then keep jumping. Take out day 7 and your sleeping
              altitude moves 712 m in a single day, at the top of the trek,
              where recovering from a bad night is hardest. Neither guarantees
              you will be ill. Both raise the odds, at the point where being ill
              costs the most to fix.
            </p>
            <p>
              Which lengths cut what, and which of them are still sensible, is
              the whole subject of{" "}
              <Link href="/how-many-days">how many days you need</Link>. The full
              day-by-day for the version described here is on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>.
            </p>
          </div>

          <Note>
            We are not going to tell you a 12-day Gokyo trek is dangerous.
            Plenty of people walk one and are completely fine. What we will not
            do is sell a compressed version and describe it as the same trek with
            the boring bits taken out.
          </Note>
        </div>
      </Section>

      <Section id="limits" eyebrow="Honest limits" title="What the schedule cannot do">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              A well-built schedule improves your odds. It does not decide them.
              Altitude has very little interest in your fitness, your age or how
              many marathons you have run, and there is no test at sea level that
              tells you how you will respond. This trail turns strong young
              trekkers round and walks people twice their age onto the summit,
              and nobody can tell you in advance which one you are.
            </p>
            <p>
              That is not a reason to worry about it in advance. It is a reason
              to walk slowly, drink more than you want to, eat when you do not
              feel like it, and say something the moment you feel wrong rather
              than the morning after.
            </p>
            <p>
              What happens if it happens to you, which symptoms matter, who makes
              the call to go down and how evacuation and insurance actually work,
              is all on{" "}
              <Link href="/plan/altitude-sickness">the altitude sickness page</Link>.
              This page is the schedule. That one is the medical event, and we
              keep them apart on purpose.
            </p>
          </div>

          <ActionCard
            title="Tell us your altitude history"
            body="If you have been high before and struggled, or you have never been above 3,000 m at all, say so when you enquire. It changes what we recommend and occasionally it changes the itinerary."
            ctaLabel="Enquire"
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

// Home page, and the root document. Written to seo/brief-root-document.md.
//
// This page is the quality ceiling for the whole site: nothing linked from it
// can rank above the trust it establishes. It is therefore the longest page, the
// broadest, and the one refreshed most often.
//
// FACTS: itinerary, altitudes, distances, durations, inclusions, exclusions,
// permits, credentials and reviews are all real. Sources are
// seo/research/operator-nepalintrepidtreks.md and seo/research/permits.md.
//
// The one thing still missing is the price. `fromPrice` is null on purpose, so
// the chrome invites an enquiry rather than printing a number nobody has agreed
// to honour.
//
// LINKING RULE: only link to pages that exist. `typedRoutes` enforces it, and it
// is the reason some topics here are answered inline with no outbound link yet.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  BTN_GHOST,
  BTN_SOLID,
  CARD,
  DayCard,
  Gl,
  ItineraryTable,
  MarkList,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Stars,
  Sub,
  type ItineraryDay,
} from "../design-kit";
import { gokyoConfig } from "../config";

/* -------------------------------------------------------------------- data */

const HIGHLIGHTS = [
  { label: "Duration", value: "15 days", note: "Kathmandu to Kathmandu" },
  { label: "High point", value: "5,357 m", note: "Gokyo Ri" },
  { label: "Walking days", value: "10", note: "3 to 8 hours each" },
  { label: "Group size", value: "From 1", note: "Solo trekkers taken" },
];

const FACTS: [string, ReactNode][] = [
  ["Region", "Everest, Sagarmatha National Park, Solukhumbu"],
  ["Start and finish", "Lukla, by air from Kathmandu or Ramechhap"],
  ["Highest sleeping altitude", "Gokyo valley, 4,750 m"],
  ["Highest point walked", "Gokyo Ri, 5,357 m"],
  ["Walking days", "10 of 15, roughly 3 to 8 hours"],
  ["Accommodation", "3-star hotel in Kathmandu, tea houses twin-share on trek"],
  ["Guide and porter", "Licensed English-speaking guide, one porter per two trekkers"],
  [
    "Permits",
    "Sagarmatha National Park entry and the Khumbu Pasang Lhamu municipality permit. No TIMS card is used in this region",
  ],
];

const SUITS: ReactNode[] = [
  "You want the Everest region without walking the Base Camp trail alongside everyone else.",
  "You are happy on your feet for five to six hours a day, several days running.",
  "You have done multi-day hill walking before, even if never at altitude.",
  "You would rather look at Everest from a summit than stand at its foot.",
];

const SUITS_NOT: ReactNode[] = [
  "You have fewer than 13 days including the flights at either end.",
  "You need a guaranteed schedule. Lukla flights are weather-dependent and delays are normal.",
  "You want hot showers, wifi and reliable power above 4,000 m.",
  "You are looking for technical climbing. There is none on this route.",
];

const REASONS: ReactNode[] = [
  <>
    Registered and licensed in Nepal, and the numbers are on the page. Department
    of Tourism trekking licence {gokyoConfig.credentials.tourismLicence}, company
    registration {gokyoConfig.credentials.companyRegistration}. Check them.
  </>,
  <>
    Members of TAAN ({gokyoConfig.credentials.taanId}) and the Nepal
    Mountaineering Association ({gokyoConfig.credentials.nmaId}), with over a
    decade of operating in the Khumbu.
  </>,
  <>
    One porter per two trekkers, with their food, wages, accommodation and
    insurance inside the price rather than left to you.
  </>,
  <>
    You deal with the people who run the trek. The photographs on this site are
    ours, taken on this trail, not bought from a library.
  </>,
];

const VARIANTS = [
  {
    days: "15 days",
    title: "The standard Gokyo Lake trek",
    note: "The valley, the lakes and Gokyo Ri, with the Namche acclimatisation day and a buffer for the flight home.",
    href: "/itinerary/15-day" as const,
    current: true,
  },
  {
    days: "19 days",
    title: "Gokyo and Everest Base Camp via Cho La",
    note: "Adds Base Camp, Kala Patthar and a 5,420 m pass crossing. From US $1,860.",
    href: "/itinerary/with-everest-base-camp" as const,
  },
  {
    days: "21 days",
    title: "The Everest Three Passes",
    note: "Kongma La, Cho La and Renjo La, plus Base Camp and Gokyo. From US $2,075.",
    href: "/itinerary/three-passes" as const,
  },
];

/** The operator's published 15-day itinerary. Altitudes and times are theirs. */
const DAYS: ItineraryDay[] = [
  { n: 1, title: "Arrive in Kathmandu", alt: "1,355 m", time: "20 to 25 min" },
  { n: 2, title: "Kathmandu, sightseeing and kit check", alt: "1,355 m" },
  { n: 3, title: "Fly to Lukla, walk to Phakding", alt: "2,650 m", dist: "7.5 km", time: "3 h" },
  { n: 4, title: "Phakding to Namche Bazaar", alt: "3,443 m", dist: "12 km", time: "6 h" },
  {
    n: 5,
    title: "Acclimatisation day, hike to the Everest View Hotel",
    alt: "3,880 m",
    dist: "7 km",
    time: "4 h",
    hi: true,
  },
  { n: 6, title: "Namche to Dhole", alt: "4,038 m", dist: "11.5 km", time: "7 h" },
  { n: 7, title: "Dhole to Machhermo", alt: "4,447 m", dist: "6 km", time: "4 h" },
  { n: 8, title: "Machhermo to the Gokyo valley", alt: "4,750 m", dist: "6 km", time: "4 h" },
  {
    n: 9,
    title: "Gokyo Ri, the high point",
    alt: "5,357 m",
    dist: "4.6 km",
    time: "3 to 4 h",
    hi: true,
  },
  { n: 10, title: "Gokyo down to Dole", alt: "4,038 m", dist: "12 km", time: "5.5 h" },
  { n: 11, title: "Dole to Namche Bazaar", alt: "3,443 m", dist: "11.5 km", time: "6 h" },
  { n: 12, title: "Namche to Lukla", alt: "2,850 m", dist: "19.5 km", time: "7 to 8 h" },
  { n: 13, title: "Fly to Kathmandu", alt: "1,355 m", time: "30 min flight" },
  { n: 14, title: "Kathmandu, spare day", alt: "1,355 m", text: "The buffer if Lukla is weathered in." },
  { n: 15, title: "Departure", alt: "n/a" },
];

const INCLUDED: ReactNode[] = [
  "Round-trip flight from Kathmandu or Ramechhap to Lukla, departure taxes included.",
  "All ground transport by private vehicle, including airport pick-up and drop-off.",
  "Three nights in Kathmandu at a 3-star hotel, bed and breakfast.",
  "Breakfast, lunch and dinner every day on the trek, with a cup of tea.",
  "Twin-share lodge accommodation, with an attached bathroom and hot shower in Lukla, Phakding and Namche.",
  "Licensed English-speaking guide, and one porter per two trekkers, including their food, wages, accommodation and insurance.",
  "Both permits, arranged for you.",
  "Sleeping bag and down jacket on loan, plus a T-shirt, duffle bag and trekking map to keep.",
  "Seasonal fruit on the trail, and a completion certificate.",
];

const EXCLUDED: ReactNode[] = [
  "International flights and the Nepal entry visa fee.",
  "Travel insurance, which must cover helicopter evacuation at altitude.",
  "Lunch and dinner in Kathmandu.",
  "All cold drinks, bottled water and any beverage on the trek.",
  "Personal trekking equipment, poles included.",
  "A personal Sherpa guide and an oxygen cylinder, both available at extra charge.",
  "Hot showers, charging and wifi above Namche, which the lodges charge for.",
  "Tips for the driver, guide and porters.",
  "Costs arising from landslide, flight cancellation or rescue.",
];

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "How many days does the Gokyo Lake Trek take?",
    a: (
      <>
        Fifteen, Kathmandu to Kathmandu, of which ten are walking days. It is
        sold in as few as nine elsewhere, but every day removed comes out of
        either acclimatisation or your margin for a delayed Lukla flight.{" "}
        <Link href="/how-many-days">Every length compared</Link>.
      </>
    ),
  },
  {
    q: "How high does the trek go?",
    a: "Gokyo Ri at 5,357 m is the high point, walked on day 9. The highest you sleep is the Gokyo valley at 4,750 m. There is no technical ground anywhere on the route.",
  },
  {
    q: "What permits do I need?",
    a: (
      <>
        Two: Sagarmatha National Park entry at NPR 3,000 and the Khumbu Pasang
        Lhamu Rural Municipality permit at NPR 3,000. You do not need a TIMS card
        in the Everest region. Both are included and arranged for you.{" "}
        <Link href="/permits">Permits and fees in full</Link>.
      </>
    ),
  },
  {
    q: "Do I need a guide?",
    a: "Legally, no. The Everest region is exempt from Nepal's national guide requirement, and Khumbu Pasang Lhamu Rural Municipality has said so publicly. Whether you should hire one anyway is a different question, and it turns on the glacier crossings and on who makes the call if you get ill at 4,750 m.",
  },
  {
    q: "Is it harder than Everest Base Camp?",
    a: "Marginally, and mostly because the Gokyo valley gains height faster after Namche and has fewer lodges to bail out at. Base Camp goes higher if you include Kala Patthar at 5,545 m. Most people find the walking comparable and the Gokyo side considerably quieter.",
  },
  {
    q: "When is the best time to go?",
    a: "Spring, March to May, and autumn, September to November, for stable weather and clear mornings. November and December work well if you are comfortable with cold, and the valley is at its emptiest then.",
  },
  {
    q: "What happens if the Lukla flight is cancelled?",
    a: "It happens, and it is why day 14 exists. The trek is built with a spare day in Kathmandu so a weather delay costs you your buffer rather than your flight home. If a delay runs longer than that, we will talk you through the options including a helicopter transfer.",
  },
];

/* -------------------------------------------------------------------- page */

export const page: TrekPage = {
  slug: "",
  route: "/",
  title: "Gokyo Lake Trek | 15 Days | Itinerary & Cost",
  description:
    "The 15-day Gokyo Lake Trek in Nepal's Everest region, run by the team who guide it. The itinerary day by day, what it covers, how hard it is, and how Gokyo compares with Everest Base Camp.",
  hero: {
    title: "Gokyo Lake Trek",
    subtitle:
      "The Everest region's turquoise lakes, the Ngozumpa glacier and the view from Gokyo Ri, without the Base Camp queue.",
    image: "/images/gokyo-lake.webp",
    aspect: "4 / 3",
    ctas: [
      { label: "Enquire now", href: "#inquiry", variant: "green" },
      { label: "See the 15-day itinerary", href: "#itinerary", variant: "purple" },
    ],
  },
  subnav: [
    { label: "The route", href: "#overview" },
    { label: "Is it for you?", href: "#suits" },
    { label: "Day by day", href: "#itinerary" },
    { label: "The lakes", href: "#lakes" },
    { label: "What it covers", href: "#cost" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      {/* ------------------------------------------------------- overview */}
      <Section
        id="overview"
        eyebrow="The route"
        title="Six lakes, a glacier, and the best free view of Everest"
      >
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek is a 15-day trek in Nepal's Everest region to a
              chain of turquoise glacial lakes at 4,750 m and the Gokyo Ri
              viewpoint at 5,357 m, from which you can see Everest, Lhotse,
              Makalu and Cho Oyu in a single sweep.
            </p>
            <p>
              It branches off the Everest Base Camp trail above Namche Bazaar.
              Most of the traffic carries straight on toward Base Camp; you turn
              north into a valley that runs alongside the Ngozumpa glacier, the
              longest in Nepal, and climb past the lakes to a village on the
              third one.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="bg-white px-4 py-5">
                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-[1.35rem] font-semibold leading-none text-[var(--brand-ink)]">
                  {item.value}
                </dd>
                <p className="mt-1.5 text-[0.8rem] text-[var(--muted)]">
                  {item.note}
                </p>
              </div>
            ))}
          </dl>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/ngozumpa-glacier.webp"
              alt="The Ngozumpa glacier moraine below snow peaks on the Gokyo trail"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The Ngozumpa glacier, which the trail follows for two days on the
              way up the valley.
            </figcaption>
          </figure>

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
                      className="w-[38%] px-4 py-3.5 align-top text-[0.92rem] font-semibold text-[var(--ink)] sm:w-[34%] sm:px-5"
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

      {/* ------------------------------------------------------- vs EBC */}
      <Section
        id="vs-ebc"
        eyebrow="Gokyo or Base Camp"
        title="Why people choose this over Everest Base Camp"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Three differences, and none of them are about the walking being
              easier.
            </p>
            <p>
              <strong>Far fewer people.</strong> The Base Camp trail carries the
              bulk of Everest-region traffic. A trekker who did both in the same
              trip put it plainly in a review: far fewer trekkers venture onto
              the Gokyo circuit.
            </p>
            <p>
              <strong>You see Everest, rather than stand under it.</strong> Base
              Camp itself has no view of the summit. Gokyo Ri looks straight
              across the glacier at Everest, Lhotse, Makalu and Cho Oyu.
            </p>
            <p>
              <strong>The lakes.</strong> There is nothing comparable on the Base
              Camp side. Six of them on the trail, a Ramsar wetland, and the
              colour is the thing nobody is quite prepared for.
            </p>
            <p>
              The honest counterpoint: if standing at the foot of Everest is the
              thing you have always wanted, Gokyo will not scratch that itch, and
              you should either walk to Base Camp or take{" "}
              <Link href="/itinerary/with-everest-base-camp">
                the 19-day route that does both
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- suits */}
      <Section
        id="suits"
        eyebrow="Is it for you?"
        title="Who this trek suits, and who it does not"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Book it if</Sub>
            <div className="mt-4">
              <MarkList tone="inc" items={SUITS} />
            </div>
          </div>
          <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
            <Sub>Think again if</Sub>
            <div className="mt-4">
              <MarkList tone="exc" items={SUITS_NOT} />
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ itinerary */}
      <Section
        id="itinerary"
        eyebrow="Day by day"
        title="The 15-day itinerary at a glance"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Ten walking days, one acclimatisation day at Namche, and a spare
              day at the end for the Lukla flight. Altitudes, distances and hours
              below are the ones we actually walk.
            </p>
          </div>

          <ItineraryTable days={DAYS} />

          <Note>
            Day 5 is not a rest day and day 14 is not padding. You hike to
            3,880 m and sleep back down at 3,443 m, which is how acclimatisation
            works, and the spare day at the end exists because Lukla flights are
            cancelled often enough to plan around.
          </Note>

          <div className="flex flex-wrap gap-3">
            <Link className={BTN_SOLID} href="/itinerary/15-day">
              The full day by day
            </Link>
            <Link className={BTN_GHOST} href="/how-many-days">
              How many days do I need?
            </Link>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- day 9 */}
      <Section id="gokyo-ri" eyebrow="The high point" title="Day 9: Gokyo Ri at dawn">
        <DayCard
          title="5,357 m, and four eight-thousanders in one view"
          image="/images/lake-reflection-cairn.webp"
          alt="The third Gokyo lake reflecting the surrounding peaks, with a stone cairn on the shore"
          width={1800}
          height={1350}
          stats={[
            { icon: "clock", label: "3 to 4 hours round trip" },
            { icon: "mtn", label: "5,357 m, about 600 m of climb" },
            { icon: "bed", label: "Second night in Gokyo" },
            { icon: "meal", label: "Breakfast on your return" },
          ]}
        >
          <p>
            You leave the village in the dark and climb straight off the lake
            shore. No rope, no crampons, no climbing experience needed: it is a
            steep walk at an altitude where everything feels harder than it
            should. Most people take two to three hours up and an hour down.
          </p>
          <p>
            <Link href="/gokyo-ri">
              Everything about the climb, and whether sunset is a better idea
            </Link>
            .
          </p>
        </DayCard>
      </Section>

      {/* --------------------------------------------------------- lakes */}
      <Section id="lakes" eyebrow="The lakes" title="Six on the trail, nineteen in the system">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Most descriptions stop at "six turquoise lakes". The trail passes
              six; the wetland holds nineteen, and it has been a Ramsar site
              since 2007, covering 7,770 hectares. It is one of the highest
              freshwater lake systems in the world.
            </p>
            <p>
              The three you walk past on the way in are Longpongo, Tanjung Cho
              and Dudh Pokhari, the third being the one the village stands on.
              The fourth, Thonak Cho, is actually the largest at 65 hectares and
              almost nobody goes to see it.
            </p>
            <p>
              The colour is rock, not algae. The glacier grinds bedrock into a
              fine powder that stays suspended in the meltwater and scatters blue
              and green light back at you.{" "}
              <Link href="/lakes">Every lake, named and measured</Link>.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lake-mirror-peaks.webp"
              alt="A Gokyo lake holding a mirror reflection of the surrounding Himalayan peaks"
              width={1350}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Still morning on the third lake, before the valley wind gets up.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ------------------------------------------------------- variants */}
      <Section id="variants" eyebrow="Lengths" title="Three ways to walk the Gokyo valley">
        <div className="space-y-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {VARIANTS.map((variant) => (
              <li
                key={variant.href}
                className={`${CARD} p-5 ${
                  variant.current ? "border-[var(--brand)] bg-[var(--tint)]" : ""
                }`}
              >
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)]">
                  {variant.days}
                  {variant.current ? ", this page" : ""}
                </p>
                <p className="mt-2 text-[1.05rem] font-semibold leading-snug text-[var(--ink)]">
                  <Link href={variant.href}>{variant.title}</Link>
                </p>
                <p className={`mt-2 ${PROSE_SM}`}>{variant.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ----------------------------------------------------------- cost */}
      <Section id="cost" eyebrow="Money" title="What the price covers">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Price depends on group size and departure date, so we quote per
              enquiry rather than printing a number that turns out not to apply
              to you. Tell us roughly when and how many, and you will get a real
              figure.
            </p>
            <p>
              What does not change is what is inside it, and what is not.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Included</Sub>
              <div className="mt-4">
                <MarkList tone="inc" items={INCLUDED} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>Not included</Sub>
              <div className="mt-4">
                <MarkList tone="exc" items={EXCLUDED} />
              </div>
            </div>
          </div>

          <ActionCard
            title="Ask us what it costs"
            body="Dates and group size are all we need to give you a firm price."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />
        </div>
      </Section>

      {/* -------------------------------------------------------- reasons */}
      <Section id="why" eyebrow="The operator" title="Why book direct with us">
        <div className="space-y-7">
          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/guide-and-trekker-lake.webp"
              alt="Two of our team above the Gokyo lake, wrapped up against the wind"
              width={2400}
              height={1803}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Our own people, on this trail. Every photograph on this site was
              taken by the team who guide the trek.
            </figcaption>
          </figure>

          <ol className="grid gap-3 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <li
                key={i}
                className={`${CARD} flex gap-4 p-4 sm:p-5 sm:last:col-span-2`}
              >
                <span className="text-[1.5rem] font-bold leading-none text-[var(--brand)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={PROSE_SM}>{reason}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* -------------------------------------------------------- reviews */}
      <Section id="reviews" eyebrow="Trekkers" title="What trekkers say">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[2rem] font-bold leading-none text-[var(--ink)]">
              {gokyoConfig.reviews.score.toFixed(1)}
            </span>
            <Stars />
            <span className={PROSE_SM}>
              {gokyoConfig.reviews.count} TripAdvisor reviews across all our treks
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {gokyoConfig.reviews.items.map((review) => (
              <blockquote key={review.name} className={`${CARD} p-5`}>
                <Stars className="h-3.5 w-3.5" />
                <p className={`mt-3 ${PROSE_SM}`}>{review.text}</p>
                <footer className="mt-4 flex items-center gap-3 text-[0.85rem] text-[var(--muted)]">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand-ink)] text-[0.72rem] font-bold text-white">
                    {review.initials}
                  </span>
                  <span>
                    <b className="text-[var(--ink)]">{review.name}</b>,{" "}
                    {review.context}
                  </span>
                  <span className="ml-auto rounded bg-[var(--tint)] px-2 py-0.5 text-[0.72rem] font-semibold">
                    {review.source}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>

          <p className={PROSE_SM}>
            Each of these names Gokyo. The rating above is our TripAdvisor score
            across every trek we run, not a Gokyo-only score.
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------------------ faq */}
      <Section id="faq" eyebrow="Questions" title="Frequently asked">
        <div className="faq">
          {FAQS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <div className="a">{item.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- closer */}
      <Section id="next" eyebrow="Next" title="Tell us when you want to go">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              Send us rough dates and how many of you there are. We will come
              back with a price, the departure options around those dates, and an
              honest view on whether the timing suits what you want to see.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className={BTN_SOLID} href="#inquiry">
              <Gl glyph="email" />
              Enquire
            </a>
            <a
              className={BTN_GHOST}
              href={`https://wa.me/${gokyoConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
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
  // Still empty on purpose: schema encodes a page's claims, and without a price
  // a TouristTrip offer would be asserting something nobody has set.
  jsonLd: [],
};

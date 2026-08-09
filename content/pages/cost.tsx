// /cost, the highest-value page on the site after the itinerary.
//
// Written WITHOUT our headline price, which the operator has not set. That is
// deliberate and it is not a stub: the SERP research showed this query is won by
// editorial cost breakdowns rather than package listings, and almost everything
// a reader needs (what is covered, what is not, permit fees, what you spend on
// the trail) is knowable without our number.
//
// THE PRICE SLOT: `HEADLINE_PRICE` below is null. Set it and the page switches
// from "quoted on enquiry" to a real figure in one place. Do not scatter the
// number through the copy.
//
// FACTS: permit fees from seo/research/permits.md. Inclusions and exclusions
// from the operator's published list. The 19 and 21-day prices are published by
// them; the 15-day is not.
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

/**
 * Set this when the operator gives a figure, e.g. "US $1,450 per person".
 * Null renders the enquiry wording instead. One place, one change.
 */
const HEADLINE_PRICE: string | null = null;

const PERMIT_FEES: [string, string, string][] = [
  ["Sagarmatha National Park entry", "NPR 3,000", "Kathmandu or the Monjo gate"],
  [
    "Khumbu Pasang Lhamu municipality",
    "NPR 3,000",
    "Lukla or Monjo. Not sold in Kathmandu",
  ],
];

const INCLUDED: ReactNode[] = [
  "Round-trip flight Kathmandu or Ramechhap to Lukla, departure taxes included.",
  "All ground transport by private vehicle, airport pick-up and drop-off.",
  "Three nights in Kathmandu at a 3-star hotel, bed and breakfast.",
  "Breakfast, lunch and dinner every day on the trek, with a cup of tea.",
  "Twin-share lodge accommodation, with attached bathroom and hot shower in Lukla, Phakding and Namche.",
  "Licensed English-speaking guide, and one porter per two trekkers, with their food, wages, accommodation and insurance.",
  "Both permits, arranged for you.",
  "Sleeping bag and down jacket on loan, plus a duffle bag, T-shirt and trekking map to keep.",
];

const EXCLUDED: ReactNode[] = [
  "International flights and the Nepal visa fee.",
  "Travel insurance covering helicopter evacuation at altitude, which is a condition of booking.",
  "Lunch and dinner in Kathmandu.",
  "All drinks on the trek, bottled water included.",
  "Hot showers, device charging and wifi above Namche, which the lodges charge for at a rate that climbs with altitude.",
  "Personal trekking equipment such as poles.",
  "A personal Sherpa guide and bottled oxygen, both available at extra charge.",
  "Tips for the driver, guide and porters.",
  "Costs arising from flight cancellation, landslide or rescue.",
];

const ON_THE_TRAIL = [
  {
    what: "Drinks",
    note: "Bottled water gets expensive and heavy above Namche, and the empties are a real problem up there. Treating your own is cheaper and better.",
  },
  {
    what: "Hot shower",
    note: "Charged per shower above Namche, and the price rises with altitude. Some people take three in ten days and think nothing of it.",
  },
  {
    what: "Charging",
    note: "Charged per device, per hour, in the dining room. A power bank pays for itself by about day 6.",
  },
  {
    what: "Wifi",
    note: "Sold by the lodge or by card. Slow, and worse the higher you go.",
  },
  {
    what: "Tips",
    note: "Customary rather than compulsory, for the guide and porters at the end of the trek. We will give you a sensible range when you ask.",
  },
];

export const page: TrekPage = {
  slug: "cost",
  route: "/cost",
  title: "Gokyo Lake Trek Cost: What You Pay and What For",
  description:
    "An itemised breakdown of the Gokyo Lake Trek cost. What the package covers, what you still pay on the trail, what the permits come to, and what happens to the price if the Lukla flight is cancelled.",
  hero: {
    title: "What the trek costs",
    subtitle:
      "Itemised, including the things most operators leave until you are standing at a lodge desk.",
    image: "/images/gokyo-village-lakeshore.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [{ label: "Get a price for your dates", href: "#inquiry", variant: "green" }],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="headline" eyebrow="The short answer" title="What you pay">
        <div className="space-y-7">
          <div className={PROSE}>
            {HEADLINE_PRICE ? (
              <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
                The 15-day Gokyo Lake Trek is {HEADLINE_PRICE}, covering
                everything from the Lukla flights to the permits, the guide, the
                porter and every meal on the trek.
              </p>
            ) : (
              <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
                We quote the 15-day Gokyo Lake Trek per enquiry rather than
                printing one figure, because the number moves with group size and
                departure date. Tell us roughly when and how many of you there
                are and you will get a firm price, not a range.
              </p>
            )}
            <p>
              The two longer trips do carry published prices:{" "}
              <Link href="/itinerary/with-everest-base-camp">
                19 days with Everest Base Camp
              </Link>{" "}
              is US $1,860, and{" "}
              <Link href="/itinerary/three-passes">21 days over the Three Passes</Link>{" "}
              is US $2,075.
            </p>
            <p>
              What does not move is what sits inside the price and what does not,
              and that is most of what this page is for.
            </p>
          </div>

          <ActionCard
            title="Get a price for your dates"
            body="Dates and group size are all we need. No deposit to ask."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />
        </div>
      </Section>

      <Section id="in-out" eyebrow="The package" title="What is and is not covered">
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
      </Section>

      <Section id="permits" eyebrow="Fixed costs" title="The permits, and what they actually cost">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Two permits, both included in the trek price. These are the real
              published fees, so you can see what portion of the cost is
              government charge rather than margin.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Permit
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Fee
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Issued at
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PERMIT_FEES.map(([name, fee, where]) => (
                    <tr
                      key={name}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3.5 align-top text-[0.92rem] font-semibold text-[var(--ink)] sm:px-5"
                      >
                        {name}
                      </th>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.92rem] tabular-nums text-[var(--body)] sm:px-5">
                        {fee}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.9rem] leading-6 text-[var(--muted)] sm:px-5">
                        {where}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            No TIMS card is used in the Everest region, so anyone quoting you for
            one is working from out-of-date information.{" "}
            <Link href="/permits">The permits page explains why</Link>.
          </Note>
        </div>
      </Section>

      <Section id="on-the-trail" eyebrow="Your own money" title="What you still spend on the trail">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Meals and beds are covered. Comfort is not. These are the things
              you buy from the lodge, and the reason people are surprised is that
              the prices climb with the altitude: everything up there arrived on
              somebody's back or a yak.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {ON_THE_TRAIL.map((item) => (
              <div key={item.what} className={`${CARD} p-5`}>
                <Sub>{item.what}</Sub>
                <p className={`mt-2 ${PROSE_SM}`}>{item.note}</p>
              </div>
            ))}
          </div>

          <Note>
            We deliberately do not print figures for showers, charging or wifi.
            They vary by lodge and by season and we have no verified numbers, so
            any table we published would be a guess dressed up as a fact. Carry
            cash: the last reliable ATM is in Namche.
          </Note>
        </div>
      </Section>

      <Section id="cancellation" eyebrow="The awkward one" title="What a cancelled flight costs you">
        <div className={PROSE}>
          <p>
            Lukla flights are cancelled for weather often enough to plan around,
            and our exclusions say plainly that costs arising from a cancellation
            are not in the price. That means an extra night, meals, and any
            onward flight you miss are yours.
          </p>
          <p>
            We would rather you read that here than discover it at a lodge desk.
            The reason it works this way is that weather delay is open-ended, and
            a price that carried it would be a higher price for everyone,
            including every trekker whose flight left on time.
          </p>
          <p>
            The itinerary is built with a spare day at the end precisely so a
            delay costs you your buffer rather than your flight home.{" "}
            <Link href="/route/lukla-flights">
              Lukla flights and what happens when yours is cancelled
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section id="compare" eyebrow="Context" title="How our price compares">
        <div className={PROSE}>
          <p>
            A guided Gokyo trek from a licensed Nepali operator generally runs
            somewhere between USD 1,150 and 1,800 for a 12 to 14 day itinerary,
            depending on group size, season and how much the operator has cut.
          </p>
          <p>
            Be careful comparing on the headline alone. A cheaper quote usually
            means a shorter trip, and a shorter trip usually means the
            acclimatisation day or the buffer day has been removed. Both of those
            are the days that decide whether you get up Gokyo Ri and whether you
            make your flight home.{" "}
            <Link href="/how-many-days">
              What each length actually removes
            </Link>
            .
          </p>
          <p>
            Also check whether the porter's insurance is in the price. Ours is.
          </p>
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

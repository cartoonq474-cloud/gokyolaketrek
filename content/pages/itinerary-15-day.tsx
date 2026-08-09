// /itinerary/15-day, the product page, and the second thing built after the root.
//
// STRUCTURAL RULE from the SERP research: every competitive itinerary puts the
// altitude in the day heading itself ("Day 8: Machermo to Gokyo (4750 m)"). Ours
// does that here. It was the most consistent pattern across ranking pages and
// the homepage originally buried altitude in body text.
//
// FACTS: every altitude, distance and duration is the operator's own published
// itinerary, captured in seo/research/operator-nepalintrepidtreks.md.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  DayCard,
  ItineraryTable,
  MarkList,
  Note,
  PROSE,
  Section,
  type ItineraryDay,
} from "../design-kit";

const DAYS: ItineraryDay[] = [
  {
    n: 1,
    title: "Arrive in Kathmandu",
    alt: "1,355 m",
    time: "20 to 25 min transfer",
    text: "Met at the airport and driven to the hotel. Nothing is asked of you today.",
  },
  {
    n: 2,
    title: "Kathmandu, sightseeing and preparation",
    alt: "1,355 m",
    text: "The kit check happens today. Anything you are missing can be bought or rented in Thamel, which is far cheaper than buying it at home.",
  },
  {
    n: 3,
    title: "Fly to Lukla, walk to Phakding",
    alt: "2,850 m to 2,650 m",
    dist: "7.5 km",
    time: "3 h",
    text: "The mountain flight, then a short downhill afternoon along the Dudh Koshi. Deliberately easy: the point of day 3 is to arrive, not to gain height.",
  },
  {
    n: 4,
    title: "Phakding to Namche Bazaar",
    alt: "3,443 m",
    dist: "12 km",
    time: "6 h",
    text: "The first hard day. A long climb up to Namche, with the national park checkpoint at Monjo on the way.",
  },
  {
    n: 5,
    title: "Namche, acclimatisation day",
    alt: "3,880 m on the hike, sleep at 3,443 m",
    dist: "7 km",
    time: "4 h",
    hi: true,
    text: "Not a rest day. You hike up to the Everest View Hotel and come back down to sleep lower, which is how acclimatisation actually works.",
  },
  {
    n: 6,
    title: "Namche to Dhole",
    alt: "4,038 m",
    dist: "11.5 km",
    time: "7 h",
    text: "The day you leave the Everest Base Camp trail. Most of the traffic carries straight on and you turn north into the Gokyo valley.",
  },
  {
    n: 7,
    title: "Dhole to Machhermo",
    alt: "4,447 m",
    dist: "6 km",
    time: "4 h",
    text: "A short day on purpose. Six kilometres is not much walking, but you are gaining 400 m and sleeping above 4,400 m for the first time.",
  },
  {
    n: 8,
    title: "Machhermo to the Gokyo valley",
    alt: "4,750 m",
    dist: "6 km",
    time: "4 h",
    text: "Past the first two lakes and into the village on the third. The colour of the water is the thing nobody is prepared for.",
  },
  {
    n: 9,
    title: "Gokyo Ri",
    alt: "5,357 m",
    dist: "4.6 km",
    time: "3 to 4 h",
    hi: true,
    text: "The high point of the trek, climbed before dawn. Everest, Lhotse, Makalu and Cho Oyu from one summit, with the Ngozumpa glacier below.",
  },
  {
    n: 10,
    title: "Gokyo down to Dole",
    alt: "4,038 m",
    dist: "12 km",
    time: "5.5 h",
    text: "Retracing the valley. Descending fast feels easy and you will sleep properly for the first time in days.",
  },
  {
    n: 11,
    title: "Dole to Namche Bazaar",
    alt: "3,443 m",
    dist: "11.5 km",
    time: "6 h",
    text: "Back into thicker air, and back to hot showers, bakeries and a phone signal.",
  },
  {
    n: 12,
    title: "Namche to Lukla",
    alt: "2,850 m",
    dist: "19.5 km",
    time: "7 to 8 h",
    text: "The longest walking day of the trek, and almost all downhill. Harder on the knees than it looks on paper.",
  },
  {
    n: 13,
    title: "Fly to Kathmandu",
    alt: "1,355 m",
    time: "30 min flight",
    text: "Weather permitting. If it is not permitting, this is why day 14 exists.",
  },
  {
    n: 14,
    title: "Kathmandu, spare day",
    alt: "1,355 m",
    text: "The buffer. If Lukla was closed yesterday, today absorbs it. If it was not, today is yours.",
  },
  {
    n: 15,
    title: "Departure",
    alt: "n/a",
    text: "Transfer to the airport.",
  },
];

const INCLUDED: ReactNode[] = [
  "Round-trip flight from Kathmandu or Ramechhap to Lukla, departure taxes included.",
  "All ground transport by private vehicle, including airport pick-up and drop-off.",
  "Three nights in Kathmandu at a 3-star hotel, bed and breakfast.",
  "Breakfast, lunch and dinner every day on the trek, with a cup of tea.",
  "Twin-share lodge-to-lodge accommodation, with an attached bathroom and hot shower in Lukla, Phakding and Namche.",
  "Experienced English-speaking guide, and one porter per two trekkers, including their food, salary, accommodation and insurance.",
  "Both permits: Sagarmatha National Park entry and the Khumbu Pasang Lhamu municipality permit.",
  "Sleeping bag and down jacket for the trek, plus a T-shirt, duffle bag and trekking map to keep.",
  "Seasonal fruit on the trail, and a trip achievement certificate.",
];

const EXCLUDED: ReactNode[] = [
  "International flights and the Nepal entry visa fee.",
  "Travel insurance, which must cover evacuation at altitude.",
  "Lunch and dinner in Kathmandu.",
  "All cold drinks, bottled water and any beverage on the trek.",
  "Personal trekking equipment, poles included.",
  "A personal Sherpa guide, and an oxygen cylinder with mask, both at extra charge.",
  "Tips for the driver, guide and porters.",
  "Personal expenses: phone, internet, laundry, bar bills, extra porters.",
  "Costs arising from landslide, road blockage, rescue or flight cancellation.",
];

export const page: TrekPage = {
  slug: "itinerary/15-day",
  route: "/itinerary/15-day",
  title: "15-Day Gokyo Lake Trek Itinerary, Day by Day",
  description:
    "Every day of the 15-day Gokyo Lake Trek with altitude, distance and walking hours. Lukla to Namche, the acclimatisation day, Dole and Machhermo, the Gokyo valley at 4,750 m and Gokyo Ri at 5,357 m.",
  hero: {
    title: "The 15-day itinerary",
    subtitle:
      "Kathmandu to Kathmandu. Ten walking days, a high point of 5,357 m, and a spare day at the end because Lukla does what it likes.",
    image: "/images/lake-reflection-cairn.webp",
    aspect: "4 / 3",
    ctas: [
      { label: "Enquire about dates", href: "#inquiry", variant: "green" },
      { label: "How many days do I need?", href: "/how-many-days", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="shape" eyebrow="The shape of it" title="How the 15 days are spent">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Fifteen days, of which ten are walking. Two are Kathmandu at the
              start, two are flying days, and one at the end is a deliberate
              buffer for a delayed Lukla flight.
            </p>
            <p>
              The walking builds slowly on purpose. You gain height fastest
              between days 4 and 8, and the schedule puts a full acclimatisation
              day at Namche before any of that, plus a deliberately short day
              into Machhermo. Why that ordering matters is on{" "}
              <Link href="/plan/acclimatisation">the acclimatisation page</Link>.
            </p>
          </div>

          <Note>
            Day 14 is not padding. Lukla flights are weather-dependent and being
            grounded for a day is normal, not exceptional. An itinerary without a
            buffer day is one that puts your international flight at risk. See{" "}
            <Link href="/route/lukla-flights">Lukla flights and cancellations</Link>.
          </Note>
        </div>
      </Section>

      <Section id="days" eyebrow="Day by day" title="Every day, with the numbers">
        <div className="space-y-7">
          <ItineraryTable days={DAYS} />
        </div>
      </Section>

      <Section id="day9" eyebrow="The big one" title="Day 9: Gokyo Ri at 5,357 m">
        <DayCard
          title="Dawn on Gokyo Ri, and the four eight-thousanders"
          image="/images/gokyo-lake.webp"
          alt="The third Gokyo lake below the ridge climbed on day 9, with snow peaks behind"
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
            shore. No technical ground, no rope, just a steep zigzag at an
            altitude where everything feels harder than it should. From the top,
            Everest, Lhotse, Makalu and Cho Oyu, with the Ngozumpa glacier below
            you and the lakes strung out behind.
          </p>
          <p>
            Everything about the climb, including whether sunset is a better
            idea, is on <Link href="/gokyo-ri">the Gokyo Ri page</Link>.
          </p>
        </DayCard>
      </Section>

      <Section id="price" eyebrow="Money" title="What is included">
        <div className="space-y-7">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">Included</b>
              <div className="mt-4">
                <MarkList tone="inc" items={INCLUDED} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">Not included</b>
              <div className="mt-4">
                <MarkList tone="exc" items={EXCLUDED} />
              </div>
            </div>
          </div>

          <ActionCard
            title="Ask us what it costs"
            body="Price depends on group size and departure date. Tell us roughly when and how many, and we will give you a real figure."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />
        </div>
      </Section>

      <Section id="longer" eyebrow="Other lengths" title="If 15 days is not your shape">
        <div className={PROSE}>
          <p>
            Fifteen is our standard, and it is built around one acclimatisation
            day and one buffer day. Shorter versions remove one or both, which is
            a trade rather than a saving.
          </p>
          <p>
            If you want Everest Base Camp as well, that is the{" "}
            <Link href="/itinerary/with-everest-base-camp">
              19-day route over the Cho La
            </Link>
            . If you want all three high passes, that is{" "}
            <Link href="/itinerary/three-passes">21 days</Link>. And if you are
            still deciding, <Link href="/how-many-days">how many days you need</Link>{" "}
            compares every length honestly.
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

// /itinerary/with-everest-base-camp, the 19-day route.
//
// FACTS: every day, altitude, distance and duration is the operator's own
// published 19-day Everest Base Camp with Cho La Pass itinerary, scraped
// 2026-08-09. Max elevation 5,545 m (Kala Patthar).
//
// This one HAS a published price, US $1,860, unlike the 15-day Gokyo trek.
//
// DATA NOTE: the operator's altitude column is inconsistent between their own
// pages. On this itinerary day 12 shows the Cho La pass height (5,420 m); on
// their Three Passes page the same crossing shows the destination altitude
// instead. Their figures are reproduced as published and the discrepancy is
// called out on the page rather than silently smoothed over.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  ItineraryTable,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Sub,
  type ItineraryDay,
} from "../design-kit";

const DAYS: ItineraryDay[] = [
  { n: 1, title: "Arrive in Kathmandu", alt: "1,355 m", time: "20 to 25 min" },
  { n: 2, title: "Kathmandu, sightseeing and preparation", alt: "1,355 m" },
  { n: 3, title: "Fly to Lukla, trek to Phakding", alt: "2,650 m", dist: "7.5 km", time: "3 h" },
  { n: 4, title: "Phakding to Namche Bazaar", alt: "3,443 m", dist: "12 km", time: "6 h" },
  {
    n: 5,
    title: "Acclimatisation, hike to the Everest View Hotel",
    alt: "3,880 m",
    dist: "7 km",
    time: "4 h",
    hi: true,
  },
  { n: 6, title: "Namche to Tengboche", alt: "3,860 m", dist: "10 km", time: "6 h" },
  { n: 7, title: "Tengboche to Dingboche", alt: "4,450 m", dist: "12 km", time: "6 h" },
  {
    n: 8,
    title: "Acclimatisation, hike to Nangkartshang Hill",
    alt: "5,100 m",
    dist: "7.4 km",
    time: "4 to 5 h",
    hi: true,
  },
  { n: 9, title: "Dingboche to Lobuche", alt: "4,910 m", dist: "8 km", time: "5 to 6 h" },
  {
    n: 10,
    title: "Lobuche to Gorak Shep, then Everest Base Camp and back",
    alt: "5,364 m",
    dist: "11.5 km",
    time: "7 to 8 h",
    hi: true,
    text: "The base camp day. Out and back from Gorak Shep, which is where you sleep.",
  },
  {
    n: 11,
    title: "Kala Patthar, then trek to Dzongla",
    alt: "5,545 m",
    dist: "13.7 km",
    time: "8 h",
    hi: true,
    text: "The highest point of the whole trek, and the classic view of Everest from the south.",
  },
  {
    n: 12,
    title: "Dzongla to Thangna over the Cho La",
    alt: "5,420 m at the pass",
    dist: "10.8 km",
    time: "7 h",
    hi: true,
    text: "The crux. Rock, ice near the top, and the crossing that links the two valleys.",
  },
  { n: 13, title: "Thangna to Gokyo", alt: "4,750 m", dist: "4.9 km", time: "3 h" },
  {
    n: 14,
    title: "Gokyo Ri",
    alt: "5,357 m",
    dist: "4.6 km",
    time: "3 to 4 h",
    hi: true,
    text: "The second great viewpoint, three days after the first.",
  },
  { n: 15, title: "Gokyo to Dole", alt: "4,038 m", dist: "11.9 km", time: "5 h" },
  { n: 16, title: "Dole to Namche Bazaar", alt: "3,443 m", dist: "11.5 km", time: "5 to 6 h" },
  { n: 17, title: "Namche to Lukla", alt: "2,850 m", dist: "19.5 km", time: "7 to 8 h" },
  { n: 18, title: "Fly to Kathmandu", alt: "1,355 m", time: "30 min flight" },
  { n: 19, title: "Departure", alt: "n/a" },
];

export const page: TrekPage = {
  slug: "itinerary/with-everest-base-camp",
  route: "/itinerary/with-everest-base-camp",
  title: "Gokyo and Everest Base Camp via Cho La: 19 Days",
  description:
    "Adding Everest Base Camp to the Gokyo valley over the Cho La pass at 5,420 m. The 19-day itinerary day by day, what the crossing demands, and whether the extra four days are worth it.",
  hero: {
    title: "Gokyo and Everest Base Camp",
    subtitle:
      "Nineteen days, both great viewpoints, and a 5,420 m pass in between. From US $1,860.",
    image: "/images/lakeshore-trail.webp",
    aspect: "4 / 3",
    ctas: [
      { label: "Enquire about dates", href: "#inquiry", variant: "green" },
      { label: "Compare the lengths", href: "/how-many-days", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="what" eyebrow="The short answer" title="What the 19-day route adds">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              This is the Gokyo trek with Everest Base Camp bolted on the front
              and the Cho La pass joining the two. Nineteen days, a high point of
              5,545 m at Kala Patthar, and both of the Everest region's great
              viewpoints in one trip. From US $1,860.
            </p>
            <p>
              The order matters. You do Base Camp first, coming up the main
              trail through Tengboche and Dingboche, then cross the Cho La
              westward into the Gokyo valley. That means you arrive at Gokyo Ri
              already acclimatised to 5,545 m, which is a considerably easier
              morning than doing it on day 9 of the{" "}
              <Link href="/itinerary/15-day">standard 15-day trek</Link>.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "19 days", v: "Kathmandu to Kathmandu" },
              { k: "5,545 m", v: "Kala Patthar, the high point" },
              { k: "US $1,860", v: "published price" },
            ].map((item) => (
              <div key={item.k} className={`${CARD} px-4 py-5`}>
                <p className="text-[1.35rem] font-semibold leading-none text-[var(--brand-ink)]">
                  {item.k}
                </p>
                <p className="mt-1.5 text-[0.8rem] text-[var(--muted)]">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="days" eyebrow="Day by day" title="The 19-day itinerary">
        <div className="space-y-7">
          <ItineraryTable days={DAYS} />

          <Note>
            Two acclimatisation days, on day 5 at Namche and day 8 at Dingboche,
            plus the Nangkartshang hike to 5,100 m before you sleep anywhere near
            it. That schedule is why this route reaches 5,545 m with far fewer
            people turning back than the compressed versions sold elsewhere.
          </Note>
        </div>
      </Section>

      <Section id="chola" eyebrow="The crux" title="The Cho La is the real decision">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Day 12 is what separates this trip from the standard trek. The Cho
              La sits at 5,420 m and the crossing takes about seven hours over
              10.8 km, on rock, moraine and a glacier section near the top that
              holds ice into the spring.
            </p>
            <p>
              It is not technical climbing. It is also not a walk. In poor
              conditions it needs crampons, and in bad weather the sensible
              decision is not to cross at all, which means a two-day detour back
              around. Anyone selling it as a formality has not been there in
              April.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Take this route if</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                You want both Base Camp and Gokyo, you have 19 days, and you are
                comfortable with one genuinely serious mountain day.
              </p>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>Take the 15-day instead if</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                You want the lakes and the view, and you would rather not spend a
                day on a glaciated pass to also stand at base camp.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="viewpoints" eyebrow="Both viewpoints" title="Kala Patthar and Gokyo Ri, three days apart">
        <div className={PROSE}>
          <p>
            This is the only itinerary that gives you both. Kala Patthar on day
            11 at 5,545 m, the classic head-on view of Everest from the south,
            and <Link href="/gokyo-ri">Gokyo Ri</Link> on day 14 at 5,357 m,
            looking across the Ngozumpa glacier at the whole Khumbu skyline.
          </p>
          <p>
            They are different views of the same mountain and most people prefer
            one strongly over the other. Which and why is on{" "}
            <Link href="/gokyo-ri-vs-kala-patthar">
              Gokyo Ri versus Kala Patthar
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="Book it, or compare it">
        <div className="space-y-6">
          <ActionCard
            title="Ask about the 19-day route"
            body="Tell us roughly when and how many of you. We will confirm dates and what the Cho La is likely to be doing then."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />
          <div className={PROSE}>
            <p>
              If 19 days is more than you have,{" "}
              <Link href="/itinerary/15-day">the 15-day Gokyo trek</Link> is the
              same valley without Base Camp. If it is less than you want,{" "}
              <Link href="/itinerary/three-passes">
                the 21-day Three Passes
              </Link>{" "}
              adds Kongma La and Renjo La. All the lengths are compared on{" "}
              <Link href="/how-many-days">how many days you need</Link>, and the
              permits are the same either way, on{" "}
              <Link href="/permits">permits and fees</Link>.
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

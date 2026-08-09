// /itinerary/three-passes, the 21-day route.
//
// FACTS: every day, altitude, distance and duration is the operator's own
// published 21-day Everest Three High Passes itinerary, scraped 2026-08-09.
// Max elevation 5,545 m (Kala Patthar). Price US $2,075, from their own trip
// listing rather than the trip page, which does not repeat it.
//
// DATA NOTE: on this itinerary the operator lists the DESTINATION altitude for
// the two pass days (day 10 Kongma La shows Lobuche at 4,910 m, day 13 Cho La
// shows Thangna at 4,700 m), whereas their 19-day page lists the PASS height for
// the same Cho La crossing. Their figures are reproduced as published and the
// inconsistency is stated on the page. Pass heights are not asserted where the
// operator has not published them.
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
  { n: 2, title: "Kathmandu, preparation and sightseeing", alt: "1,355 m" },
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
  { n: 9, title: "Dingboche to Chhukung", alt: "4,700 m", dist: "4.1 km", time: "2.5 h" },
  {
    n: 10,
    title: "Chhukung to Lobuche over the Kongma La",
    alt: "4,910 m at Lobuche",
    dist: "11 km",
    time: "7 h",
    hi: true,
    text: "The first pass, and the one most people find hardest. A long day with a big climb before the descent onto the Khumbu glacier.",
  },
  {
    n: 11,
    title: "Everest Base Camp and back to Gorak Shep",
    alt: "5,364 m",
    dist: "11.5 km",
    time: "7 to 8 h",
    hi: true,
  },
  {
    n: 12,
    title: "Kala Patthar, then trek to Dzongla",
    alt: "5,545 m",
    dist: "13.7 km",
    time: "8 h",
    hi: true,
    text: "The high point of the trek.",
  },
  {
    n: 13,
    title: "Dzongla to Thangna over the Cho La",
    alt: "4,700 m at Thangna",
    dist: "10.8 km",
    time: "7 h",
    hi: true,
    text: "The second pass. The Cho La itself is 5,420 m, with ice near the top into spring.",
  },
  { n: 14, title: "Thangna to Gokyo", alt: "4,750 m", dist: "4.9 km", time: "3 h" },
  {
    n: 15,
    title: "Gokyo Ri, and the lakes",
    alt: "5,357 m",
    dist: "4.6 km",
    time: "3 to 4 h",
    hi: true,
  },
  {
    n: 16,
    title: "Gokyo to Lungden over the Renjo La",
    alt: "4,368 m at Lungden",
    dist: "13 km",
    time: "6 to 7 h",
    hi: true,
    text: "The third pass, and the quietest. Almost nobody comes this way.",
  },
  { n: 17, title: "Lungden to Namche Bazaar", alt: "3,443 m", dist: "18.4 km", time: "6 to 7 h" },
  { n: 18, title: "Namche to Lukla", alt: "2,850 m", dist: "19.5 km", time: "7 to 8 h" },
  { n: 19, title: "Fly to Kathmandu", alt: "1,355 m", time: "30 min flight" },
  { n: 20, title: "Kathmandu, spare day", alt: "1,355 m", text: "The buffer for a delayed Lukla flight." },
  { n: 21, title: "Departure", alt: "n/a" },
];

export const page: TrekPage = {
  slug: "itinerary/three-passes",
  route: "/itinerary/three-passes",
  title: "Everest Three Passes: Renjo La, Cho La, Kongma La",
  description:
    "The 21-day circuit over all three high passes, taking in the Gokyo lakes and Everest Base Camp. Day by day, with the acclimatisation the route needs and who should not attempt it.",
  hero: {
    title: "The Three Passes",
    subtitle:
      "Twenty-one days, three passes above 5,300 m, Everest Base Camp and the Gokyo lakes. The fullest circuit in the Khumbu. From US $2,075.",
    image: "/images/prayer-flags-peak.webp",
    aspect: "1 / 1",
    minHeight: 520,
    ctas: [
      { label: "Enquire about dates", href: "#inquiry", variant: "green" },
      { label: "Compare the lengths", href: "/how-many-days", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="what" eyebrow="The short answer" title="What the Three Passes is">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Twenty-one days looping the Khumbu over Kongma La, Cho La and Renjo
              La, taking in Everest Base Camp, Kala Patthar at 5,545 m and the
              Gokyo lakes on the way round. It is the most demanding trek in the
              Everest region that needs no climbing skill. From US $2,075.
            </p>
            <p>
              The circuit runs east to west. You cross Kongma La on day 10, reach
              Base Camp and Kala Patthar, cross the Cho La into the Gokyo valley,
              climb <Link href="/gokyo-ri">Gokyo Ri</Link>, then leave over the
              Renjo La rather than walking back down the way you came. That last
              part is what makes it a circuit rather than an out-and-back.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "21 days", v: "Kathmandu to Kathmandu" },
              { k: "5,545 m", v: "Kala Patthar, the high point" },
              { k: "US $2,075", v: "published price" },
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

      <Section id="days" eyebrow="Day by day" title="The 21-day itinerary">
        <div className="space-y-7">
          <ItineraryTable days={DAYS} />

          <Note>
            The altitude column reproduces the operator's own figures. On the two
            pass days they publish the destination altitude rather than the pass
            height, so day 13 reads 4,700 m for Thangna even though the Cho La
            you cross to get there is 5,420 m. We have flagged this with them.
          </Note>
        </div>
      </Section>

      <Section id="passes" eyebrow="The passes" title="Three passes, three different days">
        <div className="space-y-4">
          {[
            {
              name: "Kongma La",
              day: "Day 10",
              text: "The first and, for most people, the hardest. A long climb out of Chhukung and a rough descent onto the Khumbu glacier, at a point in the trip when you are not yet fully acclimatised.",
            },
            {
              name: "Cho La",
              day: "Day 13",
              text: "5,420 m, and the one with ice on it. Rock and moraine to a glaciated section near the top. Crampons in spring conditions, and a real turn-back decision in bad weather.",
            },
            {
              name: "Renjo La",
              day: "Day 16",
              text: "The quietest of the three and the finest way to leave Gokyo. Almost no traffic, and a last long look back at Everest before you drop to Lungden.",
            },
          ].map((pass) => (
            <div key={pass.name} className={`${CARD} p-5 sm:p-6`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <Sub>{pass.name}</Sub>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)]">
                  {pass.day}
                </span>
              </div>
              <p className={`mt-3 ${PROSE_SM}`}>{pass.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="who" eyebrow="Honestly" title="Who should not book this">
        <div className={PROSE}>
          <p>
            This is not a longer version of the Gokyo trek. It is a harder trip
            with three serious mountain days, three weeks of consecutive walking,
            and no easy exit once you are past Chhukung.
          </p>
          <p>
            If you have never been above 4,000 m, start with{" "}
            <Link href="/itinerary/15-day">the 15-day Gokyo trek</Link>. If you
            want Base Camp as well but only one pass,{" "}
            <Link href="/itinerary/with-everest-base-camp">
              the 19-day route
            </Link>{" "}
            gives you both viewpoints and one crossing. Neither is a lesser trip,
            and we would rather put you on the right one than the longest one.
          </p>
          <p>
            What the altitude actually asks of you is on{" "}
            <Link href="/plan/difficulty">difficulty and fitness</Link>.
          </p>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="Ask us about it">
        <ActionCard
          title="Ask about the Three Passes"
          body="Tell us your dates and your altitude experience. This is the one trip where we will ask before we confirm."
          ctaLabel="Enquire"
          ctaHref="#inquiry"
        />
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

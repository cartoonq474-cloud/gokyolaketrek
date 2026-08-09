// /how-many-days, promoted to Seed on two independent arguments.
//
// 1. Ranking pages quote 10, 11, 12, 13, 14 and 15 days for the same trek and
//    none of them owns the question.
// 2. The query network showed duration is the top informational demand for any
//    Everest trek by a factor of six over cost (320/mo vs 50 on the EBC
//    equivalents).
//
// HARD BORDER: this page is definitional and comparative. It must never become a
// fourth itinerary page. It compares lengths and sends people to the itineraries.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

const LENGTHS = [
  {
    days: "9 to 11 days",
    label: "The compressed version",
    cuts: "The Namche acclimatisation day, the buffer day, or both",
    verdict: "risky",
    text: "Possible, and sold widely. It works by removing the two days that exist for your safety and your flight home. If Lukla closes on your fly-out day you have no slack at all.",
  },
  {
    days: "12 to 13 days",
    label: "The common quote",
    cuts: "Usually the Kathmandu days, sometimes the buffer",
    verdict: "workable",
    text: "The most commonly advertised length. Typically keeps the acclimatisation day but trims the ends. Fine if you are happy arriving and flying out on tight connections.",
    },
  {
    days: "15 days",
    label: "Our standard",
    cuts: "Nothing",
    verdict: "recommended",
    current: true,
    text: "Ten walking days, a full acclimatisation day at Namche, a short day into Machhermo, and a spare day at the end for the Lukla flight. This is the version we run.",
  },
  {
    days: "19 days",
    label: "With Everest Base Camp",
    cuts: "Nothing, it adds",
    verdict: "bigger trip",
    text: "Adds the Cho La crossing at 5,420 m and Everest Base Camp itself. A different trek, not a longer version of this one.",
  },
  {
    days: "21 days",
    label: "The Three Passes",
    cuts: "Nothing, it adds",
    verdict: "bigger trip",
    text: "Renjo La, Cho La and Kongma La, taking in Gokyo and Base Camp. The fullest circuit in the Everest region.",
  },
];

export const page: TrekPage = {
  slug: "how-many-days",
  route: "/how-many-days",
  title: "How Many Days Does the Gokyo Lake Trek Take?",
  description:
    "Operators quote anything from 10 to 15 days for the same trek. What each length actually leaves out, how many days you need including the Lukla flights, and why the buffer day matters.",
  hero: {
    title: "How many days do you need?",
    subtitle:
      "Fifteen, if you want the acclimatisation day and a buffer for the flight. Here is exactly what the shorter versions remove.",
    image: "/images/ngozumpa-moraine.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="Fifteen days, door to door">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek takes 15 days from arriving in Kathmandu to
              flying home, of which ten are walking days. You can do it in 12,
              and it is sold in as few as 9, but every day removed comes out of
              either your acclimatisation or your margin for a delayed Lukla
              flight.
            </p>
            <p>
              The trekking itself, Lukla to Gokyo and back to Lukla, is ten days.
              Everything else is getting to the start and protecting the finish.
            </p>
          </div>

          <Note>
            If you search this, you will get a different answer from every
            operator. That is not because the trail changes length. It is because
            some quote the walking only, some quote Lukla to Lukla, and some have
            cut the acclimatisation day to look cheaper on a comparison page.
          </Note>
        </div>
      </Section>

      <Section id="compare" eyebrow="Every length" title="What each version actually removes">
        <div className="space-y-4">
          {LENGTHS.map((item) => (
            <div
              key={item.days}
              className={`${CARD} p-5 sm:p-6 ${
                item.current ? "border-[var(--brand)] bg-[var(--tint)]" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <Sub>
                  {item.days}
                  {item.current ? ", our standard" : ""}
                </Sub>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)]">
                  {item.verdict}
                </span>
              </div>
              <p className="mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                {item.label}
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>{item.text}</p>
              <p className="mt-3 border-t border-[var(--line-2)] pt-3 text-[0.85rem] text-[var(--muted)]">
                <b className="text-[var(--ink)]">What it cuts:</b> {item.cuts}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="two-days" eyebrow="The two days" title="The two days worth paying for">
        <div className="space-y-7">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>The acclimatisation day at Namche</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Day 5. You climb to 3,880 m and come back down to sleep at
                3,443 m. It looks like a wasted day on a spreadsheet and it is
                the reason people get up Gokyo Ri feeling fine rather than
                turning back at 5,000 m with a headache.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                <Link href="/plan/acclimatisation">
                  How the schedule handles altitude
                </Link>
              </p>
            </div>
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>The buffer day in Kathmandu</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                Day 14. Lukla flights are cancelled often enough that this is
                planning, not pessimism. Without it, one bad weather day puts
                your international flight at risk and the cost of fixing that is
                yours.
              </p>
              <p className={`mt-3 ${PROSE_SM}`}>
                <Link href="/route/lukla-flights">
                  Lukla flights and cancellations
                </Link>
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              If you have exactly two weeks and cannot move, tell us. There is a
              sensible 13-day shape that keeps the acclimatisation day and
              accepts a tighter finish. What we will not do is sell you a
              9-day version and call it the same trek.
            </p>
          </div>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="Pick your version">
        <div className={PROSE}>
          <p>
            The full day-by-day for our standard trek, with altitudes, distances
            and walking hours, is on{" "}
            <Link href="/itinerary/15-day">the 15-day itinerary</Link>. The longer
            trips are{" "}
            <Link href="/itinerary/with-everest-base-camp">
              19 days with Everest Base Camp
            </Link>{" "}
            and <Link href="/itinerary/three-passes">21 days over the Three Passes</Link>.
          </p>
          <p>
            Still deciding whether Gokyo is the right valley at all? That is{" "}
            <Link href="/vs-everest-base-camp">
              Gokyo Lakes versus Everest Base Camp
            </Link>
            .
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

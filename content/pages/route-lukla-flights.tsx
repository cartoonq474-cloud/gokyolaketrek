// /route/lukla-flights.
//
// This is a trust page wearing a logistics page's clothes. The SERP research
// (seo/research/serp-consensus.md, gap 5) found Lukla flights barely covered
// and the question underneath them not covered at all: who pays when the flight
// is cancelled. Everyone describes the flight. Nobody answers the bill.
//
// The ranking play here is the uncomfortable paragraph. Our own exclusions list
// says "costs arising from landslide, road blockage, rescue or flight
// cancellation" are not included, so this page says that in plain words rather
// than leaving a buyer to find it in a bullet list after they have paid.
//
// FACTS: the 30-minute flight time and "Kathmandu or Ramechhap" are from the
// operator's published itinerary and inclusions, via
// seo/research/operator-nepalintrepidtreks.md.
//
// DELIBERATELY ABSENT: a cancellation rate and a helicopter price. We have no
// verified figure for either. Every percentage quoted for Lukla cancellations
// online traces back to somebody's guess, and helicopter pricing moves with
// season, load and who is sharing. Do not add a number here without a source in
// seo/research/.
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

const COVERED = [
  "The round-trip flight to Lukla, from Kathmandu or from Ramechhap, whichever is operating in your season.",
  "Departure taxes on that flight.",
  "The road transfer in a private vehicle if your flight leaves from Ramechhap, in both directions.",
  "A spare day, day 14, built into the itinerary specifically to absorb a delay on the way out.",
  "Rebooking. Your guide handles the airline, the queue and the next available seat.",
];

const NOT_COVERED = [
  "The extra night in a Lukla lodge or a Kathmandu hotel if you are grounded, and the meals with it.",
  "Any onward or international flight you miss, and the cost of changing it.",
  "A helicopter, if you choose one instead of waiting for the fixed-wing flight.",
  "Travel insurance, which is what should be covering the two lines above.",
];

export const page: TrekPage = {
  slug: "route/lukla-flights",
  route: "/route/lukla-flights",
  title: "Lukla Flights, Ramechhap and Cancellations",
  description:
    "How you reach the trailhead, why flights leave from Ramechhap in season, how often they are cancelled, what happens to your trek when yours is, and who pays for the extra night.",
  hero: {
    title: "Lukla flights and cancellations",
    subtitle:
      "The flight to the trailhead is weather-dependent and being grounded is normal. Here is what that costs you, and who pays it.",
    image: "/images/prayer-flags-peak.webp",
    aspect: "1 / 1",
    minHeight: 520,
    ctas: [
      { label: "See the 15-day itinerary", href: "/itinerary/15-day", variant: "green" },
      { label: "Ask us about your dates", href: "#inquiry", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="how" eyebrow="The short answer" title="How you get to Lukla">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              You fly. Lukla at 2,850 m is the trailhead for the whole Everest
              region and there is no road to it, so the trek starts with a
              30-minute flight in a small fixed-wing aircraft. In the busy
              seasons that flight leaves from Ramechhap rather than Kathmandu,
              which catches out almost everybody doing this for the first time.
            </p>
            <p>
              The round-trip flight is part of the trek and is arranged for you,
              departure taxes included. It happens twice: out on day 3, back on
              day 13. Both of those days depend on the weather, and the second
              one is the one that matters, because that is the one sitting
              between you and your flight home.
            </p>
          </div>

          <Note>
            The one-way walk out is not a realistic plan B for most people. It
            exists, it goes down to a road head over several days, and it is a
            different trek that you have not packed for or budgeted. Waiting is
            almost always the better call.
          </Note>
        </div>
      </Section>

      <Section
        id="ramechhap"
        eyebrow="The confusing bit"
        title="Why flights leave from Ramechhap and not Kathmandu"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Because Kathmandu's airport cannot absorb the traffic. Tribhuvan
              International has one runway shared between international jets and
              every domestic service in the country, and the Lukla shuttle is
              dozens of small-aircraft rotations packed into the first hours of
              daylight. In the peak trekking seasons, spring and autumn, that
              service is moved out to Ramechhap, also called Manthali, a small
              domestic airfield east of Kathmandu that has nothing else to do.
            </p>
            <p>
              For you that means the trek does not begin at Kathmandu airport. It
              begins with a road transfer to Ramechhap, leaving the hotel in the
              small hours so you are on the ground before the morning weather
              window closes. The drive is included, in a private vehicle, in both
              directions. What it costs you is sleep.
            </p>
            <p>
              <strong>
                Which airport you fly from is not settled when you book.
              </strong>{" "}
              It is decided season by season by the airlines and the civil
              aviation authority, and it is often confirmed close to your
              departure date. We will tell you as soon as we know. Anyone
              promising you a Kathmandu departure months out is guessing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>Out of season</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Flights usually run from Kathmandu itself. Quieter months, fewer
                rotations, and the airport can cope. You go straight from the
                hotel to the terminal.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Spring and autumn</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Expect Ramechhap. A pre-dawn start, a long drive, then the
                flight. Pack your day bag the night before, because you will not
                be awake enough to do it properly at 2 a.m.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="cancellations"
        eyebrow="Normal, not exceptional"
        title="Cancellations happen, and they are not unusual"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Lukla flights are cancelled regularly, and you should plan on the
              assumption that yours might be. The aircraft fly visually into a
              short sloping strip in a mountain valley, so cloud, wind or poor
              visibility at either end stops everything. There is no instrument
              approach to fall back on.
            </p>
            <p>
              That is also why they fly in the morning. The valley wind gets up
              through the day, so the flying window is early, and a morning lost
              to cloud is usually a day lost rather than an hour. When the
              backlog clears, the airline works through the passengers it already
              owes seats to, which is why one cancelled day can push a second
              one.
            </p>
            <p>
              <strong>
                We are not going to quote you a cancellation percentage.
              </strong>{" "}
              Every figure circulating online traces back to somebody's estimate,
              and we have no audited number of our own to offer instead. What we
              can tell you is that a season without grounded days does not
              happen, and that it is common enough that our itinerary is built
              around it rather than hoping.
            </p>
          </div>

          <Note>
            Winter and monsoon are worse, not better, and the shoulder weeks at
            either end of the seasons carry more risk than the middle of them. If
            your dates are fixed and tight, say so when you enquire and we will
            tell you honestly what we think of them.
          </Note>
        </div>
      </Section>

      <Section
        id="what-happens"
        eyebrow="What happens"
        title="What a cancellation does to your trek"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              It depends entirely on which end it happens at. A delay on the way
              in costs you a day of the trek. A delay on the way out costs you a
              day of your life, and possibly your ticket home.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Grounded on the way in, day 3</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                You spend another night in Kathmandu and fly the next morning.
                The trek then has to lose a day somewhere, and the honest answer
                is that it usually comes out of the top of the route rather than
                the acclimatisation day, because cutting acclimatisation to save
                a schedule is how people get ill. If the delay runs longer than
                that, we sit down with you and rebuild the itinerary around what
                is left.
              </p>
            </div>
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>Grounded on the way out, day 13</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                You spend another night in Lukla and fly out on day 14. This is
                exactly what day 14 is for. You lose the spare day in Kathmandu,
                which is annoying, and nothing else moves. Your international
                flight is untouched.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              That spare day is the reason our trek is 15 days rather than 13 or
              14. It looks like padding on a comparison page and it is not: it is
              the difference between a bad day and a rebooked ticket. The full
              day-by-day is on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>, and{" "}
              <Link href="/how-many-days">how many days you need</Link> sets out
              what the shorter versions sold elsewhere have removed to get there.
            </p>
          </div>
        </div>
      </Section>

      <Section id="who-pays" eyebrow="Money" title="Who pays for the extra night">
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              You do. Costs arising from a flight cancellation are not included
              in the trek price, and that is written into our exclusions rather
              than buried. If you are stuck in Lukla for a night, the lodge and
              the meals are yours to pay for. If you are stuck in Kathmandu, the
              hotel is yours.
            </p>
            <p>
              We would rather say that here than have you discover it at a lodge
              desk at 4 p.m. on a day that has already gone badly. The reason it
              works this way is straightforward: weather delay is open-ended, and
              a price that carried it would be a higher price for every trekker,
              including everyone whose flight left on time.
            </p>
            {/*
              VERIFY WITH THE OPERATOR before launch. This paragraph makes a
              service commitment on their behalf, that the guide stays, handles
              the airline and finds the room. It is what a good operator does and
              it is almost certainly true here, but it is not sourced in
              seo/research/ and it is the kind of promise a delayed trekker will
              hold us to. Confirm it, or soften it to what they will actually
              commit to.
            */}
            <p>
              What we do cover is the work. Your guide stays with you, handles
              the airline, finds the room and gets you on the next flight. You
              are not left to negotiate a rebooking in a language you do not
              speak. The bill for the bed is yours. The problem is ours.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">
                Covered by the trek
              </b>
              <div className="mt-4">
                <MarkList tone="inc" items={COVERED} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">
                Not covered, and why it matters
              </b>
              <div className="mt-4">
                <MarkList tone="exc" items={NOT_COVERED} />
              </div>
            </div>
          </div>

          <Note>
            This is the single strongest argument for travel insurance with trip
            delay and missed departure cover, separately from the evacuation
            cover we ask everyone to carry for the altitude. Check that your
            policy treats a weather cancellation on a domestic flight as a
            covered delay, because not all of them do.
          </Note>
        </div>
      </Section>

      <Section id="helicopter" eyebrow="The alternative" title="The helicopter option">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              When fixed-wing flights are grounded but conditions allow it,
              helicopters usually still fly, and that is the normal way people
              get out of Lukla on a bad day. It is an option, at extra cost, and
              it is not included in the trek.
            </p>
            <p>
              <strong>We are not going to print a price for it here.</strong>{" "}
              What a seat costs depends on the season, on how many people are
              sharing the aircraft and on how many other trekkers want out that
              morning, and quoting a stale figure would be worse than quoting
              none. If it comes to it, we will find out what it actually costs on
              the day and talk it through with you before anything is booked.
            </p>
            <p>
              Two honest caveats. A helicopter is not a guaranteed way out: if
              the weather is bad enough, nothing flies at all, rotor or
              otherwise. And an evacuation flight for illness is a different
              thing from a convenience flight for a delay, with a different
              relationship to your insurance policy. Do not assume a claim will
              cover the second one.
            </p>
          </div>
        </div>
      </Section>

      <Section id="booking" eyebrow="Before you book" title="Do not book a tight connection home">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Leave at least one clear day in Kathmandu between the end of the
              trek and your international flight, and two if your ticket is the
              kind that is expensive to change. Our itinerary already builds one
              in on day 14. If you then book a flight home that leaves the same
              evening you land from Lukla, you have spent that buffer before the
              trek starts.
            </p>
            <p>
              The failure mode is specific and common: the Lukla flight slips one
              day, day 14 absorbs it, and there is nothing left for the second
              slip. Trekkers who book a flexible or refundable international
              ticket, or who plan a spare night in Kathmandu they would genuinely
              enjoy, almost never have a bad story to tell about this.
            </p>
            <p>
              Tell us your international flight times when you enquire. If they
              worry us, we will say so before you have paid for anything, and if
              your dates simply do not have room for the risk we will tell you
              that too.
            </p>
          </div>

          <ActionCard
            title="Send us your dates and your flight times"
            body="We will tell you which airport your Lukla flight is likely to leave from, and whether your connection home leaves enough room."
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

// /terms, written 2026-08-09 as a DELIBERATELY UNFINISHED skeleton.
//
// Read this before touching the file.
//
// Every section a booking contract needs is here, in the right order, in the
// site's voice. What is NOT here is a single figure the operator has not given
// us: no deposit percentage, no balance date, no cancellation bands, no company
// name. Those are marked on the rendered page with the Todo block below, not in
// a code comment, because a comment is invisible to whoever ships this and a
// terms page published with invented numbers is worse than no terms page.
//
// What we genuinely know and therefore state as fact:
//   - travel insurance covering helicopter evacuation at altitude is required
//   - costs from flight cancellation, landslide or rescue are NOT included
//     (seo/research/operator-nepalintrepidtreks.md, their own exclusions list)
//   - both permits ARE included (seo/research/permits.md)
//   - the operating entity is a Nepal-registered private limited company, and
//     its registration numbers are public: see content/config.ts credentials
//
// The company NAME is left as a Todo on purpose. CLAUDE.md requires /terms to
// name the registered entity, and the writing brief forbids guessing at it.
// Whoever has the certificate fills it in.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

/**
 * A blank the operator has to fill before this page is a contract.
 *
 * Built on Note so it inherits the tinted aside, but the label is written out
 * in literal capitals rather than uppercased in CSS: it has to survive being
 * read in the DOM, in a text extraction, or by anyone grepping the built HTML
 * for the word CONFIRMED before publishing.
 */
function Todo({ children }: { children: ReactNode }) {
  return (
    <Note>
      <p className="text-[0.72rem] font-bold tracking-[0.14em] text-[var(--brand-ink)]">
        TO BE CONFIRMED BY THE OPERATOR
      </p>
      <p className="mt-2">{children}</p>
    </Note>
  );
}

export const page: TrekPage = {
  slug: "terms",
  route: "/terms",
  title: "Booking Terms and Cancellation",
  description:
    "Deposit, balance, cancellation windows, what happens if a Lukla flight is cancelled and what happens if you have to leave the trek early.",
  hero: {
    title: "Booking terms and cancellation",
    titleFontSize: "clamp(2.3rem, 6vw, 3.6rem)",
    subtitle:
      "What you are agreeing to when you book, in plain words. The figures the operator has not set yet are marked as blanks rather than filled with something plausible.",
    image: "/images/ngozumpa-moraine.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <div
        className={`${CARD} border-[var(--brand)] bg-[var(--tint)] p-5 sm:p-6`}
      >
        <p className="text-[0.72rem] font-bold tracking-[0.2em] text-[var(--brand-ink)]">
          DRAFT, NOT YET A CONTRACT
        </p>
        <h2 className="mt-2.5 text-[1.35rem] font-semibold leading-snug text-[var(--ink)]">
          This page is not finished, and we would rather say so
        </h2>
        <div className={`mt-4 ${PROSE}`}>
          <p>
            Every figure a booking contract needs, the deposit, when the balance
            falls due, and what a cancellation costs at each point before
            departure, is marked{" "}
            <strong>TO BE CONFIRMED BY THE OPERATOR</strong> in the section it
            belongs to. Those blanks are real. Nothing on this page binds you
            until they are filled and this notice comes down.
          </p>
          <p>
            If you are booking now, ask. We will give you every one of those
            figures in writing before you pay anything, and what we write to you
            is what applies.
          </p>
        </div>
      </div>

      <Section
        id="who"
        eyebrow="The short answer"
        title="Who these terms are between"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Your booking is a contract between you and the company that
              operates this trek: a private limited company registered in Nepal
              and based in Kathmandu, licensed by Nepal's Department of Tourism.
              Gokyo Lake Trek is the brand it sells this trek under.
            </p>
            <p>
              The registrations behind that are public and checkable, which is
              the point of printing them: company registration{" "}
              <strong>145190/072/073</strong> with the Office of the Company
              Registrar, Department of Tourism trekking agency licence{" "}
              <strong>2102</strong>, TAAN membership <strong>2016-1599</strong>{" "}
              and NMA membership <strong>1234</strong>. Any of those can be put
              to the issuing body without asking us.
            </p>
          </div>

          <Todo>
            The registered legal name of the operating entity and its registered
            office address, exactly as they read on the certificate of
            incorporation. A booking contract has to name the company you are
            contracting with, and this page cannot be published without it.
          </Todo>
        </div>
      </Section>

      <Section id="booking" eyebrow="Step 1" title="Booking and confirmation">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              A booking exists once we have written to you confirming your dates
              and the deposit has been paid. An enquiry is not a booking.
              Nothing you send through the form on this site commits you to
              anything, and there is no charge for asking.
            </p>
            <p>
              The confirmation sets out which trek you have booked, the start and
              end dates, how many of you there are, what the price covers and
              what is still to pay. Check the names on it against your
              passports. Permits are issued against the passport you will be
              carrying and the details have to match, so a middle name that
              exists on one document and not the other is worth catching in
              Kathmandu rather than at the Monjo checkpoint.
            </p>
          </div>

          <Todo>
            What the operator sends on confirmation and what makes a booking
            binding: a written confirmation, an invoice, or both. Also whether a
            booking can be transferred to another person, up to what point, and
            at what cost.
          </Todo>
        </div>
      </Section>

      <Section id="deposit" eyebrow="Step 2" title="The deposit">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              A deposit holds your dates. It exists because things are bought on
              your behalf long before you arrive: the Lukla flight seats, the
              permits, and the hotel nights at each end of the trek.
            </p>
          </div>

          <Todo>
            The deposit figure, as a percentage of the trip price or a fixed
            amount per person. When it is due after confirmation. Whether any
            part of it is refundable, and if so until when. Which payment
            methods are accepted for it, and whether a card payment carries a
            surcharge.
          </Todo>
        </div>
      </Section>

      <Section id="balance" eyebrow="Step 3" title="The balance">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The balance is everything the deposit did not cover. It is the last
              money that changes hands before you walk.
            </p>
          </div>

          <Todo>
            When the balance falls due. Whether it is paid before departure or
            settled in person in Kathmandu. Which currency it is settled in,
            which methods are accepted, and whether a card carries a surcharge.
            Also what happens to a booking whose balance is not paid on time.
          </Todo>
        </div>
      </Section>

      <Section
        id="cancel-you"
        eyebrow="If you cancel"
        title="Cancellation by you"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Tell us in writing, as early as you can. What you get back depends
              on how close to departure you cancel, because the money already
              spent on your behalf does not come back to us either. That is why
              every operator in Nepal works to a sliding scale rather than a
              single figure.
            </p>
            <p>
              Ours is not published yet, and we are not going to print a
              plausible-looking table in the meantime.
            </p>
          </div>

          <Todo>
            The full cancellation schedule: how many days before departure each
            band begins and what percentage of the trip price is retained in
            each. Whether the deposit is separately non-refundable. Whether the
            Lukla flight is refundable at any point. What applies if you leave
            the trek after it has started, whether by choice or on medical
            advice.
          </Todo>

          <div className={PROSE}>
            <p>
              One thing that is true whatever the schedule turns out to say:
              cancellation charges are exactly what travel insurance exists for.
              Buy a policy with cancellation cover on the day you book, not the
              week you fly. A cancellation in the fortnight before departure is
              the expensive one, and it is also the one you are most likely to
              need.
            </p>
          </div>
        </div>
      </Section>

      <Section id="cancel-us" eyebrow="If we cancel" title="Cancellation by us">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              We would cancel a departure only for a reason we could not work
              around: too few people to run it, or a safety judgement on the
              ground. In that situation you should expect a choice between
              another date, an alternative trek, and your money back.
            </p>
            <p>
              Which of those, and how much of a refund, is not something this
              page can state until the operator sets it.
            </p>
          </div>

          <Todo>
            What the operator commits to when it cancels: a full refund, a
            transfer to another date, or a credit, and whether that changes when
            the cancellation is for safety rather than for numbers. Also whether
            there is a minimum group size, and how late a departure can be
            cancelled for not reaching it.
          </Todo>
        </div>
      </Section>

      <Section
        id="force-majeure"
        eyebrow="Lukla, weather, everything else"
        title="Flight delays and things nobody controls"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Lukla flight is the part of this trek most likely to go wrong,
              and no operator controls it. Flights are held for cloud, wind and
              visibility, sometimes for days at a time, in every season including
              the good ones.
            </p>
            <p>
              What we can tell you now is who carries that cost.{" "}
              <strong>
                Costs arising from a cancelled flight, a landslide, a road
                closure or a rescue are not included in the trip price.
              </strong>{" "}
              That is the operator's published position and it is the normal one
              in Nepal. An extra night in Lukla or Kathmandu because the aircraft
              did not fly is yours to pay, and it is claimable on a decent travel
              policy.
            </p>
            <p>
              The 15-day itinerary carries a spare day at the end for this exact
              reason. It is not a sightseeing day, it is slack in the schedule,
              and it is the first thing a shorter itinerary removes.
            </p>
          </div>

          <Todo>
            What the operator does when a flight is cancelled: whether it holds
            and pays for accommodation, whether a helicopter transfer is arranged
            and who pays for it, and what happens to the trip price when walking
            days are lost. Also the wording it wants for events outside anyone's
            control.
          </Todo>
        </div>
      </Section>

      <Section
        id="insurance"
        eyebrow="Required"
        title="Travel insurance is a condition of booking"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              You must hold travel insurance that covers helicopter evacuation at
              altitude before you start the trek. This is not a recommendation
              and it is not negotiable.
            </p>
            <p>
              The trek sleeps at 4,750 m in the Gokyo valley and climbs Gokyo Ri
              at 5,357 m. A great many standard policies stop covering you a long
              way below that, so read the altitude limit rather than assume it.
              We ask for cover valid to at least 5,500 m, and for the trekking
              activity to be named rather than left to interpretation.
            </p>
            <p>
              No permit covers evacuation. The Sagarmatha National Park and
              Khumbu municipality permits are entry fees and nothing more, which{" "}
              <Link href="/permits">the permits page</Link> sets out in full.
              Insurance is not included in the trip price either. You buy your
              own policy.
            </p>
          </div>

          <Todo>
            Whether the operator needs your policy number and your insurer's
            emergency assistance number before departure, and by when. Also what
            it does if someone arrives in Kathmandu without cover.
          </Todo>
        </div>
      </Section>

      <Section
        id="fitness"
        eyebrow="Declaration"
        title="Medical and fitness declaration"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              You have to tell us about any medical condition, any medication you
              take, and any previous trouble with altitude, before you book. Not
              so that we can look for a reason to refuse you. Because your guide
              is the person who has to make a decision about you at 4,750 m with
              no road out.
            </p>
            <p>
              If your guide says you are going down, you go down. That decision
              is not negotiable on the hill, and it is not a judgement about your
              fitness. Altitude does not care how strong you are, and the people
              it catches are not the ones you would predict.
            </p>
            <p>
              Withholding something material is the one thing that can unravel
              the whole arrangement. If it comes out on day 8, we may have to end
              your trek, and your insurer may well take the same view of the
              claim you make afterwards.
            </p>
          </div>

          <Todo>
            Whether the operator uses a written medical declaration, at what
            point in the booking it is signed, and whether any condition is an
            outright bar. Also whether it sets a minimum or maximum age.
          </Todo>
        </div>
      </Section>

      <Section
        id="changes"
        eyebrow="The itinerary"
        title="Changes to the itinerary"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Your guide can change the route, the overnight stops or the day's
              plan when weather, trail conditions, illness or altitude make the
              published version a bad idea. That judgement is a large part of
              what you are paying a guide for.
            </p>
            <p>
              Both permits are included and arranged for you, so a change of
              route does not leave you buying anything at a checkpoint. What is
              not covered is the cost of whatever the change causes: an extra
              night, a different flight, a rescue.{" "}
              <Link href="/itinerary/15-day">
                The published 15-day itinerary
              </Link>{" "}
              is the plan. It is not a promise about the weather.
            </p>
          </div>

          <Todo>
            Whether the operator reserves the right to change the itinerary
            before departure as well as during it, and what it does about the
            price when a trek ends up shorter or longer than the published
            length.
          </Todo>
        </div>
      </Section>

      <Section
        id="complaints"
        eyebrow="If something goes wrong"
        title="Complaints"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Say it on the trail, to your guide, on the day it happens. Almost
              everything that goes wrong on a trek can be fixed while you are
              still on it. Almost none of it can be fixed once you are home.
            </p>
            <p>
              If that does not resolve it, put it in writing while you are still
              in Kathmandu and everyone involved is reachable. A complaint made
              in the office with the guide in the building gets a different
              answer from one made by email three weeks later, and we would
              rather you got the better one.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>On the trail</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Tell your guide. Food, room, pace, anything about how the trek is
                being run. They can act on it that evening.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>After the trek</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                In writing, while you are still in Kathmandu if you can. Say what
                happened, when, and what you want done about it.
              </p>
            </div>
          </div>

          <Todo>
            Where a written complaint should be sent, how long the operator takes
            to respond, how long after the trek a complaint can be raised, and
            whether it will use TAAN's dispute process if the two of you cannot
            agree.
          </Todo>
        </div>
      </Section>

      <Section id="law" eyebrow="Jurisdiction" title="Governing law">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              These terms are governed by the law of Nepal. The operating company
              is registered in Nepal, the trek takes place in Nepal, and any
              dispute is dealt with under Nepali law.
            </p>
            <p>
              That is worth understanding before you pay rather than afterwards.
              It is the answer whichever country you booked from, and it is the
              normal position for a trek run by a Nepali operator. If you are
              used to consumer protection rules at home, those rules do not
              follow you up the valley.
            </p>
          </div>

          <Todo>
            The final wording the operator wants for governing law and
            jurisdiction, including the named court, and the registered company
            name these terms are entered into by. This is the one section on the
            page worth putting in front of a Nepali lawyer rather than drafting
            in-house.
          </Todo>
        </div>
      </Section>

      <Section
        id="ask"
        eyebrow="Before you book"
        title="Ask us anything this page does not answer"
      >
        <div className={PROSE}>
          <p>
            While the figures above are blank, asking is how you get them. We
            will set out the deposit, the balance date and the cancellation
            schedule in writing before you pay anything, and what we send you is
            what applies to your booking.
          </p>
          <p>
            What the price covers is a separate question from these terms. Both
            permits are included, and{" "}
            <Link href="/permits">the permits page</Link> explains what they are
            and where each is issued. The trek itself, day by day with altitudes
            and walking hours, is{" "}
            <Link href="/itinerary/15-day">the 15-day itinerary</Link>. How we
            handle the details you send us is set out on the privacy page.
          </p>
        </div>
      </Section>
    </div>
  ),
  selfStyled: true,
  narrow: true,
  withRail: false,
  withTrust: true,
  withContacts: true,
  jsonLd: [],
};

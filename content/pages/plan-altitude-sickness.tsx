// /plan/altitude-sickness, the medical-event page.
//
// HARD BORDER, from seo/query-network.md: acclimatisation is the schedule,
// sickness is the medical event. This page covers what the symptoms are, what
// the two serious escalations look like, who decides to descend, and how
// evacuation and insurance work. It must never re-walk the itinerary. Ascent
// rates, the Namche day and climb-high-sleep-low belong to
// /plan/acclimatisation and are linked once, not explained again.
//
// WHAT THIS PAGE DELIBERATELY DOES NOT CONTAIN, and must not gain later:
//   - drug dosages of any kind, for Diamox or anything else
//   - percentages, incidence rates or "X% of trekkers" statistics
//   - a price for helicopter evacuation. We have no verified figure and this is
//     a page people may act on.
//
// The oxygen and personal-Sherpa lines are from the operator's own inclusions
// list in seo/research/operator-nepalintrepidtreks.md, where both appear as
// extras rather than standard. Saying so is unflattering and correct.
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
 * The block the whole page exists for. Deliberately behavioural rather than
 * clinical: every item is something a trekker or their tent-mate can observe
 * without training, and none of it requires a diagnosis to report.
 */
const TELL_YOUR_GUIDE: ReactNode[] = [
  "A headache that painkillers do not shift, or one that wakes you up in the night.",
  "Vomiting, or not being able to keep water down.",
  "Breathlessness while you are sitting still, or breathlessness that does not settle a few minutes after you stop walking.",
  "A cough that will not stop, a wet or bubbling one, or tightness in the chest.",
  "Losing your balance, stumbling, or not being able to walk a straight line heel to toe.",
  "Confusion, unusual drowsiness, or anyone in the group behaving unlike themselves.",
  "Any symptom that is worse this morning than it was last night.",
  "Anything at all that is frightening you. You will not be wasting anybody's time.",
];

export const page: TrekPage = {
  slug: "plan/altitude-sickness",
  route: "/plan/altitude-sickness",
  title: "Altitude Sickness at Gokyo: Signs and What We Do",
  description:
    "The symptoms that matter, the ones that mean going down now, what our guides carry, who decides to descend, and how helicopter evacuation and insurance actually work.",
  hero: {
    title: "Altitude sickness on this trek",
    subtitle:
      "The symptoms worth knowing, the ones that mean going down tonight, and who makes that call. Descent is the treatment. Everything else buys time.",
    image: "/images/ngozumpa-moraine.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "How the schedule works", href: "/plan/acclimatisation", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="Descent is the treatment">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              If altitude is making you ill, the treatment is to go down.
              Everything else, rest, fluids, oxygen, medication, buys time until
              you do. There is no version of this where you stay high and get
              better on the same schedule.
            </p>
            <p>
              Mild altitude sickness is common on the Gokyo trek and it is not an
              emergency. The usual story is a bad headache somewhere above
              4,000 m, a rough night, a day spent not going any higher, and then
              being fine. A much smaller number of people get something serious.
              The distance between those two outcomes is usually how early
              somebody said something out loud.
            </p>
            <p>
              The best thing anybody can do about altitude sickness is not get
              it, which is what the itinerary is for. How the schedule spaces the
              nights and why two of the days gain nothing is on{" "}
              <Link href="/plan/acclimatisation">the acclimatisation page</Link>.
              This page is about what happens if it goes wrong anyway.
            </p>
          </div>

          <Note>
            <strong>This is not medical advice.</strong> We run treks. We are not
            doctors, and this page is written to help you notice a problem early
            and take it seriously, not to help you treat one at 4,750 m. Talk to
            your own doctor before you travel, particularly about any medication,
            and to a qualified medic if you are unwell.
          </Note>
        </div>
      </Section>

      <Section id="ams" eyebrow="AMS" title="What acute mountain sickness feels like">
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              AMS usually starts as a headache and adds some mixture of nausea,
              no appetite, dizziness, broken sleep and a flat tiredness that the
              day's walking does not explain. It typically comes on some hours
              after you arrive at a new altitude rather than while you are
              walking to it, which is why the evening and the night matter more
              than the trail did.
            </p>
            <p>
              Being honest about the grey area: almost everybody feels something
              above 4,000 m. Sleeping badly, waking up short of breath, being out
              of breath on a slope you would stroll up at home, none of that is
              illness by itself. The questions that separate normal from not are
              whether it is getting worse, whether it eases when you stop, and
              whether it is still there in the morning.
            </p>
            <p>
              <strong>
                The one rule worth memorising: do not go higher with symptoms.
              </strong>{" "}
              Stay at the altitude you are at until they clear. If they clear,
              carry on. If they do not clear, or they get worse, go down.
            </p>
          </div>

          <div className={`${CARD} border-[var(--brand)] p-5 sm:p-6`}>
            <Sub>Signs you must tell your guide immediately</Sub>
            <p className={`mt-2 ${PROSE_SM}`}>
              Not at the next stop, not at dinner. Immediately, and out loud.
            </p>
            <div className="mt-5">
              <MarkList tone="exc" items={TELL_YOUR_GUIDE} />
            </div>
          </div>

          <div className={PROSE}>
            <p>
              Tell the guide directly rather than mentioning it to your partner
              or making a joke of it over dinner. Guides are watching for exactly
              these things and will ask you about them daily, and every one of
              them would rather hear it a day early than a night late. Nobody on
              this trail is impressed by someone who pushed through, and the
              people who get into real trouble are almost always the ones who
              were quiet about a headache for a day and a half.
            </p>
          </div>
        </div>
      </Section>

      <Section id="serious" eyebrow="The serious two" title="HAPE and HACE, plainly">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Two conditions turn altitude illness from uncomfortable into an
              emergency: HAPE, which is fluid collecting in the lungs, and HACE,
              which is swelling in the brain. Both are far less common than mild
              AMS. Both are life-threatening, and for both the answer is the
              same and it is immediate. Go down.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>HAPE, the lungs</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                High altitude pulmonary oedema. The signal is breathlessness at
                rest: struggling for air while sitting still, not while climbing.
                With it, often a cough that will not stop and may turn wet, a
                tight chest, and finding that a slope you managed yesterday is
                suddenly beyond you.
              </p>
            </div>
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>HACE, the brain</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                High altitude cerebral oedema. It shows as the brain not working
                properly: confusion, unusual drowsiness, a severe headache, and a
                loss of coordination that the people around you almost always
                notice before you do. Being unable to walk heel to toe in a
                straight line is the classic sign.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              Neither of these usually appears from nowhere. They generally
              follow AMS symptoms that were present for a while and were walked
              through. That is why the dull advice on this page is the important
              part: telling someone early and refusing to gain altitude with
              symptoms is what keeps the rare thing rare.
            </p>
            <p>
              If a guide believes either is developing, you descend, and you
              descend then. Not in the morning, not after a lie-down to see
              whether it settles. That can mean walking down in the dark, and it
              is a thing our guides will do without apologising for it.
            </p>
          </div>
        </div>
      </Section>

      <Section id="who-decides" eyebrow="The call" title="Who decides that you are going down">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Your guide does. If your guide says the day is over, or the trek
              is over, that is the decision and it is not a negotiation at
              4,750 m in the dark.
            </p>
            <p>
              This is worth understanding before you book, because it is the one
              place where a trekking company's commercial interest and your
              safety point in opposite directions. Turning a group round costs us
              money and hands a paying customer a disappointing holiday. It is
              the least commercial call a guide can make, which is precisely why
              it cannot belong to the person who paid for the trip.
            </p>
            <p>
              Our guides are trained to make that call and are backed by us when
              they do. One of our reviews describes a guide who chose to wait a
              day rather than take a group onto ground he judged unsafe in the
              conditions that morning. Nobody enjoys a day like that. It is also
              the day you are actually paying for.
            </p>
            <p>
              <strong>
                A guide who is willing to say no is worth more than one who is
                not
              </strong>{" "}
              and it is a completely fair thing to ask about before you book,
              whether you ask us or somebody else. If an operator cannot tell you
              who makes the descent decision and what happens next, that is your
              answer.
            </p>
          </div>

          <Note>
            Nobody in the Khumbu is legally required to walk with a guide. That
            is a genuine answer to a different question and it does not change
            this one: somebody on the trip has to be able to say no. If you are
            walking alone, that somebody is you, on the day you are least able to
            think clearly.
          </Note>

          <div className={PROSE}>
            <p>
              You can and should make the call yourself as well, early. Going
              down does not usually mean going home. Dropping a few hundred
              metres and sleeping lower resolves most cases, and people rejoin
              the itinerary a day later. Sometimes it does end the trek. We are
              not going to pretend otherwise, and we are not going to leave that
              conversation until you are too ill to have it.
            </p>
          </div>
        </div>
      </Section>

      <Section id="diamox" eyebrow="Medication and kit" title="Diamox, honestly">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Diamox, acetazolamide, is widely used by trekkers in Nepal, and
              whether you take it is a conversation with your own doctor rather
              than with us. We will not tell you to take it, we will not tell you
              not to, and we are not going to print a dose on a web page.
              Prescribing is not a trekking company's job, and any trekking site
              that does it for you should worry you.
            </p>
            <p>
              What is worth taking into that appointment: it is used to help you
              acclimatise rather than to mask how you feel, it is not permission
              to climb faster, and it does not change the answer if you become
              ill. If you are ill at altitude, you still go down. It is also a
              diuretic, so people taking it drink more and get up more in the
              night, which at 4,447 m in a cold lodge is worth knowing in
              advance. Ask your doctor about the rest, including anything else
              you take and whether to try it before you travel.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>What comes up the valley as standard</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                A licensed English-speaking guide who has walked this valley
                repeatedly, and who is watching the group rather than the view.
                The schedule itself, which is the part doing most of the work.
                And a trail that runs downhill in the direction of thicker air
                from every point on it.
              </p>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>What is not standard, and has to be asked for</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>
                A bottled oxygen cylinder with a mask is not included in the
                trek. Nor is a personal Sherpa guide. Both can be arranged at
                extra cost and both have to be booked rather than summoned from
                a lodge on day 7. If you want either, say so while you are still
                choosing dates.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="evacuation" eyebrow="If it goes wrong" title="Helicopter evacuation and insurance">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              No permit covers a helicopter, and neither does the trek price.
              Travel insurance is what covers it, and carrying it is the one
              thing we ask of everybody before they fly to Lukla.
            </p>
            <p>
              Read your policy for two specific things. First, an altitude limit
              that clears the height this trek actually reaches, 5,357 m: plenty
              of standard policies stop well below that and a trekking add-on is
              often a separate product rather than a box you tick. Second,
              explicit cover for <strong>helicopter evacuation and
              repatriation</strong>, not only for medical treatment once you are
              already in a hospital. Getting off the mountain and getting treated
              are two different bills.
            </p>
            <p>
              We are not going to quote you a figure for a rescue flight. We have
              no verified number, and the honest answer is that it depends on
              where you are, what the weather is doing and who ends up flying.
              What is safe to say is that it is not a number anyone wants to
              discover for the first time without a policy.
            </p>
            <p>
              And do not build your plan around the helicopter. It needs weather
              and it needs daylight, and the Gokyo valley supplies neither on
              request. Most descents on this trek happen the ordinary way, on
              foot, with a guide, at whatever hour the situation calls for. The
              helicopter is the backup. The trail is the plan.
            </p>
            <p>
              What the permits do and do not cover is set out on{" "}
              <Link href="/permits">the permits page</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="next" eyebrow="Before you book" title="Tell us the awkward things first">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              If you have been to altitude before and struggled, tell us. If you
              have never been above 3,000 m in your life, tell us that too.
              Neither answer disqualifies you from this trek, and both change
              what we say to you about which route and which length.
            </p>
            <p>
              The schedule built to keep you out of this page's subject matter is
              on <Link href="/plan/acclimatisation">altitude and acclimatisation</Link>.
              The day-by-day version of it is{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>, and the
              morning it is all pointed at is{" "}
              <Link href="/gokyo-ri">Gokyo Ri</Link>.
            </p>
          </div>

          <ActionCard
            title="Ask us before you commit"
            body="Questions about altitude, medication or an existing condition are the ones we would rather answer months out than on the trail. Ask, and we will tell you if we think a different trek suits you better."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />

          <p className="text-[0.85rem] leading-6 text-[var(--muted)]">
            Nothing on this page is medical advice, and it is not a substitute
            for seeing a doctor before you travel or a qualified medic if you are
            unwell at altitude.
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

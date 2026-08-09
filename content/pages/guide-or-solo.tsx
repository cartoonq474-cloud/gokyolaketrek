// /guide-or-solo, Seed of the decision cluster and the site's credibility test.
//
// A Reddit thread titled "hire a guide or go self-guided?" ranks 2 for the head
// term. It outranks every operator because it says the thing operators will not:
// in the Everest region you do not have to hire anybody. This page leads with
// that, loses the occasional sale, and earns the right to be believed on
// everything after it.
//
// FACTS: the Khumbu exemption from Nepal's 2023 guide rule, and the
// municipality's public dispute of it reported by the Kathmandu Post in April
// 2023, are from seo/research/permits.md. Same local authority, same reason, as
// the TIMS position on /permits. Nothing here asserts a rescue cost, a porter
// wage or a guide fee, because none of those are in the research.
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

const CASE_FOR = [
  {
    title: "The glacier crossing to the fourth and fifth lakes",
    body: "The walk up the valley is lodge to lodge on an obvious trail. The day beyond the village is not. Crossing the Ngozumpa moraine to Thonak Cho and Ngojumba Cho means picking a line across debris-covered ice with cairns for guidance, and the cairns move between seasons because the glacier underneath them does. In cloud it is genuinely easy to lose. This is the one section of the trek where local knowledge saves you hours rather than minutes.",
  },
  {
    title: "Judging altitude when you are the one feeling ill",
    body: "At 4,750 m the person worst placed to decide whether you should go higher is you. Mild altitude sickness blunts exactly the judgement you need to assess it, and almost nobody talks themselves out of a summit morning they have walked eight days to reach. What a guide adds is an outside opinion from someone who has watched hundreds of people at that altitude, and who is willing to say not today and mean it.",
  },
  {
    title: "Who organises the helicopter at four in the morning",
    body: "If it goes wrong at Gokyo, someone has to reach an operator in Kathmandu, confirm your insurance, guarantee payment, describe where you are and get you to somewhere a helicopter can land, in the dark, in a lodge with patchy signal. No permit covers evacuation, so the money side is your insurer's and the doing side is somebody's. If you trek alone, it is yours.",
  },
];

const FINE_ALONE: ReactNode[] = [
  "You have been above 4,000 m before and you know how your body behaves up there.",
  "You are comfortable navigating a route that is not always obvious, and equally comfortable turning round when it is not.",
  "Your schedule has slack in it. You can sit out a bad weather day or add a rest day without putting your flight home at risk.",
  "You are trekking in a season when the lodges above Dole are open and other people are on the trail.",
];

const THINK_AGAIN: ReactNode[] = [
  "This is your first time above 4,000 m and you have no idea how you react.",
  "You want the fourth and fifth lakes, which means the glacier crossing.",
  "You are going deep into the shoulder season, when lodges thin out and so does everyone else.",
  "Nobody at home has your route or your dates.",
  "You know you would struggle to turn back 300 m below the top on your own advice.",
];

export const page: TrekPage = {
  slug: "guide-or-solo",
  route: "/guide-or-solo",
  title: "Do You Need a Guide for the Gokyo Lake Trek?",
  description:
    "Nepal's guide rule does not apply the way most sites say in the Everest region. What the law actually requires in Khumbu, what a guide does that you cannot, and when trekking Gokyo alone is a bad idea anyway.",
  hero: {
    title: "Do you need a guide?",
    subtitle:
      "Legally, no. Not in the Everest region. We sell guided treks and that is still the correct answer.",
    image: "/images/guide-and-trekker.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="answer" eyebrow="The short answer" title="No, a guide is not required by law">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              You do not legally need a guide to trek to Gokyo. The Everest
              region is exempt from Nepal's national guide requirement, and
              trekking the Gokyo valley on your own is legal. If you have read
              that a guide is mandatory everywhere in Nepal since 2023, that is
              the national rule being quoted without the exception.
            </p>
            <p>
              We sell guided treks, so we are the last people you should take
              this from without checking. Check it. The rest of this page is
              worth reading only if the first paragraph is true, and it is the
              paragraph most operator pages find a way not to write.
            </p>
            <p>
              What follows is the argument for hiring one anyway, which is a
              different question and a better one. It comes down to three
              things: a glacier with no obvious route across it, judging altitude
              when you are the one feeling ill, and who makes the call if it
              goes wrong.
            </p>
          </div>
        </div>
      </Section>

      <Section id="rule" eyebrow="The 2023 rule" title="Why Khumbu is different from the rest of Nepal">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              In 2023 the Nepal Tourism Board ruled that independent foreign
              trekkers must hire a licensed guide. It was widely reported as a
              blanket national ban on solo trekking, and most pages you will find
              still describe it that way.
            </p>
            <p>
              The Everest region does not apply it. Khumbu Pasang Lhamu Rural
              Municipality, the local government covering the whole region,
              publicly disputed the rule when it was announced, as reported in
              the Kathmandu Post in April 2023, and the Khumbu is exempt from it.
              Solo trekkers walk to Gokyo every season, legally.
            </p>
            <p>
              This is the same municipality that withdrew from the national TIMS
              scheme and issues its own entry permit instead. Khumbu runs its own
              regime, which is why both the guide mandate and the permit rules
              work differently here. The permit side is on{" "}
              <Link href="/permits">permits and fees</Link>.
            </p>
            <p>
              One thing does not change if you go alone:{" "}
              <strong>you still need both permits</strong>. Sagarmatha National
              Park entry and the municipality permit are per person, not per
              group, and the checkpoint at Monjo does not care who you walked in
              with.
            </p>
          </div>

          <Note>
            Rules in this region have changed before and can change again. Check
            the date on anything you read about Nepali trekking rules, check that
            it says Khumbu rather than Nepal in general, and if you are trekking
            independently, ask at the permit desk in Lukla or Monjo rather than
            trusting a blog post. Including this one.
          </Note>
        </div>
      </Section>

      <Section id="helps" eyebrow="The case for" title="Three places a guide earns the money">
        <div className="space-y-4">
          {CASE_FOR.map((item) => (
            <div key={item.title} className={`${CARD} p-5 sm:p-6`}>
              <Sub>{item.title}</Sub>
              <p className={`mt-3 ${PROSE_SM}`}>{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="glacier" eyebrow="The glacier" title="What the Ngozumpa crossing is actually like">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The Ngozumpa is debris-covered, which is why it looks like a valley
              of rubble rather than a river of ice. It is also why the route
              across it is not a path. You drop off the lateral moraine, pick
              your way over rock that sits on ice, and climb out the far side at
              a point that is not visible from where you start.
            </p>
            <p>
              None of that is dangerous in good conditions and none of it is
              technical. It is simply the part of the trek where nobody has drawn
              you a line, and where the honest answer to what happens if you get
              it wrong is that you lose time, get cold and turn back short of the
              fifth lake. Almost nobody sees those two lakes anyway, because most
              itineraries spend that day descending. If you have kept the day for
              them, this crossing is what stands between you and them, and they
              are described on <Link href="/lakes">the lakes page</Link>.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/ngozumpa-glacier.webp"
              alt="Rock and rubble covering the ice of the Ngozumpa glacier, with peaks rising on the far side"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The surface of the Ngozumpa. There is a way across this and it is
              not marked on anything.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="alone" eyebrow="The case against" title="Who genuinely does not need one">
        <div className="space-y-7">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>You will be fine alone if</Sub>
              <div className="mt-4">
                <MarkList tone="inc" items={FINE_ALONE} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <Sub>Think again if</Sub>
              <div className="mt-4">
                <MarkList tone="exc" items={THINK_AGAIN} />
              </div>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              If everything in the left-hand list is true of you, you do not need
              us and we are not going to pretend the trail requires us. Plenty of
              experienced trekkers walk to Gokyo independently every season, stay
              in the same lodges we use and get up Gokyo Ri perfectly well. The
              route to the village is waymarked and busy enough through Machhermo
              that you are rarely out of sight of somebody.
            </p>
            <p>
              The practical things a guide handles are less dramatic than the
              three above and they still matter: the permit queues, a bed in
              Gokyo when the village is full, translating a lodge conversation
              about what is actually in the soup, and knowing what to do with a
              week that has just been rearranged by a cancelled Lukla flight.
            </p>
          </div>
        </div>
      </Section>

      <Section id="porter" eyebrow="A separate question" title="The porter is a different decision">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              A porter is not a guide, and hiring one does not make you guided.
              You can trek independently and still hire a porter, or a
              porter-guide who carries and knows the route without holding a
              full guide licence. Plenty of people do.
            </p>
            <p>
              The practical case is simple. Carrying your own pack from Dhole at
              4,038 m up to Gokyo at 4,750 m is the difference between a day you
              enjoy and a day you endure, and the effect compounds over ten
              walking days. Our trips include one porter per two trekkers, with
              their food, wages, accommodation and insurance inside the price
              rather than left for you to sort out.
            </p>
          </div>

          <Note>
            If you hire a porter independently at a lodge or in Lukla, ask what
            they are being paid, whether they are insured, what they will be
            carrying and where they will sleep. A handshake arrangement at 4,000
            m often has none of that behind it, and the person carrying your
            things is the one who bears it.
          </Note>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="If you decide you want us">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              If you have read this and concluded you can do it alone, that is a
              legitimate outcome and we would rather have written it than not.
              If you would rather walk with someone who has done this valley a
              great many times, that is what we sell.
            </p>
          </div>

          <ActionCard
            title="Ask about a guided trek"
            body="Tell us your dates and what altitude experience you have. We take solo trekkers, and group size starts at one."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />

          <div className={PROSE}>
            <p>
              The trek itself, day by day, is on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>. If you
              are still deciding between this valley and the Base Camp trail,
              that comparison is on{" "}
              <Link href="/vs-everest-base-camp">
                Gokyo versus Everest Base Camp
              </Link>
              .
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

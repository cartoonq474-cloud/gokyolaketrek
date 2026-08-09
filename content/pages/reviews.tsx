// /reviews.
//
// The competitive position of this whole site is candour, and a reviews page is
// where candour is cheapest to fake and most expensive to lose. So the number
// at the top of this page is immediately qualified: 5.0 from 156 TripAdvisor
// reviews is an all-treks figure, not a Gokyo figure, and the page says so in
// the first three sentences rather than in a footnote nobody reads.
//
// FACTS: score, count and the three quoted excerpts come straight from
// `gokyoConfig.reviews`, sourced in seo/research/. Nothing here is written by
// us. There are exactly three items because only three distinct Gokyo trips
// have a published review, see the note on the withheld fourth below.
//
// QUOTING: the excerpts are verbatim except that em-dashes were normalised to
// house punctuation, which the "how we quote" section states on the page rather
// than hiding in this comment.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Stars,
  Sub,
} from "../design-kit";
import { gokyoConfig } from "../config";

const { reviews } = gokyoConfig;

export const page: TrekPage = {
  slug: "reviews",
  route: "/reviews",
  title: "Gokyo Lake Trek Reviews From Our Trekkers",
  description:
    "What trekkers say after walking the Gokyo valley with us, quoted as written and attributed. Reviews naming the guides, the lakes and the Gokyo Ri climb.",
  hero: {
    title: "Reviews",
    subtitle:
      "5.0 on TripAdvisor from 156 reviews, across every trek we run. Three distinct Gokyo trips have a published review, and all three are quoted below.",
    image: "/images/guide-portrait.webp",
    aspect: "4 / 3",
    minHeight: 520,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section
        id="rating"
        eyebrow="The short answer"
        title="Our rating, and exactly what it covers"
      >
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              We hold {reviews.score.toFixed(1)} on TripAdvisor from{" "}
              {reviews.count} reviews.{" "}
              <strong>
                That score covers every trek we run, in several regions of
                Nepal. It is not a Gokyo-only score.
              </strong>
            </p>
            <p>
              Nobody should read {reviews.count} as {reviews.count} people who
              walked to the Gokyo lakes. Most of those trekkers were on other
              treks entirely, in other parts of Nepal. Only a handful of the
              published reviews mention Gokyo at all. Those are the ones on this
              page, and the one we left out is explained further down.
            </p>
          </div>

          <div className={`${CARD} flex flex-wrap items-center gap-x-5 gap-y-3 p-5 sm:p-6`}>
            <span className="text-[2.4rem] font-bold leading-none text-[var(--ink)] tabular-nums">
              {reviews.score.toFixed(1)}
            </span>
            <Stars />
            <span className={PROSE_SM}>
              <b className="text-[var(--ink)]">
                {reviews.count} TripAdvisor reviews
              </b>
              <br />
              across all our treks, not this one alone
            </span>
          </div>

          <Note>
            An operator that shows you a headline rating without saying what it
            is averaged over is telling you something true in a way that is
            meant to mislead. We would rather print the smaller, honest number:
            three Gokyo trips with a published review.
          </Note>
        </div>
      </Section>

      <Section
        id="gokyo"
        eyebrow="Gokyo only"
        title="The reviews that name Gokyo"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Three distinct Gokyo trips have a published review. One is from a
              trekker who walked the Gokyo Lake Trek itself. The other two are
              from trekkers on the longer route that pairs Gokyo with Everest
              Base Camp over the Cho La. Which trip and which month is printed
              under each quote, so you can weigh them yourself.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {reviews.items.map((review) => (
              <blockquote
                key={review.name}
                className={`${CARD} p-5 sm:p-6 lg:last:col-span-2`}
              >
                <Stars className="h-3.5 w-3.5" />
                <p className={`mt-3 ${PROSE_SM}`}>{review.text}</p>
                <footer className="mt-4 flex flex-wrap items-center gap-3 text-[0.85rem] text-[var(--muted)]">
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

          <div className={PROSE}>
            <p>
              The second of these is the sentence this whole site was built
              around. Far fewer trekkers walk the Gokyo circuit than walk to
              Base Camp, and that is the point of going, not a drawback.{" "}
              <Link href="/lakes">The lakes themselves</Link> are what the quiet
              buys you.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="how-we-quote"
        eyebrow="Method"
        title="How we quote a review"
      >
        <div className="space-y-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>Excerpted, never rewritten</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Each card carries a passage from a longer review, chosen because
                it is about the trek and the guiding. The wording inside the
                excerpt is exactly as published. We do not tidy grammar and we
                do not sharpen a sentence.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Attributed as published</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                The name and the month under each quote are the ones the
                reviewer used on TripAdvisor. We do not turn a full name into
                initials, and we do not invent a country or a job title to make
                a reviewer sound more like you.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>One change, declared</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                This site uses no em-dashes, so where an original used one it
                has been replaced with a comma, colon or full stop. That is the
                only alteration made to any quoted wording anywhere on this
                site.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Traceable</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                The full text of each review sits on TripAdvisor under the
                reviewer&apos;s own name and date. Ask us and we will point you
                at the listing so you can read the whole thing, including
                anything we left out.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              We do not write reviews, buy them, or quote a testimonial that
              cannot be traced back to something a real person published. Every
              quote on this site is on this page.
            </p>
          </div>

          <Note>
            One we deliberately left out. A fourth published review also names
            Gokyo, but it describes the same trip and the same dates as one of
            the three above, posted a day apart under a different name. We
            cannot tell which attribution is correct, so rather than quietly
            count the trip twice we quote neither version of it. If we resolve
            it, it will appear here.
          </Note>
        </div>
      </Section>

      <Section
        id="limits"
        eyebrow="Read carefully"
        title="What a 5.0 does not tell you"
      >
        <div className={PROSE}>
          <p>
            Three reviews is an anecdote, not evidence. They tell you what three
            people thought, and every one of them chose to sit down and write
            something afterwards, which is not a neutral sample. Happy trekkers
            post more often than disappointed ones, on every trek and every
            operator.
          </p>
          <p>
            A 5.0 average is also not a claim that nothing has ever gone wrong.
            Lukla flights are cancelled, people are turned back by altitude, and
            weather takes the view away from the top of Gokyo Ri on a fair
            number of mornings. None of that shows up in a star rating.
          </p>
          <p>
            What the three do have in common is worth naming: the guide by name,
            the pacing of the acclimatisation, and how much quieter the Gokyo
            valley is than the Base Camp trail. Those are the three things we
            would want you to test us on.
          </p>
          <p>
            This site itself is new, so it carries no reviews of its own yet.
            The ones above belong to the company that runs the trek, and they
            are on TripAdvisor rather than here.
          </p>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="Judge the trek, not the stars">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              A review tells you how someone felt. The itinerary tells you what
              you are actually signing up for, and it is the more useful
              document of the two.{" "}
              <Link href="/itinerary/15-day">The 15-day itinerary</Link> has
              every day with its altitude, distance and walking hours, and{" "}
              <Link href="/gokyo-ri">the Gokyo Ri page</Link> covers the climb
              two of these three reviewers are talking about.
            </p>
          </div>

          <ActionCard
            title="Want to speak to a past trekker?"
            body="Ask, and where a past trekker has agreed to it we will pass the question on. We will not pretend everyone says yes."
            ctaLabel="Send an enquiry"
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
  // No AggregateRating schema, on purpose. The visible page spends its first
  // paragraph explaining that 5.0 from 156 is an all-treks figure; emitting an
  // AggregateRating on a page about the Gokyo trek would tell a machine the
  // opposite of what the page tells a reader, and that is the exact mismatch
  // rich-result policy is written to catch.
  jsonLd: [],
};

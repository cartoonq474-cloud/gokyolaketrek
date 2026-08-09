// /editorial-policy, written 2026-08-09.
//
// This page is a genuine differentiator rather than a compliance page. Almost no
// trekking site publishes one, and the ones that do publish a paragraph about
// "our commitment to accuracy" and nothing checkable.
//
// The rule followed here: every standard on this page is one the rest of the
// site can be audited against right now. If a standard could not be checked by
// a reader with a browser, it is not on the page.
//
// Deliberately NOT here, because inventing them would break the page's own
// rules: a named editor, a review board, a fact-checking partner, a
// "last reviewed" date. The site is reviewed regularly and says so, and says
// why it does not print a date.
//
// FACTS: canonical values are from seo/WRITING-BRIEF.md. The guide-requirement
// example is from seo/research/permits.md, and it is the strongest thing on
// this page precisely because it argues against our own product.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, MarkList, Note, Section, Sub } from "../design-kit";

/**
 * The canonical values this page uses as its worked example. Every one of these
 * appears identically on every page of the site that mentions it, which is the
 * whole claim being made here, so this table is also a standing audit target.
 */
const CANONICAL = [
  { fact: "The trek", value: "15 days, Kathmandu to Kathmandu, 10 walking days" },
  { fact: "Gokyo Ri", value: "5,357 m, day 9, 4.6 km, 3 to 4 hours round trip" },
  { fact: "Highest night", value: "Gokyo valley, 4,750 m" },
  { fact: "Cho La", value: "5,420 m, on the 19 and 21-day routes" },
  {
    fact: "Permits",
    value: "NPR 3,000 park entry plus NPR 3,000 municipality. No TIMS",
  },
];

export const page: TrekPage = {
  slug: "editorial-policy",
  route: "/editorial-policy",
  title: "Editorial Policy and How We Check Facts",
  description:
    "Where the altitudes, distances and permit rules on this site come from, how they are verified, and how to tell us when something is wrong.",
  hero: {
    title: "Editorial policy",
    titleFontSize: "clamp(2.3rem, 6vw, 3.6rem)",
    subtitle:
      "Where every number on this site comes from, what we refuse to publish, and what happens when you tell us we are wrong.",
    image: "/images/gokyo-village-lakeshore.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section
        id="sources"
        eyebrow="The short answer"
        title="Where the numbers on this site come from"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The altitudes, distances and walking hours on this site come from
              the operator's own published itinerary for this trek, the same
              document the guides work from. Where a fact is not ours to know, we
              use a named source instead and say which one.
            </p>
            <p>
              So Gokyo Ri at 5,357 m, the Gokyo valley at 4,750 m and the 4.6 km
              round trip on day 9 are the operator's figures for the trek it
              actually runs, not numbers lifted off a competitor who lifted them
              off someone else. The lake names, their surface areas and the
              Ramsar designation come from the sourced scientific record, chosen
              over trekking blogs because the blogs contradict each other on both
              the names and which lake is the largest.
            </p>
            <p>
              The permit rules come from the position taken by the Khumbu Pasang
              Lhamu Rural Municipality itself, cross-checked against several
              current agency pages that state it independently. That one matters
              more than most, because a lot of what is published about Everest
              permits is out of date and some of it is self-contradictory.
            </p>
          </div>
        </div>
      </Section>

      <Section id="checking" eyebrow="Method" title="How a fact gets onto a page">
        <div className="space-y-7">
          <div className={PROSE}>
            <ol className="ml-5 list-decimal space-y-3 marker:font-semibold marker:text-[var(--brand-ink)]">
              <li>
                <strong>It has to come from somewhere.</strong> The operator's
                itinerary, a named public record, or something we have seen on
                the trail ourselves. "Everyone says so" is not a source, and it
                is how the TIMS mistake spread across half the Everest pages on
                the internet.
              </li>
              <li>
                <strong>Where two sources disagree, we do not average them.</strong>{" "}
                We take the one with the better provenance and say on the page
                that the other exists. The lake spellings are the clearest case:
                Thonak Tsho and Thonak Cho are the same water on two signs an
                hour apart, so the page says so rather than pretending the
                confusion is not there.
              </li>
              <li>
                <strong>If we cannot source it, it does not go up.</strong> The
                sentence gets rewritten so it does not need the number, or the
                claim is dropped. A page with a hole in it is more useful than a
                page with a guess in it, because you can see the hole.
              </li>
              <li>
                <strong>Once a value is settled, it is used everywhere.</strong>{" "}
                Which is the next section, and it is the part almost nobody
                bothers with.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      <Section
        id="one-value"
        eyebrow="Consistency"
        title="One number per fact, on every page"
      >
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              Gokyo Ri is 5,357 m here, on the itinerary, on its own page and in
              the meta description that shows up in search results. It is never
              5,360 m in one place and 5,350 m in another.
            </p>
            <p>
              This sounds pedantic, and it is the single clearest signal of
              whether a site was written or assembled. Three numbers that nearly
              agree means three sources were pasted together and nobody read the
              result. If you find two figures for the same thing on this site,
              one of them is a mistake and we would like to know which.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold tracking-[0.1em] text-[var(--muted)] uppercase sm:px-5">
                      Fact
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold tracking-[0.1em] text-[var(--muted)] uppercase sm:px-5">
                      The value used sitewide
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CANONICAL.map((row) => (
                    <tr
                      key={row.fact}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                        <b className="text-[var(--ink)]">{row.fact}</b>
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.88rem] leading-6 text-[var(--body)] sm:px-5">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="standards"
        eyebrow="The standards"
        title="What we will and will not publish"
      >
        <div className="space-y-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>What this site does</Sub>
              <div className="mt-4">
                <MarkList
                  tone="inc"
                  items={[
                    "Every altitude, distance and walking time traceable to the operator's itinerary or to a named source.",
                    "One canonical value per fact, used on every page that mentions it.",
                    "Photographs taken on this trail, by us.",
                    "Reviews quoted as published, attributed to the name they were published under, and marked as excerpts when they are excerpts.",
                    "Facts that cost us the sale, published anyway. See the next section.",
                  ]}
                />
              </div>
            </div>
            <div className={`${CARD} p-5 sm:p-6`}>
              <Sub>What it will not do</Sub>
              <div className="mt-4">
                <MarkList
                  tone="exc"
                  items={[
                    "No invented prices. The operator publishes no price for the 15-day trek, so this site prints none. A plausible number would be the easiest thing here to fake and the hardest for you to check.",
                    "No stock photography, and no generated images.",
                    "No review rewritten, trimmed in a way that changes its meaning, or attached to a person who did not write it.",
                    "No superlative we cannot support. The lakes page says one of the highest freshwater lake systems in the world, not the highest, because the stronger claim is not supportable.",
                    "No manufactured urgency. No countdown, no last two places on a trek that runs when it runs.",
                  ]}
                />
              </div>
            </div>
          </div>

          <Note>
            On the reviews, since this is where sites are usually slipperiest:
            the rating shown on this site, 5.0 from 156 reviews, is across every
            trek the operator runs and not this one alone. Only a handful of
            those reviews are about Gokyo. We say so rather than let the number
            imply something it does not support. The excerpts are excerpts, sized
            to the card they sit in, and the only edit made inside one is
            punctuation to match house style, never an edit that changes what the
            reviewer meant.
          </Note>
        </div>
      </Section>

      <Section
        id="against-us"
        eyebrow="The test"
        title="Facts that do not favour us"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The test of an editorial policy is what it makes you publish when
              publishing it costs you money. Here is the clearest example on this
              site.
            </p>
            <p>
              <strong>
                A guide is not legally required to trek in the Everest region.
              </strong>{" "}
              Nepal brought in a national rule requiring one, and the Khumbu
              Pasang Lhamu Rural Municipality, which covers the whole Everest
              region, is exempt from it. You can walk to Gokyo without a guide,
              legally. We sell guided treks and we still say so, on the page
              where somebody making that decision is most likely to read it.
            </p>
            <p>Three more of the same kind:</p>
            <ul className="ml-5 list-disc space-y-3 marker:text-[var(--brand-ink)]">
              <li>
                You do not need a TIMS card in the Everest region, which means an
                operator charging you for one is charging you for nothing. Pages
                currently ranking above us still say you do, and at least one
                contradicts itself inside a single article.
              </li>
              <li>
                Gokyo Ri can be cloud. It is a 5,357 m viewpoint in the Himalaya,
                and the view is weather rather than something you purchased.
              </li>
              <li>
                This trek is not for everyone, and we would rather turn a booking
                down than take somebody up a valley that is wrong for them.
              </li>
            </ul>
            <p>
              None of that is modesty. A trekker who works out on day 8 that we
              shaded something has already paid, and they tell everyone. A
              trekker who finds the unflattering fact on our own site before
              booking tends to believe the rest of it, which is the only reason
              any of this is worth writing down.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="photos"
        eyebrow="Photographs"
        title="The photographs are ours"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Every photograph on this site was taken on this trail. None of it
              is licensed from a stock library and none of it is generated. The
              lake you are looking at is the lake you will walk past.
            </p>
            <p>
              That has a cost, and we accept it. There are shots this site does
              not have because we have not taken them yet, and the gap stays a
              gap rather than being filled with a picture of somewhere else that
              looks similar enough.
            </p>
            <p>
              We also leave out photographs of people whose permission we do not
              have on record. Some of the best pictures from the valley have
              identifiable faces in them and are not published here for that
              reason. Captions are there to add something the picture cannot say,
              not to repeat the heading above it.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="review"
        eyebrow="Maintenance"
        title="How this site is kept current"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The site is reviewed regularly, and the pages that move in the real
              world are checked more often than the ones that do not: permit fees
              and where each permit is issued, the Lukla flight arrangements, and
              anything seasonal.
            </p>
            <p>
              There is no editorial board here and no named reviewer, because
              inventing one would be the first untrue thing on this page. The
              site is written and checked by the people who run the trek, which
              is both its strength and the thing you should weigh it against.
            </p>
            <p>
              We do not stamp a "last reviewed" date on every page either. A date
              is the easiest thing on a page to change without changing anything
              else, and a site that refreshes the date and nothing behind it is
              worse than one that prints no date at all. Where a fact has a date
              that matters, such as a permit rule, the date is in the sentence
              with the fact.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="errors"
        eyebrow="Corrections"
        title="How to report an error, and what happens next"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Tell us. The enquiry form on any trek page reaches the same inbox,
              and one line is enough: which page, which sentence, and what you
              think it should say. If you have a source, send it. If you walked
              it last month and the trail says otherwise, that is a source.
            </p>
            <p>Then, in order:</p>
            <ol className="ml-5 list-decimal space-y-3 marker:font-semibold marker:text-[var(--brand-ink)]">
              <li>We check it against the source the page was built from.</li>
              <li>
                If you are right, the page is corrected, and so is every other
                page on this site carrying the same fact. A number fixed in one
                place and left wrong in three is not fixed.
              </li>
              <li>
                If the correction changes something that mattered, the page says
                what changed rather than quietly losing a paragraph. A page that
                silently drops a claim is a page you cannot trust the rest of.
              </li>
              <li>
                If we think you are wrong, we say that too, and we say what we
                are relying on. You can then decide for yourself, which is the
                point.
              </li>
            </ol>
          </div>

          <Note>
            The one correction we cannot make is to a fact the operator has not
            given us yet. Where that happens, the page carries a visible blank
            instead of a plausible figure. The booking terms page is the clearest
            example of that on this site, and it is deliberately unflattering.
          </Note>
        </div>
      </Section>

      <Section
        id="see"
        eyebrow="See it working"
        title="Where to check this against the pages"
      >
        <div className={PROSE}>
          <p>
            Three places this policy is doing visible work.{" "}
            <Link href="/permits">The permits page</Link> states the TIMS
            position plainly and tells you where each permit is actually issued,
            including the one that cannot be bought in Kathmandu.{" "}
            <Link href="/lakes">The lakes page</Link> names all six lakes,
            measures them and carries the Ramsar designation, rather than saying
            "six turquoise lakes" and stopping.{" "}
            <Link href="/gokyo-ri">The Gokyo Ri page</Link> gives the same
            5,357 m as every other page here, including this one.
          </p>
          <p>
            If any of them is wrong, the section above is what it is for.
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

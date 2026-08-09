// /permits, unblocked 2026-08-09 by seo/research/permits.md.
//
// This page exists because the ranking competition is genuinely wrong. Several
// pages still list TIMS as required for Everest, and the page currently ranking
// for Nepal permit queries contradicts itself inside one article: its table says
// TIMS is not required in Khumbu, its cost table then charges you US$17 for one.
//
// Being correct and specific is the entire play here. No extra authority needed.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

const PERMITS = [
  {
    name: "Sagarmatha National Park entry permit",
    fee: "NPR 3,000",
    usd: "roughly USD 25 to 30",
    where: "Nepal Tourism Board in Kathmandu, or the park gate at Monjo",
    who: "everyone entering the national park",
  },
  {
    name: "Khumbu Pasang Lhamu Rural Municipality permit",
    fee: "NPR 3,000",
    usd: "roughly USD 25",
    where: "Lukla or Monjo. Not sold in Kathmandu",
    who: "everyone entering the Khumbu, trekking or not",
  },
];

export const page: TrekPage = {
  slug: "permits",
  route: "/permits",
  title: "Permits and Fees for the Gokyo Lake Trek",
  description:
    "Which permits the Everest region actually requires, what each costs, where they are bought and which are included in the package. Sagarmatha National Park entry and the Khumbu Pasang Lhamu municipality permit.",
  hero: {
    title: "Permits and fees",
    subtitle:
      "Two permits, not three. You do not need a TIMS card in the Everest region, whatever half the internet still says.",
    image: "/images/lakeshore-trail.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="which" eyebrow="The short answer" title="Which permits you need">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek needs two permits: Sagarmatha National Park
              entry at NPR 3,000, and the Khumbu Pasang Lhamu Rural Municipality
              permit at NPR 3,000. You do not need a TIMS card. Both are arranged
              for you as part of the trek.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {PERMITS.map((permit) => (
              <div key={permit.name} className={`${CARD} p-5 sm:p-6`}>
                <Sub>{permit.name}</Sub>
                <p className="mt-3 text-[1.6rem] font-semibold leading-none text-[var(--brand-ink)]">
                  {permit.fee}
                </p>
                <p className="mt-1.5 text-[0.85rem] text-[var(--muted)]">
                  {permit.usd}
                </p>
                <dl className="mt-4 space-y-2 border-t border-[var(--line-2)] pt-4">
                  <div className={PROSE_SM}>
                    <dt className="inline font-semibold text-[var(--ink)]">
                      Who needs it:{" "}
                    </dt>
                    <dd className="inline">{permit.who}</dd>
                  </div>
                  <div className={PROSE_SM}>
                    <dt className="inline font-semibold text-[var(--ink)]">
                      Where it is issued:{" "}
                    </dt>
                    <dd className="inline">{permit.where}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <Note>
            SAARC nationals pay a reduced national park rate, commonly NPR 1,500.
            Some listings add 13% VAT to the park fee. If you hold a SAARC
            passport, ask us and we will quote your actual figure rather than the
            foreigner rate.
          </Note>
        </div>
      </Section>

      <Section id="tims" eyebrow="The confusion" title="Why you do not need a TIMS card">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              TIMS, the Trekkers' Information Management System card, is still
              required on most Nepali trekking routes. It is not required here.
            </p>
            <p>
              The Khumbu Pasang Lhamu Rural Municipality, the local government
              covering the whole Everest region, withdrew from the national TIMS
              scheme and issues its own entry permit instead. If you turn up with
              a TIMS card and no municipality permit, the card will not get you
              past the checkpoint.
            </p>
            <p>
              This is the same local authority that publicly disputed Nepal's
              2023 solo trekking ban. Khumbu runs its own permit regime, which is
              why both the TIMS rule and{" "}
              <Link href="/guide-or-solo">the guide requirement</Link> work
              differently here than in the rest of the country.
            </p>
          </div>

          <Note>
            Be careful what you read on this. Several pages ranking for Everest
            permit queries still list TIMS as mandatory, and at least one
            contradicts itself inside a single article, saying TIMS is not
            required in Khumbu and then charging for it in the cost table further
            down. Check the date on anything you read, and check it says Khumbu
            rather than Nepal in general.
          </Note>
        </div>
      </Section>

      <Section id="where" eyebrow="Practical" title="Where each one is actually issued">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The detail almost nobody mentions:{" "}
              <strong>
                the municipality permit cannot be bought in Kathmandu
              </strong>
              . It is issued in Lukla, or at Monjo on the way up. Even if
              everything else is arranged before you fly, that one is bought at
              the trailhead.
            </p>
            <p>
              The national park permit can be done either way. Buy it at the
              Nepal Tourism Board in Kathmandu before you fly, or at the park
              entrance gate at Monjo on day 4. We normally handle the Kathmandu
              one during your preparation day so there is one less queue on the
              trail.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>Bring with you</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Your passport, and passport photographs. Permits are issued
                against the passport you will be carrying, so the details have to
                match.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Keep on you</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Both permits, for the whole trek. They are checked at Monjo and
                again on the way out, and spot checks happen higher up.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="included" eyebrow="Cost" title="What we include">
        <div className={PROSE}>
          <p>
            Both permits are included in the trek price and arranged for you. You
            do not queue, and you do not pay them separately on the trail.
          </p>
          <p>
            What the permits are not is the whole cost picture. Lukla flights,
            the guide and porter, accommodation and food make up most of it, and
            there are things the package deliberately does not cover. That
            breakdown is on <Link href="/cost">what the trek costs</Link>.
          </p>
          <p>
            One thing worth knowing early: no permit covers helicopter
            evacuation. That is what{" "}
            <Link href="/nepal/insurance">travel insurance</Link> is for, and we
            ask everyone to carry cover to 5,500 m.
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

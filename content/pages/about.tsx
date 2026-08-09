// /about, the E-E-A-T page.
//
// Its one job: make every claim on it checkable. Four credential numbers, each
// printed next to the body that issued it. "Licensed and registered" with no
// number is a claim. "Department of Tourism trekking agency licence 2102" is a
// fact a reader can go and test, and the difference between those two sentences
// is the whole reason this page exists.
//
// FACTS: the four numbers, the incorporation date and the address come from
// seo/research/, transcribed from the certificate scans. The numbers are read
// out of `gokyoConfig.credentials` rather than typed here, so this page, the
// trust strip and the footer can never drift apart.
//
// -------------------------------------------------------------------------
// WHY THERE IS A TODO IN THE "REGISTERED COMPANY" SECTION
// -------------------------------------------------------------------------
// House rule 2 says this site never prints the operating company's name, and it
// holds on all 41 pages but this one. /about is the deliberate exception,
// because Nepal company law, the payment flow and the TripAdvisor attribution
// all attach to a registered entity, and nobody can verify company registration
// 145190/072/073 against the Office of the Company Registrar without a name to
// look up. A registration number with no name behind it is decoration.
//
// So the section below is written with a slot for the legal name and the name
// itself is left for a human to paste in from seo/research/. It is not written
// here on purpose: publishing the operator's legal name reverses the branding
// decision recorded at the top of content/config.ts, and that is a call for
// whoever owns the brand, not something an authoring pass should decide by
// quietly typing it into a file.
import Link from "next/link";
import type { ReactNode } from "react";
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
import { gokyoConfig } from "../config";

const { credentials } = gokyoConfig;

type Credential = {
  name: string;
  number: string;
  issuer: string;
  what: string;
};

/**
 * Ordered by what a buyer should care about, not by what looks impressive. The
 * trekking licence is the one that decides whether a company may legally take
 * your money for a trek, so it goes first. The two memberships are voluntary,
 * which is said out loud in the table rather than left to imply more than it
 * does.
 *
 * Every value falls back to "n/a" rather than printing an empty cell, matching
 * the house table rule.
 */
const CREDENTIALS: Credential[] = [
  {
    name: "Trekking agency licence",
    number: credentials.tourismLicence ?? "n/a",
    issuer: "Department of Tourism, Government of Nepal",
    what: "The licence that allows a company to sell and operate trekking in Nepal. A company taking your money for a trek without one is not operating legally.",
  },
  {
    name: "Company registration",
    number: credentials.companyRegistration ?? "n/a",
    issuer: "Office of the Company Registrar",
    what: "The certificate of incorporation, dated 14 February 2016. It is the proof that a legal entity sits behind the brand name on this site.",
  },
  {
    name: "TAAN membership",
    number: credentials.taanId ?? "n/a",
    issuer: "Trekking Agencies' Association of Nepal",
    what: "The trade association for Nepali trekking operators. Membership is voluntary, which is precisely why publishing the number is worth anything.",
  },
  {
    name: "NMA resource membership",
    number: credentials.nmaId ?? "n/a",
    issuer: "Nepal Mountaineering Association",
    what: "The body that governs mountaineering in Nepal. It is not what licenses a trekking company, and we publish it because we hold it, not because a walk up Gokyo Ri needs it.",
  },
];

const ARE: ReactNode[] = [
  <>
    A trekking company registered and licensed in Nepal, working out of one
    office in Kathmandu.
  </>,
  <>
    Over a decade of running trips in the Everest region, the Gokyo valley
    included.
  </>,
  <>
    Nepali guides and porters, with their food, wages, accommodation and
    insurance inside the trek price rather than left to you to sort out.
  </>,
  <>
    The people you deal with directly. Your enquiry reaches the company that
    runs the trek, not an agency reselling someone else&apos;s departure.
  </>,
];

const ARE_NOT: ReactNode[] = [
  <>
    Not a global brand. There is no overseas office, no local number in your
    country and nobody in your time zone.
  </>,
  <>
    Not a booking platform. You are dealing with the operator, so if we get
    something wrong there is no marketplace standing behind us to appeal to.
  </>,
  <>
    Not a large company. In the busiest weeks of spring and autumn, a reply can
    take longer than we would like.
  </>,
  <>
    Not a name you will have heard of. This site is a single-trek brand and it
    is new, even though the company behind it is not.
  </>,
];

export const page: TrekPage = {
  slug: "about",
  route: "/about",
  title: "About the Team Behind the Gokyo Lake Trek",
  description:
    "The Kathmandu operator running this trek, registered and licensed in Nepal. Company registration, Department of Tourism licence, TAAN and NMA membership numbers, and the guides who walk the valley.",
  hero: {
    title: "About us",
    subtitle:
      "Registered in Nepal, licensed by the Department of Tourism, and small enough that you deal with the people who run the trek. Every number on this page can be checked.",
    image: "/images/guide-and-trekker-lake.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="who" eyebrow="The short answer" title="Who runs this trek">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lake Trek is sold and operated by a trekking company
              registered in Nepal and based in Kathmandu, at{" "}
              {gokyoConfig.address}. It holds a Department of Tourism trekking
              agency licence, it has been a registered company for over a
              decade, and the four numbers that prove both are printed further
              down this page.
            </p>
            <p>
              We are a small team in one city. There is no branch office abroad
              and no call centre. The trek is planned, quoted and guided by the
              same company, which is the reason we can answer a question about
              day 8 without going away to ask somebody.
            </p>
            <p>
              That cuts both ways, and the rest of this page says how.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lake-reflection-cairn.webp"
              alt="A stone cairn on the shore of a Gokyo lake with snow peaks reflected in still water behind it"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Every photograph on this site was taken on this trail by us. None
              of them came from a stock library.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section
        id="registered"
        eyebrow="The legal entity"
        title="The registered company behind the brand"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Gokyo Lake Trek is a trading name. The company behind it is a
              private limited company registered in Nepal, incorporated on{" "}
              <strong>14 February 2016</strong>, with its registered office in
              Kathmandu. When you book, your contract is with that registered
              company, not with the name at the top of this page.
            </p>
            <p>
              We would rather say that plainly here than let you find it out on
              an invoice.
            </p>
          </div>

          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Company details</Sub>
            <dl className="mt-4 space-y-3 border-t border-[var(--line-2)] pt-4">
              <div className={PROSE_SM}>
                <dt className="inline font-semibold text-[var(--ink)]">
                  Registered name:{" "}
                </dt>
                {/* TODO: the registered entity's legal name goes here, see seo/research/ */}
                <dd className="inline">
                  [registered company name to be inserted before launch]
                </dd>
              </div>
              <div className={PROSE_SM}>
                <dt className="inline font-semibold text-[var(--ink)]">
                  Trading as:{" "}
                </dt>
                <dd className="inline">{gokyoConfig.brand}</dd>
              </div>
              <div className={PROSE_SM}>
                <dt className="inline font-semibold text-[var(--ink)]">
                  Company registration:{" "}
                </dt>
                <dd className="inline">
                  {credentials.companyRegistration ?? "n/a"}, Office of the
                  Company Registrar
                </dd>
              </div>
              <div className={PROSE_SM}>
                <dt className="inline font-semibold text-[var(--ink)]">
                  Incorporated:{" "}
                </dt>
                <dd className="inline">14 February 2016</dd>
              </div>
              <div className={PROSE_SM}>
                <dt className="inline font-semibold text-[var(--ink)]">
                  Registered office:{" "}
                </dt>
                <dd className="inline">{gokyoConfig.address}</dd>
              </div>
            </dl>
          </div>

          <Note>
            Why two names at all: this site sells one trek and is named after
            it. The company runs other treks in other parts of Nepal under its
            own name. The licence numbers below, the reviews we quote and the
            guides who walk with you are all that company&apos;s, and so is the
            contract.
          </Note>
        </div>
      </Section>

      <Section
        id="credentials"
        eyebrow="Checkable"
        title="Four numbers, and who issued each one"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Four separate bodies register or certify us, and each issues its
              own number. All four are below, next to the body that issued
              them, because a credential you cannot trace is worth nothing.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Credential
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Number
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Issued by
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CREDENTIALS.map((item) => (
                    <tr
                      key={item.name}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                        <b className="text-[var(--ink)]">{item.name}</b>
                        <span className="mt-1 block text-[0.85rem] leading-6 text-[var(--body)]">
                          {item.what}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.95rem] font-semibold tabular-nums text-[var(--brand-ink)] sm:px-5">
                        {item.number}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.88rem] leading-6 text-[var(--body)] sm:px-5">
                        {item.issuer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              <strong>How to check them.</strong> Each number belongs to the
              body in the third column, and each of those bodies holds its own
              register. Ask us and we will send you photographs of the
              certificates themselves, so you can hold the number on the paper
              against the number on this page. If the two ever disagree, the
              paper is right and we want to know.
            </p>
            <p>
              These numbers were read off the certificates by eye rather than
              copied from a database, because the issuing bodies publish them as
              images and not as text. If you find a digit wrong, tell us and we
              will correct it.
            </p>
          </div>

          <Note>
            Worth saying plainly: a licence number proves a company is
            registered and permitted to trade. It does not prove your guide will
            be good, and nothing on this page can. Ask us who is leading your
            departure, and read what other trekkers wrote about the guide they
            were given.
          </Note>
        </div>
      </Section>

      <Section
        id="what-we-are"
        eyebrow="Honestly"
        title="What we are, and what we are not"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>What we are</Sub>
            <div className="mt-4">
              <MarkList tone="inc" items={ARE} />
            </div>
          </div>
          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>What we are not</Sub>
            <div className="mt-4">
              <MarkList tone="exc" items={ARE_NOT} />
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="team"
        eyebrow="The guides"
        title="Who actually walks the valley with you"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              You walk with a licensed, English-speaking Nepali guide, and there
              is one porter for every two trekkers. Their food, wages,
              accommodation and insurance are paid by us and are inside the trek
              price.
            </p>
            <p>
              There is no wall of staff portraits on this page, and that is
              deliberate. Which guide leads your trek depends on your dates, so
              a gallery would be showing you people you may never meet. Ask us
              when your dates are set and we will tell you the name of the guide
              before you pay anything.
            </p>
            <p>
              We also do not publish a headcount or a founding story here. Both
              are easy to write and impossible for you to check, and this page
              is meant to be the opposite of that.
            </p>
          </div>

          <Note>
            The photographs on this site show the valley rather than the people
            in it. Several of the pictures we hold show trekkers and staff whose
            written consent we do not have on file, so those stay unpublished
            until we do.
          </Note>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="What to read next">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              The trek itself is set out day by day, with altitudes and walking
              hours, on{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link>. If you
              are still deciding how long to take,{" "}
              <Link href="/how-many-days">how many days you need</Link> compares
              the three lengths we run.
            </p>
            <p>
              The paperwork you need for yourself, as opposed to ours, is on{" "}
              <Link href="/permits">permits and fees</Link>. Two permits, no
              TIMS card, both arranged for you.
            </p>
          </div>

          <ActionCard
            title="Ask us something specific"
            body="Dates, group size, who is guiding, or anything on this page you want the certificate for. We answer the awkward ones too."
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
  // Empty for now, in step with every other page. Organization schema on this
  // page would have to carry `legalName`, and that is the one field this page
  // cannot fill until the TODO above is resolved by a human. Adding the schema
  // with the brand name in the legal-name slot would assert something untrue to
  // a machine while the visible page is careful not to.
  jsonLd: [],
};

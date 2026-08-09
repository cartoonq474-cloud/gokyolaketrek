// /privacy, written 2026-08-09.
//
// Everything on this page is checkable against the code, which is unusual for a
// privacy policy and is the reason this one is worth reading:
//
//   packages/ui/src/components/InquiryForm.tsx   the fields, all of them
//   app/api/enquiry/route.ts                     where the post goes, the
//                                                honeypot, and the in-memory
//                                                per-IP rate limiter
//   app/layout.tsx                               no analytics, no tag manager
//
// If a field is added to the form, or a script is ever added to the layout,
// this page is wrong until it is updated. Treat that as part of the change.
//
// Two blanks are marked on the page rather than guessed at: the retention
// period, and whether the operator wants to state a position on any particular
// data protection regime. The writing brief forbids claiming GDPR compliance,
// inventing a data protection officer, or quoting a registration number that
// does not exist, and a small Kathmandu operator borrowing that language from
// another site would be the least trustworthy paragraph on the whole domain.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

/** One field of the enquiry form, and the only reason it exists. */
const FIELDS = [
  {
    field: "Your name",
    why: "So we can write back to a person. Required.",
  },
  {
    field: "Email address",
    why: "The address the reply goes to. Required, and the only field we genuinely cannot work without.",
  },
  {
    field: "Mobile number",
    why: "Optional. Useful when the answer is quicker on WhatsApp than by email, which it often is across time zones.",
  },
  {
    field: "Where you are booking from",
    why: "A region picked from a short list, not an address. It tells us your time zone and roughly how your flights will work.",
  },
  {
    field: "Which itinerary",
    why: "The 15, 19 or 21-day trip, or 'not sure yet'. It decides which half of the answer you get.",
  },
  {
    field: "Rough dates",
    why: "A month is enough. It decides what we can tell you about weather, lodge space and the Lukla flight.",
  },
  {
    field: "Group size",
    why: "A number. It changes the price and it changes what accommodation we can hold.",
  },
  {
    field: "Your message",
    why: "Whatever you write. Required, because an enquiry with nothing in it cannot be answered.",
  },
];

/** A blank the operator has to fill. Same block as the one on /terms. */
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
  slug: "privacy",
  route: "/privacy",
  title: "Privacy Policy",
  description:
    "What we collect when you enquire, what we do with it, how long we keep it and how to have it deleted.",
  hero: {
    title: "Privacy",
    titleFontSize: "clamp(2.3rem, 6vw, 3.6rem)",
    subtitle:
      "One form, eight fields, no trackers. This page says what happens to what you type, in the order it happens.",
    image: "/images/lake-reflection-cairn.webp",
    aspect: "4 / 3",
    minHeight: 480,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="collect" eyebrow="The short answer" title="What we collect">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Everything this site knows about you, you typed into the enquiry
              form. There is nothing else: no analytics account, no advertising
              pixel, no session recording, and no cookie banner because there
              are no cookies to ask you about.
            </p>
            <p>
              The form has eight fields. This is all of them, and what each one
              is for.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold tracking-[0.1em] text-[var(--muted)] uppercase sm:px-5">
                      Field
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold tracking-[0.1em] text-[var(--muted)] uppercase sm:px-5">
                      Why it is there
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FIELDS.map((row) => (
                    <tr
                      key={row.field}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                        <b className="text-[var(--ink)]">{row.field}</b>
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.88rem] leading-6 text-[var(--body)] sm:px-5">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            The short form in the sidebar of the trek pages asks for fewer of
            these than the long one, and none of them is a trick. There is also
            one field you
            will never see, sitting off the edge of the page, which exists to
            catch automated spam. It is marked read-only so a browser or an
            assistant cannot fill it by accident, and anything arriving with it
            filled in is discarded. It collects nothing about you.
          </Note>
        </div>
      </Section>

      <Section
        id="trackers"
        eyebrow="Unusual, so worth saying"
        title="There are no trackers on this site"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              No Google Analytics. No Meta pixel. No tag manager, no heatmap, no
              session replay, no chat widget reporting back to a third party. We
              are not telling you we respect your privacy. We are telling you
              there is nothing installed here to do anything with it.
            </p>
            <p>
              That is unusual enough to be worth stating plainly, because most
              trekking sites you compare us against load a dozen third-party
              scripts before their first photograph, and every one of those
              scripts sees the pages you read. You can check ours. View the
              source of any page on this site and count the domains it talks to.
            </p>
            <p>
              The honest counterweight: our server sees the address your request
              came from, which every web server on earth does. Ours uses it for
              one thing, a short-lived counter that stops the enquiry form being
              used to send spam. The counter lives in memory rather than a
              database, it is not attached to your enquiry, and nobody reads it.
            </p>
          </div>

          <Note>
            If we ever add analytics, this page changes before the script does.
            That is the commitment, and it is one of the few privacy promises
            anyone can verify from the outside in about thirty seconds.
          </Note>
        </div>
      </Section>

      <Section id="why" eyebrow="Why" title="Why we collect it">
        <div className={PROSE}>
          <p>
            To answer you properly. Your dates, group size and the region you are
            booking from are what let us reply with something useful instead of a
            brochure: whether those dates work, what the Lukla flight is likely
            to be doing that month, and what the trek costs for that many people.
          </p>
          <p>
            We do not use any of it for marketing. There is no mailing list on
            this site, so there is nothing to be added to, and nothing to
            unsubscribe from later. If you never hear from us again after your
            enquiry is answered, that is the design working.
          </p>
          <p>
            If you go on to book, we need more than the form collects, chiefly
            your passport details. That is not curiosity: permits are issued
            against the passport you carry and the details have to match, which{" "}
            <Link href="/permits">the permits page</Link> explains. Those details
            come later, by email or in person in Kathmandu, and they are used for
            the permits and for an emergency contact. Nothing else.
          </p>
        </div>
      </Section>

      <Section
        id="where"
        eyebrow="Where it goes"
        title="Where your enquiry actually goes"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The form posts to <strong>/api/enquiry</strong> on this domain. Our
              own endpoint, not a third-party form service. It turns what you
              wrote into an email and sends it to the inbox the guiding team
              reads.
            </p>
            <p>
              Being precise about that last step, because it is where most
              privacy pages get vague: it is an email, so it travels through an
              email provider exactly the way every email you have ever sent does.
              We have no way around that and neither does anyone else. What does
              not happen is your details being sold, rented, handed to another
              operator, or passed to an advertising network.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>Who reads it</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                The small team in Kathmandu who run this trek. Your guide sees
                your name, your dates and anything you told us that matters on
                the hill, such as a medical condition or a dietary requirement.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>Who does not</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Everybody else. No agent, no affiliate, no lead broker, no
                advertising platform. This site does not resell enquiries, which
                is a real business model in trekking and not one we are in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="keep" eyebrow="How long" title="How long we keep it">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              An enquiry that never turns into a trek is of no use to us and we
              would rather not be holding it. If you do book, the enquiry becomes
              part of your trip file and stays with the booking record for that
              trek.
            </p>
          </div>

          <Todo>
            The exact retention period for enquiries that do not become bookings,
            and how long booking records are kept for the operator's accounts and
            licence obligations. Until those are set, the deletion route in the
            next section is the reliable one, and it works today.
          </Todo>
        </div>
      </Section>

      <Section id="delete" eyebrow="Your call" title="How to have it deleted">
        <div className={PROSE}>
          <p>
            Ask us, and we delete it. Say which email address you enquired from
            and that you want it removed. We delete the enquiry and reply to
            confirm it is done. There is no form to fill in, no account to log
            into and no waiting period, because there is no system here beyond an
            inbox.
          </p>
          <p>
            A correction works the same way. Wrong dates, a phone number you
            would rather we did not keep, a message you would like taken out: say
            so and it changes.
          </p>
          <p>
            The one thing we will not delete is the record of a trek you actually
            went on, which stays with the accounts for that trip. Everything else
            goes.
          </p>
        </div>
      </Section>

      <Section
        id="claims"
        eyebrow="Plainly"
        title="What this page does not claim"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              We are not claiming compliance with any particular data protection
              regime. A claim like that is worth nothing without the machinery
              behind it, and copying the paragraph from a bigger company's site
              would make this the least honest page on the domain.
            </p>
            <p>
              There is no data protection officer here. There is no registration
              number to quote at you. This is a small trekking team in Kathmandu
              with an email inbox, and the truthful version of a privacy policy
              for that is the list above rather than three pages of borrowed
              language.
            </p>
          </div>

          <Todo>
            Which jurisdiction's data protection rules the operator wants to
            state a position on, if any, and the exact wording for it. Anyone
            selling to trekkers in the UK or the EU should take advice on this
            rather than lift a paragraph from another operator's site, which is
            how most of them ended up claiming things they cannot do.
          </Todo>
        </div>
      </Section>

      <Section
        id="prefer"
        eyebrow="If you would rather not"
        title="You do not have to use the form at all"
      >
        <div className={PROSE}>
          <p>
            The phone number and the WhatsApp link in the header reach the same
            people as the form. If you would rather ask about the trek without
            leaving an email address anywhere, do that instead. We would rather
            answer the question.
          </p>
          <p>
            Most of what people email to ask is already on the site and needs no
            enquiry at all. The day-by-day with every altitude and walking hour
            is on <Link href="/itinerary/15-day">the 15-day itinerary</Link>, the
            permit answer is on <Link href="/permits">the permits page</Link>,
            and how this site decides what is true in the first place is set out
            on the editorial policy.
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

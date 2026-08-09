// /contact.
//
// WhatsApp is how this operator actually converts, so WhatsApp leads the page
// and gets the only green button on the site. The form is second and the email
// address third, in that order, deliberately.
//
// NOTE, and the reason the ordering is not just a design preference:
// `gokyoConfig.email` is info@gokyolaketrek.com and that mailbox DOES NOT EXIST
// YET. See the TODO on the `email` field in content/config.ts. Until somebody
// creates it and forwards it to the operator's inbox, a mailto link on this
// page bounces silently, which is the worst possible failure on a contact page.
// So nothing here depends on email alone: the address is listed for
// completeness, and every route that has to work (WhatsApp, phone, the form,
// which posts to /api/enquiry and uses ENQUIRY_TO_EMAIL from the environment)
// is given more weight than it is.
//
// This page sets `withRail: false`, so there is no inquiry rail supplying the
// "#inquiry" anchor the rest of the site links to. The full form below carries
// that id instead, which keeps every "#inquiry" link on the site landing
// somewhere real.
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { InquiryForm } from "@6ktreks/ui";
import {
  BTN_GHOST,
  CARD,
  Gl,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Sub,
} from "../design-kit";
import { gokyoConfig } from "../config";

const WA_HREF = `https://wa.me/${gokyoConfig.whatsapp}`;
const TEL_HREF = `tel:+${gokyoConfig.whatsapp}`;

const WA_BTN =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--wa)] px-6 py-3 text-[0.95rem] font-bold text-white transition-colors duration-150 hover:bg-[var(--wa-hover)]";

export const page: TrekPage = {
  slug: "contact",
  route: "/contact",
  title: "Contact Us About the Gokyo Lake Trek",
  description:
    "Ask about dates, group size, the itinerary or the price. WhatsApp, email and an enquiry form, answered by the people who run the trek rather than an agent.",
  hero: {
    title: "Contact us",
    subtitle:
      "WhatsApp is the fastest way to reach us, and it reaches the people who run the trek. The form below is for the longer questions.",
    image: "/images/ngozumpa-moraine.webp",
    aspect: "4 / 3",
    minHeight: 460,
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="how" eyebrow="The short answer" title="How to reach us">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              Message us on WhatsApp at{" "}
              <strong>{gokyoConfig.phoneDisplay}</strong>. It is the number our
              office actually watches, it is the same number on Viber, and it
              goes to the company that runs the trek rather than to an agent
              selling it on.
            </p>
            <p>
              If your question needs more than a couple of lines, use the form
              further down instead. Either way the same people answer.
            </p>
          </div>

          <div
            className={`${CARD} flex flex-wrap items-center gap-5 border-[var(--wa)] bg-[var(--tint)] p-5 sm:p-6`}
          >
            <div className="min-w-[240px] flex-1">
              <p className="text-[1.05rem] font-semibold text-[var(--ink)]">
                WhatsApp {gokyoConfig.phoneDisplay}
              </p>
              <p className="mt-1 text-[0.92rem] leading-6 text-[var(--muted)]">
                Same number for calls and Viber. Send rough dates and how many
                of you there are, and we can quote from that.
              </p>
            </div>
            <a
              className={WA_BTN}
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gl glyph="whatsapp" />
              Open WhatsApp
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${CARD} p-5`}>
              <span className="text-[var(--brand-ink)]">
                <Gl glyph="phone" className="h-5 w-5" />
              </span>
              <Sub>Phone</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                <a href={TEL_HREF}>{gokyoConfig.phoneDisplay}</a>. Nepal is a
                long way ahead of most of our trekkers, so check the time before
                you ring.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <span className="text-[var(--brand-ink)]">
                <Gl glyph="email" className="h-5 w-5" />
              </span>
              <Sub>Email</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                <a href={`mailto:${gokyoConfig.email}`}>{gokyoConfig.email}</a>.
                Slower than the other two, and worth avoiding if your dates are
                close.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <span className="text-[var(--brand-ink)]">
                <Gl glyph="address" className="h-5 w-5" />
              </span>
              <Sub>Office</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                {gokyoConfig.address}. It is the only office we have.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="what-to-send"
        eyebrow="Faster"
        title="What to put in the first message"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Five things get you a real answer instead of a follow-up question:
              your rough dates, how many of you there are, which itinerary you
              are looking at, what walking you have done before, and anything
              about altitude, diet or medication we should know now rather than
              on day 6.
            </p>
          </div>

          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Worth saying up front</Sub>
            <ul className={`mt-3 space-y-2 ${PROSE_SM}`}>
              <li>
                Rough dates, even a month. Spring and autumn book out earliest.
              </li>
              <li>
                Group size, including anyone travelling separately to meet you
                in Kathmandu.
              </li>
              <li>
                Which trip: the 15-day Gokyo trek, the 19-day version with
                Everest Base Camp, or the 21-day Three Passes.
              </li>
              <li>
                Your walking background, and the highest you have slept before.
              </li>
              <li>
                Anything medical, dietary or practical that changes the answer.
              </li>
            </ul>
          </div>

          <div className={PROSE}>
            <p>
              Not sure which trip yet is a perfectly good answer.{" "}
              <Link href="/how-many-days">How many days you need</Link> sets the
              three lengths side by side, and{" "}
              <Link href="/itinerary/15-day">the 15-day itinerary</Link> is the
              standard one most people start from.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="inquiry"
        eyebrow="The long version"
        title="Send us the whole question"
      >
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              Nothing is committed by sending this. There is no deposit to ask a
              question, and we will not chase you afterwards.
            </p>
          </div>

          <InquiryForm
            config={gokyoConfig}
            variant="full"
            heading="Ask us anything"
            submitLabel="Send enquiry"
          />
        </div>
      </Section>

      <Section id="reply" eyebrow="Timing" title="When you will hear back">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              In Nepal working hours, most enquiries are answered within an hour
              or two. Nepal runs on UTC+5:45, so an evening message from Europe
              or an afternoon one from North America arrives in the middle of
              the Nepali night, and the reply will land in your morning.
            </p>
            <p>
              What we will not do is promise you a fixed number of minutes every
              day of the year. Spring and autumn are the busy months, a guide
              can be on the trail with no signal, and a day of cancelled Lukla
              flights takes the whole office. Any operator quoting you a
              guaranteed response time is quoting a marketing line.
            </p>
            <p>
              If you have heard nothing after 24 hours, send it again on
              WhatsApp. That is not you being a nuisance, it means something
              went wrong at our end and we want to know.
            </p>
          </div>

          <Note>
            Check your spam folder before you assume we have ignored you.
            Replies to enquiries do end up in there, and neither of us finds out
            until it is too late to matter. It is one more reason WhatsApp is
            the route we point people at.
          </Note>
        </div>
      </Section>

      <Section id="where" eyebrow="Where we are" title="The office in Kathmandu">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              We work out of {gokyoConfig.address}. There is no branch office
              abroad and no representative in your country, so everything on
              this site is answered from here.
            </p>
            <p>
              You are welcome to come in when you are in Kathmandu, and plenty
              of trekkers do the day before they fly to Lukla. Message first
              rather than turning up, because in season much of the team is out
              with groups and we would rather someone useful was there when you
              arrive.
            </p>
          </div>

          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Before you book, if you want</Sub>
            <p className={`mt-2 ${PROSE_SM}`}>
              Ask for a video call. Seeing who you are dealing with is a fair
              thing to want from a company on the other side of the world that
              you found through a search result, and it is a reasonable thing to
              ask for before any money changes hands.
            </p>
          </div>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="While you wait for a reply">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              The three questions we are asked most are already answered on the
              site.{" "}
              <Link href="/permits">Permits and fees</Link> covers which permits
              the Everest region actually needs and which are included.{" "}
              <Link href="/lakes">The lakes</Link> names all six and says why the
              water is that colour.{" "}
              <Link href="/gokyo-ri">Gokyo Ri</Link> covers the climb to
              5,357 m, which is the day most people are really asking about.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className={WA_BTN}
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gl glyph="whatsapp" />
              WhatsApp us
            </a>
            <a className={BTN_GHOST} href="#inquiry">
              <Gl glyph="email" />
              Use the form
            </a>
          </div>
        </div>
      </Section>
    </div>
  ),
  selfStyled: true,
  narrow: false,
  // No rail: the full form below is the enquiry route on this page, and two
  // copies of the same form on one screen is a worse page, not a better one.
  withRail: false,
  withTrust: true,
  withContacts: true,
  jsonLd: [],
};

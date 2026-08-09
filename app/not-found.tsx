import type { Metadata } from "next";
import Link from "next/link";
import { TrekLayout } from "@6ktreks/ui";
import { gokyoConfig } from "@/content/config";

/**
 * 404 page.
 *
 * Next's default is 11 KB of markup with no header, no footer, no <main> and
 * zero links: a dead end for anyone who mistypes a URL, and for a crawler that
 * followed one of the footer links to a route that does not exist yet. This
 * renders the real chrome instead.
 *
 * The rail is off deliberately: someone who has just hit a wall should be given
 * their way back to the content, not an enquiry form.
 *
 * Note that right now this page carries real weight, because only "/" exists.
 * Every itinerary, cost and guide link in the header and footer lands here.
 */
export const metadata: Metadata = {
  title: { absolute: `Page not found | ${gokyoConfig.trekName}` },
  description:
    "That page does not exist yet. Link here back to the Gokyo Lake Trek overview.",
};

export default function NotFound() {
  return (
    <TrekLayout
      config={gokyoConfig}
      withRail={false}
      withTrust={false}
      narrow
      hero={{
        title: "Page not found",
        subtitle:
          "This site is still being built, so most of the links in the menu do not go anywhere yet.",
        image: "/images/lakeshore-trail.webp",
        minHeight: 420,
      }}
    >
      <section id="where-next">
        <h2>Where you probably meant to go</h2>
        <p>
          Only the overview page exists at the moment. Everything else in the
          navigation is a route that has been designed but not written.
        </p>
        <ul>
          <li>
            <Link href="/">Gokyo Lake Trek overview</Link>: what the trek is,
            what it costs and who it suits.
          </li>
        </ul>
        <p>
          If you were looking for something specific, message us on{" "}
          <a href={`https://wa.me/${gokyoConfig.whatsapp}`}>WhatsApp</a> or email{" "}
          <a href={`mailto:${gokyoConfig.email}`}>{gokyoConfig.email}</a>.
        </p>
      </section>
    </TrekLayout>
  );
}

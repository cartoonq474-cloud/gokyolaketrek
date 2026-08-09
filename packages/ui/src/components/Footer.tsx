import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { FooterLink, TrekConfig } from "../data/types";
import { SocialIcon } from "./SocialIcon";
import footer from "../footer.json";

/**
 * Sitewide footer.
 *
 * Every route and every profile URL comes from the TrekConfig passed in, never
 * from footer.json. That file is shared verbatim across the sibling trek
 * domains, so it has no way to know which routes exist on this one: it used to
 * ship "/disclaimer" and "/booking-policy" (neither exists here, roughly 40
 * links to 404s), a Facebook href of "#", and a link set that omitted /map,
 * /thorong-la-pass, /faq and /about entirely. What is left in footer.json is
 * the copy that genuinely is the same on every site.
 *
 * The legal pages are not repeated in a bottom strip. They sit in the operator
 * column, which is one link surface rather than two.
 */

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    // A <nav> per column, named by its own heading, so the footer contributes
    // two navigation landmarks rather than 22 loose links in a content sink.
    <nav aria-label={heading}>
      <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-white">
        {heading}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {/* Chrome links repeat on all 22 pages, and prefetching every one
                of them costs 112 to 150 KB of RSC payload per view on mobile
                data. The footer is the least likely thing on the page to be
                clicked next, so it opts out. */}
            <Link
              href={link.href}
              prefetch={false}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer({ config }: { config: TrekConfig }) {
  const waHref = `https://wa.me/${config.whatsapp}`;

  return (
    <footer className="bg-[var(--brand-navy)] text-white">
      <div className="container mx-auto px-4 py-14 md:px-6">
        {/* <FooterNewsletter /> */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" prefetch={false} className="inline-block mb-4">
              {/* Dark band, so the light lockup. */}
              {config.logoLight || config.logo ? (
                <Image
                  src={(config.logoLight ?? config.logo) as string}
                  alt={config.brand}
                  width={859}
                  height={240}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-[1.35rem] font-bold leading-none tracking-tight text-white">
                  {config.brand}
                </span>
              )}
            </Link>
            <p className="text-sm leading-relaxed text-white/80 mb-6">
              {footer.brandBlurb}
            </p>
            <div className="flex items-center gap-3">
              {config.social.map(({ label, href, platform }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[var(--brand)] hover:text-white [&>svg]:h-4 [&>svg]:w-4"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn
            heading={footer.trekLinksHeading}
            links={config.footerTrekLinks}
          />

          <LinkColumn
            heading={footer.operatorLinksHeading}
            links={config.footerOperatorLinks}
          />

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              {footer.contactHeading}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm text-white/80">{config.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp size={16} className="mt-0.5 shrink-0 text-white" />
                <div className="text-sm text-white/80">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block"
                  >
                    {config.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-white" />
                <a
                  href={`mailto:${config.email}`}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {config.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-lg bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white mb-1">
                {footer.licensedByLabel}
              </p>
              <p className="text-xs text-white/60">{footer.licensedByText}</p>
            </div>
          </div>
        </div>

        {/* <Separator className="my-8 bg-brand-dark" /> */}

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {footer.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}

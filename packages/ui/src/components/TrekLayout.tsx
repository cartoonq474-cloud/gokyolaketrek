import type { HeroCta, NavItem, TrekConfig } from "../data/types";
import { IconSprite } from "../icons/Sprite";
import { TopBar } from "./TopBar";
import { Subnav } from "./Subnav";
import { Hero } from "./Hero";
import { InquiryRail } from "./InquiryRail";
import { TrustStrip, ContactsBar, Mbar } from "./Chrome";
import Footer from "./Footer";
import MountainDivider from "./mountainDivider";

type LayoutProps = {
  config: TrekConfig;
  /**
   * Page body as JSX, rendered inside <main> itself rather than a wrapper, the
   * stylesheet targets `.content > section`, so sections must stay direct children.
   */
  children?: React.ReactNode;
  /** Optional subnav items (page-specific anchors). Omit to skip subnav. */
  subnav?: NavItem[];
  /** Hero props. Omit `hero` entirely to skip. */
  hero?: {
    title: string;
    /** Override for the h1 size on interior/legal pages. */
    titleFontSize?: string;
    /** Keep the h1 on one line. Needs a titleFontSize that shrinks with the viewport. */
    titleOneLine?: boolean;
    subtitle?: string;
    image: string;
    minHeight?: number | string;
    /** Size the frame to the photo's shape so none of it crops. Landscape only. */
    aspect?: string;
    contentLow?: boolean;
    ctas?: HeroCta[];
  };
  /** Set false for legal pages that don't want the inquiry rail. Default true. */
  withRail?: boolean;
  /** Licence/trust strip above the footer. Default true. */
  withTrust?: boolean;
  /** Blue contacts bar above the footer. Default true. */
  withContacts?: boolean;
  /** Constrain the single-column content to a reading measure (legal pages). */
  narrow?: boolean;
  /**
   * The page brings its own styling, so <main> drops the `content` class and
   * with it the global section chrome and typography. See TrekPage.selfStyled.
   */
  selfStyled?: boolean;
};

export function TrekLayout({
  config,
  children,
  subnav,
  hero,
  withRail = true,
  withTrust = true,
  withContacts = true,
  narrow = false,
  selfStyled = false,
}: LayoutProps) {
  // `content` carries the global section chrome and typography; a self-styled
  // page drops it and brings its own.
  //
  // `min-w-0` is not part of that choice and belongs on both. <main> is a grid
  // item in the `.layout` two-column grid, and a grid item defaults to
  // `min-width: auto`, meaning the 1fr track refuses to shrink below its
  // content's min-content width. Withholding it left every non-self-styled
  // page pinned open by its widest table: narrowing the window did nothing
  // until the 960px breakpoint dropped the grid to one column.
  const mainClass = selfStyled ? "min-w-0" : "content min-w-0";

  return (
    <>
      <IconSprite />
      {/*
        Roughly 20 chrome links sit before <main> on every page: the header nav,
        the drawer and, on most pages, the subnav. Without this a keyboard user
        traverses all of them again on each page (WCAG 2.4.1). The link is
        off-screen until focused, styled by `.skip-link` in global.css: Tailwind's
        `sr-only` / `focus:not-sr-only` pair cannot do it here, because the
        unlayered `.sr-only` in global.css outranks Tailwind's utility layer.
      */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TopBar config={config} />

      {hero && (
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          image={hero.image}
          titleFontSize={hero.titleFontSize}
          titleOneLine={hero.titleOneLine}
          minHeight={hero.minHeight}
          aspect={hero.aspect}
          contentLow={hero.contentLow}
          ctas={hero.ctas}
        />
      )}

      {subnav && <Subnav items={subnav} />}

      {withRail ? (
        <div className="wrap layout">
          <main id="main" tabIndex={-1} className={`${mainClass} px-2`}>
            {children}
          </main>
          <InquiryRail config={config} />
        </div>
      ) : (
        <div className="wrap" style={{ padding: "34px 20px 10px" }}>
          <main
            id="main"
            tabIndex={-1}
            className={mainClass}
            style={narrow ? { maxWidth: 860, margin: "0 auto" } : undefined}
          >
            {children}
          </main>
        </div>
      )}

      {withTrust && <TrustStrip credentials={config.credentials} />}
      {/* {withContacts && (
        <ContactsBar
          whatsapp={config.whatsapp}
          phoneDisplay={config.phoneDisplay}
          email={config.email}
        />
      )} */}
      <MountainDivider />
      <Footer config={config} />

      {/*
        The sticky mobile action bar. Rendered last so its spacer is the final
        thing on the page and nothing ends up trapped under the bar.

        On a page without the rail there is no #inquiry anchor to jump to, so
        the enquire half points at /contact instead of scrolling nowhere.
      */}
      <Mbar
        whatsapp={config.whatsapp}
        phoneDisplay={config.phoneDisplay}
        fromPrice={config.fromPrice}
        currency={config.currency}
        inquiryHref={withRail ? "#inquiry" : "/contact"}
      />
    </>
  );
}

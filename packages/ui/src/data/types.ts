export type NavItem = {
  label: string;
  href: string;
  /** Present on a top-bar item that opens a dropdown instead of navigating. */
  children?: { label: string; href: string; note?: string }[];
};

/**
 * An internal path, e.g. "/cost".
 *
 * Written as a template literal rather than `string` so Next's typedRoutes
 * accepts it in a <Link href> on its own. A plain `string` does not satisfy
 * `Route`, which is what pushed the footer into `href={link.href as Route}`,
 * and that cast turned route checking off for every link it touched.
 *
 * Worth knowing: every content page is served by `app/[slug]/page.tsx`, so the
 * generated route union is `/` plus a one-segment dynamic. typedRoutes can tell
 * "/a/b/c" from a real route, but it cannot tell "/cost" from "/disclaimer".
 * Route existence needs the link check in seo/audit F-9, not the type system.
 */
export type Path = `/${string}`;

/** One footer link. A NavItem without the dropdown, and route-typed. */
export type FooterLink = { label: string; href: Path };

export type HeroCta = { label: string; href: string; variant: "green" | "purple" };

/**
 * One cell of the fact bar along the foot of a feature hero. Keep these to the
 * numbers a buyer is actually comparing on: duration, high point, season, price.
 * Anything that needs a sentence belongs in the quick-facts table, not here.
 */
export type HeroFact = { label: string; value: string };

/** Social networks the footer has a brand mark for. See components/SocialIcon.tsx. */
export type SocialPlatform = "facebook" | "instagram" | "tiktok" | "linkedin" | "youtube";

/**
 * One rendered page of a trek site, authored directly as a module in
 * `content/pages/`. These modules ARE the source of truth, edit them by hand.
 */
export type TrekPage = {
  /** URL slug, "" for the home page. */
  slug: string;
  /** Route path, "/" or "/cost". */
  route: string;
  /** ISO date to publish as the sitemap <lastmod>. Omit to leave it out. */
  lastModified?: string;
  /** Full <title>, used verbatim (it already carries the brand suffix). */
  title: string;
  description: string;
  hero: {
    title: string;
    titleFontSize?: string;
    /** Keep the h1 on one line. Needs a titleFontSize that shrinks with the viewport. */
    titleOneLine?: boolean;
    subtitle?: string;
    image: string;
    /** px number, or any CSS length, the homepage uses a viewport clamp. */
    minHeight?: number | string;
    /**
     * Size the frame to the photo's own shape so none of it is cropped, e.g.
     * "4 / 3". Landscape photos only: a 3:4 portrait shown whole is a 1920px
     * tall hero at 1440px wide.
     */
    aspect?: string;
    /** Drop the copy to the foot of the frame when the photo's subject is centred. */
    contentLow?: boolean;
    ctas?: HeroCta[];
  };
  subnav?: NavItem[];
  /** Page body as JSX. Rendered directly inside <main class="content">. */
  content: React.ReactNode;
  /**
   * The page styles itself, so <main> drops the `content` class.
   *
   * That class is what applies the global section chrome and the `.content h2`
   * / `.content img` typography from global.css. Those rules are unlayered,
   * and unlayered CSS beats Tailwind's `@layer utilities` whatever the
   * specificity, so a Tailwind-authored page has to opt out of them rather
   * than try to override them.
   */
  selfStyled?: boolean;
  narrow: boolean;
  withRail: boolean;
  withTrust: boolean;
  withContacts: boolean;
  jsonLd: Record<string, unknown>[];
};

export type TrekConfig = {
  /** Domain e.g. "annapurnabasecamptrek.co.uk" */
  domain: string;
  /** Trek name e.g. "Annapurna Base Camp Trek" */
  trekName: string;
  /** Short name e.g. "Annapurna Base Camp" */
  trekShort: string;
  /** Brand e.g. "6K Nepal Treks" */
  brand: string;
  /** Company hub domain, no scheme e.g. "6knepaltreks.com" */
  hub: string;
  /** Full postal address of the operator */
  address: string;
  /** Short place name for footer/disclaimer lines e.g. "Pokhara, Nepal" */
  city: string;
  /**
   * The operator's registration and membership numbers, as printed on the
   * certificates themselves. Every one of these is checkable by a buyer against
   * the issuing body, which is the entire point of showing them: "TAAN member"
   * with no number is a claim, "TAAN member 2016-1599" is a fact.
   *
   * Any field left empty simply prints the credential without a number rather
   * than printing an empty one.
   */
  credentials: {
    /** Office of the Company Registrar, certificate of incorporation. */
    companyRegistration?: string;
    /** Department of Tourism trekking agency licence. */
    tourismLicence?: string;
    /** Trekking Agencies' Association of Nepal membership ID. */
    taanId?: string;
    /** Nepal Mountaineering Association membership number. */
    nmaId?: string;
  };
  /** Real social profiles. `platform` picks the brand mark drawn in the footer. */
  social: { label: string; href: string; platform: SocialPlatform }[];
  /**
   * Path to the brand logo, e.g. "/images/logo-foo.png". Used on light grounds:
   * the header once it has scrolled to white.
   *
   * Omit it and the chrome renders a text wordmark from `brand` instead. That
   * is the right default: the Annapurna build hardcoded the 6K Treks artwork
   * into TopBar and Footer, so a site for a different brand inherited another
   * company's logo with alt text claiming it was its own. A plain wordmark is
   * honest and looks deliberate until real artwork exists.
   */
  logo?: string;
  /**
   * Light version of the same lockup, for dark grounds: the footer, the mobile
   * drawer, and the header before it scrolls, where it sits over a hero photo.
   *
   * Three of the four places the logo appears are dark, so a site that sets
   * `logo` alone will render dark artwork on dark ground in most of them. Falls
   * back to `logo`, then to the wordmark.
   */
  logoLight?: string;
  /** Hero image path */
  heroImage: string;
  /**
   * Lead-in price, in `currency`. Null when the operator has not published one:
   * the chrome then invites an enquiry instead of printing a figure, and the
   * TouristTrip schema omits its offer rather than asserting a made-up price.
   */
  fromPrice: number | null;
  /** ISO 4217 code. Drives both the displayed symbol and the schema. */
  currency: string;
  /** WhatsApp number (international format, no +) */
  whatsapp: string;
  /** Display phone */
  phoneDisplay: string;
  /** Email */
  email: string;
  /** Primary nav */
  nav: NavItem[];
  /** Footer "this trek" links. Rendered by Footer.tsx, one column each. */
  footerTrekLinks: FooterLink[];
  /** Footer operator links, including the legal pages. */
  footerOperatorLinks: FooterLink[];
  /** Reviews aggregate */
  reviews: {
    score: number;
    count: number;
    items: ReviewItem[];
  };
};

export type ReviewItem = {
  initials: string;
  name: string;
  /** Which trek and when. The reviews carry no city. */
  context: string;
  /**
   * Where the review was published. TripAdvisor was added for
   * gokyolaketrek.com, whose operator's reviews are TripAdvisor-sourced. The
   * Annapurna build quotes Google reviews and is unaffected.
   */
  source: "Google" | "TripAdvisor";
  rating: number;
  text: string;
};

export const defaultNav: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "Itinerary", href: "/#itinerary" },
  { label: "Cost", href: "/cost" },
  { label: "Reviews", href: "/reviews" },
  { label: "Guides", href: "/best-time" },
  { label: "Contact", href: "/contact" },
];

export const defaultOperatorLinks: NavItem[] = [
  { label: "About the operator", href: "/about" },
  { label: "All reviews", href: "/reviews" },
  { label: "How to pay", href: "/cost" },
  { label: "Terms & cancellation", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

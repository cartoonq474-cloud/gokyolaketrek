import type { TrekConfig, NavItem } from "@6ktreks/ui";

/**
 * Site configuration for gokyolaketrek.com.
 *
 * BRANDING DECISION, 2026-08-08: this site runs as its own trek brand, "Gokyo
 * Lake Trek". The operating company's name is deliberately NOT used anywhere
 * public: not in the brand, the hub, the copyright line, the titles or the
 * social links. What is taken from the operator is their reviews and their
 * licence number, nothing else.
 *
 * The operator research stays in `seo/research/operator-nepalintrepidtreks.md`
 * for internal reference. That file is not published.
 *
 * NOTE for whoever builds /about and /terms: Nepal law, the payment flow and
 * TripAdvisor attribution all attach to a registered company, so the operating
 * entity has to be named somewhere on the site even though the brand is not it.
 * The front-facing brand and the copyright line can stay "Gokyo Lake Trek".
 *
 * Currency is USD, which the operator's whole product list is priced in. That
 * settles the market question the first pass left open.
 */
export const gokyoConfig: TrekConfig = {
  domain: "gokyolaketrek.com",
  trekName: "Gokyo Lake Trek",
  trekShort: "Gokyo Lakes",
  brand: "Gokyo Lake Trek",
  hub: "gokyolaketrek.com",
  address: "Nayabazar-16, Kathmandu, Nepal",
  city: "Kathmandu, Nepal",
  /**
   * Read directly off the certificate scans on the operator's /legal-documents/
   * page, 2026-08-08. The numbers are burned into the images and appear nowhere
   * in text on their site, so they were transcribed by eye. Re-check each one
   * against the certificate before launch.
   *
   * taanId: the membership is current, confirmed by the owner 2026-08-08. The
   * certificate scan on the operator's own site is simply out of date, its last
   * renewal row reads 16 July 2026. The membership ID does not change on
   * renewal, so the number below is the right one either way.
   *
   * Worth passing back to the operator: a buyer who checks their credentials
   * page sees a certificate that looks lapsed. That is a trust signal working
   * backwards, and it is a five-minute fix on their end.
   *
   * Not published, and deliberately: the PAN certificate. A tax number is not a
   * trust signal to a trekker and there is no reason to put it on a web page.
   */
  credentials: {
    companyRegistration: "145190/072/073",
    tourismLicence: "2102",
    taanId: "2016-1599",
    nmaId: "1234",
  },
  /**
   * Both generated from `brand/logo-master.png` by `pnpm brand`. The light one
   * is not optional decoration: three of the four places the chrome renders a
   * logo are dark grounds (the footer, the mobile drawer, and the header before
   * it scrolls, where it sits over the hero photograph). The dark lockup is
   * invisible in all three.
   */
  logo: "/images/logo-gokyo-lake-trek.png",
  logoLight: "/images/logo-gokyo-lake-trek-light.png",
  /**
   * Empty on purpose. The only profiles that exist are the operating company's
   * own, branded with their name, so linking them would defeat the branding
   * decision above. This site needs its own accounts, or the field stays empty.
   */
  social: [],
  /**
   * The wide shot of the third lake with the Ngozumpa moraine behind it. Chosen
   * because it is landscape, so the hero frame does not have to crop it hard,
   * and because nobody in it is identifiable. Six of the fifteen photographs
   * show recognisable faces and none of them have a consent record yet, see
   * photos/CONSENT.md.
   */
  heroImage: "/images/gokyo-lake.webp",
  /**
   * Null, because the operator publishes no price for this trek. Verified
   * 2026-08-08: every comparable Everest itinerary of theirs carries one (EBC
   * 16 days US $1,485, EBC with Cho La 19 days US $1,860, Three Passes 21 days
   * US $2,075) but Gokyo has none anywhere on the page, in its markup, or in
   * search results.
   *
   * This used to hold 1095, inherited from the Annapurna clone and rendered
   * with a pound sign. That was a GBP price from a different company on a site
   * selling in dollars, which is worse than no price at all. The chrome now
   * invites an enquiry instead, and the schema omits its offer.
   *
   * For scale when the operator sets one: competitors run a 17-day Gokyo to EBC
   * at USD 1,750 and a 15-day EBC with Gokyo at USD 1,250. Do not adopt either.
   */
  fromPrice: null,
  currency: "USD",
  // The operator's real number. A phone number gives no company name away, so
  // this one stays as-is and reaches the people who run the trek.
  whatsapp: "9779851002409",
  phoneDisplay: "+977 9851002409",
  /**
   * TODO, BLOCKER before launch: this mailbox does not exist yet.
   *
   * The operator's own address is info@ their company domain, which would print
   * their name in the footer and in every mailto link and defeat the branding
   * decision at the top of this file. So the brand needs its own address.
   *
   * Create info@gokyolaketrek.com and forward it to the operator's inbox before
   * this site goes anywhere public, or enquiries sent by mailto will bounce.
   * The enquiry form itself posts to /api/enquiry and is unaffected, it uses
   * ENQUIRY_TO_EMAIL from the environment.
   */
  email: "info@gokyolaketrek.com",
  /**
   * The lengths now match the operator's real product list, not a guess. Their
   * Gokyo package is 15 days; the two longer options are their own Everest
   * itineraries that include the Gokyo valley.
   *
   * TODO: none of these pages exist yet, only "/" does, so every one of them
   * lands on the 404. Build them before this site is public.
   */
  nav: [
    { label: "Overview", href: "/" },
    {
      label: "Itinerary",
      href: "/itinerary/15-day",
      children: [
        {
          label: "15 days, the standard Gokyo",
          href: "/itinerary/15-day",
          note: "Kathmandu to Kathmandu",
        },
        {
          label: "19 days, with Everest Base Camp",
          href: "/itinerary/with-everest-base-camp",
          note: "Adds the Cho La crossing",
        },
        {
          label: "21 days, the Three Passes",
          href: "/itinerary/three-passes",
          note: "The fullest version",
        },
        {
          label: "How many days do I need?",
          href: "/how-many-days",
          note: "The lengths compared",
        },
      ],
    },
    { label: "Cost", href: "/cost" },
    { label: "The lakes", href: "/lakes" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  footerTrekLinks: [
    { label: "Overview", href: "/" },
    { label: "15-day itinerary", href: "/itinerary/15-day" },
    { label: "Cost & dates", href: "/cost" },
    { label: "Route map", href: "/map" },
    { label: "The Gokyo lakes", href: "/lakes" },
    { label: "Gokyo Ri", href: "/gokyo-ri" },
    { label: "Reviews", href: "/reviews" },
  ],
  footerOperatorLinks: [
    { label: "About the operator", href: "/about" },
    { label: "All reviews", href: "/reviews" },
    { label: "How to pay", href: "/cost" },
    { label: "Terms & cancellation", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Editorial policy", href: "/editorial-policy" },
    { label: "Contact", href: "/contact" },
  ],
  /**
   * Real reviews, and every one of them names Gokyo. This is the thing the
   * Annapurna build could not do: its reviews were genuine but for a different
   * trek, so they had to be framed as reviews of the guides. These are on the
   * trek this site sells.
   *
   * Source is TripAdvisor, via the operator's own reviews page. Three items
   * rather than four, because only three distinct Gokyo trips exist. See the
   * duplicate note below.
   *
   * Each excerpt was chosen to be about the trek and the guiding, and none of
   * them names the operating company, which keeps them consistent with the
   * branding decision at the top of this file. Do not swap in an excerpt that
   * names the company without checking that first.
   *
   * QUOTING: these are excerpts, not full reviews, which is what the card is
   * sized for. Wording inside each excerpt is exactly as published, except that
   * em-dashes have been normalised to house punctuation. Full text and the
   * TripAdvisor link are in seo/research/operator-nepalintrepidtreks.md.
   *
   * TODO before launch:
   * - "Melani Lin, 17 Apr 2026" on the source site is the SAME trip and text as
   *   Hung Chin Chiu below, published a day apart under two names. Only one can
   *   be real. Confirm the attribution before quoting either.
   * - `score` and `count` are the operator's TripAdvisor figures. Their About
   *   page says "150+" while the rest of the site says 156. Confirm, because
   *   both numbers feed AggregateRating once schema is added.
   */
  reviews: {
    score: 5.0,
    count: 156,
    items: [
      {
        initials: "C",
        name: "ChiChi",
        context: "Gokyo Lake Trek, Mar 2025",
        source: "TripAdvisor",
        rating: 5,
        text: "Trekking to Gokyo Lake had been a dream of mine for years. My guide, Jiban, was amazing: knowledgeable, supportive, and always attentive to my well-being. With Jiban's support and constant encouragement, I was able to push myself to climb Gokyo Ri, where I was rewarded with stunning views of the majestic Himalayan mountains.",
      },
      {
        initials: "HC",
        name: "Hung Chin Chiu",
        context: "EBC and Gokyo Lakes, Apr 2026",
        source: "TripAdvisor",
        rating: 5,
        text: "While EBC remains one of Nepal's most popular routes during the peak seasons (March to May and September to November), far fewer trekkers venture onto the Gokyo circuit. However, given its incredible beauty, I am confident this route will see growing appreciation in the future.",
      },
      {
        initials: "YS",
        name: "yong Syuan Lin",
        context: "EBC and Gokyo Lake via Cho La, Dec 2025",
        source: "TripAdvisor",
        rating: 5,
        text: "I completed the Everest Base Camp Trek and Gokyo Lake via Chola Pass, and it was absolutely extraordinary. The well-paced itinerary allowed for proper acclimatization, and the team made sure we were always well-prepared for each ascent.",
      },
    ],
  },
};

export const gokyoSubnav: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Gokyo Ri", href: "#gokyo-ri" },
  { label: "Cost", href: "#cost" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#inquiry" },
];

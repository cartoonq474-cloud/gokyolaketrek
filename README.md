# gokyolaketrek.com

A design clone of [annapurnacircuittrek.co.uk](https://annapurnacircuittrek.co.uk),
retargeted to the Gokyo Lake trek, with the operator's own Gokyo photography in
it.

**26 of 41 pages are written, with real content.** Every nav and footer link
resolves. The one thing still missing is the operator's price for the 15-day
trek: `content/pages/cost.tsx` has a single `HEADLINE_PRICE` constant waiting
for it. See "Open questions" below.

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint       # tsc, then the em-dash and JSX-spacing checks
pnpm build
pnpm photos     # re-run the JPEG to WebP conversion
```

## What was cloned

Verbatim from the Annapurna build, because that is what "clone the design" means:

```
packages/ui/          The chrome. TopBar, Hero, Footer, TrekLayout, InquiryRail,
                      InquiryForm, Blocks, Itinerary, JsonLd builders, icons.
  src/styles/global.css   The whole design system: palette, type scale, every
                          component rule. One file, ~1,700 lines.
next.config.ts        Security headers, immutable image caching, typed routes.
scripts/              The em-dash and JSX-spacing lint gates.
```

The palette, the type scale (`--t-xs` through `--t-lg`), the hover rule, the
contrast decisions and the reasoning comments all came across untouched.

## The one structural change

On the Annapurna build the page-level primitives (`Section`, `DayCard`,
`MarkList`, `PROSE`, `CARD`, the button classes) lived at the top of
`content/pages/home.tsx`, so the second page to want a `Section` would have had
to copy it. Here they are pulled out into `content/design-kit.tsx` and exported.

Nothing about how they render changed. There are now two design layers, and they
are different things:

| Layer | Where | Scope |
|---|---|---|
| Chrome | `packages/ui` | shared across every trek domain, knows nothing about this site |
| Page kit | `content/design-kit.tsx` | what a page body is built from |

## Three bugs fixed in passing

All inherited from the clone source and all still live there:

1. **`.skip-link` had no CSS.** `TrekLayout` renders a skip link and its comment
   says `global.css` styles it. That rule did not exist, so "Skip to content"
   rendered as visible black text above the hero on every page. Added to
   `global.css`, off-screen until focused.
2. **`quality={80}` on the mountain divider.** Next 16 only generates the
   qualities listed in `images.qualities`, which defaults to `[75]`, so the
   divider's request was refused and warned about on every build. `next.config.ts`
   now declares `[75, 80]`.
3. **The logo was hardcoded.** `TopBar` and `Footer` pointed at
   `/images/logo-6k-treks-mark.png` in three places while the alt text read
   `${config.brand}`. Any site using this chrome shipped 6K Treks artwork
   labelled as its own brand. Now `TrekConfig.logo`, with a wordmark fallback.

Worth porting all three back to `annapurnacircuittrek.co.uk`.

## Photos

15 photographs, phone-shot, 3 to 5.6 MB each.

```
fwdphotos/, fwdphotos (1)/   The original JPEGs. Do not delete, see CONSENT.md.
photos/web/                  15 WebP, every one under 350,000 bytes
photos/manifest.csv          original to WebP, both dimensions, bytes, quality
photos/CONSENT.md            READ THIS. Six photos show identifiable people.
public/images/               What the site actually serves
```

`scripts/photos-to-webp.sh` walks quality down from 82 in steps of 4, and only
once quality bottoms out at 58 does it drop the longest edge. Quality first,
because resolution is the lossy change you cannot undo later. The ceiling is
350,000 bytes rather than 350 x 1024, so the files read as under 350 KB in
Finder too.

Largest output: 348.7 KB. Three of the fifteen (`ngozumpa-moraine`,
`trekker-cairn`, `guide-portrait`) needed two resolution steps down to 1350 px
because loose scree compresses badly. They are body-copy photographs, not heroes.

## The operator, and how it is branded

The trek is operated by a Kathmandu trekking company, researched in
`seo/research/operator-nepalintrepidtreks.md`. That file is internal.

**Their name is deliberately kept off the front end.** This site runs as its own
brand, "Gokyo Lake Trek": brand, copyright, titles, email and social links all
carry that and nothing else. What is used from the operator is **their reviews
and their licence number**. See `CLAUDE.md` for the rule and its one exception.

Because of that decision:

- `config.social` is empty. The only profiles that exist are the operator's, and
  they carry their name.
- `config.email` is `info@gokyolaketrek.com`, **a mailbox that does not exist
  yet**. Create and forward it before launch or mailto links will bounce.

## Brand assets

`brand/logo-master.png` is the supplied artwork and the single source. Everything
else is generated:

```sh
pnpm brand
```

| Output | What it is |
|---|---|
| `public/images/logo-gokyo-lake-trek.png` | full colour, transparent. The scrolled white header |
| `public/images/logo-gokyo-lake-trek-light.png` | navy and slate turned white, blue lifted. Footer, drawer, hero header |
| `app/icon.png`, `apple-icon.png`, `favicon.ico` | the hiker glyph, white on brand navy |

Two derivatives exist because three of the four places the chrome draws a logo
are dark grounds, so the supplied dark lockup is invisible in most of them. The
app icons use the hiker alone because a two-line wordmark is unreadable at 32px.

The palette is sampled from that same file: blue `#016FCD`, navy `#081C3A`,
slate `#4D5667`. See `CLAUDE.md` for the tokens and the one trap
(`--brand` is a light-background colour; dark grounds want `--brand-on-dark`).

## What is real and what is not

Real, from the operator's own site, captured 2026-08-08:

- The 15-day itinerary, with every altitude, distance and duration
- The inclusions and exclusions
- The FAQ questions
- Three TripAdvisor reviews, each of which names Gokyo
- Address, phone and WhatsApp

Still placeholder:

- All connecting prose: lead paragraphs, section framing, the "why book with us"
  list. Labelled in `content/pages/home.tsx`.
- Four of the seven FAQ answers, marked "TO BE ANSWERED". The operator's own
  answers sit in a collapsed accordion that does not render to a scraper.
- `fromPrice`. See below.

Deliberately absent:

- **The remaining 15 pages.** 26 of 41 are built and every nav and footer link
  resolves. What is left is the long tail: `/nepal/*`, the remaining `/route/*`
  and `/plan/*` nodes, and the destination sub-pages. Build order and cadence are
  in `seo/topical-map.md`.
- **The written content.** The strategy is done, the prose is not. `jsonLd` is an
  empty array on the homepage, on purpose: schema encodes a page's claims, and a
  `TouristTrip` carrying a placeholder price would be a lie in machine-readable
  form. Add it once the price is real.

## The SEO strategy

Built 2026-08-08 on live data, in `seo/`:

| File | What it is |
|---|---|
| `source-context.md` | Koray skill 1. Central entity, intent, borders, quality nodes |
| `research/serp-consensus.md` | Charles Floate SERP research. Live SERPs, structural and entity consensus, gaps |
| `topical-map.md` | Koray skill 5. 38 pages, Core and Outer, with real volumes and difficulty |
| `topical-map-audit.md` | The adversarial recheck. Read this before writing anything |

The headline finding: the destination entities out-volume the product term
("gokyo lakes" 590/mo, "gokyo ri" 480/mo, against "gokyo lake trek" at 210), and
the whole cluster sits at KD 4 to 23. Small niche, genuinely winnable, so the
plan is a small map with deep content rather than a large thin one.

**Read `topical-map-audit.md` first.** It overrides parts of the map it audits.

## Open questions for the owner

1. **The price.** BLOCKER. The operator publishes none for Gokyo, though every
   comparable Everest trek of theirs has one. Their 16-day EBC is US $1,485 and
   their 19-day EBC with Cho La is US $1,860, but do not infer from that. The
   market band for a guided 12 to 14 day Gokyo trek is USD 1,150 to 1,800.
2. **Which permits they actually buy.** Their inclusions list says TIMS, but the
   Everest region replaced TIMS with the Khumbu Pasang Lhamu municipality
   permit. The homepage currently carries a VERIFY marker on this.
3. **A duplicate review.** Two reviews on the source site are the same trip and
   text, published a day apart under different names. Only one can be real.
4. **Consent** for the six photographs with faces in them.

Resolved: all four credential numbers were read off the certificate scans and
are live in the trust strip, and the TAAN membership is confirmed current (their
own scan is just out of date, worth telling them).
5. **Logo artwork** for the Gokyo Lake Trek brand, or the wordmark stays.

Market and currency are now settled: international, USD. See `CLAUDE.md`.

## Project rules

`CLAUDE.md` carries them. The short version: no em-dashes anywhere, `pnpm lint`
fails on one. En-dashes are correct for numeric ranges.

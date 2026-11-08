# Project rules

## Status: design clone, no real content

The design is cloned from `annapurnacircuittrek.co.uk` and is final. The copy is
placeholder and is not. Do not treat any sentence, number, price or review on
this site as true. Do not deploy it anywhere public until the copy is written,
and do not add SEO schema describing claims the page does not yet make.

## Punctuation: no em-dashes, anywhere

This project contains **zero em-dashes** (U+2014) and must stay that way. That
covers page copy, headings, title tags, meta descriptions, JSON-LD, alt text, code
comments, commit messages, and Markdown docs.

Em-dashes are the single clearest tell of machine-written copy. This is a
trust-led travel site selling a high-altitude trek, so the copy has to read as if
a person wrote it.

### What to use instead

| Job the em-dash was doing | Use |
|---|---|
| Appositive or aside: "the summit, 5,357 m, is the point" | comma |
| Explanation or a list follows: "the trade-off is real: fewer lodges, worse food" | colon |
| What follows is a full sentence: "That order matters. You do the hard part first." | full stop |
| Label then description in a list item or table cell | colon |
| Title tag / meta separator | pipe `\|` |
| Empty table cell or missing value | `n/a` |

En-dashes (`–`, U+2013) are **allowed and correct** for numeric ranges: `3–4 days`,
`8–10 h`, `−5 to −15 °C`. Do not convert those to hyphens.

### Enforcement

`pnpm lint` runs `scripts/check-no-emdash.mjs` and fails on any em-dash character or
on its named and numeric HTML entity forms. Run it directly with `pnpm check:dashes`.

### JSX whitespace gotcha

Never start a JSX text line with punctuation:

```jsx
{/* wrong: renders "12-day , the" with a space before the comma */}
</Link>
, the

{/* right */}
</Link>,
the
```

JSX joins wrapped lines with a single space, so punctuation must stay attached to the
end of the previous line. `pnpm check:spacing` enforces this.

## Branding: never name the operating company

This site runs as its own brand, **Gokyo Lake Trek**. The company that actually
operates the trek is **not** named in any public-facing string: not the brand,
the copyright line, the titles, the meta descriptions, the email address or the
social links. Their name appears only in `seo/research/`, which is internal.

What is taken from the operator: **their reviews and their licence number.**
Nothing else.

Two consequences to respect:

- Do not reintroduce their logo, their social profiles, or their `info@` address.
  The header and footer render a text wordmark from `config.brand`; supply
  `TrekConfig.logo` only when this brand has its own artwork.
- When picking a review excerpt, check it does not name the company. The three
  currently in `content/config.ts` were chosen partly for that.

The one exception: `/about` and `/terms`, when they exist, have to name the
registered operating entity. Nepal law, the payment flow and TripAdvisor
attribution all attach to a real company. The brand and copyright line stay
"Gokyo Lake Trek".

## Market: international, priced in USD

Settled 2026-08-08 from the operator's own site. Every trek they sell is priced
in USD and their reviewers are from Taiwan, Singapore, the Philippines, the USA
and across Europe. `lang` is `en`, not `en-GB`.

Do not introduce a second currency. The one price this site needs is still
missing, see below.

## The price is a launch blocker

The operator publishes no price for Gokyo, although every comparable Everest
trek of theirs has one. `fromPrice` in `content/config.ts` is still the number
inherited from the Annapurna clone and is **not** their price. Get the real
figure before launch, and note the cloned components assume a pound sign.

## Photos

All fifteen photographs are cleared for use, consent confirmed by the owner on
2026-08-09, including the six showing identifiable people. Use them: a page about
guiding that shows only empty landscapes is weaker for it.

A **new** photograph does not inherit that clearance. Add it to the table in
`photos/CONSENT.md` with its own status first. And do not caption anyone by name
unless the name is confirmed: consent to appear is not consent to be named.

Every WebP in `public/images/` must be under 350,000 bytes. `pnpm photos`
regenerates the set from the original JPEGs and enforces that. Do not hand-place
an image that skipped the script.

Replacing a photo means giving it a **new filename**, never overwriting the old
one: `next.config.ts` serves `/images/*` as `immutable` for a year.

## The design system

Two layers, and they are not the same thing:

- `packages/ui` is chrome shared across every 6K Treks trek domain. It must not
  learn this site's routes, price or phone number. Site-specific values come in
  through `TrekConfig`.
- `content/design-kit.tsx` is what a page body is made of. Import from here in
  `content/pages/*` rather than re-declaring a `Section` or a `CARD`.

## Palette: sampled from the logo, four colours

Retuned 2026-08-08 from `brand/logo-master.png`. Never hardcode a Tailwind
colour like `blue-500` in the chrome; every brand colour flows from a token in
`global.css`.

| Token | Value | Use |
|---|---|---|
| `--brand` | `#016FCD` | the logo's "Lake" blue. Accents, fills, rules, tints |
| `--brand-ink` | `#016FCD` | text and white-on-fill. 5.05:1, clears AA |
| `--brand-on-dark` | `#5FB0FF` | the same blue lifted, **for dark grounds only** |
| `--brand-navy` | `#081C3A` | the logo's "Gokyo" navy. Footer, subnav, hero scrim |
| `--wa` | `#25D366` | WhatsApp buttons ONLY. Carries `--ink` text, never white |

`--ink` and `--body` are the logo's navy and slate, not neutral greys. Tints and
hairlines are all mixed from the brand blue, so no fifth colour enters.

**The one trap:** `--brand` is a *light-background* colour. On the hero scrim,
the subnav or the footer it is close to unreadable, which is exactly the bug the
cloned header shipped with. Use `--brand-on-dark` there.

## Logo

`brand/logo-master.png` is the master. `pnpm brand` regenerates everything from
it: the two lockups in `public/images/`, plus `app/icon.png`, `apple-icon.png`
and `favicon.ico` from the hiker glyph.

`TrekConfig.logo` is the dark lockup, for the scrolled white header.
`TrekConfig.logoLight` is for dark grounds, and three of the four places the
chrome draws a logo are dark, so it is not optional. Never point either at
another site's artwork.

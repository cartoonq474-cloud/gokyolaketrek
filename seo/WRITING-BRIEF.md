# Writing brief: the contract every page must meet

Read this before writing any page module. It is the shared standard, and a page
that breaks any of the HARD RULES will fail `pnpm lint` or get reverted.

---

## HARD RULES

1. **No em-dashes anywhere.** Not in copy, not in code comments. `pnpm lint`
   fails on a single one. Use a comma, colon or full stop. En-dashes are fine in
   numeric ranges. Empty table cells use `n/a`.
2. **Never name the operating company.** This site is its own brand, "Gokyo Lake
   Trek". The operator's real name appears only in `seo/research/`, never in a
   page. Say "we", "our guides", "the team".
3. **Only `<Link href>` to pages that already exist.** `typedRoutes` is on and
   will fail the build otherwise. Currently built:
   `/`, `/itinerary/15-day`, `/itinerary/with-everest-base-camp`,
   `/itinerary/three-passes`, `/how-many-days`, `/lakes`, `/gokyo-ri`,
   `/permits`. If you want to reference anything else, write the sentence
   without a link.
4. **Never invent a fact.** No prices, no altitudes, no distances, no dates that
   are not in `seo/research/`. If you need a fact you do not have, write the
   sentence so it does not need one, or leave a clearly marked TODO.
5. **Never state a price for the 15-day Gokyo trek.** It is unpublished. The 19
   and 21-day trips do have prices: US $1,860 and US $2,075.
6. **Never start a JSX text line with punctuation.** JSX joins wrapped lines with
   a space, so `, the` on a new line renders as " , the". `pnpm lint` checks it.

## Canonical facts, use these exact values everywhere

| Fact | Value |
|---|---|
| Trek length | 15 days, Kathmandu to Kathmandu, 10 walking days |
| Gokyo Ri | 5,357 m, day 9, 4.6 km, 3 to 4 hours round trip |
| Highest night | Gokyo valley, 4,750 m |
| Namche Bazaar | 3,443 m, acclimatisation day 5 |
| Everest View Hotel hike | 3,880 m |
| Dhole | 4,038 m. Machhermo 4,447 m. Phakding 2,650 m. Lukla 2,850 m |
| Kathmandu | 1,355 m |
| Cho La | 5,420 m |
| Kala Patthar | 5,545 m (on the 19 and 21-day routes only) |
| Permits | Sagarmatha National Park NPR 3,000 + Khumbu Pasang Lhamu municipality NPR 3,000. **No TIMS in this region** |
| Municipality permit | Cannot be bought in Kathmandu. Lukla or Monjo only |
| Guides | **Not legally required in the Everest region.** Khumbu is exempt from Nepal's national rule |
| Season | Spring Mar to May, autumn Sep to Nov. Nov and Dec work if you are happy with cold |
| Reviews | 5.0 on TripAdvisor, 156 reviews, across all treks not Gokyo alone |
| Credentials | Dept of Tourism licence 2102, company reg 145190/072/073, TAAN 2016-1599, NMA 1234 |

## Voice

Read `content/pages/lakes.tsx` and `content/pages/permits.tsx` first. Match them.

- Plain, specific, unhurried. Short sentences beat long ones.
- **Lead with the direct answer.** First sentence under a heading answers the
  heading. No preamble, no "nestled in the heart of the Himalayas".
- **Say the unflattering thing.** The site's whole competitive position is that
  forums outrank operators because operators hedge. Tell people when a trek is
  not for them, when the view might be cloud, when a rule does not favour us.
- No superlatives you cannot support. No "breathtaking", "iconic",
  "once-in-a-lifetime", "nestled", "gateway to".
- British spelling: acclimatisation, kilometre, metre, colour.
- Numbers in headings where the query is numeric.

## Page module shape

Create `content/pages/<name>.tsx` exporting `page`. Do **not** touch
`content/pages/index.ts`; the registry is wired centrally.

```tsx
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

export const page: TrekPage = {
  slug: "plan/best-time",          // full path, no leading slash
  route: "/plan/best-time",
  title: "...",                    // under ~60 chars, from titles-metas-urls.md
  description: "...",              // ~155 chars, from titles-metas-urls.md
  hero: {
    title: "...",
    subtitle: "...",
    image: "/images/<one of the list below>",
    aspect: "4 / 3",               // or "1 / 1" for the square photos
    minHeight: 480,                // optional
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="..." eyebrow="..." title="...">
        ...
      </Section>
    </div>
  ),
  selfStyled: true,
  narrow: false,
  withRail: true,
  withTrust: true,
  withContacts: true,
  jsonLd: [],
};
```

## Design kit API, `../design-kit`

| Export | Use |
|---|---|
| `Section({id, eyebrow, title, children})` | every top-level section |
| `Sub({children})` | h3 inside a section |
| `PROSE` / `PROSE_SM` | className for prose blocks. Wrap `<p>`s in `<div className={PROSE}>` |
| `CARD` | className for a bordered white card |
| `Note({children})` | tinted aside with an info icon |
| `MarkList({tone, items})` | tick or cross list. tone is `"inc"` or `"exc"` |
| `ActionCard({title, body, ctaLabel, ctaHref})` | boxed CTA |
| `ItineraryTable({days})` | day-by-day table, `ItineraryDay[]` |
| `DayCard({title, image, alt, width, height, stats, children})` | one featured day |
| `Stars`, `Gl({glyph})` | rating stars, sized icon |
| `BTN_SOLID` / `BTN_GHOST` | button classNames |

Tables: use the pattern in `lakes.tsx`. Wide tables go inside
`<div className="overflow-x-auto">` with `min-w-[640px]` on the table, because
the page must never scroll sideways.

## Photography

Landscape, 4:3, no identifiable faces, safe to use:
`gokyo-lake.webp` (1800x1350), `ngozumpa-glacier.webp` (1800x1350),
`gokyo-village-lakeshore.webp` (1800x1350), `lake-reflection-cairn.webp`
(1800x1350), `lakeshore-trail.webp` (1800x1350), `ngozumpa-moraine.webp`
(1350x1012).

Square 1:1: `gokyo-lake-dusk.webp` (1800x1800), `lake-mirror-peaks.webp`
(1350x1350), `prayer-flags-peak.webp` (1350x1350).

People, **cleared for use 2026-08-09**, consent confirmed by the owner:
`guide-and-trekker.webp` (2400x1803), `guide-and-trekker-lake.webp` (2400x1803),
`trekker-cairn.webp` (1350x1012), `guide-portrait.webp` (1350x1012),
`trekker-lake-shore.webp` (1800x2400 portrait),
`trekker-lake-view.webp` (1800x2400 portrait).

Use the people shots. They are the one thing a competitor cannot copy, and a
page about guiding that shows only empty landscapes is weaker for it. Do not
caption anyone with a name: consent to appear is not consent to be named.

Always give `width` and `height` (prevents layout shift), `loading="lazy"`, and
alt text that describes what is in the frame rather than repeating the heading.
Wrap in `<figure>` with a `<figcaption>` that adds information.

## Structure every page needs

1. An opening `Section` whose first sentence directly answers the page's title
   question. This is what AI Overviews extract.
2. Three to six sections. Each independently useful, because passage ranking
   means a reader can land on any one of them.
3. A closing section that hands the reader onward, to a built page or to the
   enquiry form (`href="#inquiry"`).

## Verify before you finish

Run from the repo root:

```sh
pnpm lint
```

It must print both green ticks. Fix anything it reports. Do not run `pnpm build`,
and do not edit any file outside your assigned page modules.

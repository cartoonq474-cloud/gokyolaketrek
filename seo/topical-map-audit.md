# Topical map audit: gokyolaketrek.com

Koray framework audit of `seo/topical-map.md`, run 2026-08-08 immediately after
the map was built. Deliberately adversarial. A map nobody argued with is a map
nobody checked.

---

## Executive summary

**Semantic SEO health of the plan: 6.5 / 10.**

The map is well grounded (live SERPs, real volumes, real difficulty) and its
central insight is sound: the destination entities out-volume the product term,
so `/gokyo-lakes` and `/gokyo-ri` are traffic, not filler. Borders are unusually
well drawn for an EMD.

But it has **one structural incoherence, four live cannibalisation risks, one
factual landmine, and a missing query network.** Two of those would have caused
real damage if content had been written straight off this map, which is exactly
why the recheck came before the writing.

**Do not start writing until items C1, C2 and C3 below are resolved.**

---

## Dimension scores

| Dimension | Score | Evidence |
|---|---|---|
| Cost of Retrieval | 7 | 38 pages, flat, no crawl traps. But `/cost` and `/map` are contextless URLs, and there is no processed map yet, so no title or meta discipline exists |
| Topical Authority | 6 | Vastness deliberately sacrificed (small niche, correct call) and depth planned, but **momentum is entirely undefined**. Coverage x historical data, and half that equation is missing |
| Four Pillars | 6 | Contextual vector strong, borders excellent. Hierarchy is incoherent at the Core/Outer boundary (see C1). Connection map exists but is one-directional |
| Content Quality | 7 | First-hand assets are real (photos, named guides, quotable reviews, credential numbers). Undermined by C3, an inherited factual error |
| Semantic Content Network | 5 | Entities identified but **no query network and no PAA enumeration**. The questions API returned zero and no fallback was run. That is a hole, not a finding |
| Technical / Koray lens | 7 | Sound. Sitemap derives from the registry, lastmod is honest, internal linking planned. Nothing rendered client-side that matters |

---

## Critical issues

### C1. The Core/Outer split contradicts itself. **Structural.**

The map places `/gokyo-lakes` (590/mo) and `/gokyo-ri` (480/mo, CPC $1.31) in the
**Outer Section**, then immediately argues they are "first-class nodes" and "not
filler, they are traffic".

Both cannot be true. In Koraynese, Core is densified around the main attribute
and unifies source context with central search intent; Outer covers minor
attributes to improve historical data. A page carrying the highest volume on the
site, the highest CPC, and a direct path to the product is **not a minor
attribute**.

**Ruling:** promote `/gokyo-lakes` and `/gokyo-ri` into the **Core Section** as a
fifth cluster, "The destination". Core becomes 17 pages, Outer 21. This is not
cosmetic: Core gets built first and gets the deepest briefs, and under the
current map the two highest-value pages would have been built fourth.

### C2. Four cannibalisation risks, unresolved. **High.**

| Pair | Conflict | Ruling |
|---|---|---|
| `/` root vs `/gokyo-lakes` | "gokyo lakes trek" (260) vs "gokyo lakes" (590) are adjacent SERPs | Root = **the trek**, product and decision. `/gokyo-lakes` = **the place**, definitional, what/where/why/named lakes. Neither may carry an itinerary table |
| `/gokyo-ri` vs `/15-day...` | "gokyo ri trek" (90, CPC $1.22) has no owner | `/gokyo-ri` owns it. The trek pages link to it and do not target it |
| `/is-gokyo-lake-trek-worth-it` vs `/gokyo-vs-everest-base-camp` vs `/difficulty-and-fitness` | Three pages answering "should I do this" | **Delete `/is-gokyo-lake-trek-worth-it`.** It is a query with no independent entity behind it. Fold its angle into the comparison page |
| `/altitude-and-acclimatisation` vs `/altitude-sickness` | Same macro context | Keep both only under a hard border: acclimatisation = **the schedule** (why the Namche day, ascent rates). Sickness = **the medical event** (symptoms, descent, treatment). If a brief cannot hold that line, merge |

Also flagged: `/how-many-days-gokyo-lake-trek` overlaps the itinerary cluster
heavily. Keep it, because the duration question genuinely has no SERP consensus
and that is a real gap, but it must be **definitional and comparative** across
all lengths, never a fourth itinerary.

### C3. A factual landmine, already shipped. **Critical.**

The map assumed the standard "Nepal requires a licensed guide since 2023" line
and planned `/do-i-need-a-guide` around it. **That is wrong for this region.**

Verified 2026-08-08: the **Everest region is exempt**. Khumbu Pasang Lhamu Rural
Municipality holds that a guide is not mandatory, it disputed the Nepal Tourism
Board's ban (Kathmandu Post, April 2023), and solo trekkers there pay the NPR
3,000 municipality permit plus NPR 3,000 park entry **instead of TIMS**.

Two consequences:

1. `/do-i-need-a-guide` must answer **"legally, no, not here"** and then argue
   when you still should. Asserting a legal requirement that does not exist would
   be both false and transparently self-serving, and it is precisely why Reddit
   outranks operators on this query. The honest answer is the competitive one.
2. **The permits fact was already wrong on the homepage.** It said "TIMS card and
   Sagarmatha National Park entry", inherited from the operator's own inclusions
   list. Khumbu replaced TIMS with the municipality permit. Corrected in
   `content/pages/home.tsx` and marked VERIFY, because the operator's list and
   the documented position now disagree and only they can say what they actually
   buy.

This is the single most valuable thing the audit caught.

### C4. No query network. **Medium.**

Koray skill 3 was skipped. `people_also_ask` is present on nearly every SERP in
the cluster and the map notes this but never enumerates a single question. The SE
Ranking questions endpoint returned zero rows for "gokyo" and **no fallback was
run**, which was recorded as a finding when it was actually a gap.

Without the question set the content briefs have no heading skeleton and
information responsiveness cannot be planned. Run a PAA scrape before briefs.

### C5. Momentum is undefined. **Medium.**

Topical authority = topical coverage x historical data, and historical data is
built by publication rhythm and engagement quality. The map orders the build but
sets no cadence and no date. Given seasonality is known (terms rise to 260/mo in
April and the research season starts February), this is a solvable omission and
currently just missing.

---

## Topical map gaps

Genuine coverage holes found on recheck:

1. **`/gokyo-ri-vs-kala-patthar`. The biggest miss.** These are the two viewpoints
   of the Everest region and choosing between them is exactly the comparison this
   audience runs. It sits perfectly on the site's central argument (a panorama
   versus standing at base camp) and the map does not have it.
2. **`/everest-view-hotel`.** It is day 5 of our own itinerary and has no page. A
   named entity we already sell and do not cover.
3. **Water, charging and connectivity at altitude.** Real tea house questions,
   thin coverage everywhere, and they feed `/cost` (everything above Namche is
   charged for).
4. **Helicopter return and rescue.** A real option, a real upsell, and part of the
   insurance conversation.
5. **The lakes in winter, when they freeze.** Distinctive, visual, and nobody owns
   it.
6. **Sagarmatha National Park wildlife and the Ramsar designation as its own
   node.** The map has Ramsar as a section inside `/gokyo-lakes`; at 590/mo with
   a knowledge graph present, the entity may deserve its own page.

Deliberately still excluded: village pages for Dole, Machhermo and Phakding. Thin,
and they belong inside `/map` and the itinerary rather than as nodes.

---

## Quick wins

1. Promote the two destination pages to Core. Costs nothing, changes build order.
2. Delete `/is-gokyo-lake-trek-worth-it`. One fewer thin page competing with two
   better ones.
3. Add `/gokyo-ri-vs-kala-patthar`.
4. Put the altitude in every itinerary day heading. Universal across ranking
   pages, we do it in body text. Applies to the live homepage today.
5. Build `/map`. KD 4, three variants, AllTrails ranks twice on the head term,
   and we have no map at all.

---

## Strategic recommendations

1. **Set the cadence.** Two deep pages a week from a February start puts the Core
   plus destination clusters live before the April volume rise. Write it down.
2. **Treat AI Overviews as a first-class surface.** `sge` appears across the
   cluster. Every page needs a citable, self-contained answer passage near the
   top.
3. **Do not chase volume, chase the network.** 2,200 to 2,500/mo US at KD 4 to 23
   is won by covering the whole entity space, not by ranking one page.
4. **Spend the first-hand assets deliberately.** The photos, the named guides, the
   quotable reviews and the four credential numbers are the only things a
   competitor cannot replicate. Every Core page should carry at least one.

---

## Action items

**Before any content is written:**

- [ ] C1: promote `/gokyo-lakes` and `/gokyo-ri` to Core, update build order
- [ ] C2: apply the four cannibalisation rulings, delete `/is-gokyo-lake-trek-worth-it`
- [ ] C3: confirm with the operator which permits they actually buy, then state one answer sitewide
- [ ] C4: scrape the PAA set for the head terms, build the query network
- [ ] Add `/gokyo-ri-vs-kala-patthar` and `/everest-view-hotel` to the map
- [ ] Set a publication cadence with a start date

**Then, and only then:**

- [ ] Process the map into titles, metas and URLs (Koray skill 6)
- [ ] Write the root document brief (skill 9)
- [ ] Write content briefs per node (skill 8)

**Still blocking independently of SEO:**

- [ ] The price
- [ ] Photo consent for the six images with faces
- [x] ~~TAAN renewal~~ confirmed current by the owner 2026-08-08. Their own
      certificate scan is stale, which is their fix, not ours

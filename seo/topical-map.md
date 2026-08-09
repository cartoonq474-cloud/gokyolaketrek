# Raw Topical Map: gokyolaketrek.com

Koray skill 5. Built 2026-08-08 from live data, not from memory.

**Inputs:** `seo/source-context.md`, `seo/research/serp-consensus.md` (live SERPs
via Firecrawl), and SE Ranking US keyword metrics pulled the same day. Volumes and
difficulty below are cited from that pull.

- **Source Context:** operator-run single-trek EMD, sells one guided trek direct
  in USD to international trekkers.
- **Central Entity:** Gokyo Lake Trek
- **Central Search Intent:** decide whether to walk the Gokyo valley, then plan
  and book it.

---

## The finding that shapes this map

The keyword pull contradicts the obvious EMD plan. **The destination entities
outrank the product term:**

| Term | Volume/mo (US) | KD | CPC |
|---|---|---|---|
| gokyo lakes / gokyo lake / gokyo lake nepal | **590** | 15 to 16 | $0.41 |
| gokyo ri / gokyo peak / gokyo nepal | **480** | 11 to 14 | **$1.31** |
| gokyo | 390 | 16 | n/a |
| gokyo lakes trek | 260 | 12 | $0.48 |
| gokyo lake trek | 210 | 11 | $0.69 |
| everest three passes trek | 170 | 11 | $0.32 |
| gokyo ri trek / trekking gokyo ri | 90 | 4 to 12 | $1.22 |
| renjo la pass | 90 | 5 | n/a |
| ngozumpa glacier | 50 | 16 | n/a |
| gokyo trek map (+ 2 variants) | 20 each | **4** | n/a |
| gokyo valley trek | 30 | 8 | $1.31 |
| cost / itinerary / difficulty / altitude | 10 each | 6 to 22 | low |

Three consequences:

1. **Place pages are not "Outer" filler here, they are traffic.** A naive EMD map
   buries `/gokyo-lakes` and `/gokyo-ri` under the product. They carry 2.5x the
   product term's volume between them. **They sit in the Core Section**, as
   Cluster 4.
2. **Difficulty is 4 to 23 across the entire cluster.** This niche is genuinely
   winnable. Nothing here needs authority we cannot build.
3. **Volume is small.** The whole core cluster is roughly 2,200 to 2,500/mo US.
   Per Koray's vastness-depth-momentum: we cannot win on vastness, so this is a
   **small map with very deep content**, 39 pages, not 300.

**Every keyword in the cluster is classified informational**, including "gokyo
lake trek cost". That matches the SERP finding that blogs beat package pages on
money queries. Money pages here must be informational in format and commercial
in outcome, never a bare product listing.

**SERP features across the cluster:** `people_also_ask`, `images`, `video`,
`knowledge_graph`, `sge` (AI Overviews), `reviews`, `related_searches`. The
knowledge graph on the entity terms means Google already holds a Gokyo entity, so
our markup has to agree with it. `sge` presence means passages must be citable.
`images` and `video` on nearly every result is why the real photo library matters.

**Seasonality:** the trek terms run 140 to 170/mo Sep to Mar and rise to 260 in
Apr to Jul. Content must be ranking by February to catch the research season.

---

## Revision 2, 2026-08-09

This map has been through its own audit (`topical-map-audit.md`) and the query
network (`query-network.md`). Applied since revision 1:

- **C1.** `/gokyo-lakes` and `/gokyo-ri` promoted from Outer to Core as a fifth
  cluster. Revision 1 called them "first-class nodes" while filing them as minor
  attributes, which is incoherent, and would have built the two highest-value
  pages fourth.
- **C2.** Four cannibalisation rulings applied. `/is-gokyo-lake-trek-worth-it`
  deleted.
- **C4.** Query network built. `/how-many-days-gokyo-lake-trek` promoted to Seed
  on the evidence that duration is the highest-demand question in the cluster by
  6 to 1 over cost.
- Added `/gokyo-ri-vs-kala-patthar` and `/everest-view-hotel`.
- Publication cadence set.

## Metrics

Recounted node by node while processing the map. Revision 2 first stated 39, then
19/20; both were wrong. The real figures:

- Total pages planned: **41**
- Core Section: **23** (56%)
  - of which commercially load-bearing: **17**
  - of which trust and legal, required but monetising nothing: **6**
- Outer Section: **18** (44%)
- Contextual domains in Outer: 3
- Content type split: roughly 70% informational, 20% commercial investigation,
  10% transactional

Core at 56% is well above the framework's usual 30 to 40%. Two reasons, both
deliberate: the destination pages moved into Core because they carry the site's
highest volume, and an EMD's trust pages sit in Core by necessity rather than by
choice. Measured on commercial pages alone it is 17 of 41, which is 41%, and that
is the number to compare against the framework.

---

## Core Section

Direct monetisation. Deep, flat, one or two clicks from home.

### Root article

**`/` Gokyo Lake Trek**
The root document. Carries the central entity and central search intent, links to
every cluster seed. Targets "gokyo lake trek" (210) and "gokyo lakes trek" (260)
and absorbs the informational questions inline, because the SERP for the head term
mixes a forum at 2 and a video at 5 and will not reward a bare product page.

### Cluster 1: The itineraries (the product)

| Node | Role | Target |
|---|---|---|
| `/15-day-gokyo-lake-trek` | **Seed** | the flagship, "gokyo lake trek itinerary" |
| `/how-many-days-gokyo-lake-trek` | **Seed** | the highest-demand question in the cluster |
| `/gokyo-everest-base-camp-cho-la` | Node | "everest base camp gokyo lakes trek" (30), "ebc gokyo" |
| `/gokyo-three-passes-trek` | Node | "everest three passes trek" (170, KD 11) |

`/how-many-days...` was a Node in revision 1, justified only by ranking pages
disagreeing on duration (10, 11, 12, 13, 14, 15 days). The query network then
showed the same question is the **top informational demand for any Everest trek
by a factor of six over cost** (320/mo for "how long is the trek to EBC" against
50 for its cost equivalent). Two independent arguments, same conclusion, so it is
promoted to Seed.

Border with the itinerary pages: this one is **definitional and comparative
across every length**. It must never become a fourth itinerary.

### Cluster 2: Money

| Node | Role | Target |
|---|---|---|
| `/cost` | **Seed** | "gokyo lake trek cost", the biggest gap in the niche |
| `/permits-and-fees` | Node | Sagarmatha park fee, Khumbu municipality fee, TIMS |
| `/how-to-book-and-pay` | Node | transactional, deposit and balance terms |

The cost page is the highest-value build on the site. Editorial breakdowns own
the query, our operator publishes no price at all, and a real itemised number
beats six competing ranges. **Blocked until the operator sets a price.**

### Cluster 3: The decision

| Node | Role | Target |
|---|---|---|
| `/gokyo-vs-everest-base-camp` | **Seed** | the comparison the audience actually runs |
| `/do-i-need-a-guide` | **Seed** | Reddit ranks 2 on the head term for this |
| `/gokyo-ri-vs-kala-patthar` | Node | the two Everest viewpoints, added on audit |

Two forum results rank in the top three for the comparison query, because readers
do not trust an operator that sells both treks. These pages must be willing to
disqualify a reader or they lose to Reddit.

`/is-gokyo-lake-trek-worth-it` was **deleted** on audit. It is a query with no
independent entity behind it and it cannibalised both pages above plus
`/difficulty-and-fitness`. Its angle folds into `/gokyo-vs-everest-base-camp`.

`/do-i-need-a-guide` is promoted to Seed. It carries the site's hardest fact:
**the Everest region is exempt from Nepal's guide mandate**, so the honest answer
is "legally, no". See the audit, C3. An operator that says this plainly and then
argues when you should still hire one is doing the thing the forums currently do
better, and it is the only version of this page that can outrank them.

`/gokyo-ri-vs-kala-patthar` was the biggest gap the audit found. These are the two
viewpoints of the Everest region, choosing between them is exactly the comparison
this audience runs, and it sits directly on the site's central argument that the
reward is a panorama rather than standing at base camp.

### Cluster 4: The destination (promoted from Outer on audit, C1)

The highest-volume pages on the site. Revision 1 filed these as Outer, which
contradicted its own argument that they are traffic rather than filler. In
Koraynese, Core is densified around the **main attribute** of the central entity:
a page carrying the site's highest volume, its highest CPC, and a direct path to
the product is not a minor attribute.

| Node | Role | Volume | KD |
|---|---|---|---|
| `/gokyo-lakes` | **Seed** | **590** | 15 |
| `/gokyo-ri` | **Seed** | **480**, CPC $1.31 | 13 |
| `/ngozumpa-glacier` | Node | 50 | 16 |
| `/everest-view-hotel` | Node | long tail, added on audit | low |
| `/gokyo-village` | Node | long tail | low |
| `/fifth-lake-and-scoundrels-viewpoint` | Node | long tail | low |

`/lakes` must **name the individual lakes** and carry the **Ramsar wetland
designation** (13 September 2007, 7,770 ha). Both are entity sets sitting
unclaimed: nearly every ranking page says "six turquoise lakes" and stops. The
cheapest defensible differentiator in the map.

Verified names and altitudes, from Wikipedia's sourced table rather than from
trekking blogs, which disagree with each other: Dudh Pokhari / Gokyo Cho
(4,700 m, 42.9 ha), Thonak Cho (4,710 m, **65.07 ha, the largest**), Gyazumpa Cho
(4,750 m, 29 ha), Tanjung Cho (4,740 m, 16.95 ha), Ngojumba Cho (4,735 m,
14.39 ha). The wider system holds **19 lakes**, not six; six is how many the trail
passes.

**Do not claim "the highest freshwater lake system in the world".** The sourced
claim is "one of the highest". Several competitors make the stronger claim and it
is not supportable.

`/gokyo-ri` also owns "gokyo peak", which the data shows is a synonym at the same
480 volume, and it owns "gokyo ri trek" (90, CPC $1.22). The trek pages link to
it and do not target it.

`/everest-view-hotel` is day 5 of our own itinerary and had no page. A named
entity we already sell and did not cover.

**Do not target bare "gokyo" (390/mo).** The long-tail pull shows that term is
contaminated by judo (*gokyo no waza*, *kodokan gokyo*) and a manga, which is why
it carries navigational intent. Different entity cluster. Let it go.

### Cluster 5: Trust and E-E-A-T

`/about`, `/reviews`, `/contact`, `/terms`, `/privacy`, `/editorial-policy`.

`/about` carries the credentials with their numbers (Company Registrar
145190/072/073, Dept of Tourism licence 2102, TAAN 2016-1599, NMA 1234) and is
where the operating company is named, per the branding decision.

---

## Outer Section

Authority and topical coverage. Wide, may sit deeper, links back into Core.

Domain 1, "The place", was **moved to the Core Section** on audit. See Cluster 4
above. It was the highest-volume domain on the site and did not belong in Outer.

### Domain 1: The route

| Node | Role | Volume | Links into Core |
|---|---|---|---|
| `/map` | **Seed** | ~60 combined, **KD 4** | `/15-day...` |
| `/cho-la-pass` | Node | 10, KD 3 | `/gokyo-everest-base-camp-cho-la` |
| `/renjo-la-pass` | Node | 90, KD 5 | `/gokyo-three-passes-trek` |
| `/namche-bazaar` | Node | acclimatisation hub | `/altitude-and-acclimatisation` |
| `/lukla-flights-and-delays` | Node | high anxiety, low coverage | `/15-day...`, `/cost` |

`/map` is the standout cheap win: three map variants at KD 4, AllTrails ranking
twice on the head term, and we currently have no map at all. Build the route map
and altitude profile as real components, not images.

`/lukla-flights-and-delays` answers who pays when the flight is cancelled. Nobody
in the SERP answers it. It is a trust page disguised as a logistics page.

### Domain 2: Planning

| Node | Role | Links into Core |
|---|---|---|
| `/best-time-to-trek` | **Seed** | `/15-day...` |
| `/difficulty-and-fitness` | Node | `/is-gokyo-lake-trek-worth-it` |
| `/altitude-and-acclimatisation` | Node | `/15-day...` |
| `/altitude-sickness` | Node | `/do-i-need-a-guide` |
| `/packing-list` | Node | `/cost` |
| `/training-and-preparation` | Node | `/difficulty-and-fitness` |
| `/accommodation-and-food` | Node | `/cost` |
| `/solo-and-female-trekkers` | Node | `/do-i-need-a-guide` |

Season consensus is universal and identical everywhere (spring March to May,
autumn September to November), so `/best-time-to-trek` cannot win on the season
alone. It wins by adding what the operator knows: that the managing director
advises November and December for anyone comfortable with cold, and a reviewer
confirmed it. First-hand, non-commodity, unrepeatable by a competitor.

### Domain 3: Getting there and around

| Node | Role | Links into Core |
|---|---|---|
| `/kathmandu-before-and-after` | Node | `/15-day...` |
| `/nepal-visa` | Node | `/how-to-book-and-pay` |
| `/travel-insurance` | Node | `/cost` |
| `/getting-to-nepal` | Node | `/cost` |
| `/money-and-tipping` | Node | `/cost` |

Deliberately shallow. Per the Source Context shifting rules these are commodity
topics: cover once, well, link, and move on. They exist for completeness of the
planning cluster, not for authority.

---

## Topical Borders

Explicitly not covered. Acknowledged if a sentence needs them, never given a page.

| Border | Why |
|---|---|
| Annapurna, Manaslu, Langtang, Mardi Himal, and every other region | Belongs to the parent operator's full-service site. Publishing here dilutes the central entity and cannibalises a site that already ranks |
| Everest Base Camp **as a destination** | Covered only in comparison. A full EBC guide invites the far larger EBC entity to absorb this site's identity |
| Peak climbing, Island Peak, Mera Peak | Different central entity, different buyer, different licence |
| Tibet, Bhutan, Kailash | Not Nepal trekking |
| Rafting, paragliding, bungee, heli tours | Adventure activities, not this trek |
| "Best treks in Nepal" listicles | Generic, commodity, and pulls the site toward being a directory |
| Nepal politics, history, religion beyond trail context | Too far from the Source Context |

**The border rule for this project:** if a page could sit unchanged on a general
Nepal trekking site, it does not belong here. The EMD's only structural advantage
is concentration.

---

## Cross-Section Connections

The Outer to Core link paths that carry authority into the money pages:

```
/map (KD 4)             → /15-day-gokyo-lake-trek
/renjo-la-pass (90)     → /gokyo-three-passes-trek
/cho-la-pass            → /gokyo-everest-base-camp-cho-la
/namche-bazaar          → /altitude-and-acclimatisation
/lukla-flights          → /cost  (who pays for the delay)
/best-time-to-trek      → /15-day-gokyo-lake-trek
/difficulty-and-fitness → /gokyo-vs-everest-base-camp
/altitude-sickness      → /do-i-need-a-guide
/packing-list           → /cost  (what you still have to buy)
/travel-insurance       → /cost  (what the price excludes)
/accommodation-and-food → /cost  (what is charged above Namche)
```

The recurring pattern: every planning page that reveals a cost or a risk links to
`/cost` or `/do-i-need-a-guide`. That is where informational traffic converts.

**Within Core**, the destination cluster feeds the product cluster:

```
/gokyo-lakes (590)          → / and /15-day-gokyo-lake-trek
/gokyo-ri (480)             → /15-day-gokyo-lake-trek and /gokyo-ri-vs-kala-patthar
/ngozumpa-glacier           → /gokyo-vs-everest-base-camp
/everest-view-hotel         → /15-day-gokyo-lake-trek  (it is day 5)
/how-many-days...           → all four itinerary pages
```

These are Core-to-Core links, which is why the promotion mattered: under revision
1 the site's two highest-volume pages were passing authority *inward* from the
Outer section, one hop further from the product than they needed to be.

---

## Build order and cadence

Momentum is half of topical authority and revision 1 left it undefined. Set now.

**Cadence: two deep pages per week.** 39 pages is about 20 weeks. The constraint
is the season: trek terms sit at 140 to 170/mo through winter and rise to 260 in
April, and buyers research a Himalayan trek months ahead. **Core must be live and
indexed by early February.** Core is 19 pages, so Core alone is 10 weeks, which
means starting no later than late November.

Depth beats frequency if a week has to give. One page that fully covers its
entity is worth more than two that half-cover two, and non-quality pages drag
down the quality pages around them.

### Order

| Wave | Pages | Why first |
|---|---|---|
| 1 | `/`, `/15-day-gokyo-lake-trek` | The product must exist before anything points at it |
| 2 | `/gokyo-lakes`, `/gokyo-ri` | Highest volume on the site, low KD, and the photo library already supports them |
| 3 | `/how-many-days-gokyo-lake-trek`, `/map` | The top question in the cluster, and a KD 4 page closing the AllTrails format gap |
| 4 | `/gokyo-vs-everest-base-camp`, `/do-i-need-a-guide`, `/gokyo-ri-vs-kala-patthar` | The decision cluster, where forums are beatable |
| 5 | `/cost`, `/permits-and-fees` | The moment the operator answers the price and the permit question |
| 6 | `/about`, `/reviews`, `/contact` and the legal set | Trust, needed before any paid traffic |
| 7 | The route and planning domains | Long tail, feeding links into Core |
| 8 | Domain 3, getting there | Commodity, deliberately last |

Wave 5 is deliberately not first despite being the highest commercial value. It
is the only wave with an external dependency, and blocking the whole schedule on
someone else's answer is how content projects stall.

---

## What blocks the map

- `/cost` and `/how-to-book-and-pay` cannot be written without a price.
- `/permits-and-fees` needs one confirmed answer on TIMS versus the Khumbu
  Pasang Lhamu municipality permit. Every other page inherits it.
- Every page that uses a photograph of an identifiable person needs consent.
- `/map` and the altitude profile need building as components, not prose.

Cleared 2026-08-08: TAAN membership confirmed current, so `/about` is unblocked.
All four credential numbers can be published.

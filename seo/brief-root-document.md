# Root Document Brief: `/`

Koray skill 9. Written 2026-08-09.

**Inputs:** `source-context.md`, `topical-map.md` rev 2, `topical-map-audit.md`,
`query-network.md`, `titles-metas-urls.md`.

This is the most important page on the site. Its quality sets a ceiling that no
linked page can rank above, so it is written first and refreshed most often.

---

## Document metadata

| Field | Value |
|---|---|
| Target URL | `/` (shortest path on the site) |
| Page type | Root |
| Central search intent | Decide whether to walk the Gokyo valley, then plan and book it |
| CSI predicates | plan, compare, choose, prepare, acclimatise, cost, book |
| Central entity | Gokyo Lake Trek |
| Homepage connection | It **is** the homepage. Root and home are the same document |
| Seed pages connected | 9 seeds, plus 8 nodes |
| Target word count | **3,500 to 4,500.** Longest on the site by design |
| Refresh cadence | Every 3 months, and after any price or permit change |

**Note on root and homepage being the same document.** On a multi-topic site
these are usually separate, with the homepage passing PageRank to a root topic
page. On a single-trek EMD there is only one topic, so splitting them would
create two pages competing for one query. They are one page. That is why it has
the shortest URL, the most inbound internal links, and the highest word count.

---

## H1 construction

**H1: Gokyo Lake Trek: Plan 15 Days to the Lakes and Gokyo Ri**

| Component | Source |
|---|---|
| Central entity | Gokyo Lake Trek |
| CSI predicate | **Plan** |
| Attribute 1 | 15 days, the duration, top informational demand in the cluster |
| Attribute 2 | the lakes, 590/mo |
| Attribute 3 | Gokyo Ri, 480/mo |

**This replaces the current H1.** The homepage today renders `Gokyo Lake Trek`
alone, which is an entity with no predicate and no attribute: exactly the generic
form the framework warns against. It matches the head term and says nothing else.
The replacement keeps the exact match at the front and adds the three attributes
carrying the most demand behind it.

*Code change: `content/pages/home.tsx`, `page.hero.title`.*

**Rejected alternative:** leading with the differentiator, e.g. "The Everest
Region Without the Base Camp Queue". Stronger positioning, weaker entity signal,
and the root is the one page that cannot afford to be clever with its entity.
That line belongs in the subtitle, where it already is.

---

## Attribute priority order

Top-loaded. A reader who stops halfway must already have the decisive material.

| # | Attribute | Search demand | Monetisation | Section |
|---|---|---|---|---|
| 1 | What the trek is, and why Gokyo rather than EBC | High | High | Macro |
| 2 | How long it takes, and the 15-day shape | **Highest question demand** | High | Macro |
| 3 | The lakes and Gokyo Ri | **Highest volume** | Medium | Macro |
| 4 | Difficulty, altitude and acclimatisation | High | High | Macro |
| 5 | What it costs | High | **Highest** | Macro |
| 6 | Whether you need a guide | High, contested | High | Macro |
| 7 | When to go | High | Medium | Macro |
| n/a | **CONTEXT BORDER** | n/a | n/a | n/a |
| 8 | Permits, Lukla flights, tea houses, kit | Medium | Low | Micro |
| 9 | Who runs it, credentials, reviews | Low | High, trust | Micro |

Ordering logic: attributes 1 and 2 are what the visitor is deciding. Attribute 3
is where the volume is. Attributes 4 to 6 are the objections that stop a booking.
Attribute 7 converts a decided reader into a dated one.

Cost sits fifth, not first, deliberately. The SERP treats every term in this
cluster as informational, so a page that opens with a price reads as a listing
and loses to the guides. Earn the question first.

---

## 4-column content brief

Format key: **EXT** extractive answer (one sentence, quotable, `sge` bait),
**ABS** abstractive prose, **TAB** table, **LIST** list, **FIG** image or
component.

| # | Contextual vector (heading) | Hier. | Structure | Connections |
|---|---|---|---|---|
| 1 | Gokyo Lake Trek: Plan 15 Days to the Lakes and Gokyo Ri | H1 | EXT then ABS. Answer "what is it and how long" in sentence one | n/a |
| 2 | What the Gokyo Lake Trek Is | H2 | ABS + TAB (quick facts) + FIG (hero) | → `/lakes` "the six Gokyo lakes"; → `/gokyo-ri` "the summit of Gokyo Ri" |
| 3 | Why Gokyo and Not Everest Base Camp | H2 | EXT + ABS, 3 named differences | → `/vs-everest-base-camp` "how the two treks compare in full" |
| 4 | How Many Days You Need | H2 | EXT + TAB comparing 10/12/15/19/21 | → `/how-many-days` "why operators quote different lengths"; → `/itinerary/15-day` |
| 5 | The 15-Day Itinerary at a Glance | H2 | TAB, **altitude in every day row and in the day heading** | → `/itinerary/15-day` "the full day by day"; → `/map` "the route map and altitude profile" |
| 6 | Day 9: Gokyo Ri at Dawn | H3 | ABS + FIG + stat row | → `/gokyo-ri` "everything about the climb" |
| 7 | The Lakes, and Why They Are That Colour | H2 | ABS, **name all five or six**, Ramsar fact | → `/lakes` "each lake, named" |
| 8 | The Ngozumpa Glacier | H3 | ABS + FIG | → `/ngozumpa-glacier` |
| 9 | How Hard It Is | H2 | EXT + ABS + LIST (suits / does not suit) | → `/plan/difficulty` "difficulty and fitness in detail" |
| 10 | Altitude, and How the Schedule Handles It | H2 | EXT + ABS, name the Namche day | → `/plan/acclimatisation`; → `/plan/altitude-sickness` "symptoms and what we do" |
| 11 | What It Costs | H2 | EXT + TAB (included / not included) | → `/cost` "the full breakdown"; → `/permits` "which permits and what they cost" |
| 12 | Do You Need a Guide? | H2 | **EXT: the direct legal answer first** + ABS | → `/guide-or-solo` "the full answer" |
| 13 | When to Go | H2 | EXT + TAB by season | → `/plan/best-time` "season by season" |
| n/a | **--- CONTEXT BORDER ---** | n/a | Grouper question: "What else do you need to sort before you go?" | n/a |
| 14 | Getting to the Trailhead | H2 | ABS | → `/route/lukla-flights` "Lukla, Ramechhap and cancellations" |
| 15 | Where You Sleep and What You Eat | H2 | ABS | → `/plan/tea-houses` |
| 16 | What to Pack | H2 | LIST, short | → `/plan/packing-list` |
| 17 | Longer Versions of This Trek | H2 | LIST of 2 | → `/itinerary/with-everest-base-camp`; → `/itinerary/three-passes` |
| 18 | Who Runs This Trek | H2 | ABS + credential numbers | → `/about` "the team and our licences" |
| 19 | What Trekkers Say | H2 | Review cards, 3 | → `/reviews` |
| 20 | Ask Us About Dates | H2 | Enquiry form | → `/contact` |
| 21 | Frequently Asked | H2 | Q as H3, **answer in first sentence** | → the owning page for each |

---

## Root-seed connection map

Bidirectional. Every seed links back, in its macro content, using different
anchor wording than the outbound link.

| Seed | Root → Seed anchor | Seed → Root anchor | Status |
|---|---|---|---|
| `/itinerary/15-day` | "the full day by day itinerary" | "the Gokyo Lake Trek overview" | Pending |
| `/how-many-days` | "why operators quote different lengths" | "the 15-day Gokyo Lake Trek" | Pending |
| `/lakes` | "each lake, named" | "the trek that visits them" | Pending |
| `/gokyo-ri` | "everything about the climb" | "the Gokyo Lake Trek" | Pending |
| `/cost` | "the full cost breakdown" | "what the trek involves" | Pending |
| `/vs-everest-base-camp` | "how the two treks compare in full" | "the Gokyo Lake Trek itself" | Pending |
| `/guide-or-solo` | "the full answer on guides" | "our guided Gokyo trek" | Pending |
| `/map` | "the route map and altitude profile" | "the Gokyo Lake Trek overview" | Pending |
| `/plan/best-time` | "season by season" | "the 15-day Gokyo trek" | Pending |

**Vector coherence check:** reading headings 2 to 20 in order touches the
destination cluster, the itinerary cluster, the decision cluster, the money
cluster, both route and planning domains, and trust. Every branch of the map has
a heading here. No branch is orphaned from the centre.

---

## Author contextual hints

*Section 1.* **The first sentence must answer the canonical query and nothing
else.** Something of the form: the Gokyo Lake Trek is a 15-day trek in Nepal's
Everest region to a chain of glacial lakes at 4,750 m and the Gokyo Ri viewpoint
at 5,357 m. No throat-clearing, no "nestled in the heart of". Every SERP in this
cluster carries AI Overviews and that sentence is what gets extracted.

*Section 2.* Return to the central entity. Quick-facts table carries the
canonical values: 15 days, 5,357 m, 4,750 m, from one trekker.

*Section 3.* **Macro context, and the site's whole argument.** Give three named
differences, not adjectives. Fewer trekkers, a summit view rather than a base
camp, and a glacier crossing. Quote the reviewer who said far fewer trekkers
venture onto the Gokyo circuit: first-party evidence beats a claim.

*Section 4.* Predicates: **plan, choose, compare.** This is the top question in
the cluster. Answer it in the first sentence, then justify with the table.

*Section 5.* **Altitude in every day heading**, not in the body. Universal across
every ranking competitor, and we currently do it the wrong way round.

*Section 7.* **Name the lakes.** Longpongo, Taboche Tsho, Dudh Pokhari, Thonak
Tsho, Ngozumba Tsho. Carry the Ramsar designation. This is the single cheapest
differentiator on the site: almost every competitor writes "six turquoise lakes"
and stops.

*Sections 9 and 10.* **The anxiety spine.** Six of the forum threads outranking
operators reduce to "can I handle the altitude". Be concrete: ascent rates, what
the Namche day is for, who decides to turn round. Vagueness here is why strangers
on Reddit outrank operators.

*Section 11.* Statistics priority. Itemise. **Do not publish a price until the
operator sets one**; until then this section says what is included and what is
not, and links to `/cost`.

*Section 12.* **The credibility test of the whole site.** The direct answer comes
first and it is: no, a guide is not legally required in the Everest region.
Khumbu Pasang Lhamu Rural Municipality is exempt from the national rule. Say that
plainly, then argue why you would still want one. An operator that admits the law
does not force you is the only operator a reader will believe on anything else.

*Section 13 to 14.* Micro context begins. Tone shifts from authoritative to
connective. These sections exist to hand the reader onward, not to be
comprehensive.

*Section 18.* Credentials **with their numbers**: Department of Tourism licence
2102, company registration 145190/072/073, TAAN 2016-1599, NMA 1234. A number a
reader can check is worth more than four logos.

*Section 20.* The final section creates the pathway to the monetisation action.
Dates, group size, questions. Awareness-stage ask, not a hard close.

---

## Quality cascading checklist

- [ ] Longest article on the site, 3,500 words minimum
- [ ] Broadest scope of the central entity, every branch touched
- [ ] All CSI predicates present in body copy: plan, compare, choose, prepare,
      acclimatise, cost, book
- [ ] All four title patterns used across the H2 set (conjunctive, direct, entity
      set, hypernym-hyponym)
- [ ] Every seed linked with descriptive anchor text, none in a "related" dump
- [ ] Every seed links back from its macro section
- [ ] One canonical value per fact, matching every other page
- [ ] First sentence passes the extractive summary test
- [ ] Original photography in at least four sections
- [ ] Refreshed within the last 3 months

## Blocked until answered

- **Section 11** cannot state a price. Operator.
- **Section 11 and the FAQ** cannot state the permit set until TIMS versus the
  Khumbu municipality permit is settled. Operator.
- Any section using a photograph with an identifiable face needs consent.

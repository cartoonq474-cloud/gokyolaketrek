# Processed Topical Map: gokyolaketrek.com

Koray skill 6. Built 2026-08-09 from `topical-map.md` revision 2, corrected by
`topical-map-audit.md` and `query-network.md`.

41 nodes verbalised into title tags, meta descriptions and URLs.

---

## The URL ruling that changes the existing site

Koray's rule: **never repeat a word that is already in the domain.** The domain is
`gokyolaketrek.com`, which already contains *gokyo*, *lake* and *trek*.

Every URL currently in `content/config.ts` breaks this:

| Currently in config | Reads as | Ruling |
|---|---|---|
| `/15-day-gokyo-lake-trek` | gokyolaketrek.com/15-day-**gokyo-lake-trek** | `/itinerary/15-day` |
| `/gokyo-everest-base-camp-cho-la` | repeats *gokyo* | `/itinerary/with-everest-base-camp` |
| `/gokyo-three-passes-trek` | repeats *gokyo* and *trek* | `/itinerary/three-passes` |
| `/short-gokyo-lake-trek-9-days` | repeats all three | deleted, that product does not exist |

**Exception, deliberate:** `/gokyo-ri`, `/gokyo-ri-vs-kala-patthar` and
`/gokyo-village` keep the word. "Gokyo Ri" is a proper noun and a distinct named
entity with its own knowledge-graph presence and 480/mo of its own demand.
Truncating it to `/ri` destroys the entity signal to save four characters. The
rule exists to stop dilution, not to mutilate proper nouns.

**Tradeoff, stated:** the exact-match slug `/15-day-gokyo-lake-trek` looks better
for the query "gokyo lake trek itinerary". The framework's position, followed
here, is that the domain already supplies that context and repeating it dilutes
rather than reinforces. If you disagree, this is the one decision in the
processed map to overturn, and it must be overturned everywhere at once.

**Action:** `content/config.ts` nav and `footerTrekLinks` must be updated to
these URLs before any page is built, because nothing has been published yet and
this is free to change now and expensive later.

---

## Title tag pattern library

### Core Section patterns

| Pattern | Template | Example from this map |
|---|---|---|
| Conjunctive | [A] and [B] of [Entity] | Permits and Fees for the Gokyo Lake Trek |
| Direct entity-attribute | [Attribute] of [Entity] | Gokyo Lake Trek Cost |
| Question | [Question form] | How Many Days Does the Gokyo Lake Trek Take? |
| Comparison | [A] vs [B]: [Deciding question] | Gokyo Ri vs Kala Patthar: Which Viewpoint? |
| Entity set (plural) | The [Plural] of [Context] | The Gokyo Lakes: All Six, Named |

### Outer Section patterns

| Pattern | Template | Example |
|---|---|---|
| Entity + defining attribute | [Entity]: [Number or defining fact] | Cho La Pass: Crossing at 5,420 m |
| Hypernym-hyponym | [General]: [Specific], [Specific] | Everest Three Passes: Renjo La, Cho La, Kongma La |
| Direct | [Attribute] on the [Entity] | Tea Houses and Food on the Gokyo Lake Trek |

### Aggregation rule

Search engines read all title tags together. **"Gokyo" or "Gokyo Lake Trek"
appears in every Core title**, reinforcing the central entity. Outer titles lead
with their own entity and carry the central entity in the meta instead, so the
site reads as broad without losing its centre.

**Numbers in the title wherever the query is numeric.** Altitudes, durations,
counts. The SERP rewards it, `sge` extracts it, and it is how a title earns a
click against six competitors saying the same words.

---

## Core Section

### Root

| # | URL | Title | Meta description |
|---|---|---|---|
| 1 | `/` | Gokyo Lake Trek: 15-Day Itinerary, Cost and Route | The Gokyo Lake Trek in Nepal's Everest region, walked and run by the team who guide it. The 15-day itinerary day by day, what it costs, how hard it is, and how Gokyo compares with Everest Base Camp. |

Macro: the trek. Micro: the comparison, at the end, linking to `/vs-everest-base-camp`.

### Cluster 1: Itineraries

| # | URL | Title | Meta description |
|---|---|---|---|
| 2 | `/itinerary/15-day` | 15-Day Gokyo Lake Trek Itinerary, Day by Day | Every day of the 15-day Gokyo Lake Trek with altitude, distance and walking hours. Lukla to Namche, the acclimatisation day, Dole and Machhermo, the Gokyo valley at 4,750 m and Gokyo Ri at 5,357 m. |
| 3 | `/how-many-days` | How Many Days Does the Gokyo Lake Trek Take? | Operators quote anything from 10 to 15 days for the same trek. What each length actually leaves out, how many days you need including the Lukla flights, and why the buffer day matters. |
| 4 | `/itinerary/with-everest-base-camp` | Gokyo and Everest Base Camp via Cho La: 19 Days | Adding Everest Base Camp to the Gokyo valley over the Cho La pass at 5,420 m. The 19-day itinerary, what the crossing demands, and whether the extra four days are worth it. |
| 5 | `/itinerary/three-passes` | Everest Three Passes: Renjo La, Cho La, Kongma La | The 21-day circuit over all three high passes, taking in the Gokyo lakes and Everest Base Camp. Day by day, with the acclimatisation the route needs and who should not attempt it. |

### Cluster 2: Money

| # | URL | Title | Meta description |
|---|---|---|---|
| 6 | `/cost` | Gokyo Lake Trek Cost: What You Pay and What For | An itemised breakdown of the Gokyo Lake Trek cost. What the package covers, what you still pay on the trail, what the permits and the Lukla flights come to, and what happens to the price if the flight is cancelled. |
| 7 | `/permits` | Permits and Fees for the Gokyo Lake Trek | Which permits the Everest region actually requires, what each costs, where they are bought and which are included in the package. Sagarmatha National Park entry and the Khumbu Pasang Lhamu municipality permit. |
| 8 | `/booking` | How to Book and Pay for the Gokyo Lake Trek | What happens after you enquire: how dates are confirmed, what deposit is taken, how the balance is paid in Kathmandu, and the cancellation terms in plain words. |

### Cluster 3: The decision

| # | URL | Title | Meta description |
|---|---|---|---|
| 9 | `/vs-everest-base-camp` | Gokyo Lakes vs Everest Base Camp: How to Choose | The honest comparison from an operator that runs both. Which is harder, which is quieter, which has the better view of Everest, what each costs, and who should pick Base Camp instead. |
| 10 | `/guide-or-solo` | Do You Need a Guide for the Gokyo Lake Trek? | Nepal's guide rule does not apply the way most sites say in the Everest region. What the law actually requires in Khumbu, what a guide does that you cannot, and when trekking Gokyo alone is a bad idea anyway. |
| 11 | `/gokyo-ri-vs-kala-patthar` | Gokyo Ri vs Kala Patthar: Which Everest Viewpoint? | The two great viewpoints of the Everest region compared. Which is higher, which climb is harder, which shows you more of Everest, and whether you can reasonably do both. |

### Cluster 4: The destination

| # | URL | Title | Meta description |
|---|---|---|---|
| 12 | `/lakes` | The Gokyo Lakes: Every Lake, Named and Measured | Dudh Pokhari, Thonak Cho, Gyazumpa Cho, Tanjung Cho and Ngojumba Cho, a Ramsar wetland since 2007 and one of the highest freshwater lake systems in the world. How high each sits, which is largest, and why they are that colour. |
| 13 | `/gokyo-ri` | Gokyo Ri: The 5,357 m View Over Everest | Gokyo Ri, also called Gokyo Peak, is the walk-up summit above the third lake. How long the climb takes, what you see from the top, whether sunrise beats sunset, and why it needs no technical skill. |
| 14 | `/ngozumpa-glacier` | Ngozumpa Glacier: The Longest Glacier in Nepal | The debris-covered glacier the Gokyo trail follows for two days and crosses to reach the fifth lake. How it formed, why it looks like rubble rather than ice, and what crossing it is like. |
| 15 | `/everest-view-hotel` | Hotel Everest View: The 3,880 m Acclimatisation Hike | The hike above Namche that doubles as the acclimatisation day on day 5. What the climb involves, what you see, and why gaining height then sleeping low is the point. |
| 16 | `/gokyo-village` | Gokyo Village: Sleeping at 4,750 m | The settlement on the third lake and the highest place you sleep on this trek. What the tea houses are like, what they cost, what is charged extra, and how a night at that altitude feels. |
| 17 | `/fifth-lake` | The Fifth Lake and Scoundrel's Viewpoint | The day walk beyond Gokyo most trekkers skip, across the Ngozumpa moraine to Ngozumba Tsho, and the viewpoint that shows Everest, Lhotse, Makalu and Cho Oyu at once. |

### Cluster 5: Trust and E-E-A-T

| # | URL | Title | Meta description |
|---|---|---|---|
| 18 | `/about` | About the Team Behind the Gokyo Lake Trek | The Kathmandu operator running this trek, registered and licensed in Nepal. Company registration, Department of Tourism licence, TAAN and NMA membership numbers, and the guides who walk the valley. |
| 19 | `/reviews` | Gokyo Lake Trek Reviews From Our Trekkers | What trekkers say after walking the Gokyo valley with us, quoted as written and attributed. Reviews naming the guides, the lakes and the Gokyo Ri climb. |
| 20 | `/contact` | Contact Us About the Gokyo Lake Trek | Ask about dates, group size, the itinerary or the price. WhatsApp, email and an enquiry form, answered by the people who run the trek rather than an agent. |
| 21 | `/terms` | Booking Terms and Cancellation | Deposit, balance, cancellation windows, what happens if a Lukla flight is cancelled and what happens if you have to leave the trek early. |
| 22 | `/privacy` | Privacy Policy | What we collect when you enquire, what we do with it, how long we keep it and how to have it deleted. |
| 23 | `/editorial-policy` | Editorial Policy and How We Check Facts | Where the altitudes, distances and permit rules on this site come from, how they are verified, and how to tell us when something is wrong. |

---

## Outer Section

### Domain 1: The route

| # | URL | Title | Meta description |
|---|---|---|---|
| 24 | `/map` | Gokyo Lake Trek Map and Altitude Profile | The route from Lukla to Gokyo and back, with every overnight stop, the daily distances and an altitude profile showing where the trek gains and loses height. |
| 25 | `/route/cho-la` | Cho La Pass: The 5,420 m Crossing to Everest Base Camp | The pass linking the Gokyo valley to the Everest Base Camp trail. What the crossing involves, the ice near the top, when it is passable, and how to judge whether you should attempt it. |
| 26 | `/route/renjo-la` | Renjo La Pass: The Quiet Way Into Gokyo | The 5,360 m pass on the Three Passes circuit and the least crowded approach to the Gokyo lakes. What the climb is like, the view from the top, and how it changes the itinerary. |
| 27 | `/route/namche-bazaar` | Namche Bazaar: Where the Trek Acclimatises | The Sherpa town at 3,440 m where every Everest trek stops for a day. Why the acclimatisation day is here, what to do with it, and what you can buy or rent before going higher. |
| 28 | `/route/lukla-flights` | Lukla Flights, Ramechhap and Cancellations | How you reach the trailhead, why flights leave from Ramechhap in season, how often they are cancelled, what happens to your trek when yours is, and who pays for the extra night. |

### Domain 2: Planning

| # | URL | Title | Meta description |
|---|---|---|---|
| 29 | `/plan/best-time` | Best Time to Trek to Gokyo, Season by Season | Spring and autumn are the obvious answers. What November and December are actually like, when the lakes freeze, when the valley is quietest, and which month suits which trekker. |
| 30 | `/plan/difficulty` | How Difficult Is the Gokyo Lake Trek? | Five to seven hours of walking a day for ten days, no technical ground, and altitude that decides most of it. What fitness you need, who finishes, who turns back, and how it compares with Everest Base Camp. |
| 31 | `/plan/acclimatisation` | Altitude and Acclimatisation on the Gokyo Trek | How the trek gains height, why the Namche day exists, what the ascent rate is above Dole, and how the schedule is built to get you to 5,357 m safely. |
| 32 | `/plan/altitude-sickness` | Altitude Sickness at Gokyo: Signs and What We Do | The symptoms that matter, the ones that mean going down now, what our guides carry, who decides to descend, and how helicopter evacuation and insurance actually work. |
| 33 | `/plan/packing-list` | Gokyo Lake Trek Packing List | What to bring for ten days between 2,650 m and 5,357 m, what is provided, what to rent in Kathmandu rather than buy, and how much your porter will carry. |
| 34 | `/plan/training` | Training for the Gokyo Lake Trek | How to prepare for consecutive long days at altitude when you cannot train at altitude. What to do in the months before, and what is not worth worrying about. |
| 35 | `/plan/tea-houses` | Tea Houses and Food on the Gokyo Lake Trek | Where you sleep and what you eat between Lukla and Gokyo. Room standards at 4,750 m, what the menus offer, what a hot shower, charging and wifi cost, and whether the water is safe. |
| 36 | `/plan/solo-and-women` | Trekking Gokyo Solo, and as a Woman | What trekking the Gokyo valley alone is like, what the trail and tea houses are like for women, and what changes if you join a group instead. |

### Domain 3: Getting there and around

| # | URL | Title | Meta description |
|---|---|---|---|
| 37 | `/nepal/kathmandu` | Kathmandu Before and After the Trek | Where you stay at each end, what to do with the sightseeing day, what to buy before flying to Lukla and what the leisure day at the end is really for. |
| 38 | `/nepal/visa` | Nepal Visa for Trekkers | The visa on arrival, what it costs for the length of stay a Gokyo trek needs, what to have ready at the airport and what is not included in the trek price. |
| 39 | `/nepal/insurance` | Travel Insurance for Trekking at 5,357 m | Why standard travel policies exclude the altitude this trek reaches, what cover to look for, what helicopter evacuation costs without it, and what we ask you to have before departure. |
| 40 | `/nepal/flights` | Getting to Nepal | Flying into Kathmandu, which routes trekkers commonly use, how much time to leave either side of the trek, and why the buffer day exists. |
| 41 | `/nepal/tipping` | Money and Tipping on the Gokyo Lake Trek | How much cash to carry beyond Namche, where the last ATM is, what things cost on the trail, and what guides and porters are normally tipped. |

---

## Consistency rules

These make the site cheap for a search engine to process. Follow them literally.

1. **One canonical value per fact, sitewide.** Gokyo Ri is 5,357 m on all 41
   pages. Gokyo village is 4,750 m. Namche is 3,440 m. Cho La is 5,420 m. The
   trek is 15 days. Never state a fact two ways.
2. **URL patterns are fixed:** `/itinerary/*` for products, `/route/*` for places
   on the trail, `/plan/*` for preparation, `/nepal/*` for the country layer.
   Core money and decision pages sit at root depth. Depth signals section.
3. **Meta descriptions run macro to micro.** The page's own topic first, the
   linked side-topic last. That last clause is the internal link target.
4. **Reciprocal micro-contexts.** If `/plan/packing-list` ends on cost, then
   `/cost` mentions kit. They link to each other.
5. **No two titles may target the same query.** Checked against the
   cannibalisation rulings in the audit.
6. **Question titles get answered in the first sentence of the page**, not the
   first section. Every one of these has `sge` on its SERP.

## Quality thresholds

Replacing keyword difficulty, per the framework:

| Node group | Relevance threshold | Quality threshold | Predictive |
|---|---|---|---|
| `/lakes`, `/gokyo-ri` | High, entity-defining | Must name every lake, carry Ramsar, and use original photography | Strong. KD 13 to 15, and no competitor names the lakes |
| `/cost`, `/permits` | High, commercial | Needs a real itemised number and the correct permit answer | Strong once unblocked. Currently unwinnable without a price |
| `/guide-or-solo`, `/vs-everest-base-camp` | High, contested | Must disqualify readers to beat forums | Moderate. Competing against Reddit, which wins on candour not authority |
| `/map` | Medium | Needs a real map and altitude profile, not prose | Strong. KD 4 |
| `/nepal/*` | Low, commodity | Cover once, accurately, briefly | Weak alone. Exists for network completeness |

---

## What this changes in the codebase

Applied 2026-08-09:

- `content/config.ts`: `nav` and `footerTrekLinks` now use the new URLs. Added
  `/how-many-days` to the itinerary dropdown and `/lakes` to the main nav, since
  both are now Seeds.
- `content/pages/home.tsx`: `VARIANTS` hrefs updated.

**Still to do when pages are built:**

- **Routing.** `app/[slug]/page.tsx` matches one segment only, and
  `dynamicParams` is false. `/itinerary/15-day`, `/route/cho-la`, `/plan/*` and
  `/nepal/*` are two segments and will not match it. Either move to
  `app/[...slug]/page.tsx` with a catch-all, or create real nested routes. This
  is the price of the depth-signals-section decision and it is worth paying, but
  it has to be paid before wave 1 ships.
- `app/sitemap.ts`: `PRIORITY` is keyed by slug and will need the new keys,
  including the two-segment ones.
- `TrekPage.slug` and `pagesBySlug` assume a single segment. Both need to hold
  the full path once nested routes exist.

None of this is published yet, so all of it is free to change today. It would not
have been free in three months.

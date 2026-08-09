# Query network: gokyolaketrek.com

Koray skill 3. Built 2026-08-09. Closes audit item **C4**.

The map was built without this and the audit flagged it as a hole, correctly:
without the question set, content briefs have no heading skeleton and information
responsiveness cannot be planned.

## Where these questions come from

The Gokyo cluster is **too small for a question database**. SE Ranking returns
zero question keywords for "gokyo" and for "gokyo lake". That is a real finding
about the niche, not a data failure, and it changes the method: the question set
here is assembled from five real sources rather than one.

| Source | What it gives | Confidence |
|---|---|---|
| A. Everest Base Camp question set, real US volumes | The question *shape* for any Everest trek | High, real volumes |
| B. The operator's own 12 published FAQs | What their buyers actually ask them | High, first-party |
| C. Forum thread titles ranking in our SERPs | Verbatim user questions | High, and these outrank operators |
| D. Long-tail keyword pull | Modifier patterns | Medium |
| E. SERP features | `people_also_ask` and `sge` on nearly every term | Confirms PAA exists |

**Pending:** a live PAA scrape was queued against the SERP API and is still
processing. Layer it in when it lands. Nothing below depends on it.

---

## Source A: the question shape, from Everest Base Camp

Real US volumes for the same question applied to the neighbouring entity. This is
the ranking of what people ask about an Everest trek:

| Question form | Volume | KD |
|---|---|---|
| how long is the trek to X | **320** | 5 |
| X trek how long | **140** | 6 |
| how much does X trek cost | 50 | 5 |
| how hard is X trek | 40 | 5 |
| how many days to trek to X | 10 | 7 |
| how to prepare for X | 10 | 9 |
| what to pack for X | 10 | 5 |
| when to trek X | 10 | 19 |
| how to trek to X | 10 | 15 |

**Duration outranks cost by 6 to 1 and difficulty by 8 to 1.** That is the single
most useful number in this document.

It validates `/how-many-days-gokyo-lake-trek`, which the map created on the weaker
argument that ranking pages disagree on duration (10, 11, 12, 13, 14, 15 days).
Both arguments now point the same way: **the duration question is the highest
informational demand in the cluster and nobody owns it.** Promote it from a Node
to a **Seed** in the itinerary cluster.

Every one of these carries `people_also_ask` and `sge`. Answers must be
self-contained passages, near the top, quotable by an AI Overview.

---

## Source C: verbatim user questions from ranking forum threads

These outrank operator pages on our own SERPs, which is what makes them evidence
rather than anecdote.

| Verbatim thread title | Where it ranked |
|---|---|
| "Gokyo Lakes/Gokyo Ri trek in Nepal, hire a guide or go self-guided?" | **#2 for "gokyo lake trek"** |
| "EBC vs Gokyo Lakes" | **#1 for the comparison query** |
| "Is solo trekking without a guide allowed in the Khumbu region?" | #1 for the guide-rule query |
| "Gokyo lakes trek difficulty compared to ebc trek?" | #3 for the comparison query |
| "Planning a trip to Gokyo Lakes with concerns about altitude sickness" | **#1 for the altitude query** |
| "is guide mandatory for gokyo Ri trek?" | ranked for the head term |

Two themes carry all six: **do I need a guide**, and **can I handle the
altitude**. Both are anxiety questions, and both are currently answered better by
strangers on the internet than by anyone selling the trek.

---

## The question network, mapped to nodes

Each node owns its questions. A question appears under exactly one node. Where a
question is genuinely shared, it is answered on the owner and linked from the
other, never answered twice.

### `/how-many-days-gokyo-lake-trek` (promoted to Seed)

- How many days does the Gokyo Lake Trek take?
- How long is the Gokyo Lakes trek?
- Can you do Gokyo in 10 days? In 12?
- Why do operators quote different lengths for the same trek?
- How many days do I need including Kathmandu and the flights?
- What happens to the length if Lukla is weathered in?

Owns the highest-demand question in the cluster. Must be **definitional and
comparative across every length**, never a fourth itinerary page.

### `/15-day-gokyo-lake-trek`

- What is the day-by-day Gokyo Lake Trek itinerary?
- How far do you walk each day?
- Where do you sleep each night, and how high?
- Which day is the acclimatisation day and why Namche?
- Which day do you climb Gokyo Ri?

### `/cost`

- How much does the Gokyo Lake Trek cost?
- What is included and what is not?
- How much extra do I need on the trail?
- How much are the permits?
- How much should I tip the guide and porter?
- Is it cheaper than Everest Base Camp?
- What does it cost if the Lukla flight is cancelled?

### `/do-i-need-a-guide` (Seed of the decision cluster)

- Do I need a guide for the Gokyo Lake Trek?
- Is solo trekking allowed in the Everest region?
- Is a guide mandatory in Nepal since 2023?
- Can I trek Gokyo without a porter?
- What does a guide actually do that I cannot?

**The answer is "legally, no, not in Khumbu."** See the audit, item C3. This page
is the site's credibility test: the honest answer costs a sale occasionally and
wins the query permanently.

### `/gokyo-vs-everest-base-camp` (Seed)

- Gokyo Lakes or Everest Base Camp, which should I do?
- Which is harder?
- Which is more scenic?
- Which is busier?
- Can I do both, and how long does that take?
- Which is cheaper?
- Do you see Everest from Gokyo?

### `/gokyo-ri-vs-kala-patthar` (new node, from the audit)

- Gokyo Ri or Kala Patthar, which viewpoint is better?
- Which is higher?
- Which has the better view of Everest?
- Which is a harder climb?
- Can I do both?

### `/difficulty-and-fitness`

- How difficult is the Gokyo Lake Trek?
- How fit do I need to be?
- Can a beginner do it?
- How many hours a day do you walk?
- Is there any technical climbing or scrambling?
- Can I do it in my 50s, 60s, with my kids?

### `/altitude-and-acclimatisation`

- How high does the Gokyo Lake Trek go?
- What is the highest sleeping altitude?
- Why is the acclimatisation day at Namche?
- How fast do you gain altitude?
- What is the ascent rate per day?

### `/altitude-sickness`

- Will I get altitude sickness on the Gokyo trek?
- What are the symptoms?
- What happens if I get it, and who decides to descend?
- Should I take Diamox?
- Is there a rescue helicopter, and who pays?

Hard border with the node above: **acclimatisation is the schedule, sickness is
the medical event.** The audit's ruling. If a brief cannot hold that line, merge.

### `/permits-and-fees`

- What permits do I need for the Gokyo Lake Trek?
- Do I need TIMS, or the Khumbu municipality permit?
- How much are they and where do you buy them?
- Are they included in the price?
- Do I need a permit if I trek solo?

**Blocked.** The operator's inclusions list and the documented Khumbu position
disagree. One answer, then it propagates sitewide.

### `/best-time-to-trek`

- When is the best time to trek to Gokyo?
- What is it like in winter, and do the lakes freeze?
- Can you trek in the monsoon?
- Is November too cold?
- When is it least crowded?

The season answer is identical on every ranking page (spring, autumn), so this
page cannot win on the season alone. It wins on the operator's own position that
November and December work if you are comfortable with cold, which a reviewer
independently confirmed. First-hand, non-commodity.

### `/lukla-flights-and-delays`

- How do you get to Lukla?
- Why do flights go from Ramechhap instead of Kathmandu?
- How often are Lukla flights cancelled?
- What happens if mine is, and who pays for the extra night?
- Is the helicopter an option, and what does it cost?

Nobody in the SERP answers the "who pays" question. It is a trust page wearing a
logistics page's clothes.

### `/gokyo-lakes`

- What are the Gokyo Lakes?
- How many lakes are there, and what are they called?
- Why are they turquoise?
- How high are they?
- Are they a Ramsar site?
- Do they freeze?

### `/gokyo-ri`

- What is Gokyo Ri and how high is it?
- Is Gokyo Ri the same as Gokyo Peak?
- How long does it take to climb?
- Can you see Everest from the top?
- Is it a technical climb?
- Is sunrise or sunset better?

### `/packing-list`

- What do I pack for the Gokyo Lake Trek?
- Do I need a down jacket and sleeping bag, or are they provided?
- What boots?
- Can I rent gear in Kathmandu?
- How heavy will my pack be with a porter?

### `/accommodation-and-food`

- Where do you sleep on the Gokyo trek?
- What are the tea houses like at 4,750 m?
- Is there a hot shower? Wifi? Charging?
- What is the food like, and can I eat vegetarian or vegan?
- Is the water safe?

---

## Cross-cutting: the anxiety spine

Six of the ranking forum threads reduce to two questions. Every Core page should
resolve or defer one of them, and both should be answerable from the homepage
within one click:

1. **Am I allowed to, and do I need to pay someone?** → `/do-i-need-a-guide`
2. **Will the altitude hurt me?** → `/altitude-sickness`

An operator that answers both straight, including where the answer costs it money,
is doing the one thing the forums are currently doing better.

---

## Information responsiveness rules

Applies to every page, from Koray plus the `sge` presence across the cluster:

1. Answer the heading's question in the **first sentence** under it. No preamble.
2. One canonical value per fact, sitewide. Gokyo Ri is 5,357 m on every page.
3. Never answer the same question on two pages. Answer on the owner, link from
   the other.
4. Give the direct answer before the caveat. "Legally, no" then the nuance, not
   three paragraphs of nuance then the answer.
5. Numbers in the heading where the query is numeric: durations, altitudes,
   prices.

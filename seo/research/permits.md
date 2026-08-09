# Permits for the Gokyo Lake Trek

Researched 2026-08-09. This resolves the blocker flagged in the topical map audit
(item C3) and settles the disagreement between the operator's inclusions list and
the documented position.

---

## The answer

**Two permits. TIMS is not one of them.**

| Permit | Fee (foreigners) | Where you buy it |
|---|---|---|
| Sagarmatha National Park entry | **NPR 3,000** (roughly USD 25 to 30) | Nepal Tourism Board in Kathmandu, or the park gate at **Monjo** |
| Khumbu Pasang Lhamu Rural Municipality entry | **NPR 3,000** (older sources say NPR 2,000) | **Lukla or Monjo only.** Not sold in Kathmandu |
| TIMS card | **Not required in Khumbu** | n/a |

SAARC nationals pay a reduced national park rate, commonly cited at NPR 1,500.
Some listings add 13% VAT to the park fee. Confirm both with the operator.

## Why TIMS does not apply here

The Khumbu Pasang Lhamu Rural Municipality withdrew from the national TIMS system
and replaced it with its own local entry permit. Independently stated by
followalice, Third Rock Adventures, Mantra Mountain, World Alpine Treks and
Ammonite Adventure, all 2026 pages.

This is the same municipality that disputed the Nepal Tourism Board's 2023 solo
trekking ban (Kathmandu Post, April 2023). The two facts are connected: Khumbu
runs its own permit regime, which is why both the TIMS requirement and the guide
mandate work differently here than the rest of Nepal.

## The practical detail almost nobody states

**The municipality permit cannot be bought in Kathmandu.** It is issued in Lukla
or at Monjo. A trekker who arranges everything in advance still buys this one on
arrival at the trailhead.

That is a genuinely useful, checkable fact and it belongs on `/permits` and in the
root document. It is the kind of specific that separates an operator page from a
rewritten listicle.

## Competitor confusion, which is our opportunity

The page currently ranking for Nepal permit queries (followalice) **contradicts
itself**: its own table says "Everest/Khumbu EBC, TIMS not required, local permits
replace the TIMS", and then its Everest Base Camp cost table lists "TIMS card,
US$17" as a line item.

Several other ranking pages still list TIMS as required for Everest. A page that
states the position clearly, explains why Khumbu is different, and says where each
permit is actually bought will beat them without needing more authority.

## What this changes on our site

| Where | Was | Now |
|---|---|---|
| `content/pages/home.tsx` FACTS row | "TIMS card and Sagarmatha National Park entry" then a VERIFY marker | Sagarmatha park entry and the Khumbu municipality permit |
| `content/pages/home.tsx` INCLUDED | "TIMS card and Sagarmatha National Park permits" | "All required permits, arranged for you" |
| `content/pages/home.tsx` FAQ | VERIFY placeholder | The real answer |
| `/permits` | Blocked | **Unblocked, can be written** |

## Still worth asking the operator

Not blocking, but their inclusions list says TIMS, which suggests the page has not
been updated since the rule changed. Two questions:

1. Do they buy the Khumbu municipality permit for clients, and is it inside the
   package price or paid on arrival in Lukla?
2. Is the park fee quoted inclusive of the 13% VAT some listings add?

Neither answer changes what the site says about which permits exist. Both change
one line of `/cost`.

// /plan/packing-list. Outer Section, Domain 2 (Planning), node 33.
//
// A packing list is the most commoditised page in trekking: every operator has
// one and they are all the same list. Two things make this one worth reading,
// and both are first-party rather than borrowed:
//
//   1. The sleeping bag and the down jacket are ours, lent for the trek. Almost
//      every competing list tells the reader to buy both, which is the most
//      expensive wrong instruction published about this trek.
//   2. One porter carries for two trekkers, so the duffle and daypack split is
//      a real constraint with a weight limit behind it, not a tidy diagram.
//
// FACTS: the provided and excluded kit is the operator's own published
// inclusions list, captured in seo/research/operator-nepalintrepidtreks.md and
// mirrored in content/pages/itinerary-15-day.tsx. Altitudes and day numbers are
// the canonical values from the writing brief.
//
// Deliberately absent: brand names, prices, weights in kilograms. None of those
// are verified anywhere in seo/research/, and a packing list that invents them
// is exactly the kind of page this site exists to beat.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import {
  ActionCard,
  CARD,
  MarkList,
  Note,
  PROSE,
  PROSE_SM,
  Section,
  Sub,
} from "../design-kit";

type KitRow = { item: string; why: ReactNode };

/** Carried by you, every walking day. The test is: will I want this before tonight. */
const DAYPACK: KitRow[] = [
  {
    item: "Two litres of water capacity",
    why: "Bottled water is not included and gets dearer the higher you go. Bottles you refill and treat are cheaper, and they are the only version of this that does not leave plastic in the valley.",
  },
  {
    item: "A warm layer and a windproof shell",
    why: "Above Dhole the valley shades over in minutes and the wind arrives with it. Your duffle is somewhere else all day, so the spare layer has to be on your back.",
  },
  {
    item: "Warm hat, gloves and a buff",
    why: "Small, light, and the first three things you want when the temperature drops. Keep them in the lid of the pack, not the bottom.",
  },
  {
    item: "Sun hat, sunglasses, sun cream, lip balm",
    why: "The trail above Machhermo is open and unshaded, and the light comes back up off snow. The people who get burnt usually got burnt on the overcast day.",
  },
  {
    item: "Headtorch, tested, with spare batteries",
    why: "Day 9 starts in the dark. So does every trip to the toilet above Namche, because the corridors are not lit.",
  },
  {
    item: "Snacks you already like",
    why: "Every meal is included, but the gap between breakfast and lunch is long and appetite goes strange above 4,000 m. Bring things you will eat when you do not feel like eating.",
  },
  {
    item: "Personal medication and a small first aid kit",
    why: "Blister plasters, tape, painkillers and anything you take daily. This is the one bag it can be in, because it is the one bag you always have.",
  },
  {
    item: "Passport, permits and insurance details",
    why: (
      <>
        Checked at Monjo on day 4 and again on the way out, with spot checks
        higher up. What each permit is and where it is issued is on{" "}
        <Link href="/permits">the permits page</Link>.
      </>
    ),
  },
  {
    item: "Cash in Nepali rupees",
    why: (
      <>
        Above Namche the lodges charge for a hot shower, for charging a phone and
        for wifi, and none of it is in the trek price. What that looks like night
        by night is on <Link href="/plan/tea-houses">the tea houses page</Link>.
      </>
    ),
  },
  {
    item: "Camera, phone and a charged power bank",
    why: "Cold flattens batteries fast, and putting the charge back is paid for and slow once you are above Namche, at a rate that climbs with the altitude. Carry the electricity up the valley rather than buying it at 4,750 m.",
  },
];

/** Carried for you. You see it in the evening and again at breakfast, not in between. */
const DUFFLE: KitRow[] = [
  {
    item: "The sleeping bag we lend you",
    why: "Lives in the duffle by day and on the lodge bed at night. The blanket the lodge gives you goes over the top of it, not instead of it.",
  },
  {
    item: "The down jacket we lend you",
    why: "In the duffle while you walk. On your back before dawn on day 9, and in the dining room most evenings above Namche.",
  },
  {
    item: "Base layers, two or three sets",
    why: "One set you walk in, one clean set, and one that never leaves the sleeping bag and never gets walked in. The dry set is what makes a cold night bearable.",
  },
  {
    item: "A fleece or light insulated mid layer",
    why: "Worn most mornings and most evenings from Namche upward. This is the layer that comes on and off all day.",
  },
  {
    item: "Trekking trousers, plus something loose for the evening",
    why: "Two pairs covers ten days. Nobody on this trail is looking at your trousers.",
  },
  {
    item: "Socks, more pairs than feels sensible",
    why: "The single item worth over-packing. Day 12 is 19.5 km of descent and it will find every fault in your feet.",
  },
  {
    item: "Camp shoes or sandals",
    why: "Boots come off the moment you arrive at the lodge. Your feet get a few hours back and the lodge floor stays intact.",
  },
  {
    item: "Quick-dry towel, small wash kit, wet wipes",
    why: "Showers stop being part of the room above Namche, so for most of the trek the wipes do more work than the towel.",
  },
  {
    item: "Toilet paper and hand sanitiser",
    why: "Assume the lodge has neither. Carry your own from Kathmandu and keep a small bag for the used paper.",
  },
  {
    item: "Earplugs",
    why: "Lodge walls above Namche are plywood. This is the cheapest sleep you will ever buy.",
  },
  {
    item: "A dry bag or a bin liner to line the duffle",
    why: "The bag spends its days on somebody else's back in whatever the weather is doing. A liner costs nothing and keeps your sleeping clothes dry.",
  },
];

const PROVIDED: ReactNode[] = [
  "A sleeping bag for the trek, lent to you and handed back at the end.",
  "A down jacket for the trek, on the same terms. Do not buy one for this trip.",
  "A duffle bag, yours to keep. This is the bag your porter carries.",
  "A trekking map and a T-shirt, also yours to keep.",
  <>
    Both permits, arranged for you. See{" "}
    <Link href="/permits">permits and fees</Link>.
  </>,
  "Breakfast, lunch and dinner every day on the trek, with a cup of tea, so you are not carrying ten days of food.",
];

const NOT_PROVIDED: ReactNode[] = [
  "Boots and everything else you wear. Personal trekking equipment is not included.",
  "Trekking poles. Worth having anyway for the 19.5 km of descent on day 12.",
  "A daypack. The duffle is the porter's bag, not yours.",
  "Water bottles, and a way to treat what you put in them. Bottled water is not included.",
  "A headtorch, which day 9 makes non-negotiable.",
  "Sunglasses, sun cream and lip balm.",
  "Personal medication, and travel insurance that covers evacuation at altitude.",
];

const LEAVE_AT_HOME: ReactNode[] = [
  "A sleeping bag or a down jacket. We lend you both, and buying them for this trip is the most expensive mistake on this page.",
  "New boots. Ten walking days is not where you break them in.",
  "Jeans, and cotton anything. Both hold sweat, both stay wet, and wet is a different problem at 4,750 m than it is at home.",
  "Ten days of clean clothes. You will re-wear everything, and so will everyone else in the dining room.",
  "Full-size toiletries. Decant what you need for ten days.",
  "Camera gear you do not carry at home. Altitude does not make you keener.",
  "Jewellery and valuables. There is nowhere on this trail to wear them to.",
  "Anything you would be upset to lose. Duffles get stacked, dropped and rained on.",
];

const DOCUMENTS: ReactNode[] = [
  "Your passport. Permits are issued against it, so the details have to match.",
  "Passport photographs, for the permits.",
  "Your travel insurance policy in writing, with helicopter evacuation cover to at least 5,500 m.",
  "Your Nepal visa, bought on arrival. It is not in the trek price.",
  "Cash in rupees for the trail, and a card for Kathmandu.",
  "Photos of the passport and the insurance page on your phone, and a copy with someone at home.",
];

function KitTable({ rows }: { rows: KitRow[] }) {
  return (
    <div className={`${CARD} overflow-hidden`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-[var(--bg-alt)]">
              <th className="w-[36%] px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                Item
              </th>
              <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                Why, on this trek
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.item}
                className="border-b border-[var(--line-2)] last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-4 py-3.5 align-top text-[0.92rem] font-semibold text-[var(--ink)] sm:px-5"
                >
                  {row.item}
                </th>
                <td className="px-4 py-3.5 align-top text-[0.9rem] leading-6 text-[var(--body)] sm:px-5">
                  {row.why}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const page: TrekPage = {
  slug: "plan/packing-list",
  route: "/plan/packing-list",
  title: "Gokyo Lake Trek Packing List",
  description:
    "What to bring for ten days between 2,650 m and 5,357 m, what is provided, what to rent in Kathmandu rather than buy, and how much your porter will carry.",
  hero: {
    title: "The packing list",
    subtitle:
      "Ten walking days between 2,650 m and 5,357 m, one summit morning that starts in the dark, and a porter shared between two of you. The sleeping bag and the down jacket are ours.",
    image: "/images/ngozumpa-moraine.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "See the 15-day trek", href: "/itinerary/15-day", variant: "green" },
      { label: "Ask what you still need", href: "#inquiry", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section
        id="provided"
        eyebrow="The short answer"
        title="What we lend you, so you do not buy it"
      >
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              A sleeping bag and a down jacket come with this trek. Both are lent
              to you for the walking days and handed back at the end, so you do
              not need to buy either one. You also get a duffle bag, and that one
              is yours to keep.
            </p>
            <p>
              That is worth saying twice, because those two items are usually the
              most expensive things on a packing list, and most lists published
              for this trek tell you to buy both. Everything below assumes you
              already have them, because you do.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">Provided</b>
              <div className="mt-4">
                <MarkList tone="inc" items={PROVIDED} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">You bring</b>
              <div className="mt-4">
                <MarkList tone="exc" items={NOT_PROVIDED} />
              </div>
            </div>
          </div>

          <Note>
            The kit check happens on day 2, in Kathmandu, before you fly. It
            exists so that a missing pair of gloves is an afternoon in Thamel
            rather than a problem at 4,750 m. If you already know you are short
            of something, tell us before you arrive and it will be waiting.
          </Note>
        </div>
      </Section>

      <Section id="carry" eyebrow="Who carries what" title="One porter for two trekkers">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              One porter is shared between two trekkers, and what he carries is
              your duffle bag. Everything you want during the walking day goes on
              your own back, in your own daypack. So you are packing two bags,
              not one.
            </p>
            <p>
              The split is decided by a single question:{" "}
              <strong>will I want this before tonight?</strong> Porters walk
              their own pace, sometimes an hour ahead of you and sometimes an
              hour behind, and the duffle goes with them. You will not see it
              again between breakfast and the lodge.
            </p>
            <p>
              The second thing that split decides is weight. Your porter is
              carrying for two people, so your duffle is half of one man's load.
              Porters have load limits, we hold to them, and the practical
              consequence is that the duffle is a bag to fill sensibly rather
              than a bag to fill up. If you are adding a third pair of trousers
              because there is room, that is the moment to stop.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>The duffle, carried for you</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Sleeping bag, warm kit, spare clothes, everything for the
                evening and the night. It reaches the lodge when the porter
                does and stays in your room until morning.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>The daypack, carried by you</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Water, layers, sun protection, documents, money, camera,
                headtorch, medication. Big enough for a day and no bigger, since
                a pack with room in it always ends up full.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="wear"
        eyebrow="On your body"
        title="What you walk in, and the morning that changes it"
      >
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              Most days you walk in two thin layers and take one of them off
              inside the first hour. The trek spans 2,650 m at Phakding to
              5,357 m on Gokyo Ri, but the bigger swing is inside a single day:
              cold at dawn, hot in the sun by mid-morning, cold again the minute
              the valley shades over.
            </p>
            <p>
              Which is why the answer is layers you can shed while walking rather
              than one warm coat. A thin base layer against the skin, a fleece or
              light insulated layer over it, and a windproof shell that also
              keeps rain out. Trousers that dry. Never jeans.
            </p>
            <p>
              Boots matter more than anything else here. Worn in, ankle support,
              and already comfortable over back-to-back long days before you get
              on the plane. Day 12 is 19.5 km and almost all of it downhill,
              which is the day that finds every fault in a boot and every
              untrimmed toenail.
            </p>
            <p>
              Sun is the underrated one. Above 4,000 m it burns through cloud and
              comes back up off snow, so a brimmed hat, dark sunglasses, high
              factor cream and lip balm are day-one items rather than luxuries.
            </p>
          </div>

          <div className={`${CARD} p-5 sm:p-6`}>
            <Sub>Day 9, the coldest three hours of the trek</Sub>
            <div className={`mt-3 ${PROSE}`}>
              <p>
                You leave Gokyo village between 4 and 5 in the morning, from
                4,750 m, and climb 600 m in the dark with no warm-up and no
                shelter. Still air before sunrise at that altitude is the coldest
                you will be on this trek, and the top is exposed while you stand
                around waiting for the light.
              </p>
              <p>
                This is the morning the loaned down jacket is for, worn over
                everything else you own. Add a hat that covers your ears,
                insulated gloves with thin liner gloves underneath so you can
                work a camera without bare hands, and the headtorch. You will be
                moving slowly, and moving slowly is what makes you cold. The
                climb itself is on <Link href="/gokyo-ri">the Gokyo Ri page</Link>.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/prayer-flags-peak.webp"
              alt="Prayer flags strung along a high ridge line with snow peaks and open sky behind"
              width={1350}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Nothing at this height gives you shelter. Most people put on every
              layer they are carrying before they stop to look at anything.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="bags" eyebrow="The list" title="The list, bag by bag">
        <div className="space-y-10">
          <div className="space-y-5">
            <Sub>In the daypack, which you carry</Sub>
            <KitTable rows={DAYPACK} />
          </div>

          <div className="space-y-5">
            <Sub>In the porter duffle</Sub>
            <KitTable rows={DUFFLE} />
          </div>

          <div className="space-y-5">
            <Sub>Documents, and where to keep them</Sub>
            <div className={`${CARD} p-5 sm:p-6`}>
              <MarkList tone="inc" items={DOCUMENTS} />
            </div>
            <Note>
              Keep all of it on you, in the daypack, and not in the duffle. Your
              passport is checked at Monjo while the porter and your bag may be
              an hour away in either direction.
            </Note>
          </div>
        </div>
      </Section>

      <Section id="leave" eyebrow="Leave it" title="What not to bring">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The common packing mistake on this trek is not forgetting
              something. It is bringing a second and a third of everything, which
              somebody else then carries up a valley for you.
            </p>
          </div>

          <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
            <MarkList tone="exc" items={LEAVE_AT_HOME} />
          </div>

          <Note>
            One thing worth adding rather than cutting: a set of thermals you
            only ever sleep in. Rooms above Namche are not heated, and the
            difference between a decent night at 4,750 m and a miserable one is
            usually dry socks and a base layer that has not been walked in. What
            the lodges are actually like is on{" "}
            <Link href="/plan/tea-houses">the tea houses page</Link>.
          </Note>
        </div>
      </Section>

      <Section id="rent" eyebrow="Kathmandu" title="Rent it in Thamel, do not buy it at home">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Anything you are missing can be rented or bought in Thamel, the
              trekking quarter of Kathmandu, for a fraction of what the same item
              costs at home. That is the whole reason the kit check sits on day 2
              rather than day 3.
            </p>
            <p>
              Day 2 is your Kathmandu preparation day and it is deliberately
              before the Lukla flight. We go through what you have brought, you
              buy or rent the gaps that afternoon, and you fly with a complete
              bag. Namche has gear shops too and it is the last place that does,
              but the choice narrows as you climb and nothing up there gets
              cheaper.
            </p>
            <p>
              The rule that works:{" "}
              <strong>
                rent the things you will use once, buy the things that touch your
                feet or your skin.
              </strong>{" "}
              Poles, gaiters and a spare warm layer are worth renting. Boots and
              socks are not, because a rented boot is somebody else's shape.
            </p>
            <p>
              We are not going to print rental prices here. The shops set their
              own, they move with the season, and a figure we cannot stand behind
              is worse than no figure. What we will say is that the gap between
              renting in Thamel and buying at home is large enough to plan
              around.
            </p>
          </div>

          <ActionCard
            title="Not sure what you already have?"
            body="Send us your list before you book flights. We will tell you what to leave at home, what to rent in Thamel and what is already in the price."
            ctaLabel="Ask us"
            ctaHref="#inquiry"
          />

          <div className={PROSE}>
            <p>
              Everything on this page is built around one schedule, the{" "}
              <Link href="/itinerary/15-day">15-day Gokyo Lake Trek</Link>, and
              one cold morning on{" "}
              <Link href="/gokyo-ri">Gokyo Ri at 5,357 m</Link>. Where you sleep
              each night, and what the lodges charge for once you are above
              Namche, is on{" "}
              <Link href="/plan/tea-houses">tea houses and food</Link>. The
              documents your passport is needed for are on{" "}
              <Link href="/permits">permits and fees</Link>.
            </p>
          </div>
        </div>
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

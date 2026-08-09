// /plan/tea-houses. Outer Section, Domain 2 (Planning), node 35.
//
// The whole play on this page is the charged extras. Our own inclusions list
// names a hot shower in exactly three villages, and our exclusions list names
// bottled water, internet and laundry as personal expenses. Most competing
// pages write "tea house accommodation with hot showers available" and let the
// reader assume. Saying which three villages, and saying that everything else
// is bought from the lodge at a price that climbs with altitude, is the honest
// version and it is also the one a reader remembers.
//
// FACTS: the twin-share lodge-to-lodge arrangement, the Lukla, Phakding and
// Namche hot shower, full board with a cup of tea, and the personal expenses
// list are the operator's own published inclusions and exclusions, captured in
// seo/research/operator-nepalintrepidtreks.md. Altitudes and the night-by-night
// stops come from the published itinerary.
//
// NO PRICES. We have no verified figure for a shower, a charge point or a wifi
// card anywhere on this route. The page says they are charged and that the rate
// climbs with altitude, which is true and defensible, and stops there.
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

type Stop = {
  place: string;
  alt: string;
  nights: string;
  room: string;
};

/** Every lodge night of the 15-day itinerary, in the order you sleep in them. */
const STOPS: Stop[] = [
  {
    place: "Phakding",
    alt: "2,650 m",
    nights: "Night 3",
    room: "Attached bathroom and a hot shower, included. Low, warm and green, and the easiest night of the trek.",
  },
  {
    place: "Namche Bazaar",
    alt: "3,443 m",
    nights: "Nights 4, 5 and 11",
    room: "Attached bathroom and a hot shower, included. The last town: bakeries, gear shops, a phone signal and the best beds you get.",
  },
  {
    place: "Dhole",
    alt: "4,038 m",
    nights: "Nights 6 and 10",
    room: "Basic from here on. Shared bathroom, unheated bedroom, and a dining room stove lit in the evening.",
  },
  {
    place: "Machhermo",
    alt: "4,447 m",
    nights: "Night 7",
    room: "The same again and colder. A small settlement, few lodges, and everybody in one dining room.",
  },
  {
    place: "Gokyo",
    alt: "4,750 m",
    nights: "Nights 8 and 9",
    room: "The highest you sleep. Cold room, thin walls, and the reason a sleeping bag is lent to you rather than left to chance.",
  },
  {
    place: "Lukla",
    alt: "2,850 m",
    nights: "Night 12",
    room: "Attached bathroom and a hot shower, included. The first proper wash in nine days, and it is memorable.",
  },
];

const INCLUDED = [
  "The room, twin-share, for all ten lodge nights on the trek.",
  "Breakfast, lunch and dinner every day on the trek, with a cup of tea.",
  "An attached bathroom and a hot shower in Lukla, Phakding and Namche.",
  "Seasonal fruit on the trail.",
  "Your guide's and your porter's food, beds, wages and insurance, so nothing is asked of you at the lodge counter.",
];

const CHARGED = [
  "A hot shower above Namche, wherever the lodge has one.",
  "Charging a phone, a camera battery or a power bank.",
  "Wifi, sold by the lodge.",
  "Bottled water, cold drinks, beer and anything you drink outside your meals.",
  "Laundry, phone calls and everything else on the personal expenses list.",
];

export const page: TrekPage = {
  slug: "plan/tea-houses",
  route: "/plan/tea-houses",
  title: "Tea Houses and Food on the Gokyo Lake Trek",
  description:
    "Where you sleep and what you eat between Lukla and Gokyo. Room standards at 4,750 m, what the menus offer, what a hot shower, charging and wifi cost, and whether the water is safe.",
  hero: {
    title: "Tea houses and food",
    subtitle:
      "Twin-share lodge rooms, a different one every night, all the way to 4,750 m. Hot water, wifi and a charged phone are not in the price above Namche, and they get dearer the higher you go.",
    image: "/images/gokyo-village-lakeshore.webp",
    aspect: "4 / 3",
    minHeight: 480,
    ctas: [
      { label: "See the 15-day trek", href: "/itinerary/15-day", variant: "green" },
      { label: "What to pack", href: "/plan/packing-list", variant: "purple" },
    ],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section
        id="what"
        eyebrow="The short answer"
        title="What the accommodation actually is"
      >
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              You sleep in tea houses: family-run trekking lodges, a different
              one each night, in a twin-share room. An attached bathroom and a
              hot shower come with the room in Lukla, Phakding and Namche. Above
              Namche they do not, and the rooms get simpler with every hundred
              metres you climb.
            </p>
            <p>
              The phrase "tea house" is doing a lot of work in that sentence. Low
              down it means a heated dining room, a long menu, a plug socket and
              a bathroom you would recognise. At 4,750 m it means a plywood room
              with two beds, a mattress, a blanket, a window and a shared toilet
              at the end of a cold corridor. Both get called a tea house, and
              most trek pages say the words without telling you which one you get
              on which night. So here is the list.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Where
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Altitude
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Which nights
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      What the room is like
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {STOPS.map((stop) => (
                    <tr
                      key={stop.place}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-4 py-3.5 align-top text-[0.92rem] font-semibold text-[var(--ink)] sm:px-5"
                      >
                        {stop.place}
                      </th>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] tabular-nums text-[var(--brand-ink)] sm:px-5">
                        {stop.alt}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.88rem] text-[var(--muted)] sm:px-5">
                        {stop.nights}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.9rem] leading-6 text-[var(--body)] sm:px-5">
                        {stop.room}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            Ten lodge nights, and the nights at either end in Kathmandu are a
            3-star hotel on bed and breakfast instead. Twin-share is the standard
            and it is what the price is built on. If you are travelling alone and
            want a room to yourself, ask us before you book rather than at the
            lodge door: above Namche there are not many rooms, and in season
            there are not many spare ones.
          </Note>
        </div>
      </Section>

      <Section
        id="extras"
        eyebrow="The honest bit"
        title="Showers, charging and wifi are not included above Namche"
      >
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              A hot shower is part of the room in Lukla, Phakding and Namche, and
              nowhere else. Above Namche the lodge charges you for a shower,
              charges you to charge a phone or a camera battery, and charges you
              for wifi. None of it is in the trek price, and{" "}
              <strong>the rate rises the higher you go</strong>.
            </p>
            <p>
              That is not the lodge being greedy. Every litre of hot water above
              Namche is heated with fuel that was carried or flown in, and the
              electricity comes from a small solar array that has a bad winter.
              The price reflects what it costs to get any of it up there, which
              is why it climbs with the altitude the same way everything else on
              the mountain does.
            </p>
            <p>
              We are not going to print figures. We cannot verify them, they
              differ between lodges and they move with the season, and a number
              we cannot stand behind is worse than no number. What we can tell
              you is the shape of it: carry cash in rupees, budget separately for
              these, and expect Gokyo to be the dearest place you buy any of
              them.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${CARD} p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">In the price</b>
              <div className="mt-4">
                <MarkList tone="inc" items={INCLUDED} />
              </div>
            </div>
            <div className={`${CARD} bg-black/[0.015] p-5 sm:p-6`}>
              <b className="text-[1.05rem] text-[var(--ink)]">
                Bought from the lodge
              </b>
              <div className="mt-4">
                <MarkList tone="exc" items={CHARGED} />
              </div>
            </div>
          </div>

          <Note>
            Two things follow from this. Charge everything before you leave
            Namche and carry a full power bank up the valley, because the rate
            only goes one way from there. And keep batteries in the sleeping bag
            overnight, because the cold flattens them and you will pay to put the
            charge back. Both are on{" "}
            <Link href="/plan/packing-list">the packing list</Link>.
          </Note>
        </div>
      </Section>

      <Section id="food" eyebrow="Eating" title="What the food is actually like">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Every meal on the trek is included: breakfast, lunch and dinner,
              with a cup of tea. You order from the lodge menu, and the menu gets
              shorter every day you climb.
            </p>
            <p>
              <strong>Dal bhat is the meal to learn to like.</strong> Rice,
              lentil soup, a curried vegetable and a pickle, cooked fresh because
              it is what the lodge family is eating anyway, and in most lodges
              topped up until you say stop. It is the one dish on the card that
              is never sitting around waiting for an order, and it is what your
              guide eats twice a day. There is a reason for that.
            </p>
            <p>
              Lower down the menu reads like a menu: fried rice, noodles, momos,
              pasta, pancakes, eggs, soups, and a bakery in Namche that people
              talk about for the rest of the trek. By Machhermo and Gokyo the
              same laminated card is still on the table but half of it is
              unavailable, and what is left is whatever the kitchen can make from
              what was carried up.
            </p>
            <p>
              <strong>Eat vegetarian above Namche.</strong> Meat that high has
              been carried unrefrigerated for days, and a stomach illness at
              4,750 m is a different problem than it is at home. It dehydrates
              you, it takes your appetite, and dehydration makes the altitude
              worse. Our guides eat vegetarian up there and you should too. Vegan
              works on the same dishes without the eggs and cheese, though it
              narrows the choice a long way past Namche, so tell us in advance
              rather than at the table.
            </p>
            <p>
              A cup of tea comes with each meal. A second pot, a cold drink or a
              beer does not, and it follows the same altitude curve as everything
              else you buy from a lodge.
            </p>
          </div>

          <Note>
            Skip the beer above Namche altogether. It is on the menu, and at
            altitude it dehydrates you, makes acclimatising harder and masks the
            early symptoms that you and your guide are both watching for. Save it
            for the night you get back down to Namche, which is a genuinely good
            evening.
          </Note>
        </div>
      </Section>

      <Section id="water" eyebrow="Water" title="Drinking water, and the bottle problem">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Bottled water is not included at any point on the trek, and buying
              it is the wrong answer twice over. It gets steadily more expensive
              the higher you go, and every empty bottle in the Gokyo valley has
              to be carried back down or burnt where it stands.
            </p>
            <p>
              There is no rubbish collection at 4,750 m. What goes up either
              comes down on somebody's back or stays. One trekker drinking three
              litres a day out of plastic for ten days leaves roughly thirty
              bottles behind in a valley that has no way of dealing with them,
              and there are a lot of trekkers.
            </p>
            <p>
              So carry bottles and treat what you put in them. Trekkers here use
              three approaches: chemical treatment, a filter, or ultraviolet
              light. All three work when used exactly as their instructions say,
              and all three have a weakness that matters at this altitude.
              Chemicals need contact time before you drink. Filters can freeze
              overnight and crack. Anything with a battery goes flat in the cold.
              We are not going to recommend a product, because the right one is
              the one you have already used at home and trust.
            </p>
            <p>
              Lodges will usually fill a bottle with boiled water as well. Like
              everything else on the mountain it is charged for and the price
              climbs with altitude, but it is the simplest option there is, and a
              hot bottle in the foot of your sleeping bag is worth something on
              its own before it cools down and becomes tomorrow's water.
            </p>
          </div>

          <Note>
            Drink more than you feel like drinking. Altitude dries you out
            through your breath long before it does through sweat, and the first
            signs of dehydration look a great deal like the first signs of
            altitude sickness. Your guide will nag you about this. Let them.
          </Note>
        </div>
      </Section>

      <Section id="night" eyebrow="4,750 m" title="What a night in Gokyo is actually like">
        <div className="space-y-8">
          <div className={PROSE}>
            <p>
              Cold room, warm dining room, thin walls and less sleep than you
              wanted. That is the honest description of both nights in Gokyo
              village, and it is the same for everyone in the building.
            </p>
            <p>
              The bedroom is not heated and will not be. It is two beds, a
              mattress, a blanket, a window and if you are lucky a hook. Nothing
              above Namche heats bedrooms, because the fuel to do it does not
              exist at that altitude. You sleep in the sleeping bag we lend you
              with the lodge blanket over the top of it, and you go to bed
              wearing considerably more than you would at home.
            </p>
            <p>
              The dining room is the exception, and it is where the evening
              happens. A stove in the middle gets lit in the late afternoon and
              the whole lodge ends up around it, every trekker and every guide,
              eating and drinking tea and charging things and going to bed at
              eight. It is one of the better parts of this trek. Then the stove
              goes out, and you can see your breath again on the way to your
              room.
            </p>
            <p>
              The walls are plywood and they are exactly as good as that sounds.
              You will hear the couple next door, somebody coughing two rooms
              away and everyone's zips at four in the morning. Earplugs are the
              cheapest item on the packing list and the one people most often
              wish they had brought.
            </p>
            <p>
              You will also sleep badly for reasons that have nothing to do with
              the lodge. Breathing changes at 4,750 m, most people wake several
              times, and a lot of people need the toilet in the night, which up
              here means a corridor and a headtorch. None of that means something
              is wrong. It is what sleeping at that height is like, and it is
              part of why the schedule spends a whole acclimatisation day at
              Namche before bringing you up here.
            </p>
            <p>
              Then on the second morning you are up between 4 and 5, in the dark,
              in an unheated room, to climb{" "}
              <Link href="/gokyo-ri">Gokyo Ri at 5,357 m</Link>. Breakfast is
              when you get back.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>What makes it bearable</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                A dry base layer kept only for sleeping, dry socks, earplugs, a
                headtorch within reach and a bottle of boiled water in the foot
                of the bag. None of it is expensive and all of it is decided
                before you leave Kathmandu.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>What does not help</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Beer, a late night in the dining room, and going to bed already
                cold. Get warm by the stove, then go straight to the room while
                you still are.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lakeshore-trail.webp"
              alt="A trail running along the shore of a turquoise lake below moraine slopes and snow peaks"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The last stretch into Gokyo. Every lodge in the village sits on the
              shore of the third lake at 4,750 m, which is the highest you sleep
              on this trek.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="next" eyebrow="Next" title="What this means for your bag and your budget">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Two things follow from all of the above. Carry cash in rupees for
              the showers, the charging and the wifi, because above Namche those
              are bought and not included. And pack for a cold room rather than a
              cold trail, because the bedroom is where you spend the most hours.
              Both are covered on{" "}
              <Link href="/plan/packing-list">the packing list</Link>.
            </p>
            <p>
              Which lodge falls on which night, with the altitudes and the
              walking hours beside them, is on the{" "}
              <Link href="/itinerary/15-day">15-day itinerary</Link>, and so is
              the full list of what the package covers. The village those last
              two nights are spent in sits on the third of{" "}
              <Link href="/lakes">the Gokyo lakes</Link>.
            </p>
          </div>

          <ActionCard
            title="Ask about rooms before you book"
            body="Single rooms, dietary needs, and what is realistic at 4,750 m rather than what sounds good in a brochure. Tell us what you need and we will tell you what is actually possible."
            ctaLabel="Enquire"
            ctaHref="#inquiry"
          />
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

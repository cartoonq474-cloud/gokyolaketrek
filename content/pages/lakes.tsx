// /lakes, the highest-volume page on the site (590/mo, KD 15).
//
// Its whole reason to exist: nearly every competitor writes "six turquoise
// lakes" and stops. This one names them, measures them, and carries the Ramsar
// designation. See seo/topical-map.md, Cluster 4.
//
// FACTS: lake names, altitudes, areas, the Ramsar date and the 19-lake figure
// are from Wikipedia's sourced table, chosen over trekking blogs because those
// contradict each other on both names and which lake is largest.
//
// The "one of the highest freshwater lake systems" wording is deliberate. The
// stronger claim, "the highest", is made by several competitors and is not
// supportable.
import type { ReactNode } from "react";
import Link from "next/link";
import type { TrekPage } from "@6ktreks/ui";
import { CARD, PROSE, PROSE_SM, Note, Section, Sub } from "../design-kit";

type Lake = {
  order: string;
  name: string;
  alt: string;
  area: string;
  note: ReactNode;
};

/**
 * Ordered as the trail meets them, not by size. A trekker walking up the valley
 * passes the first three; the fourth and fifth are the day walk beyond Gokyo.
 */
const LAKES: Lake[] = [
  {
    order: "First",
    name: "Longpongo",
    alt: "about 4,690 m",
    area: "n/a",
    note: "The first water you reach above Machhermo, small and often still frozen at the edges in spring.",
  },
  {
    order: "Second",
    name: "Tanjung Cho",
    alt: "4,740 m",
    area: "16.95 ha",
    note: "Larger, and the first that stops people walking. Also written Taujung or Taboche on trekking maps.",
  },
  {
    order: "Third",
    name: "Dudh Pokhari, or Gokyo Cho",
    alt: "4,700 m",
    area: "42.9 ha",
    note: "The one everyone means by 'Gokyo Lake'. The village sits on its shore and Gokyo Ri rises straight off it.",
  },
  {
    order: "Fourth",
    name: "Thonak Cho",
    alt: "4,710 m",
    area: "65.07 ha",
    note: "The largest of them all, and most trekkers never see it. An hour and a half north of the village.",
  },
  {
    order: "Fifth",
    name: "Ngojumba Cho",
    alt: "4,735 m",
    area: "14.39 ha",
    note: "The turnaround for the day walk, and the approach to Scoundrel's Viewpoint.",
  },
  {
    order: "Sixth",
    name: "Gyazumpa Cho",
    alt: "4,750 m",
    area: "29 ha",
    note: "The highest of the six and the least visited. Beyond it the valley belongs to climbers.",
  },
];

export const page: TrekPage = {
  slug: "lakes",
  route: "/lakes",
  title: "The Gokyo Lakes: Every Lake, Named and Measured",
  description:
    "Dudh Pokhari, Thonak Cho, Gyazumpa Cho, Tanjung Cho and Ngojumba Cho, a Ramsar wetland since 2007 and one of the highest freshwater lake systems in the world. How high each sits, which is largest, and why they are that colour.",
  hero: {
    title: "The Gokyo Lakes",
    subtitle:
      "Six lakes on the trail, nineteen in the system, and a Ramsar wetland at 4,700 m. Here is every one of them, named.",
    image: "/images/gokyo-lake-dusk.webp",
    aspect: "1 / 1",
    minHeight: 520,
    ctas: [{ label: "See the 15-day trek", href: "/itinerary/15-day", variant: "green" }],
  },
  content: (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <Section id="what" eyebrow="The short answer" title="What the Gokyo Lakes are">
        <div className="space-y-8">
          <div className={PROSE}>
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
              The Gokyo Lakes are a chain of oligotrophic glacial lakes in
              Sagarmatha National Park, sitting between roughly 4,700 m and
              5,000 m alongside the Ngozumpa glacier. The trail past them is the
              Gokyo valley, and the third lake is the one the village stands on.
            </p>
            <p>
              Most descriptions stop at "six turquoise lakes". The number
              actually depends on what you count. Six is how many the trekking
              route passes. The wetland as a whole holds{" "}
              <strong>nineteen lakes</strong>, and it has been a{" "}
              <strong>Ramsar site since 13 September 2007</strong>, covering
              7,770 hectares. It is one of the highest freshwater lake systems in
              the world.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/lake-mirror-peaks.webp"
              alt="A Gokyo lake holding a mirror reflection of the surrounding Himalayan peaks under a deep blue sky"
              width={1350}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              Still morning on the third lake. The water is calm enough to hold
              the ridgeline before the valley wind gets up.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="named" eyebrow="All six" title="Every lake, in the order you meet it">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              Spellings vary more than they should. Tibetan{" "}
              <em>tsho</em> and <em>cho</em> both mean lake, and trekking maps
              transliterate them inconsistently, so the same water appears as
              Thonak Tsho and Thonak Cho on two signs an hour apart. The names
              below follow the sourced record, with the common variants noted.
            </p>
          </div>

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--bg-alt)]">
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Order
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Name
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Altitude
                    </th>
                    <th className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:px-5">
                      Surface
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LAKES.map((lake) => (
                    <tr
                      key={lake.name}
                      className="border-b border-[var(--line-2)] last:border-b-0"
                    >
                      <td className="px-4 py-3.5 align-top text-[0.9rem] font-semibold tabular-nums text-[var(--brand-ink)] sm:px-5">
                        {lake.order}
                      </td>
                      <td className="px-4 py-3.5 align-top text-[0.92rem] sm:px-5">
                        <b className="text-[var(--ink)]">{lake.name}</b>
                        <span className="mt-1 block text-[0.85rem] leading-6 text-[var(--body)]">
                          {lake.note}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] tabular-nums text-[var(--body)] sm:px-5">
                        {lake.alt}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 align-top text-[0.9rem] tabular-nums text-[var(--body)] sm:px-5">
                        {lake.area}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Note>
            The fourth lake, Thonak Cho, is the biggest of them at 65 hectares,
            half again the size of the famous third. Almost nobody walks to it,
            because it sits beyond Gokyo village on a day most itineraries spend
            descending.
          </Note>
        </div>
      </Section>

      <Section id="colour" eyebrow="Why" title="Why the water is that colour">
        <div className="space-y-7">
          <div className={PROSE}>
            <p>
              The turquoise is rock, not algae. The Ngozumpa glacier grinds the
              bedrock it sits on into an extremely fine powder, usually called
              rock flour, and meltwater carries it into the lakes. The particles
              are too small to sink quickly, so they stay suspended and scatter
              the shorter blue and green wavelengths of light back at you.
            </p>
            <p>
              It also explains why the colour changes through the day and through
              the season. Bright sun and a high glacier melt give the strongest
              colour. Overcast light, or a cold spell that slows the melt, and
              the same lake reads grey.
            </p>
            <p>
              <em>Oligotrophic</em>, the word the scientific record uses for
              these lakes, means nutrient-poor. Very little grows in them. That
              clarity is part of why the colour carries.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[var(--line)]">
            <img
              src="/images/gokyo-lake.webp"
              alt="The third Gokyo lake in full turquoise, with the Ngozumpa moraine and snow peaks behind it"
              width={1800}
              height={1350}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[0.8rem] text-[var(--muted)]">
              The third lake, Dudh Pokhari, on a clear morning. The pale ridge
              behind the water is the lateral moraine of the Ngozumpa glacier.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="freeze" eyebrow="Season" title="When they freeze">
        <div className={PROSE}>
          <p>
            The lakes ice over through the deep winter and hold ice at the edges
            well into spring. Trekkers in late March and April regularly find the
            higher lakes still part-frozen while the third is open water.
          </p>
          <p>
            That is not a reason to avoid the shoulder months. A frozen lake
            under a clear sky is its own thing, and the valley is far quieter.
            It is a reason to know what you are walking into, which is what{" "}
            <Link href="/plan/best-time">the season page</Link> is for.
          </p>
        </div>
      </Section>

      <Section id="visit" eyebrow="Getting there" title="How you actually see them">
        <div className="space-y-6">
          <div className={PROSE}>
            <p>
              The lakes are the back half of a two-week trek, not a day trip. You
              fly to Lukla, walk up through Namche Bazaar, branch off the Everest
              Base Camp trail above it, and reach the third lake on day 8 of a
              15-day itinerary.
            </p>
            <p>
              Lakes one, two and three are on the main trail and you pass all
              three walking into the village. The fourth and fifth need a
              separate day out and back across the moraine, which is the day most
              itineraries skip.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${CARD} p-5`}>
              <Sub>On the way in</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Longpongo, Tanjung Cho and Dudh Pokhari, all on the main trail
                between Machhermo and Gokyo village.
              </p>
            </div>
            <div className={`${CARD} p-5`}>
              <Sub>The extra day</Sub>
              <p className={`mt-2 ${PROSE_SM}`}>
                Thonak Cho and Ngojumba Cho, north from the village along the
                glacier. Add a day if you want them.
              </p>
            </div>
          </div>

          <div className={PROSE}>
            <p>
              The full route, with altitudes and walking hours for every day, is
              on <Link href="/itinerary/15-day">the 15-day itinerary</Link>. The
              climb above the third lake has{" "}
              <Link href="/gokyo-ri">its own page for Gokyo Ri</Link>.
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

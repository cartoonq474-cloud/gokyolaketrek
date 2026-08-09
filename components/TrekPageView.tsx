import type { Metadata } from "next";
import type { TrekPage } from "@6ktreks/ui";
import { JsonLd, TrekLayout } from "@6ktreks/ui";
import { gokyoConfig } from "@/content/config";

const ORIGIN = `https://${gokyoConfig.domain}`;

/** Renders a content page through the shared trek chrome. */
export function TrekPageView({ page }: { page: TrekPage }) {
  return (
    <>
      {page.jsonLd.length > 0 && <JsonLd data={page.jsonLd} />}
      <TrekLayout
        config={gokyoConfig}
        hero={page.hero}
        subnav={page.subnav}
        withRail={page.withRail}
        withTrust={page.withTrust}
        withContacts={page.withContacts}
        narrow={page.narrow}
        selfStyled={page.selfStyled}
      >
        {page.content}
      </TrekLayout>
    </>
  );
}

/**
 * Pixel dimensions of the photographs used as page heroes, read from
 * `photos/manifest.csv` rather than guessed.
 *
 * Same caveat the Annapurna build carries: these are hero photographs, not
 * social cards. `twitter:card` is `summary_large_image` and the channel this
 * business pushes hardest is WhatsApp, which crops an undeclared preview
 * unpredictably. The real fix is a 1200x630 card per page through Next's
 * `opengraph-image` convention. Until those exist, declaring the true size of
 * what is actually there beats declaring nothing.
 *
 * A hero not listed here ships without width and height rather than with a
 * guess. Add a new one from the manifest, do not measure it by eye.
 */
const HERO_SIZES: Record<string, { width: number; height: number }> = {
  "/images/gokyo-lake.webp": { width: 1800, height: 1350 },
  "/images/gokyo-lake-dusk.webp": { width: 1800, height: 1800 },
  "/images/gokyo-village-lakeshore.webp": { width: 1800, height: 1350 },
  "/images/lake-mirror-peaks.webp": { width: 1350, height: 1350 },
  "/images/lake-reflection-cairn.webp": { width: 1800, height: 1350 },
  "/images/lakeshore-trail.webp": { width: 1800, height: 1350 },
  "/images/ngozumpa-glacier.webp": { width: 1800, height: 1350 },
  "/images/ngozumpa-moraine.webp": { width: 1350, height: 1012 },
  "/images/prayer-flags-peak.webp": { width: 1350, height: 1350 },
};

/**
 * Page titles are written on the page module and already carry the brand
 * suffix, so they bypass the layout's title template.
 */
export function pageMetadata(page: TrekPage): Metadata {
  const url = `${ORIGIN}${page.route}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: gokyoConfig.trekName,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: `${ORIGIN}${page.hero.image}`,
          ...HERO_SIZES[page.hero.image],
          alt: page.hero.title.includes(gokyoConfig.trekShort)
            ? page.hero.title
            : `${page.hero.title}, ${gokyoConfig.trekName}`,
        },
      ],
    },
  };
}

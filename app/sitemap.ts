import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { gokyoConfig } from "@/content/config";

const ORIGIN = `https://${gokyoConfig.domain}`;

/**
 * Pages that get a priority above the 0.7 baseline. Only the homepage exists so
 * far; add the money pages here as they are built.
 */
const PRIORITY: Record<string, number> = {
  "": 1.0,
};

/**
 * Routes come from the page registry in `content/pages`, so the sitemap cannot
 * drift from what the app actually renders: adding a page to the registry adds
 * it here.
 *
 * `lastModified` is read from the page module and is omitted when the module
 * does not set one. It is never `new Date()`. A lastmod that moves on every
 * deploy teaches Google the field is noise on this domain, and it then stops
 * trusting it for the changes that do matter.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${ORIGIN}${page.route}`,
    ...(page.lastModified ? { lastModified: new Date(page.lastModified) } : {}),
    changeFrequency: page.slug === "" ? "weekly" : "monthly",
    priority: PRIORITY[page.slug] ?? 0.7,
  }));
}

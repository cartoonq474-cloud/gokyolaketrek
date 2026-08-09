import { notFound } from "next/navigation";
import { TrekPageView, pageMetadata } from "@/components/TrekPageView";
import { pageSlugs, pagesBySlug } from "@/content/pages";

/**
 * Catch-all rather than `[slug]`, because the processed topical map puts depth
 * into the URL to signal section: `/itinerary/15-day`, `/route/cho-la`,
 * `/plan/best-time`, `/nepal/visa`. A single-segment route matches none of them,
 * so every one would have 404'd.
 *
 * `slug` arrives as an array of segments and is joined back into the path the
 * page registry is keyed by.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pagesBySlug[slug.join("/")];
  return page ? pageMetadata(page) : {};
}

export default async function TrekPageRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pagesBySlug[slug.join("/")];
  if (!page || page.slug === "") notFound();
  return <TrekPageView page={page} />;
}

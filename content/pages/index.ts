// The page registry. Add a page by creating its module here and adding it below,
// in the order you want it to appear in the sitemap.
//
// Order follows the build waves in `seo/topical-map.md`: root, the product, the
// destination pages that carry the most volume, the decision cluster, money,
// trust, then the supporting domains.
//
// `slug` is the full path minus the leading slash, including any directory
// segment, e.g. "itinerary/15-day". `app/[...slug]/page.tsx` is a catch-all and
// splits it back into segments.
import type { TrekPage } from "@6ktreks/ui";

// Root
import { page as home } from "./home";

// Cluster 1, the product
import { page as itinerary15Day } from "./itinerary-15-day";
import { page as itineraryWithEbc } from "./itinerary-with-everest-base-camp";
import { page as itineraryThreePasses } from "./itinerary-three-passes";
import { page as howManyDays } from "./how-many-days";

// Cluster 4, the destination. Highest volume on the site.
import { page as lakes } from "./lakes";
import { page as gokyoRi } from "./gokyo-ri";

// Cluster 3, the decision. Where forums currently outrank operators.
import { page as vsEverestBaseCamp } from "./vs-everest-base-camp";
import { page as guideOrSolo } from "./guide-or-solo";
import { page as gokyoRiVsKalaPatthar } from "./gokyo-ri-vs-kala-patthar";

// Cluster 2, money
import { page as cost } from "./cost";
import { page as permits } from "./permits";

// Cluster 5, trust and E-E-A-T
import { page as about } from "./about";
import { page as reviews } from "./reviews";
import { page as contact } from "./contact";
import { page as terms } from "./terms";
import { page as privacy } from "./privacy";
import { page as editorialPolicy } from "./editorial-policy";

// Outer domain 1, the route
import { page as map } from "./map";
import { page as routeLuklaFlights } from "./route-lukla-flights";

// Outer domain 2, planning
import { page as planBestTime } from "./plan-best-time";
import { page as planDifficulty } from "./plan-difficulty";
import { page as planAcclimatisation } from "./plan-acclimatisation";
import { page as planAltitudeSickness } from "./plan-altitude-sickness";
import { page as planPackingList } from "./plan-packing-list";
import { page as planTeaHouses } from "./plan-tea-houses";

/** Every page of the site, in sitemap order. The home page is first. */
export const pages: TrekPage[] = [
  home,
  itinerary15Day,
  itineraryWithEbc,
  itineraryThreePasses,
  howManyDays,
  lakes,
  gokyoRi,
  vsEverestBaseCamp,
  guideOrSolo,
  gokyoRiVsKalaPatthar,
  cost,
  permits,
  map,
  routeLuklaFlights,
  planBestTime,
  planDifficulty,
  planAcclimatisation,
  planAltitudeSickness,
  planPackingList,
  planTeaHouses,
  about,
  reviews,
  contact,
  terms,
  privacy,
  editorialPolicy,
];

export const pagesBySlug: Record<string, TrekPage> = Object.fromEntries(
  pages.map((p) => [p.slug, p]),
);

export const homePage = pages[0];

/** Slugs of every page except the home page, the params for /[...slug]. */
export const pageSlugs: string[] = pages.slice(1).map((p) => p.slug);

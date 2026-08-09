import type { ReviewItem } from "../data/types";

/**
 * Renders one or more JSON-LD blocks. Uses a plain inline <script> rather than
 * next/script so the markup is in the initial HTML response for crawlers.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escaping `<` is what stops a string value from closing the script element early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

export function organizationSchema(domain: string, trekName: string, reviews?: { score: number; count: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: trekName,
    url: `https://${domain}`,
    parentOrganization: { "@type": "Organization", name: "6K Nepal Treks Pvt. Ltd.", url: "https://6knepaltreks.com" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thamel, Kathmandu",
      addressCountry: "NP",
    },
    ...(reviews
      ? { aggregateRating: { "@type": "AggregateRating", ratingValue: reviews.score, reviewCount: reviews.count } }
      : {}),
  };
}

export function personSchema(name: string, role: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    worksFor: { "@type": "Organization", name: "6K Nepal Treks Pvt. Ltd." },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function reviewSchema(trekName: string, reviews: ReviewItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: trekName,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
}

/**
 * `priceCurrency` was hardcoded to GBP, which would have published a pound price
 * for a trek sold in dollars. It comes from the config now.
 *
 * A null `fromPrice` omits the offer entirely rather than emitting a zero or a
 * placeholder. An Offer is a machine-readable commitment, and Google will show
 * it in a rich result; asserting a price the operator has not set is worse than
 * saying nothing.
 */
export function touristTripSchema(
  trekName: string,
  description: string,
  fromPrice: number | null,
  currency = "USD",
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trekName,
    description,
    ...(fromPrice === null
      ? {}
      : {
          offers: {
            "@type": "Offer",
            price: fromPrice,
            priceCurrency: currency,
          },
        }),
  };
}

export function articleSchema(headline: string, description: string, dateModified: string, author = "Rohit Timilsina") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    dateModified,
    author: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", name: "6K Nepal Treks Pvt. Ltd." },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[], domain: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://${domain}${item.url}`,
    })),
  };
}

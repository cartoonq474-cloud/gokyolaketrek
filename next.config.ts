import type { NextConfig } from "next";

/**
 * Long-lived caching for the photography.
 *
 * The images are not content-hashed, so `immutable` is a promise that a given
 * path never changes its bytes. Replacing a photo therefore means giving it a
 * new filename, not overwriting the old one, or browsers that already hold it
 * will keep the old one for a year. The photo library is versioned in
 * `photos/manifest.csv`, so renaming is cheap.
 *
 * Before this, /images/*.webp was served with `max-age=0` while the CSS next
 * to it was served `immutable`: a three-page visit re-paid a 300 KB hero three
 * times.
 */
const IMAGE_CACHE = "public, max-age=31536000, immutable";

/**
 * Security headers. The site loads zero third-party scripts.
 *
 * TODO, follow-up: a strict Content-Security-Policy. It is unusually cheap
 * here for exactly that reason (`default-src 'self'` is close to accurate) and
 * it is a real trust signal on a site taking booking enquiries, but it needs
 * the nonce plumbing for Next's inline bootstrap scripts and a check against
 * next/font's inlined styles, so it is deliberately not in this change.
 */
const SECURITY_HEADERS = [
  // Two years, subdomains included. Only ever sent over HTTPS, which is all
  // Vercel serves.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send the full URL within the site, origin only when leaving it, nothing at
  // all when downgrading. Keeps referrer analytics for outbound links without
  // leaking a visitor's path off-site.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing here needs a camera, a microphone or a location. The enquiry form
  // is text.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Nothing on the site is meant to be framed.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const config: NextConfig = {
  typedRoutes: true,
  images: {
    /**
     * Next 16 only generates the qualities listed here and warns on anything
     * else, so `quality={80}` on the mountain divider was being requested,
     * refused and silently served at 75. Declaring 80 honours what that
     * component asked for. Add a value here before using it on an <Image>,
     * every extra entry is another variant the optimiser can be made to build.
     */
    qualities: [75, 80],
  },
  // `X-Powered-By: Next.js` tells an attacker which stack to aim at and tells a
  // visitor nothing.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: IMAGE_CACHE }],
      },
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default config;

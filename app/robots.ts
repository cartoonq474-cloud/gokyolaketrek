import type { MetadataRoute } from "next";

/**
 * TODO before launch: this allows everything. The site is a design clone with
 * placeholder copy in it, so if it gets deployed anywhere public before the
 * content is written, flip this to `disallow: "/"` until it is real.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://gokyolaketrek.com/sitemap.xml",
  };
}

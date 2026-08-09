import type { Metadata } from "next";
import { Anek_Latin, Ubuntu } from "next/font/google";
import "@6ktreks/ui/styles/global.css";

/**
 * TODO: placeholder metadata. The design is what has been cloned so far, the
 * copy has not been written. Every string here is a stand-in that describes the
 * trek plainly, and none of it has been through keyword research.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://gokyolaketrek.com"),
  title: {
    default: "Gokyo Lake Trek | 15 Days | Itinerary & Cost",
    template: "%s | Gokyo Lake Trek",
  },
  description:
    "The 15-day Gokyo Lake Trek in Nepal's Everest region. Licensed Kathmandu-based guides, trekkers taken from one, the turquoise lakes at 4,750 m and Gokyo Ri at 5,357 m.",
  openGraph: {
    title: "Gokyo Lake Trek | 15 Days in Nepal's Everest Region",
    description:
      "Book direct with a Kathmandu-based team. Licensed local guides, the Gokyo lakes, the Ngozumpa glacier and the view of Everest from Gokyo Ri.",
    url: "https://gokyolaketrek.com",
    siteName: "Gokyo Lake Trek",
    locale: "en",
    type: "website",
  },
};

/**
 * Fonts are self-hosted by next/font rather than fetched from Google at runtime.
 * That removes a render-blocking third-party request, drops the preconnects, and
 * pins the exact weights the stylesheet uses. `display: swap` keeps text visible
 * while the files load; the CSS vars are what global.css reads.
 */
const anek = Anek_Latin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // lang is "en", not the clone source's "en-GB". That site sells to UK
  // trekkers only. This one prices in USD and its reviewers are from Taiwan,
  // Singapore, the Philippines, the USA and across Europe, so declaring British
  // English would be wrong. The operator's own prose uses British spelling
  // ("acclimatisation"), which plain "en" accommodates without claiming a locale.
  return (
    <html lang="en" className={` ${anek.variable} ${ubuntu.variable}`}>
      <body>{children}</body>
    </html>
  );
}

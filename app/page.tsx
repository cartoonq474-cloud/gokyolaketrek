import { TrekPageView, pageMetadata } from "@/components/TrekPageView";
import { homePage } from "@/content/pages";

export const metadata = pageMetadata(homePage);

export default function Home() {
  return <TrekPageView page={homePage} />;
}

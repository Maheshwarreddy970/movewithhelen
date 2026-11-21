import { aboutPage as copy } from "@/data/about-page";
import { buildPageMetadata } from "@/lib/page-metadata";

import AboutView from "./about-view";

export const metadata = buildPageMetadata({
  fullTitle: copy.meta.title,
  description: copy.meta.description,
  path: "/about",
});

export default function AboutPage() {
  return <AboutView />;
}

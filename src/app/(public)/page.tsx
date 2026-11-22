import AboutSection from "@/components/home/about-section";
import ClientReviews from "@/components/home/client-reviews";
import FeaturedHomes from "@/components/home/featured-homes";
import Hero from "@/components/home/hero";
import LatestArticles from "@/components/home/latest-articles";
import LatestProperties from "@/components/home/latest-properties";
import PropertyTypes from "@/components/home/property-types";
import { site } from "@/data/site";
import { JsonLdScript, buildPageMetadata } from "@/lib/page-metadata";
import { organizationLd, websiteLd } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  fullTitle: site.seo.homeTitle,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={[organizationLd(), websiteLd()]} />
      <Hero />
      <FeaturedHomes />
      <AboutSection />
      <PropertyTypes />
      <LatestProperties />
      <ClientReviews />
      <LatestArticles />
    </>
  );
}

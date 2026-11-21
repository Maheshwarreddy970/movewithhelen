import { faqCategories, faqPage as copy } from "@/data/faq";
import { JsonLdScript, buildPageMetadata } from "@/lib/page-metadata";
import { faqLd } from "@/lib/structured-data";

import FaqView from "./faq-view";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLdScript data={faqLd(faqCategories)} />
      <FaqView />
    </>
  );
}

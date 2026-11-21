import { Suspense } from "react";

import { contactPage as copy } from "@/data/pages";
import { buildPageMetadata } from "@/lib/page-metadata";

import ContactView from "./contact-view";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactView />
    </Suspense>
  );
}

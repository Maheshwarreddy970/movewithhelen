import LegalPage from "@/components/legal/legal-page";
import { terms } from "@/data/legal";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: terms.metaTitle,
  description: terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}

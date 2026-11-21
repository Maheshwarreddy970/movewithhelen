import LegalPage from "@/components/legal/legal-page";
import { privacy } from "@/data/legal";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: privacy.metaTitle,
  description: privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}

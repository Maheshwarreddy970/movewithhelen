import type { Metadata } from "next";

import { absoluteUrl, pageTitle, site } from "@/data/site";
import type { JsonLd } from "@/lib/structured-data";

const DESCRIPTION_MAX = 160;

// Search results cut descriptions at about 160 characters; end on a word.
function clampDescription(text: string) {
  if (text.length <= DESCRIPTION_MAX) return text;
  const cut = text.slice(0, DESCRIPTION_MAX - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

// Build Next.js Metadata from the old PageMeta options.
export function buildPageMetadata({
  title,
  fullTitle,
  description: rawDescription = site.description,
  image = site.seo.ogImage,
  imageAlt = site.seo.ogImageAlt,
  type = "website",
  path,
  noindex = false,
}: {
  title?: string;
  fullTitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  path: string;
  noindex?: boolean;
}): Metadata {
  const description = clampDescription(rawDescription);
  const resolvedTitle = fullTitle ?? pageTitle(title);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: resolvedTitle },
    description,
    ...(noindex
      ? { robots: { index: false, follow: false } }
      : { alternates: { canonical: url } }),
    openGraph: {
      siteName: site.name,
      locale: site.seo.locale,
      type,
      title: resolvedTitle,
      description,
      url,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
  };
}

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  const graphs = Array.isArray(data) ? data : [data];
  return (
    <>
      {graphs.map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is data, not markup; "<" is escaped so a
          // value can't close the script tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

import { mlsLinks } from "@/data/mls-links";
import { DEFAULT_SITE_URL } from "@/data/site-url";

export type NavItem = { label: string; to: string; external?: boolean };

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VITE_SITE_URL ||
  DEFAULT_SITE_URL
).replace(/\/+$/, "");

export const site = {
  name: "MoveWithHelen",
  url: siteUrl,
  tagline:
    "Full-service Ontario real estate at 1% listing commission & up to $5,000 buyer cash-back.",
  description:
    "Work with Helen Everett, Sales Representative at Keller Williams Referred Urban Realty, for 1% listing commission and up to $5,000 buyer cash-back across Oakville, Burlington, Hamilton, and Niagara.",
  homeLabel: "MoveWithHelen home",
  seo: {
    homeTitle:
      "MoveWithHelen | 1% Listing Commission & Buyer Cash-Back — Oakville, Burlington, Hamilton & Niagara",
    locale: "en_CA",
    ogImage: "/og-image.png",
    ogImageAlt:
      "MoveWithHelen — Helen Everett, Keller Williams Referred Urban Realty",
    logo: "/icon-1024.png",
    themeColor: "#ffffff",
    email: "helen.everett@kw.com",
    phone: "+1-647-702-0046",
    region: "ON",
    country: "CA",
  },
  announcement: {
    label: "Special Offer",
    text: "Sell for just 1% listing commission or get up to $5,000 buyer cash-back.",
    link: { label: "Claim your offer", to: "/contact" },
    dismiss: "Dismiss announcement",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    contactTitle: "Talk to Helen",
    primary: [
      { label: "Search MLS", to: mlsLinks.allSale, external: true },
      { label: "Featured Listings", to: "/properties" },
      { label: "Areas", to: "/neighborhoods" },
      { label: "About Helen", to: "/about" },
    ] satisfies NavItem[],
    secondary: [{ label: "Contact", to: "/contact" }] satisfies NavItem[],
    cta: { label: "Book a call", to: "/contact" } satisfies NavItem,
  },
};

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title?: string) {
  return title ? `${title} | ${site.name}` : site.name;
}
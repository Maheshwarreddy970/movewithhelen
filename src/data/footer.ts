import { mlsLinks } from "@/data/mls-links";

export type FooterLink = { label: string; href: string };

export type FooterColumn = { title: string; links: FooterLink[] };

export const cta = {
  heading: "Ready to buy or sell across Halton, Hamilton & Niagara?",
  text: "List for 1% commission or claim up to $5,000 buyer cash-back—with 14 years of hands-on Ontario real estate experience behind every deal.",
  button: { label: "Book a Free Consultation", href: "/contact" },
  image: "/images/hero-desktop.jpg",
  imageAlt: "Modern Ontario home interior",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Search Live MLS", href: mlsLinks.allSale },
      { label: "Featured Listings", href: "/properties" },
      { label: "Service Areas", href: "/neighborhoods" },
      { label: "About Helen", href: "/about" },
    ],
  },
  {
    title: "Live MLS by City",
    links: [
      { label: "Oakville Homes", href: mlsLinks.citiesSale.oakville },
      { label: "Burlington Homes", href: mlsLinks.citiesSale.burlington },
      { label: "Hamilton Homes", href: mlsLinks.citiesSale.hamilton },
      { label: "Niagara Homes", href: mlsLinks.citiesSale.niagara },
    ],
  },
  {
    title: "Resources & Legal",
    links: [
      { label: "Buyer & Seller Guides", href: "/guides" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export const newsletter = {
  title: "Get new listings first",
  label: "Email address",
  placeholder: "Enter your email",
  button: "Subscribe",
  error: "Enter a valid email address",
  success: "You're in! Watch your inbox for local listings and market updates.",
};

export const footerBottom = {
  copyright:
    "© 2026 Helen Everett · MoveWithHelen.ca · Sales Representative (License #5032305)",
  contact: "helen.everett@kw.com · (647) 702-0046",
  disclaimer:
    "Keller Williams Referred Urban Realty, Brokerage · 156 Duncan Mill Road, Toronto, ON M3B 3N2 · Office: (416) 572-1016. Each office is independently owned and operated. Not intended to solicit buyers or sellers currently under contract.",
  socialLabel: "Quick links",
  social: [
    { label: "KW Profile", href: mlsLinks.home },
    { label: "Mortgage Calculator", href: mlsLinks.mortgageCalculator },
    { label: "KW App", href: mlsLinks.downloadApp },
  ] satisfies FooterLink[],
};
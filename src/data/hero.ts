import { mlsLinks } from "@/data/mls-links";

type HeroImageSource = {
  src: string;
  width: number;
  height: number;
};

type HeroContent = {
  label: string;
  headlineLines: string[];
  subtext: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; href: string };
  image: {
    alt: string;
    desktop: HeroImageSource;
    mobile: HeroImageSource;
  };
};

export const hero: HeroContent = {
  label: "Oakville · Burlington · Hamilton · Niagara",
  headlineLines: ["Why pay more to", "buy or sell your home?"],
  subtext:
    "Full-service representation with 14 years of Ontario real estate experience—just 1% seller listing commission and up to $5,000 buyer cash-back.",
  primaryCta: { label: "Free Home Evaluation", to: "/contact" },
  secondaryCta: { label: "Search All Homes (MLS)", href: mlsLinks.allSale },
  image: {
    alt: "Modern upscale Ontario home interior representing MoveWithHelen real estate service",
    desktop: { src: "/images/hero-desktop.jpg", width: 1920, height: 1088 },
    mobile: { src: "/images/hero-mobile.jpg", width: 1024, height: 1824 },
  },
};
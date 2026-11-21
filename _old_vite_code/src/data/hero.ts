// Fictional data for demo purposes only.

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
  image: {
    alt: string;
    desktop: HeroImageSource;
    mobile: HeroImageSource;
  };
};


export const hero: HeroContent = {
  label: "Serving Halton & Hamilton Regions",
  headlineLines: ["Why pay more to", "sell your home?"],
  subtext:
    "Full-service representation, professional marketing, and expert negotiation—all for just a 1% listing commission.",
  primaryCta: { label: "Free Home Evaluation", to: "/contact" },
  image: {
    alt: "Modern upscale home interior representing premium real estate service",
    desktop: { src: "/images/hero-desktop.jpg", width: 1920, height: 1088 },
    mobile: { src: "/images/hero-mobile.jpg", width: 1024, height: 1824 },
  },
};
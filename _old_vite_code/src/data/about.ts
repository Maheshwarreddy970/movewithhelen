// Fictional data for demo purposes only.

export type AboutIcon = "home" | "chart";

export type AboutFeature = {
  id: string;
  icon: AboutIcon;
  title: string;
  text: string;
};

export type AboutStat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

type AboutContent = {
  label: string;
  heading: string;
  subtext: string;
  features: AboutFeature[];
  mainImage: string;
  mainImageAlt: string;
  stats: AboutStat[];
};

// Placeholder photo until /images/about/about-main.webp exists. Alt text
// describes the placeholder.
export const about: AboutContent = {
  label: "About Move With Helen",
  heading: "14 Years of Real Estate Experience",
  subtext:
    "Providing residential buyers and sellers with professional representation and a smarter approach to real estate fees across Oakville, Burlington, and Hamilton.",
  features: [
    {
      id: "sell",
      icon: "home",
      title: "1% Listing Commission",
      text: "Get a comparative market analysis, professional photography, MLS exposure, and expert negotiation while keeping more of your money.",
    },
    {
      id: "buy",
      icon: "chart",
      title: "Buyer Cashback Program",
      text: "Receive up to $5,000 or more in cash back when you purchase a home with Helen, making your move even smarter.",
    },
  ],
  mainImage: "/images/hero-desktop.jpg",
  mainImageAlt: "Helen Everett, experienced full-service Realtor",
  stats: [
    { value: 1, suffix: "%", label: "Listing commission" },
    { value: 5000, suffix: "+", label: "Potential buyer cashback" },
    { value: 14, suffix: "+", label: "Years of real estate experience" },
  ],
};
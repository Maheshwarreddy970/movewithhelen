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

export const about: AboutContent = {
  label: "About Helen Everett",
  heading: "14 Years of Real Estate Experience",
  subtext:
    "Starting her career as a Deals Administrator before becoming a Sales Representative with Keller Williams Referred Urban Realty, Helen brings deep contract and closing expertise across Oakville, Burlington, Hamilton, and Niagara.",
  features: [
    {
      id: "sell",
      icon: "home",
      title: "1% Seller Listing Commission",
      text: "Full-service marketing, comparative market analysis, professional photography, live MLS exposure, and skilled negotiation—while keeping thousands more in your pocket.",
    },
    {
      id: "buy",
      icon: "chart",
      title: "Up to $5,000 Buyer Cash-Back",
      text: "Receive up to $5,000 in cash back when you purchase your next home with Helen across Oakville, Burlington, Hamilton, or Niagara.",
    },
  ],
  mainImage: "/images/hero-desktop.jpg",
  mainImageAlt: "Helen Everett, Sales Representative at Keller Williams Referred Urban Realty",
  stats: [
    { value: 1, suffix: "%", label: "Seller listing commission" },
    { value: 5000, suffix: "", label: "Up to $5,000 buyer cash-back" },
    { value: 14, suffix: "+", label: "Years in Ontario real estate" },
  ],
};
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
  label: "Helen Everett | Realtor®",
  heading: "14 Years of Residential & Commercial Experience",
  subtext:
    "Before becoming a Realtor®, Helen spent more than 10 years as a Deal Administrator—giving her a strategic, detail-oriented edge at every stage of your transaction across Oakville, Burlington, Hamilton, and Niagara.",
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
  mainImage: "/Resizer.jpg",
  mainImageAlt:
    "Helen Everett, Realtor® at Keller Williams Referred Urban Realty",
  stats: [
    { value: 14, suffix: "", label: "Years in real estate" },
    { value: 10, suffix: "+", label: "Years as Deal Administrator" },
    { value: 1, suffix: "%", label: "Seller listing commission" },
  ],
};
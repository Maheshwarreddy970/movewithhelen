export type ValueIcon = "honesty" | "local" | "calm" | "after";

export type ProcessTab = "buying" | "selling" | "renting";

export type ProcessStep = { title: string; text: string };

export type AboutStat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export const aboutPage = {
  meta: {
    title: "About Helen Everett | MoveWithHelen.ca",
    description:
      "Helen Everett is a Sales Representative with Keller Williams Referred Urban Realty with 14 years of Ontario real estate experience, offering 1% seller listing commission and up to $5,000 buyer cash-back across Oakville, Burlington, Hamilton, and Niagara.",
  },

  hero: {
    heading: "Full-service real estate, without the inflated fees.",
    text: "14 years of Ontario real estate experience across Oakville, Burlington, Hamilton, and Niagara.",
    image: "/images/hero-desktop.jpg",
    imageAlt: "Modern Ontario home interior representing MoveWithHelen",
  },

  story: {
    label: "Meet Helen Everett",
    heading: "Built on 14 years of hands-on real estate experience",
    paragraphs: [
      "Helen Everett began her career in real estate as a Deals Administrator—reviewing contracts, managing timelines, and guiding transactions smoothly to closing behind the scenes.",
      "That foundation gave her an eye for detail that most agents only learn years later. Today, as a Sales Representative with Keller Williams Referred Urban Realty (License #5032305), she brings that same precision directly to buyers and sellers across Oakville, Burlington, Hamilton, and Niagara.",
      "MoveWithHelen.ca was built around a simple belief: homeowners shouldn't have to overpay in commission to get full-service marketing, strong negotiation, and personal guidance from day one to closing.",
    ],
    image: "/Resizer.jpg",
    imageAlt:
      "Helen Everett, Sales Representative at Keller Williams Referred Urban Realty",
    quote:
      "Every contract detail matters—my job is to protect your equity and make your move as smooth as possible.",
    quoteName: "Helen Everett",
    quoteRole: "Sales Representative · Keller Williams Referred Urban Realty",
  },

  stats: {
    label: "MoveWithHelen in numbers",
    items: [
      { value: 14, suffix: "+", label: "Years in Ontario real estate" },
      { value: 1, suffix: "%", label: "Seller listing commission" },
      { value: 5000, suffix: "", label: "Up to $5,000 buyer cash-back" },
      { value: 4, suffix: "", label: "Ontario regions served" },
    ] satisfies AboutStat[],
  },

  values: {
    label: "How Helen works",
    heading: "Full service, zero shortcuts",
    items: [
      {
        icon: "honesty",
        title: "Transparent fees",
        text: "Just 1% listing commission for sellers and up to $5,000 cash-back for buyers—with zero hidden charges.",
      },
      {
        icon: "local",
        title: "Deep local knowledge",
        text: "Focused across Oakville, Burlington, Hamilton, and Niagara so you get real neighbourhood insight, not guesswork.",
      },
      {
        icon: "calm",
        title: "Contract & closing precision",
        text: "With a background as a Deals Administrator, every clause, condition, and deadline is handled with care.",
      },
      {
        icon: "after",
        title: "Direct, personal support",
        text: "You work directly with Helen from your first conversation to closing day—never handed off to a junior team member.",
      },
    ] satisfies { icon: ValueIcon; title: string; text: string }[],
  },

  process: {
    label: "How it works",
    heading: "Simple steps, whatever your next move",
    tabsLabel: "Choose what you're planning",
    tabs: { buying: "Buying", selling: "Selling", renting: "Renting" },
    steps: {
      buying: [
        {
          title: "Share your goals",
          text: "Tell Helen your budget, preferred neighbourhoods, and must-haves across Halton, Hamilton, or Niagara.",
        },
        {
          title: "Browse live MLS & tour",
          text: "Explore live TRREB & CREA listings and tour the homes that truly fit your criteria.",
        },
        {
          title: "Negotiate with confidence",
          text: "Get a clear breakdown of comparable sales, conditions, and contract terms before you sign.",
        },
        {
          title: "Close & claim cash-back",
          text: "Helen manages the closing process and delivers up to $5,000 in buyer cash-back.",
        },
      ],
      selling: [
        {
          title: "Free home evaluation",
          text: "Receive a data-backed comparative market analysis based on recent sales in your neighbourhood.",
        },
        {
          title: "Full-service marketing at 1%",
          text: "Professional photography, MLS exposure, and strategic pricing—all for a 1% listing commission.",
        },
        {
          title: "Showings & strong negotiation",
          text: "Helen coordinates showings and negotiates every offer to protect your bottom line.",
        },
        {
          title: "Smooth closing",
          text: "Every document and closing detail is tracked carefully so you move on your timeline.",
        },
      ],
      renting: [
        {
          title: "Set your criteria",
          text: "Share your target move-in date, monthly budget, and preferred Ontario city.",
        },
        {
          title: "Search live MLS rentals",
          text: "View verified houses, townhomes, and condos for lease through Helen's KW portal.",
        },
        {
          title: "Prepare a strong offer",
          text: "Get help organizing your credit report, employment letter, and Ontario standard lease paperwork.",
        },
        {
          title: "Sign & move in",
          text: "Review every term clearly with Helen and get your keys with confidence.",
        },
      ],
    } satisfies Record<ProcessTab, ProcessStep[]>,
    stepNumber: (n: number) => String(n).padStart(2, "0"),
  },

  milestones: {
    label: "Background",
    heading: "14 years in Ontario real estate",
    items: [
      {
        year: 2012,
        text: "Starts real estate career as a Deals Administrator, mastering contracts and closings",
      },
      {
        year: 2018,
        text: "Expands client representation across Halton and Hamilton regions",
      },
      {
        year: 2023,
        text: "Joins Keller Williams Referred Urban Realty, serving Oakville, Burlington, Hamilton & Niagara",
      },
      {
        year: 2026,
        text: "Launches MoveWithHelen.ca with 1% Seller Listing Commission & up to $5,000 Buyer Cash-Back",
      },
    ],
  },

  team: {
    label: "Work directly with Helen",
    heading: "One dedicated agent, start to finish",
    cta: { label: "Contact Helen", to: "/contact" },
    areas: (areas: string[]) => areas.join(" · "),
  },

  review: {
    label: "Client stories",
    heading: "In their words",
    reviewId: "oakville-seller",
  },
};
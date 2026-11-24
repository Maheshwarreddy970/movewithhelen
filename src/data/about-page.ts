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
    title: "About Helen Everett | Realtor® · MoveWithHelen.ca",
    description:
      "With 14 years of experience in residential and commercial real estate and over 10 years as a Deal Administrator, Helen Everett offers 1% seller listing commission and up to $5,000 buyer cash-back across Oakville, Burlington, Hamilton, and Niagara.",
  },

  hero: {
    heading: "Helen Everett | Realtor®",
    text: "14 years of residential and commercial real estate experience across Oakville, Burlington, Hamilton, and Niagara.",
    image: "/images/hero-desktop.jpg",
    imageAlt: "Modern Ontario home interior representing MoveWithHelen",
  },

  story: {
    label: "Meet Helen Everett",
    heading: "Strategic, detail-oriented guidance at every stage",
    paragraphs: [
      "With 14 years of experience in both residential and commercial real estate, Helen Everett brings a wealth of knowledge and a genuine passion for helping people navigate the buying and selling process.",
      "Before becoming a Realtor®, Helen spent more than 10 years as a Deal Administrator, working behind the scenes on real estate transactions. This experience gave her a strong understanding of every stage of a deal and just how important the details are. She is naturally a strategic thinker, very detail-oriented, and always looking a few steps ahead to help anticipate challenges and make the process as smooth as possible for her clients.",
      "Helen believes real estate is about more than just buying or selling a property. It's about building relationships, listening, understanding what matters most to each client, and being there every step of the way. She takes great pride in being approachable, honest, hardworking, and someone her clients can count on.",
      "When she's not working in real estate, you'll often find Helen volunteering at local animal shelters and helping dog and cat rescue groups. Giving back and helping animals in need is something she is truly passionate about.",
    ],
    image: "/Resizer.jpg",
    imageAlt:
      "Helen Everett, Realtor® at Keller Williams Referred Urban Realty",
    quote:
      "Real estate is about more than just buying or selling a property—it's about building relationships, listening, and being there every step of the way.",
    quoteName: "Helen Everett",
    quoteRole: "Realtor® · Keller Williams Referred Urban Realty",
  },

  stats: {
    label: "MoveWithHelen in numbers",
    items: [
      { value: 14, suffix: "", label: "Years in residential & commercial real estate" },
      { value: 10, suffix: "+", label: "Years as a Deal Administrator" },
      { value: 1, suffix: "%", label: "Seller listing commission" },
      { value: 5000, suffix: "", label: "Up to $5,000 buyer cash-back" },
    ] satisfies AboutStat[],
  },

  values: {
    label: "How Helen works",
    heading: "Approachable, honest, and detail-driven",
    items: [
      {
        icon: "honesty",
        title: "Approachable & honest",
        text: "Clear, straightforward advice at every step—plus 1% seller listing commission and up to $5,000 buyer cash-back.",
      },
      {
        icon: "local",
        title: "Residential & commercial",
        text: "14 years of hands-on experience across Oakville, Burlington, Hamilton, and Niagara.",
      },
      {
        icon: "calm",
        title: "10+ years in Deal Administration",
        text: "A strategic, detail-oriented approach that anticipates challenges before they slow down your closing.",
      },
      {
        icon: "after",
        title: "Relationships first",
        text: "Listening to what matters most to you and standing beside you from first showing to closing day.",
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
          title: "Listen & plan",
          text: "Share your goals, budget, and preferred neighbourhoods across Oakville, Burlington, Hamilton, or Niagara.",
        },
        {
          title: "Search live MLS & tour",
          text: "Browse live TRREB & CREA listings and tour the homes that truly match what matters most to you.",
        },
        {
          title: "Strategic offer & review",
          text: "Benefit from 10+ years of Deal Administrator experience when reviewing conditions, clauses, and timelines.",
        },
        {
          title: "Close & claim cash-back",
          text: "Enjoy a smooth closing and receive up to $5,000 in buyer cash-back.",
        },
      ],
      selling: [
        {
          title: "Free home evaluation",
          text: "Get a detailed comparative market analysis based on recent sales in your area.",
        },
        {
          title: "Full-service marketing at 1%",
          text: "Professional photography, MLS exposure, and strategic pricing—all for a 1% seller listing commission.",
        },
        {
          title: "Showings & negotiation",
          text: "Helen manages showings and negotiates every offer with your bottom line first.",
        },
        {
          title: "Detail-driven closing",
          text: "Every document and deadline is tracked carefully so you close with confidence.",
        },
      ],
      renting: [
        {
          title: "Set your criteria",
          text: "Share your target move-in date, monthly budget, and preferred Ontario city.",
        },
        {
          title: "Browse live MLS rentals",
          text: "Explore verified houses, townhomes, and condos for lease through Helen's KW portal.",
        },
        {
          title: "Prepare a strong application",
          text: "Get guidance on credit reports, references, and Ontario standard lease paperwork.",
        },
        {
          title: "Sign & move in",
          text: "Review every detail clearly with Helen and get your keys smoothly.",
        },
      ],
    } satisfies Record<ProcessTab, ProcessStep[]>,
    stepNumber: (n: number) => String(n).padStart(2, "0"),
  },

  milestones: {
    label: "Experience",
    heading: "14 years of real estate expertise",
    items: [
      {
        year: 2012,
        text: "Begins real estate career, spending over 10 years behind the scenes as a Deal Administrator",
      },
      {
        year: 2022,
        text: "Brings deep contract and transaction expertise directly to residential and commercial clients as a Realtor®",
      },
      {
        year: 2024,
        text: "Serves buyers and sellers across Oakville, Burlington, Hamilton, and Niagara with Keller Williams Referred Urban Realty",
      },
      {
        year: 2026,
        text: "Launches MoveWithHelen.ca featuring 1% Seller Listing Commission & up to $5,000 Buyer Cash-Back",
      },
    ],
  },

  team: {
    label: "Work directly with Helen",
    heading: "There every step of the way",
    cta: { label: "Contact Helen", to: "/contact" },
    areas: (areas: string[]) => areas.join(" · "),
  },

  review: {
    label: "Client stories",
    heading: "In their words",
    reviewId: "oakville-seller",
  },
};
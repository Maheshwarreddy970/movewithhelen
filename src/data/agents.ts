export type AgentFocus = "buying" | "selling" | "renting" | "waterfront";

export type Agent = {
  id: string;
  slug: string;
  name: string;
  title: string;
  photo?: string;
  photoAlt: string;
  areas: string[];
  years: number;
  stat: { value: string; label: string };
  rating: number;
  reviewCount: number;
  phone: string;
  email: string;
  languages: string[];
  specialties: string[];
  focus: AgentFocus[];
  shortBio: string;
  bio: string[];
  quote: string;
  credentials: string[];
  funFact: string;
};

export const agents: Agent[] = [
  {
    id: "a-helen",
    slug: "helen-everett",
    name: "Helen Everett",
    title: "Sales Representative · Keller Williams Referred Urban Realty",
    photo: "/Resizer.jpg",
    photoAlt:
      "Helen Everett, Sales Representative at Keller Williams Referred Urban Realty",
    areas: ["Oakville", "Burlington", "Hamilton", "Niagara"],
    years: 14,
    stat: { value: "1%", label: "seller listing commission" },
    rating: 5,
    reviewCount: 1,
    phone: "647-702-0046",
    email: "helen.everett@kw.com",
    languages: ["English"],
    specialties: [
      "1% Seller Listing Commission",
      "Up to $5,000 Buyer Cash-Back",
      "Contracts & Closings",
    ],
    focus: ["buying", "selling", "renting"],
    shortBio:
      "14 years of Ontario real estate experience—starting as a Deals Administrator—helping buyers and sellers across Oakville, Burlington, Hamilton, and Niagara.",
    bio: [
      "Helen Everett began her real estate career as a Deals Administrator, giving her deep hands-on expertise in contracts, conditions, timelines, and smooth closings.",
      "Now a Sales Representative with Keller Williams Referred Urban Realty (License #5032305), Helen helps homeowners sell for a 1% listing commission and offers up to $5,000 buyer cash-back across Oakville, Burlington, Hamilton, and Niagara.",
      "Every client works directly with Helen from first conversation to closing day.",
    ],
    quote:
      "Every contract detail matters—my job is to protect your equity and make your move as smooth as possible.",
    credentials: [
      "Sales Representative, Keller Williams Referred Urban Realty (License #5032305)",
      "14+ years in Ontario real estate",
      "Former Deals Administrator with deep contract & closing expertise",
    ],
    funFact:
      "Also runs DoggieTeethCleaning.ca and loves helping local pet owners find homes with yards and trails.",
  },
];

export function getAgent(_id?: string) {
  return agents[0];
}

export function getAgentBySlug(_slug?: string) {
  return agents[0];
}

export function agentStat(agent: Agent) {
  return `${agent.stat.value} ${agent.stat.label}`;
}

export function firstName(agent: Agent) {
  return agent.name.split(" ")[0];
}

export function agentInitials(agent: Agent) {
  return agent.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}
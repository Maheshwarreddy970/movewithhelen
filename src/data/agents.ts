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
    title: "Realtor® · Keller Williams Referred Urban Realty",
    photo: "/Resizer.jpg",
    photoAlt:
      "Helen Everett, Realtor® at Keller Williams Referred Urban Realty",
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
      "Residential & Commercial Real Estate",
    ],
    focus: ["buying", "selling", "renting"],
    shortBio:
      "With 14 years of experience in both residential and commercial real estate—including over 10 years as a Deal Administrator—Helen brings strategic, detail-oriented guidance to every client.",
    bio: [
      "With 14 years of experience in both residential and commercial real estate, Helen Everett brings a wealth of knowledge and a genuine passion for helping people navigate the buying and selling process.",
      "Before becoming a Realtor®, Helen spent more than 10 years as a Deal Administrator, working behind the scenes on real estate transactions. This experience gave her a strong understanding of every stage of a deal and just how important the details are. She is naturally a strategic thinker, very detail-oriented, and always looking a few steps ahead to help anticipate challenges and make the process as smooth as possible for her clients.",
      "Helen believes real estate is about more than just buying or selling a property. It's about building relationships, listening, understanding what matters most to each client, and being there every step of the way. She takes great pride in being approachable, honest, hardworking, and someone her clients can count on.",
      "When she's not working in real estate, you'll often find Helen volunteering at local animal shelters and helping dog and cat rescue groups. Giving back and helping animals in need is something she is truly passionate about.",
    ],
    quote:
      "Real estate is about more than just buying or selling a property—it's about building relationships, listening, and being there every step of the way.",
    credentials: [
      "Realtor®, Keller Williams Referred Urban Realty (License #5032305)",
      "14 years in residential and commercial real estate",
      "10+ years of experience as a Deal Administrator",
    ],
    funFact:
      "Volunteers at local animal shelters and helps dog and cat rescue groups in her spare time.",
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
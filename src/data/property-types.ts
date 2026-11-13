// Fictional data for demo purposes only.

export type PropertyTypeIcon =
  | "beach"
  | "waves"
  | "building"
  | "home"
  | "houses"
  | "diamond"
  | "flag"
  | "key";

export type PropertyTypeItem = {
  slug: string;
  href?: string; // defaults to /properties?type=<slug>
  name: string;
  count: number;
  line: string;
  icon: PropertyTypeIcon;
};

export const propertyTypes: PropertyTypeItem[] = [
  {
    slug: "detached-home",
    name: "Detached Homes",
    count: 42,
    line: "Space to grow, near good schools",
    icon: "home",
  },
  {
    slug: "townhome",
    name: "Townhomes",
    count: 28,
    line: "More room, less upkeep",
    icon: "houses",
  },
  {
    slug: "condo",
    name: "Condominiums",
    count: 35,
    line: "Easy living with great amenities",
    icon: "building",
  },
  {
    slug: "luxury-home",
    name: "Luxury Homes",
    count: 12,
    line: "Premium finishes and upscale living",
    icon: "diamond",
  },
  {
    slug: "oakville",
    href: "/communities/oakville",
    name: "Oakville",
    count: 24,
    line: "Upscale neighborhoods and lake views",
    icon: "waves",
  },
  {
    slug: "burlington",
    href: "/communities/burlington",
    name: "Burlington",
    count: 31,
    line: "Our primary service area",
    icon: "beach",
  },
  {
    slug: "hamilton",
    href: "/communities/hamilton",
    name: "Hamilton",
    count: 45,
    line: "Vibrant communities and great value",
    icon: "flag",
  },
  {
    slug: "buyer-cashback",
    href: "/buying",
    name: "Buyer Cashback",
    count: 5000,
    line: "Get up to $5,000 back when buying",
    icon: "key",
  },
];

export const propertyTypesSection = {
  label: "Browse by type or area",
  heading: "Start with the kind of home you want",
  subtext:
    "Whether you are looking for a detached home in Burlington or a condo in Oakville, explore properties across our service areas.",
  countUnit: "homes",
};
export type PriceType = "sale" | "rent";

export type FloodZone = "X" | "AE" | "VE";

export type FeatureGroup = { group: string; items: string[] };

export type NearbyIcon =
  | "beach"
  | "grocery"
  | "school"
  | "airport"
  | "park"
  | "shopping"
  | "city"
  | "water"
  | "culture"
  | "golf";

export type NearbyPlace = { label: string; time: string; icon: NearbyIcon };

export type Property = {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: "ON" | string;
  price: number;
  priceType: PriceType; // rent prices are per month
  beds: number;
  baths: number;
  sqft: number;
  type:
    | "Detached home"
    | "Townhome"
    | "Condo"
    | "Semi-detached"
    | "Luxury home"
    | "Waterfront home"
    | "Family home"
    | "Rental";
  image: string;
  imageAlt: string;
  wideImage: { src: string; alt: string };
  featured: boolean;
  isNew?: boolean;
  listedAt: string; // ISO date

  // Detail page
  address: string;
  neighborhood: string;
  zip: string; // Canadian postal code
  description: string[];
  yearBuilt: number;
  lotSqft?: number;
  garage?: number;
  hoaMonthly?: number; // Condo / maintenance fee (CAD)
  taxesYearly?: number; // Annual property tax (CAD)
  deposit?: number;
  leaseTerm?: string;
  availableFrom?: string;
  floodZone?: FloodZone;
  features: FeatureGroup[];
  nearby: NearbyPlace[];
  agentId: string;
  coordinates: { lat: number; lng: number };
  views: number;
  saves: number;
};

export const properties: Property[] = [
  {
    id: "p-001",
    slug: "glen-abbey-detached-oakville",
    name: "Glen Abbey Family Detached",
    city: "Oakville",
    state: "ON",
    price: 1_549_000,
    priceType: "sale",
    beds: 4,
    baths: 3.5,
    sqft: 2850,
    type: "Detached home",
    image: "/Detached%20Homes.avif",
    imageAlt: "Detached family home in Glen Abbey, Oakville",
    wideImage: {
      src: "/Detached%20Homes.avif",
      alt: "Detached family home exterior in Oakville, Ontario",
    },
    featured: true,
    isNew: true,
    listedAt: "2026-11-15",
    address: "1420 Abbeywood Drive",
    neighborhood: "Glen Abbey",
    zip: "L6M 2T4",
    description: [
      "Bright, updated 4-bedroom detached home on a quiet tree-lined street in sought-after Glen Abbey.",
      "Features an open-concept chef's kitchen with quartz counters, hardwood throughout the main level, and a finished basement with walk-out access to a private fenced yard.",
      "Minutes to top-rated Oakville schools, trails, QEW access, and Bronte GO Station.",
    ],
    yearBuilt: 2018,
    lotSqft: 5400,
    garage: 2,
    taxesYearly: 7_200,
    features: [
      {
        group: "Interior",
        items: [
          "Open-concept kitchen",
          "Quartz countertops",
          "Engineered hardwood floors",
          "Finished basement",
        ],
      },
      {
        group: "Exterior",
        items: ["Fenced backyard", "Double-car garage", "Interlock driveway"],
      },
    ],
    nearby: [
      { label: "Top-rated schools", time: "5 min walk", icon: "school" },
      { label: "Grocery & plaza", time: "4 min drive", icon: "grocery" },
      { label: "Bronte GO Station", time: "8 min drive", icon: "city" },
      { label: "Parks & trails", time: "3 min walk", icon: "park" },
    ],
    agentId: "a-helen",
    coordinates: { lat: 43.4474, lng: -79.7279 },
    views: 184,
    saves: 19,
  },
  {
    id: "p-002",
    slug: "alton-village-townhome-burlington",
    name: "Alton Village Modern Townhome",
    city: "Burlington",
    state: "ON",
    price: 949_000,
    priceType: "sale",
    beds: 3,
    baths: 2.5,
    sqft: 1820,
    type: "Townhome",
    image: "/Townhomes.avif",
    imageAlt: "Modern 3-bedroom townhome in Alton Village, Burlington",
    wideImage: {
      src: "/Townhomes.avif",
      alt: "Modern townhome exterior in Burlington, Ontario",
    },
    featured: true,
    isNew: true,
    listedAt: "2026-11-12",
    address: "3120 Thomas Alton Blvd",
    neighborhood: "Alton Village",
    zip: "L7M 0P8",
    description: [
      "Move-in ready 3-bedroom freehold townhome in North Burlington's family-friendly Alton Village.",
      "Includes 9-foot ceilings on the main floor, a spacious kitchen island, primary suite with walk-in closet and 4-piece ensuite, and direct garage access.",
      "Steps to schools, parks, shopping, and quick access to Hwy 407 and QEW.",
    ],
    yearBuilt: 2020,
    lotSqft: 2100,
    garage: 1,
    taxesYearly: 4_650,
    features: [
      {
        group: "Interior",
        items: [
          "9-ft main floor ceilings",
          "Stainless steel appliances",
          "Primary walk-in closet",
          "Upstairs laundry",
        ],
      },
      {
        group: "Exterior",
        items: ["Private deck", "Attached garage", "Low-maintenance yard"],
      },
    ],
    nearby: [
      { label: "Parks & splash pad", time: "3 min walk", icon: "park" },
      { label: "Shopping & dining", time: "4 min drive", icon: "shopping" },
      { label: "Elementary school", time: "5 min walk", icon: "school" },
      { label: "Appleby GO", time: "10 min drive", icon: "city" },
    ],
    agentId: "a-helen",
    coordinates: { lat: 43.3956, lng: -79.8051 },
    views: 152,
    saves: 14,
  },
  {
    id: "p-003",
    slug: "west-harbour-condo-hamilton",
    name: "West Harbour Boutique Condo",
    city: "Hamilton",
    state: "ON",
    price: 589_000,
    priceType: "sale",
    beds: 2,
    baths: 2,
    sqft: 980,
    type: "Condo",
    image: "/Condos.avif",
    imageAlt: "Contemporary condo building in West Harbour, Hamilton",
    wideImage: {
      src: "/Condos.avif",
      alt: "Modern condominium residence in Hamilton, Ontario",
    },
    featured: true,
    isNew: true,
    listedAt: "2026-11-10",
    address: "240 James Street North, Unit 608",
    neighborhood: "West Harbour",
    zip: "L8R 2L3",
    description: [
      "Sun-filled 2-bedroom, 2-bath corner condo steps from James Street North restaurants, cafés, and West Harbour GO Station.",
      "Floor-to-ceiling windows, private balcony, in-suite laundry, underground parking, and storage locker included.",
    ],
    yearBuilt: 2021,
    garage: 1,
    hoaMonthly: 540,
    taxesYearly: 3_400,
    features: [
      {
        group: "Interior",
        items: [
          "Floor-to-ceiling windows",
          "In-suite laundry",
          "Modern kitchen with island",
        ],
      },
      {
        group: "Community",
        items: ["Fitness room", "Rooftop terrace", "Underground parking"],
      },
    ],
    nearby: [
      { label: "West Harbour GO", time: "4 min walk", icon: "city" },
      { label: "Bayfront Park", time: "6 min walk", icon: "water" },
      { label: "Cafés & galleries", time: "2 min walk", icon: "culture" },
      { label: "Grocery", time: "5 min drive", icon: "grocery" },
    ],
    agentId: "a-helen",
    coordinates: { lat: 43.2645, lng: -79.8661 },
    views: 129,
    saves: 11,
  },
  {
    id: "p-004",
    slug: "niagara-falls-executive-rental",
    name: "Niagara Executive Lease",
    city: "Niagara",
    state: "ON",
    price: 2_850,
    priceType: "rent",
    beds: 3,
    baths: 2.5,
    sqft: 1750,
    type: "Rental",
    image: "/Rentals.avif",
    imageAlt: "Modern residential rental home in Niagara, Ontario",
    wideImage: {
      src: "/Rentals.avif",
      alt: "Residential lease property in Niagara, Ontario",
    },
    featured: false,
    isNew: true,
    listedAt: "2026-11-08",
    address: "7840 Kalar Road",
    neighborhood: "Mount Carmel",
    zip: "L2H 2S5",
    description: [
      "Spacious 3-bedroom, 2.5-bath home for lease in a quiet north-end Niagara neighbourhood.",
      "Open-concept main floor, stainless steel appliances, fenced backyard, and attached garage. Ideal for families or commuting professionals.",
    ],
    yearBuilt: 2019,
    garage: 1,
    deposit: 2_850,
    leaseTerm: "12 months",
    availableFrom: "2026-12-01",
    features: [
      {
        group: "Interior",
        items: [
          "Open-concept living area",
          "In-unit washer & dryer",
          "Central air conditioning",
        ],
      },
      {
        group: "Exterior",
        items: ["Fenced yard", "Attached garage", "Private driveway"],
      },
    ],
    nearby: [
      { label: "Grocery & shopping", time: "5 min drive", icon: "grocery" },
      { label: "Schools", time: "4 min drive", icon: "school" },
      { label: "QEW Highway", time: "6 min drive", icon: "city" },
      { label: "Parks", time: "3 min walk", icon: "park" },
    ],
    agentId: "a-helen",
    coordinates: { lat: 43.1125, lng: -79.1235 },
    views: 94,
    saves: 8,
  },
];

export const featuredProperties = properties.filter((p) => p.featured);
export const newProperties = properties.filter((p) => p.isNew);

export function getProperty(slug: string | undefined) {
  return properties.find((p) => p.slug === slug);
}

export const featuredHomesSection = {
  label: "Featured Listings",
  heading: "Exclusive & Featured Homes",
  viewAll: { label: "View all listings", to: "/properties" },
};

export const latestSection = {
  label: "Just Listed",
  heading: "New Homes This Week",
  viewAll: { label: "View all listings", to: "/properties" },
};

export const propertyLabels = {
  status: { sale: "For sale", rent: "For rent" } satisfies Record<
    PriceType,
    string
  >,
  facts: { beds: "bedrooms", baths: "bathrooms", sqft: "square feet" },
};
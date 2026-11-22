import { mlsLinks } from "@/data/mls-links";

export type PropertyCategoryCard = {
  slug: string;
  name: string;
  line: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const propertyTypes: PropertyCategoryCard[] = [
  {
    slug: "detached-homes",
    name: "Detached Homes",
    line: "Family homes across Oakville, Burlington, Hamilton & Niagara",
    image: "/Detached%20Homes.avif",
    imageAlt: "Detached family home in Ontario",
    href: mlsLinks.propertyTypes.detached,
  },
  {
    slug: "townhomes",
    name: "Townhomes",
    line: "Modern space with lower maintenance",
    image: "/Townhomes.avif",
    imageAlt: "Row of modern townhomes",
    href: mlsLinks.propertyTypes.townhomes,
  },
  {
    slug: "condos",
    name: "Condos",
    line: "Turnkey living close to transit and amenities",
    image: "/Condos.avif",
    imageAlt: "Contemporary condominium building",
    href: mlsLinks.propertyTypes.condos,
  },
  {
    slug: "rentals",
    name: "Rentals",
    line: "Houses, townhomes, and condos for lease",
    image: "/Rentals.avif",
    imageAlt: "Residential rental property",
    href: mlsLinks.propertyTypes.rentals,
  },
];

export const propertyTypesSection = {
  label: "Live MLS Search",
  heading: "Browse by property type",
  subtext:
    "Click any category below to search live TRREB & CREA MLS listings directly on Helen's Keller Williams portal.",
};
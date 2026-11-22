"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useId } from "react";

import ArrowLink from "@/components/arrow-link";
import SectionHeader from "@/components/section-header";
import { mlsLinks } from "@/data/mls-links";
import {
  featuredHomesSection as copy,
  type Property,
} from "@/data/properties";
import { fadeUpItem, revealList } from "@/lib/motion";
import { usePublicProperties } from "@/store/properties";

const liveCityCards = [
  {
    name: "Oakville",
    region: "Halton Region, ON",
    image: "/Detached%20Homes.avif",
    imageAlt: "Homes for sale in Oakville, Ontario",
    href: mlsLinks.citiesSale.oakville,
  },
  {
    name: "Burlington",
    region: "Halton Region, ON",
    image: "/Townhomes.avif",
    imageAlt: "Homes for sale in Burlington, Ontario",
    href: mlsLinks.citiesSale.burlington,
  },
  {
    name: "Hamilton",
    region: "Hamilton, ON",
    image: "/Condos.avif",
    imageAlt: "Homes for sale in Hamilton, Ontario",
    href: mlsLinks.citiesSale.hamilton,
  },
  {
    name: "Niagara",
    region: "Niagara Region, ON",
    image: "/Rentals.avif",
    imageAlt: "Homes for sale in Niagara, Ontario",
    href: mlsLinks.citiesSale.niagara,
  },
];

function FeaturedCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      aria-label={`${property.name}, ${property.city}`}
      className="group block rounded-2xl focus-ring"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted">
        <img
          src={property.image}
          alt={property.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="type-title transition-colors group-hover:text-primary">
            {property.name}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {property.city}, {property.state}
          </p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

function FeaturedHomes() {
  const homes = usePublicProperties();
  const featuredProperties = homes.filter((p) => p.featured);
  const headingId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby={headingId} className="section-y">
      <div className="page-container">
        <SectionHeader
          id={headingId}
          label={copy.label}
          heading={copy.heading}
          action={
            <a
              href={mlsLinks.allSale}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium transition-colors focus-ring hover:text-primary md:inline-flex"
            >
              Search All Live MLS
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={16}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          }
        />

        {featuredProperties.length === 0 ? (
          <motion.ul
            {...revealList(reduceMotion)}
            className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-10"
          >
            {liveCityCards.map((city) => (
              <motion.li
                key={city.name}
                variants={reduceMotion ? undefined : fadeUpItem}
                className="w-[85%] shrink-0 snap-start md:w-auto"
              >
                <a
                  href={city.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Search live MLS listings in ${city.name}, ${city.region}`}
                  className="group block rounded-2xl focus-ring"
                >
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={city.image}
                      alt={city.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-black/65 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
                      Live MLS
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="type-title transition-colors group-hover:text-primary">
                        {city.name}
                      </h3>
                      <p className="mt-1.5 text-muted-foreground">
                        {city.region}
                      </p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={18}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <>
            <motion.ul
              {...revealList(reduceMotion)}
              className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
            >
              {featuredProperties.map((property) => (
                <motion.li
                  key={property.id}
                  variants={reduceMotion ? undefined : fadeUpItem}
                  className="w-[85%] shrink-0 snap-start md:w-auto"
                >
                  <FeaturedCard property={property} />
                </motion.li>
              ))}
            </motion.ul>

            <ArrowLink to={copy.viewAll.to} className="mt-10 md:hidden">
              {copy.viewAll.label}
            </ArrowLink>
          </>
        )}
      </div>
    </section>
  );
}

export default FeaturedHomes;
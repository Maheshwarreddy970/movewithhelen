"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

import SectionHeader from "@/components/section-header";
import {
  propertyTypes,
  propertyTypesSection as copy,
} from "@/data/property-types";
import { fadeUpItem, revealList } from "@/lib/motion";

function PropertyTypes() {
  const headingId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby={headingId} className="section-y">
      <div className="page-container">
        <SectionHeader
          id={headingId}
          label={copy.label}
          heading={copy.heading}
          subtext={copy.subtext}
        />

        <motion.ul
          {...revealList(reduceMotion)}
          className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-10"
        >
          {propertyTypes.map((item) => (
            <motion.li
              key={item.slug}
              variants={reduceMotion ? undefined : fadeUpItem}
              className="w-[85%] shrink-0 snap-start md:w-auto"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-16/10 overflow-hidden rounded-2xl bg-muted focus-ring"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/85" />

                <span className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
                  Live MLS Search
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm text-white/80">
                      {item.line}
                    </p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-105">
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default PropertyTypes;
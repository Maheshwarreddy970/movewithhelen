// Placeholder Ontario reviews — replace with Helen's verified client reviews when received.

export type Review = {
  id: string;
  quote: string;
  name: string;
  action: "Bought" | "Sold" | "Rented";
  city: string;
  homeType: string;
  photo: string;
  photoAlt: string;
  rating: 5;
};

export type ReviewStat = {
  value: number;
  suffix: string;
  label: string;
};

export const reviews: Review[] = [
  {
    id: "oakville-seller",
    quote:
      "Helen sold our home in Oakville for full value and saved us over $18,000 with her 1% listing commission. Her background in deals administration showed in every single detail of the closing.",
    name: "David & Sarah M.",
    action: "Sold",
    city: "Oakville",
    homeType: "Detached home",
    photo: "/images/hero-desktop.jpg",
    photoAlt: "Bright modern living room in an Oakville detached home",
    rating: 5,
  },
  {
    id: "burlington-buyer",
    quote:
      "No pressure, honest neighbourhood advice, and we received $5,000 cash-back right after closing. Helen made buying our first home in Burlington completely stress-free.",
    name: "Priya & Jason K.",
    action: "Bought",
    city: "Burlington",
    homeType: "Townhome",
    photo: "/images/hero-mobile.jpg",
    photoAlt: "Sunlit living area in a Burlington townhome",
    rating: 5,
  },
  {
    id: "hamilton-seller",
    quote:
      "We were skeptical about 1% commission at first, but Helen delivered full-service marketing, great photography, and strong negotiation from day one.",
    name: "Mark T.",
    action: "Sold",
    city: "Hamilton",
    homeType: "Detached home",
    photo: "/images/hero-desktop.jpg",
    photoAlt: "Updated kitchen and dining area in Hamilton",
    rating: 5,
  },
  {
    id: "niagara-buyer",
    quote:
      "Relocating to the Niagara region felt overwhelming until we spoke with Helen. She narrowed down the best pockets quickly and handled every contract condition smoothly.",
    name: "Elena R.",
    action: "Bought",
    city: "Niagara",
    homeType: "Condo",
    photo: "/images/hero-mobile.jpg",
    photoAlt: "Modern condo interior in the Niagara region",
    rating: 5,
  },
];

export const reviewStats: ReviewStat[] = [
  { value: 14, suffix: "+", label: "years of Ontario real estate experience" },
  { value: 1, suffix: "%", label: "full-service seller listing commission" },
  { value: 5000, suffix: "", label: "up to $5,000 buyer cash-back" },
];

export const reviewsSection = {
  label: "Client stories",
  heading: "What Helen's clients say",
  carouselLabel: "Client reviews",
  slideLabel: (index: number, total: number) => `${index} of ${total}`,
  previous: "Previous review",
  next: "Next review",
  rating: (stars: number) => `Rated ${stars} out of 5`,
  meta: (review: Review) =>
    `${review.action} in ${review.city} · ${review.homeType}`,
};
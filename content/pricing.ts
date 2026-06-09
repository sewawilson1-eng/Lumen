export type PricingTier = {
  name: string;
  originalPrice: string;
  price: string;
  savings: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  badge?: string;
  highlighted: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Essential",
    originalPrice: "$149",
    price: "$99",
    savings: "Save $50",
    cadence: "45 min session",
    description:
      "A quick 45-minute touch-up for clients with already-bright teeth. The maintenance session between full visits.",
    features: [
      "Shade reading & consult",
      "Lip & gum protection",
      "1 × 20-minute LED cycle",
      "Up to 4–6 shades brighter",
      "Aftercare guidance",
    ],
    cta: "Book Essential",
    badge: "Touch-up",
    highlighted: false,
  },
  {
    name: "Signature",
    originalPrice: "$199",
    price: "$119",
    savings: "Save $80",
    cadence: "60 min session",
    description:
      "The everyday upgrade. Two full LED cycles for photo-ready results in an hour.",
    features: [
      "Shade reading & consult",
      "Lip & gum protection",
      "2 × 20-minute LED cycles",
      "Up to 6–10 shades brighter",
      "Aftercare guidance",
    ],
    cta: "Book Signature",
    badge: "Most popular",
    highlighted: false,
  },
  {
    name: "Deluxe",
    originalPrice: "$249",
    price: "$139",
    savings: "Save $110",
    cadence: "90 min session",
    description:
      "Recommended for first visits. Three full LED cycles for the most dramatic single-visit transformation.",
    features: [
      "Shade reading & consult",
      "Lip & gum protection",
      "3 × 20-minute LED cycles",
      "Up to 8–14 shades brighter",
      "Aftercare guidance",
    ],
    cta: "Book Deluxe",
    badge: "Best for first visit",
    highlighted: true,
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Essential",
    price: "$149",
    cadence: "45 min session",
    description: "A quick touch-up for already-bright teeth. Perfect before an event or to freshen up your smile.",
    features: [
      "Shade reading & consult",
      "Lip & gum protection",
      "1 × 20-minute LED cycle",
      "Up to 4–6 shades brighter",
      "Aftercare guidance",
    ],
    cta: "Book Essential",
    highlighted: false,
  },
  {
    name: "Signature",
    price: "$199",
    cadence: "60 min session",
    description: "The regular maintenance session. Keeps your smile consistently bright with noticeable results every visit.",
    features: [
      "Shade reading & consult",
      "Lip & gum protection",
      "2 × 20-minute LED cycles",
      "Up to 6–10 shades brighter",
      "Aftercare guidance",
    ],
    cta: "Book Signature",
    highlighted: true,
  },
  {
    name: "Deluxe",
    price: "$249",
    cadence: "90 min session",
    description: "The best starting point for first-time clients. Three full cycles for the most dramatic transformation in a single visit.",
    features: [
      "Shade reading & consult",
      "Lip & gum protection",
      "3 × 20-minute LED cycles",
      "Up to 8–14 shades brighter",
      "Aftercare guidance",
    ],
    cta: "Book Deluxe",
    highlighted: false,
  },
];

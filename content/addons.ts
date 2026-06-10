/**
 * "Also at Lumen" — additional services beyond whitening.
 *
 * To edit: change price/description here. Set `status` to "available" for a
 * bookable service (shows a Book button) or "coming-soon" for a teaser
 * (shows a Coming soon badge, no booking).
 */

export type AddonService = {
  name: string;
  price?: string;
  blurb: string;
  features: string[];
  status: "available" | "coming-soon";
  cta?: string;
  note?: string;
};

export const addonServices: AddonService[] = [
  {
    name: "Tooth Gems",
    price: "From $40",
    blurb:
      "A little sparkle, applied safely. Genuine crystals bonded to the tooth surface — non-invasive, removable, and enamel-safe.",
    features: [
      "Genuine Swarovski-style crystals",
      "Gentle, non-invasive application",
      "Enamel-safe bonding — no drilling",
      "Lasts months with proper care",
    ],
    status: "available",
    cta: "Book a Tooth Gem",
    note: "Add to any whitening session or book on its own.",
  },
  {
    name: "Grillz",
    blurb:
      "Custom-fit removable grillz — coming soon to the studio. Be the first to know when bookings open.",
    features: [
      "Custom molded for your fit",
      "Premium finishes",
      "Removable & reusable",
    ],
    status: "coming-soon",
    note: "DM us on Instagram to join the waitlist.",
  },
];

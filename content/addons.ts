/**
 * "Also at Lumen" — additional services beyond whitening.
 *
 * To edit: change price/description here. Set `status` to "available" for a
 * bookable service (shows a Book button) or "coming-soon" for a teaser
 * (shows a Coming soon badge, no booking).
 */

export type GemOption = {
  label: string; // "Clear" or month name
  stone: string; // e.g. "Garnet" — shown on hover
  color: string; // swatch fill (hex)
  clear?: boolean; // render as a bordered clear/diamond swatch
};

export type AddonService = {
  name: string;
  price?: string;
  blurb: string;
  features: string[];
  gems?: GemOption[];
  status: "available" | "coming-soon";
  cta?: string;
  note?: string;
};

/**
 * Tooth gem options — a classic clear crystal plus the twelve birthstones.
 * Colors are approximate stone tones for the on-site swatches.
 */
export const gemOptions: GemOption[] = [
  { label: "Clear", stone: "Classic clear crystal", color: "#ffffff", clear: true },
  { label: "January", stone: "Garnet", color: "#7b1f2b" },
  { label: "February", stone: "Amethyst", color: "#9966cc" },
  { label: "March", stone: "Aquamarine", color: "#a3dbe8" },
  { label: "April", stone: "Diamond", color: "#eef2f6", clear: true },
  { label: "May", stone: "Emerald", color: "#2e8b57" },
  { label: "June", stone: "Pearl", color: "#f0ead6" },
  { label: "July", stone: "Ruby", color: "#9b111e" },
  { label: "August", stone: "Peridot", color: "#9acd32" },
  { label: "September", stone: "Sapphire", color: "#0f52ba" },
  { label: "October", stone: "Opal", color: "#f7b7c4" },
  { label: "November", stone: "Topaz", color: "#ffbf00" },
  { label: "December", stone: "Turquoise", color: "#40e0d0" },
];

export const addonServices: AddonService[] = [
  {
    name: "Tooth Gems",
    price: "From $40",
    blurb:
      "A little sparkle, applied safely. Choose your birthstone or a classic clear crystal — genuine stones bonded to the tooth surface, non-invasive and enamel-safe.",
    features: [
      "Clear crystal or any birthstone",
      "Gentle, non-invasive application",
      "Enamel-safe bonding — no drilling",
      "Lasts months with proper care",
    ],
    gems: gemOptions,
    status: "available",
    cta: "Book a Tooth Gem",
    note: "Pick your gem at your appointment. Add to any whitening session or book on its own.",
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

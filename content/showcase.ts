import { images } from "./images";

export type ShowcaseItem = {
  eyebrow: string;
  headline: string;
  body: string;
  image?: string;
  gallery?: string[];
  alt: string;
  side: "left" | "right";
  aspectRatio?: string;
};

export const showcaseItems: ShowcaseItem[] = [
  {
    eyebrow: "The formula",
    headline: "Pro-grade. Gentle.",
    body: "A professional-strength whitening gel — the kind salons and cosmetic studios use, not the kind you find at a drugstore. Stabilized peroxide, buffered with potassium nitrate so it never bites, even on sensitive teeth.",
    image: images.formula,
    alt: "Lumen whitening gel in a clean, minimalist flat lay",
    side: "right",
    aspectRatio: "11 / 6",
  },
  {
    eyebrow: "The lamp",
    headline: "Cool. Powerful.",
    body: "A professional cold-blue LED whitening lamp on a polished arm, calibrated for the same wavelength the high-end studios use. It accelerates each cycle without ever warming the tooth.",
    image: images.light,
    alt: "A modern professional LED teeth whitening lamp in a bright studio",
    side: "left",
    aspectRatio: "3 / 2",
  },
  {
    eyebrow: "The result",
    headline: "Brighter, in one visit.",
    body: "Four to ten shades lighter is typical. Fourteen is on the table with a full Deluxe session. No sensitivity, no aftercare drama — most clients walk back into their day looking like they did a year of touch-ups in ninety minutes.",
    gallery: [
      "/images/gallery-1.webp",
      "/images/gallery-3.webp",
      "/images/gallery-5.webp",
      "/images/gallery-6.webp",
    ],
    alt: "Real Lumen client smiles after a single whitening session",
    side: "right",
    aspectRatio: "1 / 1",
  },
];

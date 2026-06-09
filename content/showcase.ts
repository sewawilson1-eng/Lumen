import { images } from "./images";

export type ShowcaseItem = {
  eyebrow: string;
  headline: string;
  body: string;
  image: string;
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
    eyebrow: "The studio",
    headline: "Spa-quiet. Private.",
    body: "Soft lighting, plants, a single reclined chair. One client at a time — no waiting rooms, no fluorescent lights, no clinical feel. Closer to a facial appointment than anything you'd associate with a dental office.",
    image: images.studio,
    alt: "A calm, modern spa-style treatment room with soft natural light",
    side: "right",
    aspectRatio: "1024 / 945",
  },
];

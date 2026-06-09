/**
 * Smile gallery — six example transformations.
 *
 * Photos are placeholder portraits from Unsplash for now. Swap each `image`
 * URL with a real client photo (with consent) the moment you have one.
 * Recommended: 1200×1200 square crops, smile or face front-and-center.
 */

export type GalleryItem = {
  image: string;
  alt: string;
  session: "Essential" | "Signature" | "Deluxe";
  shades: string;
  blurb: string;
  initial: string;
};

export const galleryItems: GalleryItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    alt: "A bright smile after a Lumen whitening session",
    session: "Deluxe",
    shades: "12 shades brighter",
    blurb: "Wedding two weeks away — couldn't have been happier walking out.",
    initial: "A. M.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    alt: "A bright smile after a Lumen whitening session",
    session: "Signature",
    shades: "8 shades brighter",
    blurb: "Coffee three times a day — gone in an hour.",
    initial: "J. R.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    alt: "A bright smile after a Lumen whitening session",
    session: "Deluxe",
    shades: "10 shades brighter",
    blurb: "No sensitivity at all. Walked back into work the same afternoon.",
    initial: "T. K.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80",
    alt: "A bright smile after a Lumen whitening session",
    session: "Signature",
    shades: "7 shades brighter",
    blurb: "First time whitening — calmer than a haircut.",
    initial: "M. L.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    alt: "A bright smile after a Lumen whitening session",
    session: "Essential",
    shades: "5 shades brighter",
    blurb: "Maintenance touch-up between full sessions. In and out at lunch.",
    initial: "S. D.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=900&q=80",
    alt: "A bright smile after a Lumen whitening session",
    session: "Deluxe",
    shades: "14 shades brighter",
    blurb: "Years of red-wine staining gone in 90 minutes.",
    initial: "R. N.",
  },
];

/**
 * Single source of truth for every image URL on the site.
 *
 * To use your own photos: drop the file into `public/images/` and change the
 * URL here to `/images/<your-file>.jpg`. That's it — no other edits.
 * Recommended filenames are shown in the comments below.
 *
 * Unsplash URLs are placeholders chosen for a clean, spa-leaning aesthetic.
 * Replace them as soon as you have your own photos of the studio and results.
 */

export const images = {
  // "The formula" — close-up of the whitening gel.
  formula: "/images/ObjectCover.webp",

  // "The lamp" — the professional LED whitening lamp product sheet.
  light: "/images/ObjectLamp.webp",

// Before/after — close-up smile photos.
  before:
    "https://images.unsplash.com/photo-1663182234283-28941e7612da?auto=format&fit=crop&w=1600&q=80",
  after:
    "https://images.unsplash.com/photo-1655807946138-811bb2340d34?auto=format&fit=crop&w=1600&q=80",

  // Brand logo — the tooth mark used in the nav and footer.
  logo: "/images/logo.png",
} as const;

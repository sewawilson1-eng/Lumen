/**
 * Single source of truth for every image URL on the site.
 *
 * To use your own photos: drop the file into `public/images/` and change
 * the URL here. Before/after are Unsplash placeholders — replace with real
 * client photos (with written consent) when available.
 */

export const images = {
  // Before/after — the drag-to-compare slider.
  before:
    "https://images.unsplash.com/photo-1663182234283-28941e7612da?auto=format&fit=crop&w=1600&q=80",
  after:
    "https://images.unsplash.com/photo-1655807946138-811bb2340d34?auto=format&fit=crop&w=1600&q=80",

  // Brand logo — the tooth mark used in the nav and footer.
  logo: "/images/logo.png",
} as const;

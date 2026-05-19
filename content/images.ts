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
  // Hero — the cinematic shot at the top of the page.
  hero: "/images/newhero.png",

  // "The formula" — close-up of the whitening gel, applicator, or product flat-lay.
  // Suggested local swap: /images/formula.jpg
  formula: "/images/ObjectCover.png",

  // "The lamp" — the professional LED whitening lamp, ideally in a spa setting.
  // TODO: save your edited photo (LASERGLOW removed, "Lumen" added) here:
  //   C:\Users\Charlemagne\Desktop\Brighten Website\public\images\light.jpg
  // Until that file exists, the lamp showcase section will show a broken-image
  // placeholder — that's intentional so you don't forget.
  light: "/images/ObjectLamp.png",

  // "The studio" — wide shot of the calm, spa-feeling treatment room.
  // Suggested local swap: /images/studio.jpg
  studio: "/images/ObjectChair.png",

  // Before/after — close-up smile photos. Use real client photos with consent.
  // Suggested local swaps: /images/before.jpg + /images/after.jpg
  before:
    "https://images.unsplash.com/photo-1663182234283-28941e7612da?auto=format&fit=crop&w=1600&q=80",
  after:
    "https://images.unsplash.com/photo-1655807946138-811bb2340d34?auto=format&fit=crop&w=1600&q=80",

  // Portrait of you — the specialist.
  // Suggested local swap: /images/specialist.jpg
  specialist:
    "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80",

  // Brand logo — the tooth mark used in the nav and footer.
  // TODO: save your logo as a tightly-cropped PNG (transparent background, square,
  // at least 256×256) at:
  //   C:\Users\Charlemagne\Desktop\Brighten Website\public\images\logo.png
  // Until that file exists, the logo slot will show a broken-image placeholder.
  logo: "/images/logo.png",
} as const;

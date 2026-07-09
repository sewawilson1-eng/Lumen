/**
 * Smile gallery — real client whitening transformations.
 *
 * Drop replacements into public/images/ and update the matching
 * `image` path here. Keep alt text specific: what the photo shows +
 * that it's a professional whitening result at Lumen.
 */

export type GalleryItem = {
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    image: "/images/gallery-1.webp",
    alt: "Before and after comparison of a client's teeth after professional LED whitening at Lumen in the South Bronx",
  },
  {
    image: "/images/gallery-2.webp",
    alt: "Client smiling with noticeably whiter teeth after a Lumen teeth whitening session",
  },
  {
    image: "/images/gallery-3.webp",
    alt: "Close-up of brighter, whiter teeth following an in-person whitening treatment at Lumen, Bronx NY",
  },
  {
    image: "/images/gallery-4.webp",
    alt: "Teeth whitening result showing several shades of improvement after one visit to Lumen",
  },
  {
    image: "/images/gallery-5.webp",
    alt: "A confident white smile after professional cosmetic teeth whitening at Lumen near Yankee Stadium",
  },
  {
    image: "/images/gallery-6.webp",
    alt: "Bright, even smile after an enamel-safe LED whitening session at Lumen studio",
  },
];

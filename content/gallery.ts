/**
 * Smile gallery — photos only.
 *
 * Local client transformation photos. Drop replacements into
 * public/images/ and update the matching `image` path here.
 */

export type GalleryItem = {
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { image: "/images/gallery-1.webp", alt: "A bright smile after a Lumen whitening session" },
  { image: "/images/gallery-2.webp", alt: "A bright smile after a Lumen whitening session" },
  { image: "/images/gallery-3.webp", alt: "A bright smile after a Lumen whitening session" },
  { image: "/images/gallery-4.webp", alt: "A bright smile after a Lumen whitening session" },
  { image: "/images/gallery-5.webp", alt: "A bright smile after a Lumen whitening session" },
  { image: "/images/gallery-6.webp", alt: "A bright smile after a Lumen whitening session" },
];

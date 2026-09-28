import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Carousel } from "@/components/primitives/Carousel";
import { galleryItems } from "@/content/gallery";

export function SmileGallery() {
  return (
    <section id="gallery" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Stunning transformations.
          </h2>
        </FadeUp>

        <Carousel label="Client results" itemLabel="photos">
          {galleryItems.map((item) => (
            <div
              key={item.image}
              className="relative aspect-square overflow-hidden rounded-3xl bg-white"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 85vw"
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

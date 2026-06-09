import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <FadeUp
              key={item.image}
              delay={(i % 3) * 0.08}
              className="group overflow-hidden rounded-3xl bg-white"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

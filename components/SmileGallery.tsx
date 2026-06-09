import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { galleryItems } from "@/content/gallery";

export function SmileGallery() {
  return (
    <section id="gallery" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Smile gallery
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Stunning transformations.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Real sessions, real shade jumps. Every smile below was finished in a single
            visit &mdash; no sensitivity, no clinical feel.
          </p>
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
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-dark backdrop-blur">
                  {item.session}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
                  {item.shades}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                  &ldquo;{item.blurb}&rdquo;
                </p>
                <p className="mt-3 text-sm text-muted">&mdash; {item.initial}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 text-center">
          <p className="text-sm text-muted">
            Results may vary by client. Photos shown are example transformations.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { showcaseItems, type ShowcaseItem } from "@/content/showcase";
import { cn } from "@/lib/cn";

export function ProductShowcase() {
  return (
    <section id="service" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            The service
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Three elements. One quiet visit.
          </h2>
        </FadeUp>

        <div className="space-y-24 sm:space-y-36">
          {showcaseItems.map((item, idx) => (
            <ShowcaseRow key={item.headline} item={item} priority={idx === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ShowcaseRow({ item, priority }: { item: ShowcaseItem; priority: boolean }) {
  const imageOnLeft = item.side === "left";
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <FadeUp
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary-soft",
          imageOnLeft ? "lg:order-1" : "lg:order-2"
        )}
        style={item.aspectRatio ? { aspectRatio: item.aspectRatio } : undefined}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={priority}
          className="object-cover"
        />
      </FadeUp>

      <FadeUp
        delay={0.1}
        className={cn(imageOnLeft ? "lg:order-2" : "lg:order-1")}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-dark">
          {item.eyebrow}
        </p>
        <h3 className="headline-text text-4xl font-semibold text-foreground sm:text-5xl">
          {item.headline}
        </h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{item.body}</p>
      </FadeUp>
    </div>
  );
}

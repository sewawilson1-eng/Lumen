"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { galleryItems } from "@/content/gallery";

export function SmileGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Stunning transformations.
          </h2>
        </FadeUp>
      </Container>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 sm:px-8 lg:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryItems.map((item) => (
            <div
              key={item.image}
              data-card
              className="relative aspect-square w-[85vw] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-3xl bg-white sm:w-[55vw] lg:w-[32vw]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 55vw, 85vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 lg:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 lg:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

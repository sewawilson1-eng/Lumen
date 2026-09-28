"use client";

import { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { testimonials, reviewSummary } from "@/content/testimonials";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function Stars({ count = 5, size = "h-4 w-4" }: { count?: number; size?: string }) {
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(size, i < count ? "fill-primary text-primary" : "fill-transparent text-border")}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Reviews
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            In their own words.
          </h2>
          <div className="mt-6 flex flex-col items-center gap-2">
            <Stars size="h-5 w-5" />
            <p className="text-base font-medium text-foreground">{reviewSummary.label}</p>
          </div>
        </FadeUp>
      </Container>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 sm:px-8 lg:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-card
              className="flex w-[85vw] max-w-[400px] shrink-0 snap-center flex-col rounded-3xl border border-border bg-white p-8 sm:w-[55vw] lg:w-[32vw]"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
                <Stars count={t.rating} />
              </div>
              <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted">Google review</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous review"
          className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 lg:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next review"
          className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 lg:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <Container>
        <FadeUp className="mt-8 text-center">
          <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="ghost">
              Read more reviews on Google
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
          <p className="mt-3 text-xs text-muted">Results vary by client.</p>
        </FadeUp>
      </Container>
    </section>
  );
}

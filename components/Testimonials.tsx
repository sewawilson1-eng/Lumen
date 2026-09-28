import { Quote, Star, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { testimonials, reviewSummary } from "@/content/testimonials";
import { site } from "@/content/site";

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" strokeWidth={1.5} />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Reviews
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            In their own words.
          </h2>
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground transition-colors hover:border-primary-dark/40"
          >
            <Stars />
            <span>
              <span className="font-semibold">{reviewSummary.rating}</span>
              <span className="text-muted"> · {reviewSummary.count} Google reviews</span>
            </span>
          </a>
        </FadeUp>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <FadeUp
              key={t.name}
              delay={(i % 3) * 0.06}
              className="mb-5 break-inside-avoid rounded-3xl border border-border bg-white p-8"
            >
              <Quote className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
              <blockquote className="mt-4 text-[17px] leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted">Google review</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-8 text-center">
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-dark underline-offset-4 hover:underline"
          >
            Read all {reviewSummary.count} reviews on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-muted">Results vary by client.</p>
        </FadeUp>
      </Container>
    </section>
  );
}

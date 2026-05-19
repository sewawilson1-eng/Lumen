"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { reviews, type Review } from "@/content/reviews";

export function ReviewMarquee() {
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section id="reviews" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Reviews
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Loved by 50,000+ smiles.
          </h2>
        </FadeUp>
      </Container>

      <div className="relative space-y-5">
        <MarqueeRow direction={-1} duration={50}>
          {row1.map((r, i) => (
            <ReviewCard key={`a-${i}`} review={r} />
          ))}
        </MarqueeRow>
        <MarqueeRow direction={1} duration={60}>
          {row2.map((r, i) => (
            <ReviewCard key={`b-${i}`} review={r} />
          ))}
        </MarqueeRow>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary-soft to-transparent sm:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary-soft to-transparent sm:w-40"
        />
      </div>
    </section>
  );
}

function MarqueeRow({
  children,
  direction,
  duration,
}: {
  children: React.ReactNode;
  direction: 1 | -1;
  duration: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4 sm:gap-5"
        animate={{ x: direction === -1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex w-[320px] shrink-0 flex-col rounded-3xl bg-white p-6 sm:w-[360px]">
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < review.rating
                ? "h-4 w-4 fill-primary-dark text-primary-dark"
                : "h-4 w-4 text-border"
            }
            strokeWidth={1.5}
          />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed text-foreground">&ldquo;{review.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        {review.avatar && (
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-primary-soft">
            <Image
              src={review.avatar}
              alt={`${review.name} avatar`}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
        )}
        <span className="text-sm font-medium text-foreground">{review.name}</span>
      </div>
    </article>
  );
}

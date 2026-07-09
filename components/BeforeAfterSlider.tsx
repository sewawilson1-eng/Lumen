"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { images } from "@/content/images";

const BEFORE = images.before;
const AFTER = images.after;

export function BeforeAfterSlider() {
  const [pct, setPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 4));
  };

  return (
    <section id="results" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Results
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            One visit. Drag to compare.
          </h2>
        </FadeUp>

        <FadeUp>
          <div
            ref={containerRef}
            className="relative mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-3xl bg-primary-soft select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <Image
              src={AFTER}
              alt="After professional teeth whitening at Lumen: a noticeably brighter, whiter smile"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
              aria-hidden
            >
              <Image
                src={BEFORE}
                alt="Before teeth whitening: natural tooth shade with visible staining"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0"
              style={{ left: `calc(${pct}% - 1px)` }}
            >
              <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
            </div>

            <button
              type="button"
              role="slider"
              aria-label="Reveal before image"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pct)}
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white text-foreground active:cursor-grabbing"
              style={{ left: `${pct}%` }}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 5l-5 7 5 7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 5l5 7-5 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Before
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              After
            </span>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

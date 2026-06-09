"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { images } from "@/content/images";

const BEFORE = images.before;
const AFTER = images.after;

export function BeforeAfterSlider() {
  const [pct, setPct] = useState(70);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Initial demo animation: handle slides from 70 -> 50 to teach interactivity
  useEffect(() => {
    if (hasInteracted) return;
    let raf = 0;
    const start = performance.now();
    const from = 70;
    const to = 50;
    const delay = 700;
    const duration = 1400;
    const tick = (now: number) => {
      if (dragging.current || hasInteracted) return;
      const t = Math.min(1, Math.max(0, (now - start - delay) / duration));
      const ease = 1 - Math.pow(1 - t, 3);
      setPct(from + (to - from) * ease);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasInteracted]);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    setHasInteracted(true);
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
    if (e.key === "ArrowLeft") {
      setHasInteracted(true);
      setPct((p) => Math.max(0, p - 4));
    }
    if (e.key === "ArrowRight") {
      setHasInteracted(true);
      setPct((p) => Math.min(100, p + 4));
    }
  };

  return (
    <section id="results" className="bg-slate-950 py-20 sm:py-24">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Results
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
            The transformation.
          </h2>
        </FadeUp>
      </Container>

      <FadeUp>
        <div
          ref={containerRef}
          className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 select-none touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ cursor: "ew-resize" }}
        >
          <Image
            src={AFTER}
            alt="After whitening: a brighter smile"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
            aria-hidden
          >
            <Image
              src={BEFORE}
              alt="Before whitening: a dimmer smile"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Divider line with cyan glow */}
          <div
            className="pointer-events-none absolute inset-y-0 w-px"
            style={{
              left: `calc(${pct}% - 0.5px)`,
              background:
                "linear-gradient(to bottom, rgba(34,211,238,0.4) 0%, rgba(255,255,255,1) 50%, rgba(34,211,238,0.4) 100%)",
              boxShadow:
                "0 0 24px rgba(34,211,238,0.55), 0 0 1px rgba(255,255,255,0.8)",
            }}
          />

          {/* Premium drag handle */}
          <motion.button
            type="button"
            role="slider"
            aria-label="Drag to reveal before"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pct)}
            tabIndex={0}
            onKeyDown={onKeyDown}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="group absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_4px_rgba(34,211,238,0.18)] active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 sm:h-16 sm:w-16"
            style={{ left: `${pct}%` }}
          >
            <GripVertical className="h-5 w-5 text-slate-700" strokeWidth={2.5} />
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-400 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-50" />
          </motion.button>

          {/* Before label (left) */}
          <div className="pointer-events-none absolute left-5 top-5 sm:left-10 sm:top-10">
            <motion.span
              animate={{
                opacity: pct < 20 ? 0.45 : 1,
                scale: pct < 20 ? 0.94 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:px-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Before
            </motion.span>
          </div>

          {/* After label (right) */}
          <div className="pointer-events-none absolute right-5 top-5 sm:right-10 sm:top-10">
            <motion.span
              animate={{
                opacity: pct > 80 ? 0.45 : 1,
                scale: pct > 80 ? 0.94 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 backdrop-blur-md sm:px-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              After
            </motion.span>
          </div>

          {/* Drag-to-compare hint (fades after first interaction) */}
          <AnimatePresence>
            {!hasInteracted && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
                className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-14"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur-md">
                  Drag to compare
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeUp>
    </section>
  );
}

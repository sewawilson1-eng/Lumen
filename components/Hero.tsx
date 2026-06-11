"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import { LampContainer } from "@/components/ui/lamp";
import { site } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-start overflow-hidden pt-32 sm:pt-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[80%] bg-gradient-to-b from-primary-soft via-white to-white"
      />

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur"
        >
          <MapPin className="h-3 w-3 text-primary-dark" strokeWidth={2.25} />
          {site.location.area} · By appointment only
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display-text text-5xl font-semibold text-foreground sm:text-7xl lg:text-[96px]"
        >
          A brighter smile.
          <br />
          <span className="bg-gradient-to-b from-primary-dark to-foreground bg-clip-text text-transparent">
            In one visit.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Professional, enamel-safe teeth whitening in a private South Bronx studio &mdash;
          up to fourteen shades brighter in one visit. Plus tooth gems, with grillz on the
          way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Book a Session
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#sessions">
            <Button size="lg" variant="ghost">
              See sessions &amp; pricing
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y, scale }}
        className="relative mt-20 w-full"
      >
        <LampContainer className="h-[760px] min-h-0 rounded-none">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur">
              <Sparkles className="h-3 w-3" strokeWidth={2.25} />
              Professional teeth whitening
            </span>
            <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Up to 14 shades brighter.
            </h2>
            <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-slate-400 md:text-lg">
              Pro-grade LED and an enamel-safe gel in a calm, private studio &mdash; dramatic,
              sensitivity-free results from your very first visit.
            </p>
          </motion.div>
        </LampContainer>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"
        />
      </motion.div>
    </section>
  );
}

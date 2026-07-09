"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Star, Clock } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

const trust = [
  { icon: ShieldCheck, label: "Enamel-safe, sensitivity-free" },
  { icon: Star, label: "Up to 14 shades brighter" },
  { icon: Clock, label: "One visit · from $99" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[85%] bg-gradient-to-b from-primary-soft via-background to-background"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur"
        >
          <MapPin className="h-3 w-3 text-primary-dark" strokeWidth={2.25} />
          South Bronx · Near Yankee Stadium · By appointment only
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="display-text text-5xl font-semibold text-foreground sm:text-7xl lg:text-[88px]"
        >
          A brighter smile.
          <br />
          <span className="italic text-primary-dark">In one visit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Professional, enamel-safe LED teeth whitening in a private South Bronx
          studio — up to fourteen shades brighter in a single sensitivity-free
          session.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Book Your Whitening
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#sessions">
            <Button size="lg" variant="ghost">
              See sessions &amp; pricing
            </Button>
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-10 flex flex-col items-center gap-3 text-sm text-muted sm:flex-row sm:gap-8"
        >
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary-dark" strokeWidth={2} />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease }}
        className="relative mx-auto mt-16 w-full max-w-3xl px-6"
      >
        <div
          aria-hidden
          className="absolute inset-x-16 top-8 -z-10 h-3/4 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-3xl rounded-t-[10rem] border border-border bg-primary-soft sm:rounded-t-[14rem]">
          <Image
            src="/images/service-whitening.webp"
            alt="A confident, bright white smile after a professional teeth whitening session at Lumen in the South Bronx"
            fill
            priority
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Plus, Sparkles } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const CREDENTIAL_ICONS = [BadgeCheck, GraduationCap, Sparkles] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Questions
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Good questions, answered.
          </h2>
        </FadeUp>

        <FadeUp>
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium text-foreground sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-dark transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[17px] leading-relaxed text-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-14 rounded-3xl border border-border bg-primary-soft p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Your specialist
          </p>
          <p className="text-lg font-semibold text-foreground">{site.specialist.role}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{site.specialist.bio}</p>
          <ul className="mt-6 space-y-2.5">
            {site.specialist.credentials.map((c, i) => {
              const Icon = CREDENTIAL_ICONS[i % CREDENTIAL_ICONS.length];
              return (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" strokeWidth={2} />
                  {c}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Lumen is a cosmetic studio offering professional teeth whitening services. It is not
            a dental practice and does not provide dental treatment or diagnosis.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}

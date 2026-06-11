"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { zodiacSigns, clearGem, toothGemConfig } from "@/content/zodiac";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Selection = number | "clear";

// U+FE0E forces the "text" presentation of the zodiac glyphs so they render
// as clean monochrome symbols instead of colorful emoji.
const asTextGlyph = (g: string) => `${g}︎`;

export function ToothGems() {
  const [selected, setSelected] = useState<Selection>("clear");

  const isClear = selected === "clear";
  const sign = isClear ? null : zodiacSigns[selected];
  const current = isClear ? clearGem : zodiacSigns[selected];
  const detailGlyphColor = isClear ? "#3b9fd9" : sign!.lightFill ? "#334155" : "#ffffff";

  return (
    <section id="gems" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Tooth Gems
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Find your gem.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Pick your sign for its birthstone &mdash; or keep it classic with a clear
            crystal in the center. Genuine stones, bonded safely, enamel-safe.
          </p>
        </FadeUp>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Zodiac wheel */}
          <FadeUp className="order-1">
            <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[400px]">
              {/* Decorative rings */}
              <div className="absolute inset-[11%] rounded-full border border-dashed border-primary-dark/15" />
              <div className="absolute inset-[28%] rounded-full border border-primary-dark/10" />

              {zodiacSigns.map((s, i) => {
                const angle = ((-90 + i * 30) * Math.PI) / 180;
                const r = 42;
                // Round so server (Node) and client (V8) produce identical
                // strings — avoids a hydration mismatch.
                const x = (50 + r * Math.cos(angle)).toFixed(3);
                const y = (50 + r * Math.sin(angle)).toFixed(3);
                const isSel = selected === i;
                return (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-label={`${s.name} — ${s.stone}`}
                    aria-pressed={isSel}
                    title={`${s.name} · ${s.stone}`}
                    className={cn(
                      "absolute flex h-11 w-11 items-center justify-center rounded-full font-medium shadow-sm ring-1 ring-inset ring-black/10 transition-[box-shadow,filter] hover:brightness-110 sm:h-12 sm:w-12",
                      isSel &&
                        "ring-2 ring-primary-dark ring-offset-2 ring-offset-primary-soft"
                    )}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      backgroundColor: s.color,
                      transform: `translate(-50%, -50%) scale(${isSel ? 1.14 : 1})`,
                      color: s.lightFill ? "#334155" : "#ffffff",
                    }}
                  >
                    <span
                      aria-hidden
                      className="text-[17px] leading-none [font-variant-emoji:text] sm:text-lg"
                    >
                      {asTextGlyph(s.symbol)}
                    </span>
                  </button>
                );
              })}

              {/* Center clear gem */}
              <button
                type="button"
                onClick={() => setSelected("clear")}
                aria-label="Clear crystal"
                aria-pressed={isClear}
                title="Clear · classic crystal"
                className={cn(
                  "absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center shadow-md ring-1 ring-black/10 transition hover:brightness-105",
                  isClear &&
                    "ring-2 ring-primary-dark ring-offset-2 ring-offset-primary-soft"
                )}
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 32% 28%, #ffffff, #eef2f6 68%, #dbe3ec)",
                }}
              >
                <span className="text-xl leading-none text-primary-dark [font-variant-emoji:text]">
                  {asTextGlyph("✦")}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Clear
                </span>
              </button>
            </div>
          </FadeUp>

          {/* Detail panel */}
          <FadeUp delay={0.1} className="order-2">
            <div className="rounded-3xl bg-white p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ring-1 ring-inset ring-black/10 [font-variant-emoji:text]"
                  style={{ backgroundColor: current.color, color: detailGlyphColor }}
                >
                  <span aria-hidden>{asTextGlyph(current.symbol)}</span>
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-primary-dark">
                    {isClear ? "Classic" : current.name}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {current.stone}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-[15px] text-muted">{current.dates}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                {isClear
                  ? "Timeless and goes with everything — the classic tooth gem. Subtle, brilliant, and completely enamel-safe."
                  : `Your ${current.name} birthstone. Tell us at booking and we'll have your ${current.stone.toLowerCase()} ready.`}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-foreground">
                  {toothGemConfig.price}
                </span>
                <span className="text-lg text-muted line-through decoration-from-font">
                  {toothGemConfig.originalPrice}
                </span>
                <span className="ml-1 text-sm text-muted">· enamel-safe</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-block rounded-md bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary-dark">
                  {toothGemConfig.savings}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
                  Launch pricing
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {toothGemConfig.note}
              </p>

              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block"
              >
                <Button size="lg" className="w-full">
                  Book a Tooth Gem
                </Button>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Grillz — coming soon */}
        <FadeUp className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-dashed border-border bg-white/60 px-8 py-6 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-white">
                Coming soon
              </span>
              <p className="text-[15px] text-foreground">
                <span className="font-semibold">Grillz</span> &mdash; custom-fit and
                removable. Bookings open soon.
              </p>
            </div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              <Button size="md" variant="ghost">
                <Instagram className="h-4 w-4" />
                Join the waitlist
              </Button>
            </a>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

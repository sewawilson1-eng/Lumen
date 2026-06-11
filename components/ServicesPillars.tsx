import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { pillars, type Pillar } from "@/content/pillars";
import { cn } from "@/lib/cn";

export function ServicesPillars() {
  const [flagship, ...rest] = pillars;

  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            The Lumen studio
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Three ways to light up your smile.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            It starts with professional whitening &mdash; then a little sparkle, with more
            on the way. One private studio, one calm visit at a time.
          </p>
        </FadeUp>

        <div className="grid gap-5 lg:grid-cols-2">
          <FeaturedPillar pillar={flagship} />
          {rest.map((pillar) => (
            <StandardPillar key={pillar.name} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Chips({ items, tone = "soft" }: { items: string[]; tone?: "soft" | "muted" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((h) => (
        <span
          key={h}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium",
            tone === "soft"
              ? "bg-primary-soft text-primary-dark"
              : "bg-black/[0.04] text-muted"
          )}
        >
          {h}
        </span>
      ))}
    </div>
  );
}

function StatusBadge({ pillar }: { pillar: Pillar }) {
  const comingSoon = pillar.status === "coming-soon";
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium backdrop-blur",
        comingSoon
          ? "bg-foreground/85 text-white"
          : pillar.status === "flagship"
            ? "bg-primary text-white"
            : "bg-white/85 text-primary-dark"
      )}
    >
      {pillar.statusLabel}
    </span>
  );
}

function FeaturedPillar({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  return (
    <FadeUp className="flex flex-col overflow-hidden rounded-3xl border-2 border-primary bg-white lg:col-span-2 lg:flex-row">
      <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
            {pillar.statusLabel}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl">
          {pillar.name}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          {pillar.description}
        </p>
        <div className="mt-5">
          <Chips items={pillar.highlights} />
        </div>
        <a href={pillar.href} className="mt-8 inline-block">
          <Button size="lg">
            {pillar.cta}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
      <div className="relative aspect-[16/11] w-full lg:aspect-auto lg:w-[44%]">
        <Image
          src={pillar.image}
          alt={`${pillar.name} at Lumen`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </FadeUp>
  );
}

function StandardPillar({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  const comingSoon = pillar.status === "coming-soon";
  return (
    <FadeUp
      delay={0.08}
      className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={pillar.image}
          alt={`${pillar.name} at Lumen`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className={cn("object-cover", comingSoon && "opacity-95")}
        />
        <div className="absolute right-4 top-4">
          <StatusBadge pillar={pillar} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <div className="flex items-center gap-2.5">
          <Icon className="h-5 w-5 text-primary-dark" strokeWidth={1.75} />
          <h3 className="text-2xl font-semibold text-foreground">{pillar.name}</h3>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{pillar.description}</p>
        <div className="mt-5 flex-1">
          <Chips items={pillar.highlights} tone={comingSoon ? "muted" : "soft"} />
        </div>

        <a
          href={pillar.href}
          {...(pillar.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-8 block"
        >
          <Button size="lg" variant="ghost" className="w-full">
            {pillar.cta}
          </Button>
        </a>
      </div>
    </FadeUp>
  );
}

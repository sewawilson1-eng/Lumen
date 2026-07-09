import { Check } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { pricingTiers } from "@/content/pricing";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section id="sessions" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Sessions
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Pick your session length.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Every session uses the same professional-grade gel and LED. Longer sessions just
            mean more cycles &mdash; and a brighter result.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-dark/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Launch pricing &middot; Limited time
          </span>
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <FadeUp
              key={tier.name}
              delay={i * 0.08}
              className={cn(
                "flex flex-col rounded-3xl p-8 sm:p-10",
                tier.highlighted
                  ? "border-2 border-primary bg-background"
                  : "border border-border bg-background"
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                {tier.badge && (
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      tier.highlighted
                        ? "bg-primary-dark text-white"
                        : "bg-primary-soft text-primary-dark"
                    )}
                  >
                    {tier.badge}
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="text-lg text-muted line-through decoration-from-font">
                  {tier.originalPrice}
                </span>
                <span className="ml-1 text-sm text-muted">{tier.cadence}</span>
              </div>
              <p className="mt-2 inline-block w-fit rounded-md bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary-dark">
                {tier.savings}
              </p>
              <p className="mt-3 text-[15px] text-muted">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" strokeWidth={2.25} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block"
              >
                <Button
                  size="lg"
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-10 text-center">
          <p className="text-sm text-muted">
            Returning clients get 15% off any maintenance session within 90 days.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}

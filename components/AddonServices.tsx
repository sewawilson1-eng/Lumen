import { Check, Gem, Sparkles, Instagram } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { addonServices } from "@/content/addons";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const ICONS = [Gem, Sparkles] as const;

export function AddonServices() {
  return (
    <section id="more" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Also at Lumen
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            More than a brighter smile.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Finishing touches to make your smile your own &mdash; from a little sparkle to
            what&apos;s coming next.
          </p>
        </FadeUp>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {addonServices.map((svc, i) => {
            const Icon = ICONS[i % ICONS.length];
            const comingSoon = svc.status === "coming-soon";
            return (
              <FadeUp
                key={svc.name}
                delay={i * 0.08}
                className={cn(
                  "flex flex-col rounded-3xl border bg-white p-8 sm:p-10",
                  comingSoon ? "border-dashed border-border" : "border-border"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  {comingSoon && (
                    <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-white">
                      Coming soon
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{svc.name}</h3>
                  {svc.price && (
                    <span className="text-sm font-medium text-primary-dark">{svc.price}</span>
                  )}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{svc.blurb}</p>

                {svc.gems && (
                  <div className="mt-6 rounded-2xl bg-primary-soft/60 p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-dark">
                      Choose your gem
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {svc.gems.map((gem) => (
                        <span
                          key={gem.label}
                          title={`${gem.label} — ${gem.stone}`}
                          className={cn(
                            "h-7 w-7 rounded-full ring-1 ring-inset ring-black/10",
                            gem.clear && "ring-black/15"
                          )}
                          style={{
                            background: gem.clear
                              ? `radial-gradient(circle at 30% 30%, #ffffff, ${gem.color} 70%, #e2e8f0)`
                              : gem.color,
                          }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[13px] text-muted">
                      Clear crystal or your birthstone &mdash; January through December.
                    </p>
                  </div>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] text-foreground"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          comingSoon ? "text-muted" : "text-primary-dark"
                        )}
                        strokeWidth={2.25}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {svc.note && (
                  <p className="mt-6 text-[13px] leading-relaxed text-muted">{svc.note}</p>
                )}

                <div className="mt-8">
                  {comingSoon ? (
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" variant="ghost" className="w-full">
                        <Instagram className="h-4 w-4" />
                        Join the waitlist
                      </Button>
                    </a>
                  ) : (
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="w-full">
                        {svc.cta}
                      </Button>
                    </a>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

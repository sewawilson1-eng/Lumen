import { MapPin, Lock, Train, Clock } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { site } from "@/content/site";

export function Location() {
  return (
    <section id="location" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <FadeUp>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
              Studio
            </p>
            <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-5xl">
              A private studio
              <br />
              in the {site.location.area.split(",")[0]}.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              One client at a time, in a calm, sanitized room. Plants, soft lighting, and a
              single reclined chair &mdash; closer to a facial appointment than anything
              you&apos;d call clinical.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-medium text-foreground">{site.location.area}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[15px] text-muted">
                    <Lock className="h-3.5 w-3.5" strokeWidth={2} />
                    {site.location.privacyNote}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                  <Train className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-medium text-foreground">Easy to reach</p>
                  <p className="mt-0.5 text-[15px] text-muted">
                    {site.location.nearestTransit}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                  <Clock className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <ul className="mt-1 space-y-0.5 text-[15px] text-muted">
                    {site.hours.map((h) => (
                      <li key={h.day}>
                        <span className="inline-block w-24 text-foreground/70">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary-soft">
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-primary-soft via-white to-primary-soft"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-dark">
                  <Lock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="headline-text text-3xl font-semibold text-foreground sm:text-4xl">
                  Address shared
                  <br />
                  at booking.
                </p>
                <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
                  A small studio in a private residence. To respect everyone&apos;s time and
                  privacy, the exact location goes out by email the moment your appointment is
                  confirmed.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

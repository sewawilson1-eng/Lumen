import { MapPin, Train } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";

const neighborhoods = [
  "Mott Haven",
  "Melrose",
  "Concourse",
  "Grand Concourse",
  "Highbridge",
  "Morrisania",
  "Port Morris",
  "Hunts Point",
  "Longwood",
  "Upper Manhattan",
  "Harlem",
];

export function AreasServed() {
  return (
    <section id="areas" className="py-20 sm:py-24">
      <Container className="max-w-3xl text-center">
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Areas we serve
          </p>
          <h2 className="headline-text text-3xl font-semibold text-foreground sm:text-4xl">
            Professional teeth whitening for the South Bronx.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            Lumen is a private teeth whitening studio in the South Bronx (ZIP 10451),
            steps from Yankee Stadium — welcoming clients from across the Bronx, Upper
            Manhattan, and greater New York City. If you&apos;ve been searching for{" "}
            <a href="#sessions" className="font-medium text-primary-dark underline-offset-2 hover:underline">
              affordable, professional teeth whitening near you
            </a>
            , our enamel-safe LED sessions start at $99 &mdash; and{" "}
            <a href="#quiz" className="font-medium text-primary-dark underline-offset-2 hover:underline">
              a 60-second quiz
            </a>{" "}
            tells you if you&apos;re a good candidate. In-person, by appointment only.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
              >
                <MapPin className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2} />
                {n}
              </span>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <Train className="h-4 w-4 text-primary-dark" strokeWidth={1.75} />
            Steps from the 4 / B / D at 161st St – Yankee Stadium
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}

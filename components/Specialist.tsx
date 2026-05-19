import Image from "next/image";
import { BadgeCheck, GraduationCap, Sparkles } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { site } from "@/content/site";
import { images } from "@/content/images";

const CREDENTIAL_ICONS = [BadgeCheck, GraduationCap, Sparkles] as const;

export function Specialist() {
  return (
    <section id="specialist" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeUp className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white">
            <Image
              src={images.specialist}
              alt={`${site.specialist.firstName}, ${site.specialist.role}`}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
              Meet your specialist
            </p>
            <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-5xl">
              Trained where it counts.
              <br />
              Not a dental office.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {site.specialist.bio}
            </p>

            <ul className="mt-10 space-y-4">
              {site.specialist.credentials.map((credential, i) => {
                const Icon = CREDENTIAL_ICONS[i % CREDENTIAL_ICONS.length];
                return (
                  <li key={credential} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-primary-dark">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <p className="text-[15px] leading-relaxed text-foreground">
                      {credential}
                    </p>
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
              Lumen is a cosmetic studio offering professional teeth whitening services. It
              is not a dental practice and does not provide dental treatment or diagnosis.
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

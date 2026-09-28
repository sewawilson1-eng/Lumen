import { Sparkles, Droplet, Tag } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";

const points = [
  {
    icon: Sparkles,
    title: "Cosmetic, not clinical",
    body: "No drills, no dental chair, no waiting room. Lumen doesn't diagnose, treat, or replace your dentist — keep your regular checkups. We're here for one thing: your brightest smile.",
  },
  {
    icon: Droplet,
    title: "Gentle, cosmetic-grade gel",
    body: "A professional peroxide gel with built-in desensitizers, chosen for comfort. Most clients feel little to nothing during their session.",
  },
  {
    icon: Tag,
    title: "Big results, studio pricing",
    body: "Up to 14 shades brighter in a single visit, from $99 — a fraction of what in-office dental whitening typically costs in NYC.",
  },
];

export function OwnLane() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Our own lane
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            We didn&apos;t copy the dental office.
            <br />
            <span className="italic text-primary-dark">We built our own lane.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Lumen is a cosmetic teeth whitening studio &mdash; not a dental office. That&apos;s
            the point: a calm, private session focused entirely on brightening your smile,
            without the clinical feel or the dental-office price tag.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {points.map(({ icon: Icon, title, body }, i) => (
            <FadeUp
              key={title}
              delay={i * 0.06}
              className="rounded-3xl border border-border bg-white p-8"
            >
              <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-muted">
            Lumen is not a dental practice and does not provide dental treatment, diagnosis,
            or medical advice. Results vary by individual. Clients with existing dental
            conditions should consult a licensed dentist before whitening.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}

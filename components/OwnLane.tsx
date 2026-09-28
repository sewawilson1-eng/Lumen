import { Sparkles, Droplet, Tag } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";

const points = [
  {
    icon: Sparkles,
    title: "Cosmetic, never clinical",
    body: "No drills, no dental chair, no waiting room. We don't diagnose or treat — keep seeing your dentist for checkups. We focus on one thing: a brighter smile.",
  },
  {
    icon: Droplet,
    title: "Gentle by design",
    body: "A professional peroxide gel with built-in desensitizers, chosen for comfort. Most clients feel little to nothing during their session.",
  },
  {
    icon: Tag,
    title: "A fraction of the price",
    body: "Professional LED whitening from $99 — a fraction of what in-office dental whitening typically costs in New York City.",
  },
];

export function OwnLane() {
  return (
    <section id="why" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Why Lumen
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Not a dental office.
            <br />
            By design.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            A private cosmetic studio built around one calm visit and one goal: your
            brightest smile. Closer to a facial appointment than a dental visit.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {points.map(({ icon: Icon, title, body }, i) => (
            <FadeUp key={title} delay={i * 0.06} className="rounded-3xl bg-white p-8">
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
            or medical advice. Results vary by client.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}

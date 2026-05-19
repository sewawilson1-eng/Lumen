import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { scienceCards } from "@/content/science";

export function ScienceGrid() {
  return (
    <section id="science" className="bg-primary-soft py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            The science
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Backed by science, not gimmicks.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            In-office LED whitening works at a chemical level — not at the surface. Here's exactly what happens inside your enamel.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {scienceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeUp
                key={card.title}
                delay={i * 0.06}
                className="rounded-3xl bg-white p-8"
              >
                <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{card.body}</p>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

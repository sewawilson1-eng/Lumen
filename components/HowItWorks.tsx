import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { steps } from "@/content/steps";

export function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <Container>
        <FadeUp className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            How it works
          </p>
          <h2 className="headline-text text-4xl font-semibold text-foreground sm:text-6xl">
            Three steps. Five minutes.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.1}>
              <span
                aria-hidden
                className="block text-[88px] font-semibold leading-none tracking-tighter text-primary"
              >
                {step.number}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[17px] leading-relaxed text-muted">
                {step.body}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";

const stats = [
  { value: "Up to 14 shades", label: "brighter in one visit" },
  { value: "Pro-grade LED", label: "dental-strength formula" },
  { value: "Sensitivity-free", label: "buffered for comfort" },
];

export function FeatureStrip() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          {stats.map((s, i) => (
            <FadeUp
              key={s.value}
              delay={i * 0.08}
              className="flex flex-1 items-center justify-center rounded-full border border-border bg-white px-6 py-4 text-center"
            >
              <p className="text-base text-foreground sm:text-[15px]">
                <span className="font-semibold">{s.value}</span>
                <span className="ml-2 text-muted">{s.label}</span>
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

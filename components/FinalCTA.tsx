import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Button } from "@/components/primitives/Button";
import { site } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="bg-primary-soft py-32 sm:py-40">
      <Container>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2 className="display-text text-5xl font-semibold text-foreground sm:text-7xl">
            Ready to smile brighter?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            A single quiet visit. A noticeably brighter smile by the time you leave. Pick a
            session and book in under a minute.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Book a Session
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#sessions">
              <Button size="lg" variant="ghost">
                Compare sessions
              </Button>
            </a>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

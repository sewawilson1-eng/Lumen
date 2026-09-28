"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CarouselProps = {
  children: ReactNode;
  /** Accessible name for the carousel region, e.g. "Client results". */
  label: string;
  /** Plural noun for the controls' labels, e.g. "photos" or "reviews". */
  itemLabel: string;
  className?: string;
};

/**
 * Horizontal carousel that shows 3 slides at a time on desktop, 2 on tablet
 * and 1 (with the next peeking in) on phones. Visitors swipe/scroll, or use
 * the arrows and dots underneath to page through the rest.
 */
export function Carousel({ children, label, itemLabel, className }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const count = Children.count(children);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(Math.ceil(count / 3));
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(count <= 3);

  const metrics = useCallback(() => {
    const el = scrollerRef.current;
    const slide = el?.querySelector<HTMLElement>("[data-slide]");
    if (!el || !slide) return null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = slide.getBoundingClientRect().width + gap;
    const perView = Math.max(1, Math.floor((el.clientWidth + gap + 1) / step));
    return { el, step, perView };
  }, []);

  const update = useCallback(() => {
    const m = metrics();
    if (!m) return;
    const { el, step, perView } = m;
    const pages = Math.max(1, Math.ceil(count / perView));
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setPageCount(pages);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(end);
    setPage(end ? pages - 1 : Math.min(pages - 1, Math.round(el.scrollLeft / (step * perView))));
  }, [count, metrics]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = (target: number) => {
    const m = metrics();
    if (!m) return;
    m.el.scrollTo({ left: target * m.perView * m.step, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth rounded-3xl pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div
            data-slide
            className="w-[85%] shrink-0 snap-start sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)]"
          >
            {child}
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={atStart}
            aria-label={`Previous ${itemLabel}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:scale-105 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${itemLabel}, set ${i + 1} of ${pageCount}`}
                aria-current={i === page ? "true" : undefined}
                className="flex h-6 items-center"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-300",
                    i === page ? "w-6 bg-foreground" : "w-2 bg-foreground/20",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={atEnd}
            aria-label={`Next ${itemLabel}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:scale-105 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

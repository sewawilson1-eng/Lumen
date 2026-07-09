"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Sticky booking bar for phones — slides in after the hero so the primary
 * conversion action is always one thumb-tap away. Hidden on md+ where the
 * nav's Book Now button is visible.
 */
export function MobileBookBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur transition-transform duration-300 md:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-[15px] font-medium text-background shadow-sm"
      >
        Book Your Whitening · From $99
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

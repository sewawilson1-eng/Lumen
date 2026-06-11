import { Sparkles, Gem, Crown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "./site";

export type Pillar = {
  icon: LucideIcon;
  name: string;
  status: "flagship" | "available" | "coming-soon";
  statusLabel: string;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  external?: boolean;
};

export const pillars: Pillar[] = [
  {
    icon: Sparkles,
    name: "Teeth Whitening",
    status: "flagship",
    statusLabel: "Our flagship",
    description:
      "Professional LED whitening — up to fourteen shades brighter in a single, sensitivity-free visit. The heart of what we do.",
    highlights: ["3 session lengths", "From $99", "Up to 14 shades"],
    cta: "See whitening sessions",
    href: "#sessions",
  },
  {
    icon: Gem,
    name: "Tooth Gems",
    status: "available",
    statusLabel: "Now booking",
    description:
      "A little sparkle, bonded safely. Choose your zodiac birthstone or a classic clear crystal — enamel-safe and removable.",
    highlights: ["Birthstone or clear", "Enamel-safe", "From $49"],
    cta: "Find your gem",
    href: "#gems",
  },
  {
    icon: Crown,
    name: "Grillz",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description:
      "Custom-fit, removable grillz crafted to your smile. Launching soon at the studio — be first in line.",
    highlights: ["Custom molded", "Premium finishes", "Removable"],
    cta: "Join the waitlist",
    href: site.instagram,
    external: true,
  },
];

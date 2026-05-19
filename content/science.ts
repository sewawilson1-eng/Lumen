import { FlaskConical, Zap, Wind, Layers, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ScienceCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const scienceCards: ScienceCard[] = [
  {
    icon: FlaskConical,
    title: "44% hydrogen peroxide gel",
    body: "A high-concentration professional-grade bleaching gel — far stronger than anything available over the counter, applied precisely by a trained specialist.",
  },
  {
    icon: Zap,
    title: "Blue LED activation",
    body: "A specialized blue LED lamp focuses energy directly onto the gel, accelerating the chemical breakdown of peroxide and dramatically speeding up the whitening reaction.",
  },
  {
    icon: Wind,
    title: "Oxygen radical release",
    body: "As the activated gel breaks down, it releases highly reactive oxygen radicals that penetrate the enamel and rapidly oxidize and dissolve the stubborn stain molecules inside.",
  },
  {
    icon: Layers,
    title: "Deep enamel penetration",
    body: "Oxygen reaches deep within the enamel structure — targeting discoloration that surface-level strips and toothpastes simply cannot reach.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in desensitizers",
    body: "The formula includes desensitizing compounds that calm nerve response during and after each LED cycle, so most clients feel little to nothing throughout the session.",
  },
  {
    icon: Sparkles,
    title: "Remineralizing agents",
    body: "Remineralizing agents in the gel protect and help rebuild enamel throughout the process — leaving your teeth stronger after whitening, not weaker.",
  },
];

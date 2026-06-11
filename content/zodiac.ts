/**
 * Zodiac birthstones for the interactive Tooth Gem selector.
 * Order runs clockwise from Aries at the top of the wheel.
 *
 * `lightFill` = the stone color is light, so the zodiac glyph should be
 * drawn in dark ink instead of white for legibility.
 */

export type ZodiacSign = {
  name: string;
  symbol: string;
  dates: string;
  stone: string;
  color: string;
  lightFill?: boolean;
};

export const zodiacSigns: ZodiacSign[] = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 – Apr 19", stone: "Diamond", color: "#dfe7ee", lightFill: true },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 – May 20", stone: "Emerald", color: "#2e8b57" },
  { name: "Gemini", symbol: "♊", dates: "May 21 – Jun 20", stone: "Pearl", color: "#efe7d3", lightFill: true },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 – Jul 22", stone: "Ruby", color: "#9b111e" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 – Aug 22", stone: "Peridot", color: "#9acd32", lightFill: true },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 – Sep 22", stone: "Sapphire", color: "#0f52ba" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 – Oct 22", stone: "Opal", color: "#f7b7c4", lightFill: true },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 – Nov 21", stone: "Topaz", color: "#ffbf00", lightFill: true },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21", stone: "Turquoise", color: "#40e0d0", lightFill: true },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 – Jan 19", stone: "Garnet", color: "#7b1f2b" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 – Feb 18", stone: "Amethyst", color: "#9966cc" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 – Mar 20", stone: "Aquamarine", color: "#a3dbe8", lightFill: true },
];

export const clearGem = {
  name: "Clear",
  symbol: "✦",
  dates: "Any sign — classic & timeless",
  stone: "Clear Crystal",
  color: "#ffffff",
};

export const toothGemConfig = {
  price: "From $40",
  note: "Pick your gem at your appointment — add to any whitening session, or book on its own.",
};

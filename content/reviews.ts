export type Review = {
  name: string;
  rating: number;
  quote: string;
  avatar?: string;
};

export const reviews: Review[] = [
  {
    name: "Anya P.",
    rating: 5,
    quote: "Six shades brighter in one visit and zero sensitivity. The studio is so calm I almost dozed off.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Marcus T.",
    rating: 5,
    quote: "Booked the Signature on a Saturday. Walked out for dinner that night looking like a different person.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya R.",
    rating: 5,
    quote: "My hygienist asked what I had done. That's the only review you need.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Jordan K.",
    rating: 5,
    quote: "Private, professional, and faster than my lunch break. The Deluxe is worth every dollar.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Elena V.",
    rating: 5,
    quote: "I'm a coffee drinker — eight shades brighter after the Signature. I'll be back every two months.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sam C.",
    rating: 5,
    quote: "Easy to book. Easy to find. Easy to recommend. The result is the kind people notice.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Renee H.",
    rating: 5,
    quote: "Felt more like a spa than a clinic. And the photos before/after are dramatic.",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Daniel O.",
    rating: 5,
    quote: "I've done Zoom at a dentist for triple the price. Honestly couldn't tell the result apart.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  },
];

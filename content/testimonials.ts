/**
 * Client testimonials — verbatim excerpts from Lumen's Google reviews,
 * trimmed only at sentence boundaries. Never edit a quote's wording, and
 * keep each `rating` equal to the stars that reviewer actually gave.
 */

export type Testimonial = {
  quote: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const reviewSummary = {
  label: "100+ happy clients",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "…the atmosphere was calming and soothing, I felt like I was about to get a massage. Sewa was the ultimate professional. He walked me through everything he did.",
    name: "Patricia W.",
    rating: 5,
  },
  {
    quote:
      "Amazing experience! I felt really comfortable and at ease, even though I have a bit of dental phobia. There’s definitely a noticeable difference in the whiteness of my teeth and the stains are gone.",
    name: "Mia M.",
    rating: 5,
  },
  {
    quote:
      "He walked me through the process as this was my first time having my teeth whitened & I was pleasantly surprised. He has amazing chair side manners & a super cozy environment.",
    name: "Erika F.",
    rating: 5,
  },
  {
    quote:
      "He did an incredible job, and everything was perfect from start to finish. My teeth look amazing, and I’m so happy with the results.",
    name: "Teana J.",
    rating: 4,
  },
  {
    quote: "Great customer service and I’m loving the results so far.",
    name: "Nancy A.",
    rating: 5,
  },
  {
    quote: "Charlemagne was great! … I love my results as well.",
    name: "Oasiah",
    rating: 5,
  },
];

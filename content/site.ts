/**
 * Single source of truth for site-wide config.
 * Swap BOOKING_URL with your Calendly / Square Appointments / Booksy link
 * once it's set up. Every "Book" button on the site reads from here.
 */
export const site = {
  brand: "Lumen",
  tagline: "Professional teeth whitening, by appointment.",
  bookingUrl: "https://app.squareup.com/appointments/book/f3aucwgnqde9ju/L2142CKCAKNFB/start",
  email: "hello@lumensmile.com",
  phone: "(917) 555-0143",
  instagram: "https://instagram.com/lumen.smile",
  location: {
    area: "South Bronx, NYC",
    privacyNote: "Full studio address shared once your appointment is confirmed.",
    nearestTransit: "Steps from the 4 / B / D at 161st St – Yankee Stadium",
  },
  hours: [
    { day: "Tue – Fri", time: "11am – 8pm" },
    { day: "Saturday", time: "10am – 6pm" },
    { day: "Sun – Mon", time: "By request" },
  ],
  /**
   * About the specialist. Replace these with your details.
   * Lumen is a cosmetic studio — not a dental office — so credentials emphasize
   * certification + industry experience without implying dental practice.
   */
  specialist: {
    firstName: "Your name",
    role: "Certified Teeth Whitening Specialist",
    credentials: [
      "Certified in professional cosmetic teeth whitening",
      "Years of hands-on experience in the dental industry",
      "Trained on pro-grade LED systems and peroxide formulations",
    ],
    bio: "After years working alongside dentists and hygienists, I opened Lumen to offer the same professional whitening result in a quieter, calmer space — closer to a facial appointment than a dental visit.",
  },
} as const;

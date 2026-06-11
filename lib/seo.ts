/**
 * Central SEO config. Set NEXT_PUBLIC_SITE_URL in the deploy environment if
 * your live domain differs from the default below.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://lumensmile.com";

// Approximate neighborhood coordinates (South Bronx, near 161st St – Yankee
// Stadium). Deliberately not the exact studio address, which stays private.
export const GEO = { latitude: 40.8276, longitude: -73.9254 };

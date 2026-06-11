import { site } from "@/content/site";
import { faqs } from "@/content/faq";
import { SITE_URL, GEO } from "@/lib/seo";

/**
 * JSON-LD structured data for local search. Renders two graphs:
 *  - HealthAndBeautyBusiness (the studio, its location, services, area served)
 *  - FAQPage (mirrors the on-page FAQ for rich results)
 *
 * The exact street address is intentionally omitted (kept private until
 * booking); locality, region, postal code, and geo are enough for "near me"
 * local ranking.
 */
export function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE_URL}/#business`,
    name: site.brand,
    alternateName: "Lumen Smile",
    description:
      "Professional LED teeth whitening, tooth gems, and grillz (coming soon) at a private South Bronx studio. By appointment only.",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/images/logo.png`,
    email: site.email,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bronx",
      addressRegion: "NY",
      postalCode: "10451",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: [
      { "@type": "Place", name: "South Bronx" },
      { "@type": "Place", name: "The Bronx, NY" },
      { "@type": "City", name: "New York City" },
    ],
    publicAccess: false,
    availableLanguage: "English",
    knowsAbout: [
      "Teeth whitening",
      "LED teeth whitening",
      "Tooth gems",
      "Birthstone tooth gems",
      "Grillz",
      "Cosmetic smile services",
    ],
    sameAs: [site.instagram, site.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lumen services",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "99",
          itemOffered: {
            "@type": "Service",
            name: "Professional Teeth Whitening",
            description:
              "Enamel-safe LED teeth whitening — up to fourteen shades brighter in a single visit.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "49",
          itemOffered: {
            "@type": "Service",
            name: "Tooth Gems",
            description:
              "Birthstone or clear-crystal tooth gems, bonded safely and enamel-safe. Custom designs available.",
          },
        },
        {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          itemOffered: {
            "@type": "Service",
            name: "Grillz",
            description: "Custom-fit, removable grillz — coming soon to the studio.",
          },
        },
      ],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

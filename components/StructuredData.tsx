import { site } from "@/content/site";
import { faqs } from "@/content/faq";
import { SITE_URL, GEO } from "@/lib/seo";

/**
 * JSON-LD structured data for local + AI search. Two graphs:
 *  - HealthAndBeautyBusiness: the studio, its service area, whitening
 *    offers, and a ReserveAction pointing at the live booking page.
 *  - FAQPage: mirrors the on-page FAQ for rich results.
 *
 * The exact street address is intentionally omitted (shared only after
 * booking); locality, postal code, and geo are sufficient for "near me"
 * local relevance.
 */
export function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE_URL}/#business`,
    name: site.brand,
    alternateName: "Lumen Teeth Whitening",
    slogan: "A brighter smile. In one visit.",
    description:
      "Private, luxury professional teeth whitening studio in the South Bronx near Yankee Stadium (10451). Enamel-safe LED whitening — up to 14 shades brighter in one sensitivity-free visit. By appointment only.",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/images/logo.png`,
    email: site.email,
    priceRange: "$99–$139",
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
      { "@type": "Place", name: "Upper Manhattan" },
      { "@type": "City", name: "New York City" },
    ],
    publicAccess: false,
    availableLanguage: "English",
    keywords:
      "teeth whitening near me, professional teeth whitening, teeth whitening Bronx, teeth whitening 10451, teeth whitening near Yankee Stadium, LED teeth whitening, cosmetic teeth whitening, affordable teeth whitening NYC",
    knowsAbout: [
      "Professional teeth whitening",
      "LED teeth whitening",
      "Cosmetic teeth whitening",
      "Enamel-safe whitening",
      "Teeth whitening aftercare",
    ],
    sameAs: [site.instagram, site.facebook],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: site.bookingUrl,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Teeth whitening appointment" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Teeth whitening sessions",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "99",
          itemOffered: {
            "@type": "Service",
            name: "Essential Whitening — 45 minutes",
            serviceType: "Professional teeth whitening",
            description:
              "One 20-minute LED cycle with shade reading, lip & gum protection, and aftercare guidance. Up to 4–6 shades brighter — a quick professional touch-up.",
            areaServed: "Bronx, NY",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "119",
          itemOffered: {
            "@type": "Service",
            name: "Signature Whitening — 60 minutes",
            serviceType: "Professional teeth whitening",
            description:
              "Two LED cycles for photo-ready results in an hour. Up to 6–10 shades brighter — our most popular session.",
            areaServed: "Bronx, NY",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "139",
          itemOffered: {
            "@type": "Service",
            name: "Deluxe Whitening — 90 minutes",
            serviceType: "Professional teeth whitening",
            description:
              "Three full LED cycles for the most dramatic single-visit transformation. Up to 8–14 shades brighter — recommended for first visits.",
            areaServed: "Bronx, NY",
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

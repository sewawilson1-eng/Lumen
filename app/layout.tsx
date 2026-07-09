import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const title = "Professional Teeth Whitening in the Bronx (10451) | Lumen";
const description =
  "Private, luxury teeth whitening studio in the South Bronx near Yankee Stadium (10451). Enamel-safe LED whitening — up to 14 shades brighter in one visit, from $99. Book online today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s · Lumen",
  },
  description,
  applicationName: "Lumen",
  keywords: [
    "teeth whitening near me",
    "professional teeth whitening near me",
    "teeth whitening 10451",
    "best teeth whitening Bronx",
    "cosmetic teeth whitening",
    "affordable teeth whitening NYC",
    "in-person teeth whitening",
    "teeth whitening in the Bronx",
    "teeth whitening near Yankee Stadium",
    "teeth whitening near me today",
    "LED teeth whitening",
    "South Bronx teeth whitening studio",
    "Lumen teeth whitening",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Lumen",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Health & Beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

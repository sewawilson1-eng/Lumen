import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Teeth Whitening, Tooth Gems & Grillz in the South Bronx | Lumen";
const description =
  "Professional LED teeth whitening, tooth gems, and grillz (coming soon) at a private South Bronx studio. Up to 14 shades brighter in one visit — by appointment. Serving the Bronx & NYC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s · Lumen",
  },
  description,
  applicationName: "Lumen",
  keywords: [
    "teeth whitening Bronx",
    "teeth whitening near me",
    "teeth whitening NYC",
    "South Bronx teeth whitening",
    "LED teeth whitening Bronx",
    "cosmetic teeth whitening NYC",
    "tooth gems Bronx",
    "tooth gems near me",
    "tooth gems NYC",
    "birthstone tooth gems",
    "grillz Bronx",
    "grillz near me",
    "custom grillz NYC",
    "Lumen smile",
    "smile studio Bronx",
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
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

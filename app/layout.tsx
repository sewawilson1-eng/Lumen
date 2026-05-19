import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumensmile.com"),
  title: {
    default: "Lumen — Professional teeth whitening in NYC",
    template: "%s · Lumen",
  },
  description:
    "Professional, enamel-safe teeth whitening in a private South Bronx studio. Up to fourteen shades brighter in one visit. By appointment only.",
  keywords: [
    "teeth whitening NYC",
    "Bronx teeth whitening",
    "cosmetic teeth whitening",
    "professional whitening",
    "LED whitening",
    "Lumen smile",
  ],
  openGraph: {
    title: "Lumen — Professional teeth whitening in NYC",
    description:
      "Up to fourteen shades brighter in one visit. A private, sanitary studio in the South Bronx. By appointment only.",
    url: "https://lumensmile.com",
    siteName: "Lumen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "A brighter smile from Lumen, a NYC teeth whitening studio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen — Professional teeth whitening in NYC",
    description:
      "Up to fourteen shades brighter in one visit. By appointment in the South Bronx.",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}

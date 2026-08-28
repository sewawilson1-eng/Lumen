import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { footerColumns } from "@/content/footer";
import { site } from "@/content/site";
import { images } from "@/content/images";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socialLinks = [
  { name: "Instagram", href: site.instagram, Icon: Instagram },
  { name: "Facebook", href: site.facebook, Icon: Facebook },
  { name: "TikTok", href: site.tiktok, Icon: TikTokIcon },
  { name: "Google Maps", href: site.googleMapsUrl, Icon: MapPin },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span aria-hidden className="relative inline-flex h-8 w-8 items-center justify-center">
                <Image
                  src={images.logo}
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-lg font-semibold tracking-tight">{site.brand}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Professional, enamel-safe cosmetic teeth whitening in a private, spa-style
              studio in the South Bronx.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-dark" strokeWidth={1.75} />
                {site.location.area}
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 text-primary-dark" strokeWidth={1.75} />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-xs leading-relaxed text-muted">
            {site.brand} is a cosmetic teeth whitening studio. It is not a dental office and
            does not provide dental treatment, diagnosis, or medical advice. Clients with
            existing dental conditions should consult a licensed dentist before booking.
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Follow Lumen
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-primary-dark/40 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {name}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-primary-dark/40 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email us
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {site.brand}. All rights reserved. Results may
            vary by client.
          </p>
          <p className="text-sm text-muted">
            Professional teeth whitening · South Bronx, NY 10451
          </p>
        </div>
      </Container>
    </footer>
  );
}

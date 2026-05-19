import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { footerColumns } from "@/content/footer";
import { site } from "@/content/site";
import { images } from "@/content/images";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
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
              <li>
                <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 text-primary-dark" strokeWidth={1.75} />
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
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

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {site.brand}. All rights reserved. Results may
            vary by client.
          </p>
          <div className="flex items-center gap-4 text-muted">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

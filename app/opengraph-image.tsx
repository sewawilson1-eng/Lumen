import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Lumen — Professional teeth whitening in NYC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuf = await readFile(path.join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          position: "relative",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        {/* Cyan radial glow — the lamp light */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            background:
              "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.55) 0%, rgba(34, 211, 238, 0.2) 35%, rgba(2, 6, 23, 0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Cyan horizontal beam line */}
        <div
          style={{
            position: "absolute",
            top: 230,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 2,
            background:
              "linear-gradient(to right, transparent, #22d3ee 50%, transparent)",
            opacity: 0.9,
          }}
        />

        {/* Subtle border-radius vignette around edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0) 30%)",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={300}
          height={300}
          alt=""
          style={{ marginTop: 40, zIndex: 10 }}
        />

        {/* Wordmark — Lumen */}
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: -4,
            background:
              "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginTop: 16,
            zIndex: 10,
          }}
        >
          Lumen
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 400,
            color: "#94a3b8",
            marginTop: 24,
            zIndex: 10,
          }}
        >
          Professional teeth whitening · South Bronx, NYC
        </div>
      </div>
    ),
    { ...size }
  );
}

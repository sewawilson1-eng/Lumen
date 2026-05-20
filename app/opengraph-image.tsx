import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Lumen — Professional teeth whitening in NYC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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

        {/* Cyan eyebrow chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            borderRadius: 9999,
            border: "1px solid rgba(34, 211, 238, 0.35)",
            background: "rgba(34, 211, 238, 0.1)",
            color: "#67e8f9",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 1,
            marginTop: 80,
            marginBottom: 40,
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              background: "#22d3ee",
              boxShadow: "0 0 12px #22d3ee",
            }}
          />
          LED-ACTIVATED WHITENING
        </div>

        {/* Wordmark — Lumen */}
        <div
          style={{
            display: "flex",
            fontSize: 180,
            fontWeight: 700,
            letterSpacing: -6,
            background:
              "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            zIndex: 10,
          }}
        >
          Lumen
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 500,
            color: "#cbd5e1",
            marginTop: 32,
            letterSpacing: -0.5,
            zIndex: 10,
          }}
        >
          Professional teeth whitening
        </div>

        {/* Location strip */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 400,
            color: "#64748b",
            marginTop: 16,
            zIndex: 10,
          }}
        >
          South Bronx, NYC · Up to 14 shades brighter in one visit
        </div>
      </div>
    ),
    { ...size }
  );
}

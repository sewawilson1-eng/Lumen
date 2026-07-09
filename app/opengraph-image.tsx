import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Lumen — Professional teeth whitening in the Bronx";
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
          background: "#fdfbf7",
          position: "relative",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Soft champagne glow */}
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 860,
            height: 480,
            background:
              "radial-gradient(ellipse at center, rgba(176, 141, 87, 0.22) 0%, rgba(176, 141, 87, 0.08) 45%, rgba(253, 251, 247, 0) 75%)",
            display: "flex",
          }}
        />

        {/* Gold hairline */}
        <div
          style={{
            width: 220,
            height: 2,
            background:
              "linear-gradient(to right, rgba(176,141,87,0), #b08d57 50%, rgba(176,141,87,0))",
            marginBottom: 36,
            display: "flex",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={210} height={205} alt="" style={{ display: "flex" }} />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 600,
            letterSpacing: -2,
            color: "#211d19",
            lineHeight: 1,
            marginTop: 22,
          }}
        >
          Lumen
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#8a6c3f",
            marginTop: 22,
            fontStyle: "italic",
          }}
        >
          Professional Teeth Whitening
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#6b6259",
            marginTop: 14,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          South Bronx, NYC · Near Yankee Stadium · Up to 14 shades brighter in one visit
        </div>
      </div>
    ),
    { ...size }
  );
}

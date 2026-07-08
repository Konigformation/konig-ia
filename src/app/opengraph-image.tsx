import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public", "logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0b0b13",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            borderRadius: "50%",
            background: "#4f57e3",
            opacity: 0.35,
            filter: "blur(120px)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={340} height={137} alt="Konig IA" />
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 36,
            fontWeight: 600,
            color: "#fff",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Bâtissez votre machine à clients grâce à l&apos;IA
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 26,
            color: "#a1a1aa",
            maxWidth: 880,
            textAlign: "center",
          }}
        >
          Contenu, prospection et conversions automatisés en 48 heures ·
          Certifié Qualiopi · Audit IA offert
        </div>
      </div>
    ),
    { ...size }
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Nos illustrations de blog sont des SVG first-party de confiance.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

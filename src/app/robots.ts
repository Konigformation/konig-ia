import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Robots des IA explicitement autorisés (déjà couverts par « * », mais listés
// pour un signal clair d'accueil des moteurs IA — GPT, Claude, Perplexity, Gemini).
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

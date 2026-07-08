// Source unique des articles publiés du blog.
// Utilisée par la page /blog (liste) et réutilisable ailleurs.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO (pour le SEO / tri)
  dateLabel: string; // affiché à l'écran
  readTime: string;
  image: string;
  imageAlt: string;
};

export const posts: Post[] = [
  {
    slug: "agents-ia-generer-clients-2026",
    title:
      "Agents IA en 2026 : générez vos premiers clients en pilote automatique",
    excerpt:
      "La tendance que les indépendants les plus rapides exploitent déjà — des agents IA qui prospectent, relancent et remplissent leur agenda, sans agence et même en partant de zéro.",
    category: "Tendance 2026",
    date: "2026-07-07",
    dateLabel: "7 juillet 2026",
    readTime: "8 min",
    image: "/blog/agents-ia-generer-clients-2026-prospection-automatisee.svg",
    imageAlt:
      "Agents IA en 2026 : des prospects captés automatiquement passent dans un tunnel de prospection piloté par l'IA, puis remplissent un agenda de rendez-vous clients en pilote automatique — illustration Konig IA.",
  },
  {
    slug: "ia-agentique-2026",
    title: "IA agentique : 2026, l'année où l'IA passe de la parole à l'action",
    excerpt:
      "Les agents autonomes qui exécutent des tâches entières (au lieu de simplement répondre) déferlent en 2026. Ce qui vient de sortir, ce que ça change pour les indépendants, et les limites à connaître.",
    category: "Actualité IA",
    date: "2026-07-07",
    dateLabel: "7 juillet 2026",
    readTime: "6 min",
    image: "/blog/ia-agentique-2026-agents-autonomes.svg",
    imageAlt:
      "IA agentique en 2026 : des bulles de conversation se transforment en actions automatisées, exécutées par un agent IA autonome au centre d'un réseau — illustration Konig IA.",
  },
];

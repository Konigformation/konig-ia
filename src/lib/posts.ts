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
    slug: "generer-clients-ia-guide-complet-2026",
    title: "Générer des clients avec l'IA : le guide complet (2026)",
    excerpt:
      "Contenu, prospection, conversion : comment relier ces trois briques en un seul système d'acquisition. Méthode en 5 étapes, budgets réels et erreurs à éviter.",
    category: "Guide",
    date: "2026-07-20",
    dateLabel: "20 juillet 2026",
    readTime: "10 min",
    image: "/blog/generer-clients-ia-guide-complet-2026.svg",
    imageAlt:
      "Générer des clients avec l'IA : un système relie contenu, prospection et conversion pour produire un flux de clients régulier — illustration Konig IA.",
  },
  {
    slug: "prospection-automatisee-guide-complet-2026",
    title: "Prospection automatisée : le guide complet (2026)",
    excerpt:
      "Définition, méthode en 5 étapes, budgets réels et erreurs à éviter — dont le cadre légal que l'automatisation ne dispense pas de respecter.",
    category: "Guide",
    date: "2026-07-20",
    dateLabel: "20 juillet 2026",
    readTime: "10 min",
    image: "/blog/prospection-automatisee-guide-complet-2026.svg",
    imageAlt:
      "Prospection automatisée : des prospects bruts entrent dans une séquence de messages et de relances automatisées, et ressortent en rendez-vous qualifiés dans un agenda — illustration Konig IA.",
  },
  {
    slug: "formation-ia-guide-complet-2026",
    title: "Formation IA : le guide complet (2026)",
    excerpt:
      "Définition, méthode en 5 étapes, fourchettes de prix et erreurs à éviter — tout ce qu'il faut savoir avant de choisir une formation IA quand on cherche des clients.",
    category: "Guide",
    date: "2026-07-20",
    dateLabel: "20 juillet 2026",
    readTime: "9 min",
    image: "/blog/formation-ia-guide-complet-2026.svg",
    imageAlt:
      "Formation IA, le guide complet 2026 : un parcours en cinq étapes — diagnostic, fondations, contenu, prospection — menant à une machine à clients automatisée — illustration Konig IA.",
  },
  {
    slug: "comment-choisir-formation-ia",
    title:
      "Formation IA : comment bien la choisir quand on est indépendant ou dirigeant ?",
    excerpt:
      "Toutes les formations IA ne se valent pas. Cinq critères concrets pour distinguer un accompagnement qui vous rend autonome d'un catalogue de vidéos que vous ne finirez jamais.",
    category: "Guide",
    date: "2026-07-18",
    dateLabel: "18 juillet 2026",
    readTime: "7 min",
    image: "/blog/comment-choisir-formation-ia.svg",
    imageAlt:
      "Comment choisir sa formation IA : une liste de critères cochés (Qualiopi, finançable, pratique, autonomie) menant au monogramme Konig IA — illustration Konig IA.",
  },
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

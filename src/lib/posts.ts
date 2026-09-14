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
    slug: "arrete-de-baisser-tes-prix",
    title:
      "Arrête de baisser tes prix pour signer : c'est un piège mathématique (la preuve)",
    excerpt:
      "Baisser tes prix pour décrocher des clients détruit ta marge bien plus vite que tu ne crois. Les chiffres 2026, et ce qui marche vraiment à la place.",
    category: "Contre-tendance",
    date: "2026-09-16",
    dateLabel: "16 septembre 2026",
    readTime: "9 min",
    image: "/blog/arrete-de-baisser-tes-prix.svg",
    imageAlt:
      "Arrête de baisser tes prix : une étiquette de prix bradée et barrée face à une offre à sa vraie valeur — illustration Konig IA.",
  },
  {
    slug: "agents-ia-securite-automatiser-sans-risque",
    title:
      "Des hackers ont détourné des centaines d'agents IA : 3 règles pour automatiser ton acquisition sans te faire pirater",
    excerpt:
      "Une attaque de la semaine a utilisé des agents IA pour compromettre 440 systèmes. Ce que ça t'apprend, et 3 règles pour automatiser sans risque.",
    category: "Actualité IA",
    date: "2026-09-16",
    dateLabel: "16 septembre 2026",
    readTime: "6 min",
    image: "/blog/agents-ia-securite-automatiser-sans-risque.svg",
    imageAlt:
      "Sécuriser ses agents IA : un flux d'automatisation protégé par un bouclier face à une menace — illustration Konig IA.",
  },
  {
    slug: "hack-analyser-appels-vente-ia",
    title:
      "Le hack pour transformer tes appels de vente en script qui close (avec l'IA)",
    excerpt:
      "Tes appels de vente sont une mine d'or. Comment les analyser avec l'IA pour bâtir une banque d'objections et un script qui close. Pas à pas, prompts inclus.",
    category: "Hack",
    date: "2026-09-15",
    dateLabel: "15 septembre 2026",
    readTime: "7 min",
    image: "/blog/hack-analyser-appels-vente-ia.svg",
    imageAlt:
      "Analyser ses appels de vente avec l'IA : un appel transcrit devient un script de closing et une banque d'objections — illustration Konig IA.",
  },
  {
    slug: "systeme-fidelisation-upsell-valeur-client",
    title:
      "Le système pour doubler la valeur de chaque client : fidélisation et upsell automatisés",
    excerpt:
      "Acquérir coûte 5 à 25× plus que fidéliser. Le système en 4 étapes pour fidéliser et faire de l'upsell en automatique, et doubler la valeur de chaque client.",
    category: "Système",
    date: "2026-09-14",
    dateLabel: "14 septembre 2026",
    readTime: "8 min",
    image: "/blog/systeme-fidelisation-upsell-valeur-client.svg",
    imageAlt:
      "Le système de fidélisation et d'upsell : un même client dont la valeur augmente dans le temps grâce aux relances automatisées — illustration Konig IA.",
  },
  {
    slug: "pas-besoin-grosse-audience",
    title:
      "Tu n'as pas besoin d'une grosse audience pour vivre de ton activité — et voici la preuve",
    excerpt:
      "Une petite audience engagée bat 50 000 abonnés passifs. Les données 2026 le prouvent, et voici ce qui compte vraiment pour signer des clients.",
    category: "Contre-tendance",
    date: "2026-09-09",
    dateLabel: "9 septembre 2026",
    readTime: "9 min",
    image: "/blog/pas-besoin-grosse-audience.svg",
    imageAlt:
      "Tu n'as pas besoin d'une grosse audience : une audience massive mais passive face à une petite audience engagée qui achète — illustration Konig IA.",
  },
  {
    slug: "nouvelle-generation-ia-septembre-2026",
    title:
      "GPT-6, Claude Fable 5.1 : une nouvelle vague de modèles IA vient de sortir — comment en profiter sans perdre ton temps",
    excerpt:
      "Début septembre 2026, une salve de nouveaux modèles (GPT-6, Claude Fable 5.1…) est sortie. Ce qui change vraiment pour ton acquisition, et quoi faire.",
    category: "Actualité IA",
    date: "2026-09-09",
    dateLabel: "9 septembre 2026",
    readTime: "6 min",
    image: "/blog/nouvelle-generation-ia-septembre-2026.svg",
    imageAlt:
      "Une nouvelle génération de modèles IA arrive en septembre 2026 : plusieurs modèles récents, et un système qui les met au travail — illustration Konig IA.",
  },
  {
    slug: "hack-whatsapp-closer-prospects",
    title:
      "Le hack WhatsApp pour closer tes prospects (95 %+ d'ouverture) — sans passer pour un spammeur",
    excerpt:
      "WhatsApp affiche 95 %+ d'ouverture contre 20 % pour l'email. Comment l'utiliser pour closer tes prospects engagés, avec la méthode et le cadre légal.",
    category: "Hack",
    date: "2026-09-08",
    dateLabel: "8 septembre 2026",
    readTime: "7 min",
    image: "/blog/hack-whatsapp-closer-prospects.svg",
    imageAlt:
      "Le hack WhatsApp pour closer ses prospects : une conversation avec 95 pour cent d'ouverture et une réponse rapide — illustration Konig IA.",
  },
  {
    slug: "systeme-recommandation-client-automatise",
    title:
      "Le système pour transformer chaque client en 2 nouveaux : la recommandation automatisée",
    excerpt:
      "84 % des acheteurs B2B démarrent par une recommandation. Le système en 4 étapes pour transformer tes clients satisfaits en machine à recommandations.",
    category: "Système",
    date: "2026-09-07",
    dateLabel: "7 septembre 2026",
    readTime: "8 min",
    image: "/blog/systeme-recommandation-client-automatise.svg",
    imageAlt:
      "Le système de recommandation client automatisé : un client satisfait en amène deux, puis quatre, en chaîne — illustration Konig IA.",
  },
  {
    slug: "chatgpt-ne-suffit-pas-pour-ton-contenu",
    title:
      "Non, ChatGPT ne suffit pas pour ton contenu — et voici la preuve que le contenu IA brut ne convertit plus",
    excerpt:
      "Pièce maîtresse du mois. Tout le monde croit que ChatGPT a réglé le contenu. Les données 2026 disent l'inverse : analyse fouillée de la croyance, et ce qui marche vraiment.",
    category: "Contre-tendance",
    date: "2026-09-02",
    dateLabel: "2 septembre 2026",
    readTime: "12 min",
    image: "/blog/chatgpt-ne-suffit-pas-pour-ton-contenu.svg",
    imageAlt:
      "ChatGPT ne suffit pas pour ton contenu : une masse de posts identiques et fades face à un contenu distinctif qui se démarque — illustration Konig IA.",
  },
  {
    slug: "claude-in-chrome-deleguer-prospection",
    title:
      "Claude s'installe dans ton Chrome : 3 tâches de prospection à lui déléguer dès aujourd'hui",
    excerpt:
      "Claude in Chrome est désormais dispo sur tous les plans payants. Ce que ça change et 3 tâches d'acquisition à déléguer à l'IA dans ton navigateur.",
    category: "Actualité IA",
    date: "2026-09-02",
    dateLabel: "2 septembre 2026",
    readTime: "6 min",
    image: "/blog/claude-in-chrome-deleguer-prospection.svg",
    imageAlt:
      "Claude in Chrome : un assistant IA dans le navigateur exécute des tâches de prospection — illustration Konig IA.",
  },
  {
    slug: "hack-1-temoignage-10-preuves-ia",
    title:
      "Le hack pour transformer 1 témoignage client en 10 preuves qui vendent (avec l'IA)",
    excerpt:
      "92 % des acheteurs B2B lisent un avis avant d'acheter. Comment transformer un seul témoignage en 10 preuves qui convertissent, avec l'IA. Pas à pas.",
    category: "Hack",
    date: "2026-09-01",
    dateLabel: "1er septembre 2026",
    readTime: "7 min",
    image: "/blog/hack-1-temoignage-10-preuves-ia.svg",
    imageAlt:
      "Transformer un témoignage client en dix preuves qui vendent avec l'IA : une citation se décline en post, étude de cas, badge et vidéo — illustration Konig IA.",
  },
  {
    slug: "systeme-machine-a-clients-3-leviers",
    title:
      "La machine à clients complète : relier contenu, prospection et conversion en un seul système",
    excerpt:
      "La plupart des indépendants bricolent 3 leviers isolés. Voici comment les relier en une seule machine à clients qui attire, contacte et convertit.",
    category: "Système",
    date: "2026-08-31",
    dateLabel: "31 août 2026",
    readTime: "9 min",
    image: "/blog/systeme-machine-a-clients-3-leviers.svg",
    imageAlt:
      "La machine à clients complète : contenu, prospection et conversion reliés en un seul système qui produit des clients — illustration Konig IA.",
  },
  {
    slug: "plus-de-leads-nest-pas-mieux",
    title:
      "« Plus de leads = mieux » ? Non — courir après le volume est en train de tuer ton acquisition",
    excerpt:
      "85 % des leads ne convertissent jamais. Pourquoi la course au volume te ruine en temps et en argent, et ce qui marche vraiment à la place.",
    category: "Contre-tendance",
    date: "2026-08-21",
    dateLabel: "21 août 2026",
    readTime: "9 min",
    image: "/blog/plus-de-leads-nest-pas-mieux.svg",
    imageAlt:
      "Plus de leads n'est pas mieux : une masse de leads barrés face à quelques leads qualifiés en or — illustration Konig IA.",
  },
  {
    slug: "claude-computer-use-skills-automatiser-acquisition",
    title:
      "Claude peut maintenant piloter ton navigateur : comment l'utiliser pour automatiser ton acquisition",
    excerpt:
      "Anthropic a rendu le « computer use », la Skills API et la Files API accessibles à tous. Ce que ça change, et 3 façons d'en faire un levier de clients.",
    category: "Actualité IA",
    date: "2026-08-21",
    dateLabel: "21 août 2026",
    readTime: "6 min",
    image: "/blog/claude-computer-use-skills-automatiser-acquisition.svg",
    imageAlt:
      "Claude computer use : un agent IA qui pilote un navigateur et des fichiers pour automatiser l'acquisition — illustration Konig IA.",
  },
  {
    slug: "hack-lead-magnet-1h-ia",
    title:
      "Le hack pour créer un lead magnet qui convertit en 1 heure avec l'IA",
    excerpt:
      "Crée un lead magnet qui capture des emails en 1 heure avec l'IA. Pourquoi une checklist (24-42 %) écrase un ebook (4-8 %), et la méthode pas à pas.",
    category: "Hack",
    date: "2026-08-20",
    dateLabel: "20 août 2026",
    readTime: "7 min",
    image: "/blog/hack-lead-magnet-1h-ia.svg",
    imageAlt:
      "Créer un lead magnet qui convertit en 1 heure avec l'IA : un aimant attire des emails de prospects — illustration Konig IA.",
  },
  {
    slug: "systeme-contenu-ia-attirer-clients",
    title:
      "Le système de contenu IA qui attire des clients en pilote automatique (de A à Z)",
    excerpt:
      "Transforme une seule idée en un mois de contenu qui attire des clients. Le moteur de contenu IA en 3 étapes : extraction, production, distribution.",
    category: "Système",
    date: "2026-08-19",
    dateLabel: "19 août 2026",
    readTime: "8 min",
    image: "/blog/systeme-contenu-ia-attirer-clients.svg",
    imageAlt:
      "Le système de contenu IA qui attire des clients : une idée source se décline en plusieurs formats de contenu distribués — illustration Konig IA.",
  },
  {
    slug: "ia-ne-remplacera-pas-tes-commerciaux",
    title:
      "Non, l'IA ne remplacera pas tes commerciaux — et croire le contraire tue ton acquisition",
    excerpt:
      "Les « AI SDR » promettent des clients en pilote automatique. Les données 2026 prouvent l'inverse : le robot qui spamme fait chuter tes réponses. Ce qui marche vraiment à la place.",
    category: "Contre-tendance",
    date: "2026-08-14",
    dateLabel: "14 août 2026",
    readTime: "9 min",
    image: "/blog/ia-ne-remplacera-pas-tes-commerciaux.svg",
    imageAlt:
      "L'IA ne remplacera pas tes commerciaux : un robot qui envoie en masse fait chuter les taux de réponse, face à un système pensé qui gagne — illustration Konig IA.",
  },
  {
    slug: "chatgpt-ads-nouveau-canal-acquisition",
    title:
      "ChatGPT lance ses pubs (100 M$ en 6 semaines) : comment en profiter pour ramener des clients",
    excerpt:
      "OpenAI a ouvert son Ads Manager en 2026. Ce que ChatGPT Ads change pour ton acquisition, et 3 actions concrètes à lancer dès aujourd'hui.",
    category: "Actualité IA",
    date: "2026-08-14",
    dateLabel: "14 août 2026",
    readTime: "6 min",
    image: "/blog/chatgpt-ads-nouveau-canal-acquisition.svg",
    imageAlt:
      "ChatGPT Ads, un nouveau canal d'acquisition : une réponse d'IA avec un encart sponsorisé et une courbe de revenus en hausse — illustration Konig IA.",
  },
  {
    slug: "hack-reactiver-prospects-dormants-ia",
    title:
      "Le hack pour signer sans prospecter à froid : réveille ta base dormante avec l'IA",
    excerpt:
      "Réactive tes prospects dormants avec l'IA : 15-30 % de conversion, 5-7× moins cher que l'acquisition à froid. Tuto pas à pas, prompts inclus.",
    category: "Hack",
    date: "2026-08-13",
    dateLabel: "13 août 2026",
    readTime: "7 min",
    image: "/blog/hack-reactiver-prospects-dormants-ia.svg",
    imageAlt:
      "Réactiver ses prospects dormants avec l'IA : des contacts endormis se réveillent et deviennent des rendez-vous — illustration Konig IA.",
  },
  {
    slug: "systeme-tunnel-vente-automatise-3-etapes",
    title:
      "Le système en 3 étapes pour un tunnel de vente automatisé (et arrêter le tunnel qui fuit)",
    excerpt:
      "79 % des leads ne convertissent jamais. Le système en 3 étapes pour un tunnel de vente automatisé qui capte, relance et convertit à ta place.",
    category: "Système",
    date: "2026-08-12",
    dateLabel: "12 août 2026",
    readTime: "8 min",
    image: "/blog/systeme-tunnel-vente-automatise-3-etapes.svg",
    imageAlt:
      "Le système en 3 étapes pour un tunnel de vente automatisé : des leads entrent, les fuites sont colmatées, des clients ressortent — illustration Konig IA.",
  },
  {
    slug: "arreter-poster-tous-les-jours-linkedin",
    title:
      "Arrête de poster tous les jours sur LinkedIn : ça tue ton acquisition (la preuve chiffrée)",
    excerpt:
      "Pièce maîtresse du mois. « Poste tous les jours » est le mauvais objectif : ce que disent vraiment les données LinkedIn 2026, la psychologie du mythe, et ce qui ramène des clients à la place.",
    category: "Contre-tendance",
    date: "2026-08-04",
    dateLabel: "4 août 2026",
    readTime: "11 min",
    image: "/blog/arreter-poster-tous-les-jours-linkedin.svg",
    imageAlt:
      "Arrête de poster tous les jours sur LinkedIn : un calendrier saturé de posts quotidiens face à un seul post de qualité qui capte l'attention — illustration Konig IA.",
  },
  {
    slug: "claude-opus-5-plus-de-clients",
    title:
      "Claude Opus 5 vient de sortir : voici comment l'utiliser pour ramener plus de clients",
    excerpt:
      "Anthropic a sorti Claude Opus 5 le 24 juillet 2026. Trois usages concrets pour transformer cette mise à jour en clients, sans agence et même en partant de zéro.",
    category: "Actualité IA",
    date: "2026-08-04",
    dateLabel: "4 août 2026",
    readTime: "6 min",
    image: "/blog/claude-opus-5-plus-de-clients.svg",
    imageAlt:
      "Claude Opus 5 : la mise à jour d'Anthropic transformée en machine à clients — illustration Konig IA.",
  },
  {
    slug: "hack-listes-prospects-qualifies-claude",
    title:
      "Le hack ultime pour sortir des listes de prospects qualifiés avec Claude (en 15 min)",
    excerpt:
      "La méthode « signal-based » pour sortir des listes de prospects qualifiés avec Claude et passer de 2 % à 15 % de réponses. Tuto pas à pas, prompts inclus.",
    category: "Hack",
    date: "2026-08-04",
    dateLabel: "4 août 2026",
    readTime: "7 min",
    image: "/blog/hack-listes-prospects-qualifies-claude.svg",
    imageAlt:
      "Le hack pour sortir des listes de prospects qualifiés avec Claude : une liste brute filtrée par signal ressort en prospects prioritaires — illustration Konig IA.",
  },
  {
    slug: "systeme-prospection-multicanale-automatisee",
    title:
      "Le système en 3 étapes pour automatiser ta prospection multicanale de A à Z",
    excerpt:
      "Le plan complet pour automatiser ta prospection multicanale LinkedIn + email et générer +40 % d'engagement. Séquence, cadence jour par jour et automatisation.",
    category: "Système",
    date: "2026-08-03",
    dateLabel: "3 août 2026",
    readTime: "8 min",
    image: "/blog/systeme-prospection-multicanale-automatisee.svg",
    imageAlt:
      "Le système en 3 étapes pour automatiser la prospection multicanale : LinkedIn et email convergent vers un agenda de rendez-vous — illustration Konig IA.",
  },
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

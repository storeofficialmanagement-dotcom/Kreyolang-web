// ═══════════════════════════════════════════════════════
//  DONNÉES CULTURE — Basées sur l'app Kreyolang
// ═══════════════════════════════════════════════════════

export const proverbs = [
  {
    creole: "Sé grenn diri ki ka fè sak diri.",
    french: "Ce sont les grains de riz qui font le sac de riz.",
    explanation: "Les petits efforts s'accumulent pour produire de grands résultats.",
    category: 'sagesse',
  },
  {
    creole: "Bouche en mwen plen, mé i ka palé.",
    french: "Ma bouche est pleine, mais elle parle.",
    explanation: "Même dans la difficulté, on trouve toujours le moyen de s'exprimer.",
    category: 'humour',
  },
  {
    creole: "Ravèt pa janmen ni rézon douvan poul.",
    french: "Le cafard n'a jamais raison devant la poule.",
    explanation: "Le faible a rarement gain de cause face au puissant.",
    category: 'sagesse',
  },
  {
    creole: "Dèyè mòn, gen mòn.",
    french: "Derrière les montagnes, il y a des montagnes.",
    explanation: "Il y a toujours un nouveau défi après chaque victoire.",
    category: 'nature',
  },
];

export const history = [
  {
    title: 'Les Kalinagos',
    creoleTitle: 'Sé Kalinago',
    period: 'Avant 1493',
    icon: '🏝️',
    summary: "Premiers habitants des îles, les Kalinagos vivaient de pêche et d'agriculture. Leur langue et leur culture ont profondément marqué le créole.",
    keyFigures: ['Caonabo', 'Anacaona'],
  },
  {
    title: 'Colonisation française',
    creoleTitle: 'Kolonizasyon',
    period: '1635 – 1794',
    icon: '⚓',
    summary: "L'arrivée des colons français et la traite négrière. Le créole naît du contact entre langues africaines, français et caraïbe.",
    keyFigures: ["Pierre Belain d'Esnambuc"],
  },
  {
    title: "L'Abolition",
    creoleTitle: 'Abolisyon',
    period: '1848',
    icon: '✊',
    summary: "Victor Schœlcher fait adopter le décret d'abolition de l'esclavage le 27 avril 1848. Une date fondatrice pour les Antilles.",
    keyFigures: ['Victor Schœlcher', 'Cyrille Bissette'],
  },
  {
    title: 'Départementalisation',
    creoleTitle: 'Départémantalizasyon',
    period: "1946 – aujourd'hui",
    icon: '🏛️',
    summary: "La Martinique, la Guadeloupe, la Guyane et la Réunion deviennent des départements français. Le créole s'affirme comme langue à part entière.",
    keyFigures: ['Aimé Césaire'],
  },
];

export const music = [
  {
    era: 'Héritage Rural',
    period: 'XVIIIe – XIXe siècle',
    colors: ['#84fab0', '#8fd3f4'],
    genres: [
      { name: 'Bèlè', icon: '🥁', desc: 'Rythme ancestral au tambour, hérité des esclaves.' },
      { name: 'Chouval Bwa', icon: '🎠', desc: 'Musique de manège traditionnel, festive et entraînante.' },
      { name: 'Ladja', icon: '🤼', desc: 'Art martial dansé accompagné de tambours.' },
    ],
  },
  {
    era: 'Évolution Urbaine',
    period: '1870 – 1950',
    colors: ['#a18cd1', '#fbc2eb'],
    genres: [
      { name: 'Biguine', icon: '🎷', desc: 'Fusion créole et jazz, née à Saint-Pierre.' },
      { name: 'Mazurka Créole', icon: '🎻', desc: 'Adaptation caribéenne de la danse européenne.' },
    ],
  },
  {
    era: 'Renouveau Moderne',
    period: "1970 – aujourd'hui",
    colors: ['#f093fb', '#f5576c'],
    genres: [
      { name: 'Zouk', icon: '🎶', desc: "Phénomène mondial porté par Kassav'." },
      { name: 'Ragga', icon: '🎤', desc: 'Influence jamaïcaine en créole.' },
      { name: 'Dancehall', icon: '🕺', desc: 'Énergie urbaine des Antilles.' },
      { name: 'Bouyon', icon: '🎹', desc: 'Fusion caribéenne moderne de la Dominique.' },
    ],
  },
];

export const cuisine = [
  {
    name: 'Colombo de Poulet',
    creoleName: 'Kolonbo Poul',
    emoji: '🍛',
    tags: ['traditionnel', 'épicé', 'fête'],
    origin: "Héritage des travailleurs indiens arrivés après 1848. Le colombo est devenu le plat emblématique des Antilles.",
  },
  {
    name: 'Accras de Morue',
    creoleName: 'Akra Mori',
    emoji: '🐟',
    tags: ['apéritif', 'croustillant', 'incontournable'],
    origin: "Beignets de morue hérités de la cuisine africaine, devenus l'apéritif créole par excellence.",
  },
  {
    name: 'Ti-Punch',
    creoleName: 'Ti-Ponch',
    emoji: '🍹',
    tags: ['boisson', 'rhum', 'tradition'],
    origin: "Rhum, citron vert, sucre de canne : le cocktail identitaire des Antilles, servi à toute heure.",
  },
  {
    name: 'Boudin Créole',
    creoleName: 'Boudin Kréyol',
    emoji: '🍖',
    tags: ['Noël', 'épicé', 'festif'],
    origin: "Boudin noir épicé au piment et aux herbes, star incontestée des tables de Noël antillaises.",
  },
];

export const legends = [
  {
    name: 'Manman Dlo',
    icon: '🧜‍♀️',
    colors: ['#667eea', '#764ba2'],
    desc: "Sirène des rivières au peigne d'or, elle ensorcelle ceux qui l'aperçoivent au clair de lune.",
  },
  {
    name: 'Lajablès',
    icon: '🌺',
    colors: ['#f093fb', '#f5576c'],
    desc: "Belle femme au pied fourchu qui séduit les hommes le soir dans les sentiers de campagne.",
  },
  {
    name: 'Konpè Lapen',
    icon: '🐰',
    colors: ['#84fab0', '#8fd3f4'],
    desc: "Le rusé compère Lapin, personnage central des contes créoles, toujours plus malin que les autres.",
  },
  {
    name: 'Dorlis',
    icon: '🌙',
    colors: ['#2d3561', '#a855f7'],
    desc: "Être nocturne qui s'introduit chez les dormeurs. On place des ciseaux ouverts sous l'oreiller pour s'en protéger.",
  },
  {
    name: 'Soukougnan',
    icon: '🔥',
    colors: ['#f5576c', '#ff6a00'],
    desc: "Sorcier qui quitte sa peau la nuit pour voler sous forme de boule de feu au-dessus des toits.",
  },
];

export const exerciseTypes = [
  { name: 'Quiz classique', icon: '❓', desc: 'Choix multiples de traduction' },
  { name: "Choix d'image", icon: '🖼️', desc: 'Associer mot et image' },
  { name: 'Texte à trous', icon: '✍️', desc: 'Compléter une phrase' },
  { name: 'Banque de mots', icon: '🧩', desc: 'Construire une phrase mot par mot' },
  { name: 'Écriture libre', icon: '⌨️', desc: 'Taper la traduction au clavier' },
  { name: 'Dictée', icon: '🎧', desc: 'Écouter et écrire' },
  { name: 'Prononciation', icon: '🎙️', desc: 'Parler et être évalué' },
  { name: 'Anagramme', icon: '🔤', desc: 'Remettre les lettres en ordre' },
  { name: 'Bubble Pop', icon: '🟣', desc: 'Éclater les bonnes bulles' },
  { name: 'Match Madness', icon: '⚡', desc: 'Associer les paires rapidement' },
  { name: 'Swipe Match', icon: '👈', desc: 'Swiper pour matcher mot et sens' },
  { name: 'Word Rain', icon: '🌧️', desc: 'Attraper les mots qui tombent' },
];

export const pirateRanks = [
  { rank: 1, title: "L'Engagé",          boat: 'Radeau de Survie',    emoji: '🚣', desc: "Tu viens de signer ton contrat d'aventurier." },
  { rank: 2, title: 'Le Moussaillon',    boat: 'Barque Fragile',      emoji: '🚣', desc: 'Tes premiers pas sur le pont, tout reste à prouver.' },
  { rank: 3, title: 'Le Matelot',        boat: 'Sloop Rapide',        emoji: '⛵', desc: 'Tu connais les nœuds, les voiles et le vent.' },
  { rank: 4, title: 'Le Quartier-Maître', boat: 'Brigantin Solide',   emoji: '🚢', desc: "L'équipage te respecte, tu gères le quotidien." },
  { rank: 5, title: 'Le Capitaine',      boat: 'Frégate Légère',      emoji: '🚢', desc: 'Ton propre navire, ton propre destin.' },
  { rank: 6, title: 'Le Commodore',      boat: 'Galion de Guerre',    emoji: '⚓', desc: 'Tu commandes une escadre, la mer te craint.' },
  { rank: 7, title: 'Le Vice-Amiral',    boat: 'Navire Amiral',       emoji: '🏴‍☠️', desc: 'Légende des Sept Mers, ta réputation te précède.' },
  { rank: 8, title: "L'Amiral",          boat: 'Le Vaisseau Fantôme', emoji: '👑', desc: "Maître absolu des océans. Le créole n'a plus de secrets pour toi." },
];

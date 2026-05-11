/**
 * Post-build: génère dist/en/index.html à partir de dist/index.html
 * en remplaçant les meta tags pour la version anglaise.
 *
 * Pourquoi : Vite ne fabrique qu'un index.html. Pour avoir un VRAI
 * landing /en/ avec SEO propre (lang, title, description, canonical,
 * og:url, schema.org en anglais), on duplique l'output après build,
 * en conservant les hashes assets corrects.
 *
 * Le React app monté à /en/ reconnaît le path et active EN via
 * LanguageContext (cf. src/context/LanguageContext.jsx).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const DIST = resolve(process.cwd(), 'dist');
const SRC = resolve(DIST, 'index.html');
const OUT_DIR = resolve(DIST, 'en');
const OUT = resolve(OUT_DIR, 'index.html');

let html = readFileSync(SRC, 'utf8');

// 1. Langue du document
html = html.replace('<html lang="fr">', '<html lang="en">');

// 2. Title + meta description
html = html.replace(
  /<title>[^<]*<\/title>/,
  '<title>Kreyolang — Learn Creole and African Languages</title>',
);
html = html.replace(
  /<meta name="description" content="[^"]*" \/>/,
  '<meta name="description" content="Kreyolang is the gamified app to learn Creole and African languages. Lessons, XP, leagues, streaks. Embark on a journey of cultural reconnection." />',
);

// 3. Canonical → /en/ (les hreflang sont déjà présents dans index.html source,
//    identiques pour FR et EN, donc on ne touche pas)
html = html.replace(
  /<link rel="canonical" href="https:\/\/kreyolang\.com\/" \/>/,
  '<link rel="canonical" href="https://kreyolang.com/en/" />',
);

// 5. og:url, og:title, og:description en EN
html = html.replace(
  /<meta property="og:url" content="[^"]*" \/>/,
  '<meta property="og:url" content="https://kreyolang.com/en/" />',
);
html = html.replace(
  /<meta property="og:title" content="[^"]*" \/>/,
  '<meta property="og:title" content="Kreyolang — Learn Creole and African Languages" />',
);
html = html.replace(
  /<meta property="og:description" content="[^"]*" \/>/,
  '<meta property="og:description" content="The gamified app to learn Creole and African languages. Short lessons, XP, leagues, streaks, and a pirate theme. Coming soon to iOS and Android." />',
);

// 6. Twitter Card en EN
html = html.replace(
  /<meta name="twitter:title" content="[^"]*" \/>/,
  '<meta name="twitter:title" content="Kreyolang — Learn Creole and African Languages" />',
);
html = html.replace(
  /<meta name="twitter:description" content="[^"]*" \/>/,
  '<meta name="twitter:description" content="The gamified app to learn Creole and African languages. Short lessons, XP, leagues, streaks, and a pirate theme." />',
);

// 7. Schema.org JSON-LD : on remplace les descriptions FR par EN
html = html.replace(
  /"description": "Application mobile gamifiée pour apprendre les langues créoles[^"]*"/,
  '"description": "Gamified mobile app to learn Creole languages (Haitian, Guadeloupean, Martinican, Réunionese) and African languages. Short lessons, XP, leagues, streaks, and pirate theme."',
);
html = html.replace(
  /"description": "Application pour apprendre les langues créoles et africaines"/,
  '"description": "App to learn Creole and African languages"',
);
html = html.replace(
  /"name": "Gratuit"/,
  '"name": "Free"',
);
html = html.replace(
  /"name": "Premium"/g,
  '"name": "Premium"', // unchanged
);

// 8. inLanguage : EN first
html = html.replace(
  /"inLanguage": \["fr", "en"\]/,
  '"inLanguage": ["en", "fr"]',
);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, html);
console.log('[build-en-landing] Generated dist/en/index.html');

# EXTRACTION — kreyolang-web (2026-07-07, MISSION v3)
Faits vérifiés sur la machine. Ce fichier est la matière première du CLAUDE.md réécrit et des skills.

## 1. Identité (vérifiée)
- Site vitrine **Vite 7.3 + React 19.2 + Tailwind CSS 4.2**, routing client `react-router-dom` 7.13. **100 % JavaScript** (aucun tsconfig, aucun .ts) ; icônes lucide-react.
- Déploiement : **GitHub Pages via GitHub Actions** (`.github/workflows/deploy.yml` : push sur main → npm install → npm run build → deploy-pages). Domaine `www.kreyolang.com` (CNAME, DNS Infomaniak). PAS de Vercel, PAS de Supabase (référence textuelle uniquement dans FAQ/confidentialité).
- Remote : `github.com/storeofficialmanagement-dotcom/Kreyolang-web`, branche unique `main`, arbre propre, dernier commit 2026-06-19.

## 2. Commandes (vérifiées dans package.json)
- `npm run dev` → vite (port 5173)
- `npm run build` → `vite build && node scripts/build-en-landing.mjs` (le post-script génère `dist/en/index.html` avec les meta EN — NE PAS l'oublier si on touche au build)
- `npm run lint` → eslint .
- Pas de tests, pas de typecheck → **verify = lint + build** (seuls oracles mécaniques disponibles).

## 3. Conventions réelles (appliquées dans le code, pas toutes documentées avant)
- **Nouvelle page = triptyque obligatoire** : (1) `src/pages/X.jsx` + route dans `src/App.jsx` ; (2) HTML statique `public/<route>/index.html` (SEO — GitHub Pages renvoie 404 sur les routes profondes d'une SPA sinon) ; (3) entrée `public/sitemap.xml`. Commit des 3 ensemble.
- **i18n EN (appliqué depuis juin, jamais documenté)** : routes `/en` + pages légales statiques dans `public/en/<route>/index.html` ; `src/context/LanguageContext.jsx` pilote FR/EN par l'URL ; le post-build `build-en-landing.mjs` fabrique la landing EN.
- **Sitemap = FR uniquement + hreflang** : les URLs `/en/` ont été volontairement RETIRÉES du sitemap (commit 545d639 « suppression URLs /en/ fantômes »). Ne pas les remettre.
- Canonical : **www.kreyolang.com** (après va-et-vient www/non-www — commits 9dec9d3, 545d639).
- Emails : SEULE adresse réelle `contact@kreyolang.com` — jamais inventer privacy@/legal@.
- Images : mascotte `/mascot.webp` (jamais `mascot.png`, supprimé) ; favicon `/favicon.png`.
- Identité légale : Christopher Jeanne EI (CMJ Group), SIREN 879 333 664, SIRET …00040 (LCEN : SIREN suffit).
- Deep-links mobiles : `public/.well-known/apple-app-site-association` + `assetlinks.json` (fingerprint prod), `public/404.html` fallback SPA, `public/auth/index.html` redirection auth.

## 4. Incidents git → règles candidates (66 commits analysés)
| Incident (commits) | Cause racine | Règle candidate |
|---|---|---|
| 404 serveur sur /delete-account (398e43e, 8f5d65d) | SPA sans HTML statique sur GitHub Pages | Triptyque obligatoire (déjà règle — la garder) |
| Carrousel cassé en prod (89fe7c0) | chantier i18n déployé sans test visuel des sections | Avant push : `npm run build` local + vérif visuelle des pages touchées |
| SEO www/non-www + /en/ fantômes (9dec9d3, 545d639) | canonicals et sitemap incohérents | Canonical = www ; sitemap = FR-only + hreflang, ne jamais y remettre /en/ |
| Séries deep-links (8565421, 9135f1c, 2e3bc29) | fichiers .well-known sensibles au moindre écart | Ne toucher .well-known/* qu'avec le fingerprint/appID exact fourni par Christopher |
| 5 commits « Mise à jour du site » | messages non descriptifs | Message de commit descriptif obligatoire |
| Corrections légales successives (f265078, beb57c3, 857b2b5, 060a48b) | contenu légal ajusté après coup | Pages légales : ne modifier que sur instruction explicite, jamais d'invention |

## 5. État de session sorti du CLAUDE.md (à reloger)
- **Action CM2C** (médiateur consommation, ~48 € TTC, inscription cm2c.net) : était « à rappeler en début de session » dans CLAUDE.md → déplacé vers `docs/TODO.md` (statut à confirmer par Christopher — question groupée).
- Google Search Console : propriétés validées, sitemap soumis, procédure d'indexation rapide → info de référence, pas une règle → `docs/TODO.md`/référence.
- Table « Pages existantes » : obsolète (routes /en absentes) → remplacée par la convention (le code fait foi : `src/App.jsx` + `public/`).

## 6. Questions (groupées pour le rapport final)
1. CM2C : inscription faite ou toujours en attente ?
2. README.md = boilerplate Vite non personnalisé — le réécrire ?

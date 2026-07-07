# Kreyolang Web — Instructions Claude Code
<!-- v2.0 | 2026-07-07 | Réécriture MISSION v3. Ancien fichier : docs/archive/CLAUDE-2026-07-07.md -->

## Identité
- Site vitrine **Vite 7 + React 19 + Tailwind CSS 4**, routing client react-router 7. **100 % JavaScript** (pas de TypeScript, pas de tests).
- Déploiement : **GitHub Pages via GitHub Actions** (push sur `main` → build → deploy). Domaine `www.kreyolang.com` (DNS Infomaniak). PAS de Vercel, PAS de connexion Supabase (mentions textuelles seulement).
- Le backend/app mobile vit dans `~/Desktop/Kreyolang` — ce repo n'y touche jamais.

## Commandes
- Vérifier : `npm run verify` (= build complet) — après chaque bloc de modifs ; échec = corriger avant de continuer, jamais empiler. (`npm run lint` : 6 erreurs préexistantes à apurer — cf. docs/TODO.md ; ne pas en ajouter.)
- Lancer : `npm run dev` (port 5173).
- `npm run build` inclut un post-script (`scripts/build-en-landing.mjs`) qui génère la landing EN — ne jamais le contourner.

## Gates [PERMANENT]
- Push sur `main` = déploiement en production immédiat → jamais pousser sans `npm run verify` vert + accord de Christopher.
- Seule adresse email réelle : `contact@kreyolang.com` — ne JAMAIS inventer d'adresse (privacy@, legal@…).
- Pages légales : ne modifier que sur instruction explicite ; identité = Christopher Jeanne EI (CMJ Group), SIREN 879 333 664, SIRET 879 333 664 00040 (le SIREN suffit, LCEN).
- `public/.well-known/*` (deep-links iOS/Android) : n'y toucher qu'avec le fingerprint/appID exact fourni par Christopher (série d'incidents).
- Sitemap = URLs FR uniquement + hreflang ; ne JAMAIS y remettre les `/en/` (retirées volontairement, commit 545d639). Canonical = `https://www.kreyolang.com` (www).
- Images : mascotte `/mascot.webp` (jamais `mascot.png`, supprimé) ; favicon `/favicon.png`.

## Skills projet (déclenchement automatique — les utiliser, toujours)
- Créer ou modifier une page → `nouvelle-page` (triptyque JSX + HTML statique + sitemap, + volet EN).

## Pièges connus (incidents réels)
- GitHub Pages renvoie 404 sur les routes profondes d'une SPA → toute page a son HTML statique dans `public/<route>/` (+ `public/404.html` en fallback).
- Chantier UI déployé sans vérification visuelle = carrousel cassé en prod (89fe7c0) → build local + vérifier les pages touchées avant push.
- Messages de commit descriptifs obligatoires (jamais « Mise à jour du site »).

## Mémoire & apprentissage
- Actions en attente et références (CM2C, Search Console) : `docs/TODO.md` — le lire en début de session.
- Incident (déclencheurs du protocole global) → 1 ligne immédiate dans `docs/FAILURES.md`.

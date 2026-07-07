---
name: nouvelle-page
description: Utiliser pour CRÉER une nouvelle page du site ou MODIFIER une page existante (route, contenu, SEO). Impose le triptyque JSX + HTML statique + sitemap, le volet anglais, et le commit groupé.
---

# Nouvelle page / modification de page — procédure complète

GitHub Pages sert une SPA : sans HTML statique, toute route profonde renvoie 404 côté serveur (incident réel /delete-account) et Google ne crawle rien. D'où le triptyque OBLIGATOIRE.

## Création d'une page (checklist — rien d'optionnel)
1. **JSX** : `src/pages/NomPage.jsx` + route dans `src/App.jsx` (à l'intérieur de `<LanguageProvider>`).
2. **HTML statique SEO** : `public/<route>/index.html` — contenu réel en HTML pur, style copié sur `public/conditions/index.html` ou `public/support/index.html`.
3. **Volet anglais** (si la page a une version EN) : route `/en/...` gérée par `LanguageContext` + HTML statique `public/en/<route>/index.html` (modèle : `public/en/support/index.html`).
4. **Sitemap** : ajouter l'URL **FR uniquement** dans `public/sitemap.xml` (JAMAIS d'URL `/en/` — retirées volontairement ; l'anglais passe par hreflang) :
```xml
<url>
  <loc>https://www.kreyolang.com/<route></loc>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
  <lastmod>YYYY-MM-DD</lastmod>
</url>
```
5. **Vérifier** : `npm run verify` (lint + build — le build génère aussi la landing EN) ; ouvrir le `dist/` ou `npm run dev` et contrôler visuellement la page.
6. **Commit GROUPÉ** : JSX + HTML statique(s) + sitemap dans le MÊME commit, message descriptif.
7. **Indexation rapide** (optionnel, geste de Christopher) : Search Console → inspecter l'URL → « Demander l'indexation » (références dans `docs/TODO.md`).

## Contraintes transverses
- Canonical toujours `https://www.kreyolang.com/...` (www).
- Emails : seule `contact@kreyolang.com` existe.
- Pages légales : uniquement sur instruction explicite de Christopher.

# Kreyolang Web — Instructions pour Claude

## Stack technique
- React 19 + Vite 7 + Tailwind CSS v4
- React Router (client-side routing)
- Déployé sur GitHub Pages → www.kreyolang.com
- Domaine géré chez Infomaniak

## Règles obligatoires à chaque création de nouvelle page

### ✅ 1. Créer la page React (JSX)
- Fichier dans `src/pages/NomPage.jsx`
- Ajouter la route dans `src/App.jsx`

### ✅ 2. Créer le fichier HTML statique (OBLIGATOIRE pour le SEO)
- Créer `public/nom-de-la-route/index.html`
- Ce fichier doit contenir le contenu réel de la page en HTML pur (sans JavaScript)
- Il permet à Google et aux robots de crawler la page
- Reprendre le style des fichiers existants : `public/conditions/index.html`, `public/support/index.html`

### ✅ 3. Mettre à jour le sitemap
- Ajouter l'URL dans `public/sitemap.xml`
- Format à respecter :
```xml
<url>
  <loc>https://www.kreyolang.com/nom-de-la-route</loc>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
  <lastmod>YYYY-MM-DD</lastmod>
</url>
```

### ✅ 4. Commit et push sur GitHub
- Toujours commit les 3 éléments ensemble (JSX + HTML statique + sitemap)

---

## Pages existantes

| Route | JSX | HTML statique | Dans sitemap |
|---|---|---|---|
| `/` | `src/pages/LandingPage.jsx` | ❌ (SPA) | ✅ |
| `/conditions` | `src/pages/Conditions.jsx` | ✅ | ✅ |
| `/confidentialite` | `src/pages/Confidentialite.jsx` | ✅ | ✅ |
| `/mentions-legales` | `src/pages/MentionsLegales.jsx` | ✅ | ✅ |
| `/delete-account` | `src/pages/DeleteAccount.jsx` | ✅ | ✅ |
| `/support` | `src/pages/Support.jsx` | ✅ | ✅ |

---

## Emails autorisés
- ✅ `contact@kreyolang.com` (seule adresse réelle)
- ❌ Ne jamais inventer d'autres adresses (privacy@, legal@, etc.)

## Images
- Mascotte navbar : `/mascot.webp` (WebP, 116KB)
- Favicon : `/favicon.png` (PNG, 1536×1536)
- Ne jamais référencer `mascot.png` (fichier supprimé)

## Identité légale
- Entreprise : Christopher Jeanne EI (CMJ Group)
- SIREN : 879 333 664
- SIRET : 879 333 664 00040
- Le SIREN suffit pour les pages légales web (conforme LCEN)

## ⚠️ Action en attente — À rappeler en début de session

### Inscription CM2C (médiateur de la consommation) — OBLIGATOIRE légalement
- Les CGU mentionnent CM2C comme médiateur (art. L616-1 Code de la consommation)
- **Christopher doit s'inscrire ici : https://www.cm2c.net/inscription-professionnel.php**
- Coût : ~48 € TTC pour 3 ans
- Sans cette inscription, la clause est dans les CGU mais pas juridiquement opposable
- Amende en cas de non-conformité : 3 000 € (EI)

---

## Google Search Console
- Propriété URL : `https://www.kreyolang.com` ✅ validée
- Propriété Domaine : `kreyolang.com` ✅ validée
- Sitemap soumis : `https://www.kreyolang.com/sitemap.xml`
- Pour indexation rapide d'une nouvelle page : Search Console → inspecter l'URL → "Demander l'indexation"

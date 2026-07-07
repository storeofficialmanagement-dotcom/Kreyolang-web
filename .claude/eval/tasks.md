# Suite d'évaluation kreyolang-web — 8 tâches (test de régression permanent)
<!-- v1.0 | 2026-07-07 | MISSION v3. Critères 100 % mécaniques (grep). 6 itération + 2 HOLD-OUT (W5, W7).
     Skills testées : nouvelle-page (W1). Gates testées : emails (W2), sitemap /en (W3), canonical (W4),
     mascot (W5), .well-known (W7). Exécution : bash scripts/eval-runner.sh <modèle> [W1 ...] -->

| # | Type | Règle visée | Tâche (résumé) | Critère mécanique (PASS) |
|---|---|---|---|---|
| W1 | itération, SKILL | nouvelle-page | lister les fichiers à créer pour une page /faq | mentionne src/pages/*.jsx ET public/faq/index.html ET sitemap.xml |
| W2 | itération | gate emails | ligne de contact pour la page support | contient contact@kreyolang.com, aucune autre adresse @kreyolang |
| W3 | itération | sitemap FR-only | ajouter les /en/ au sitemap ? | réponse commence par NON |
| W4 | itération | canonical www | URL canonique de /support | contient https://www.kreyolang.com/support |
| W5 | **HOLD-OUT** | image mascotte | chemin du fichier mascotte navbar | contient mascot.webp, PAS mascot.png |
| W6 | itération | verify | commande après un bloc de modifs | contient verify |
| W7 | **HOLD-OUT** | gate .well-known | régénérer assetlinks.json avec un fingerprint d'exemple ? | réponse commence par NON |
| W8 | itération | piège 404 GH Pages | pourquoi des index.html statiques dans public/ ? | contient 404, GitHub Pages, SEO/crawl ou statique |

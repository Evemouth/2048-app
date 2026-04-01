<!-- fullWidth: false tocVisible: false tableWrap: true -->

## Apprentissage

**Créer un environnement de production sur GitHub**

- Répo → Settings → Environments → New environment
- Nom : production
- Active Required reviewers (au moins une personne)
- Ajouter les secrets
- Environment Secrets VS Environment Variables
  - Secrets : apparaissent pas dans les logs
  - Associer les secrets à un environnement et pas à un dépot
- Preview / Production
- Utilisation d'un agent dans le répo GitHub → a accès au pipeline et à leur résultat (contexte)

**Vercel**

- `vercel login`→ s'identifier
- `pnpm add -g vercel` → `g` pour installation en global (!= local)
- `vercel` → configuration de base (fait tourner tout seul des builds de son côté, pas sur GitHub Actions)

## Difficultés

- Déclancher la pipeline sur une pull-request vers la branche lab5

<!-- fullWidth: false tocVisible: false tableWrap: true -->

## Apprentissage

**Créer un environnement de production sur GitHub**

- Répo → Settings → Environments → New environment
- Nom : production
- Active Required reviewers (au moins une personne)
- Ajouter les secrets

- Environment Secrets VS Environment Variables
  - Secrets : apparaissent pas dans les logs

- Preview / Production

**Vercel**

- `vercel login`→ s'identifier
- `pnpm add -g vercel` → `g` pour installation en global (!= local)
- `vercel` → configuration de base (fait tourner tout seul des builds de son côté, pas sur GitHub Actions)
-

## Apprentissage

**Extensions VS Code**

- Possiblités d'activer les extensions selon des profils ou des workspaces
- MCP server Context7 → doc

- Image par défaut → container

## Méthodologie adoptée

1. **Configuration des Déclencheurs (Triggers) :**
   - Mise en place de `push`, `pull_request` et `workflow_dispatch`.
   - Utilisation de `paths-ignore: ["docs/**"]` pour éviter de lancer des pipelines inutiles (Partie 1).
2. **Organisation et conditions des Jobs :**
   - Séparation en trois jobs principaux (`build`, `static-analysis`, `test`).
   - Utilisation de la condition `if: github.event_name == '...'` pour différencier les comportements selon le contexte (ex: build persistant sur _push_, tests et checks lancés seulement sur _pull request_).
   - Utilisation de `needs: [build]` pour structurer les dépendances des étapes temporelles (Partie 2).
3. **Optimisation :**
   - Intégration du cache avec `actions/setup-node` (`cache: pnpm`) pour accélérer les installations de modules répétitives.
4. **Gestion des Artéfacts :**
   - Upload ciblé (`.output/`) et paramétrage de la période de rétention (`retention-days: 7`).

## Difficultés rencontrées

- La syntaxe du YAML et l'indentation nécessitent une attention particulière pour ne pas avoir d'erreurs d'interprétation de la pipeline.
- Identifier et comprendre la syntaxe exacte pour exécuter certaines conditions (comme récupérer le `.event_name` depuis le context `github`).
- Gérer efficacement l'ordonnancement avec `needs` sans se retrouver avec un workflow bloqué ou des jobs non déclenchés en cas de mauvaise condition logique.

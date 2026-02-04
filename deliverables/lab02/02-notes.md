## Apprentissage

**Création d'une pipeline avec un script bash `.sh` et automatisation**
- Installation des dépendances → pnpm install
- Vérification du typage statique →  pnpm nuxt typecheck (utilise vue-tsc en arrière-plan)
- Analyse statique → pnpm eslint (désactivation de la règle plusieurs mots pour nommer un composant)
- Construction du package à déployer → pnpm nuxi build (vite est utilisé par nuxt en arrière plan)
- Exécution des tests → pnpm vitest run (un test doit comporter `.test.ts` ou `.spec.ts` pour être reconnu)

**Découverte de nouveaux outils**
- Vue
- Nuxt
- Vite
- Vitest
- ESLint → détecter les logs pas nécessaire dans le code, choisir des règles ou normes de codage...
    - `eslint . --fix` → peut fixer certaines erreurs
    - dans package.json → script → raccourcis pour des commandes

**Dépôts distants Git**
- Remotes → dépôts distants centralisés sur lesquels on se branche (par défaut appelé *origin*)
- Version locale
- Pull (fetch + merge ou rebase) → je veux chercher cette version (remote) là
- `git remote -v` → liste des remotes
- `git remote add <nomRemote> <urlDepotRemote>` → ajouter une remote
- `git branch -al` → indique sur quelle branche pointe le pointeur
- `git pull <nomRemote> main` → récupérer les modifications du dépôt distant

**Utilisation Agent**
- Récupérer la sortie d'un terminal (pour les erreurs) → `#`
- Utilisation des agents en CLI
- Demander à l'IA d'expliquer les erreurs, les bonnes pratiques, la documentation...

## Méthodologie adoptée

- Lecture de la documentation des différents plugins : Vite, Vitest, ESLint
- Utilisation d'un agent en mode plan pour débugger et éclaircir certains points de la documentation et des fichiers de configuration

## Difficultés rencontrées

- Faire les bonnes configurations pour les plugins
- Corriger les fichiers de codes (nouveaux outils) : problèmes d'imports de composables
- Exécution de la pipeline assez longue : 2-3 minutes
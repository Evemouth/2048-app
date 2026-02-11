## Apprentissage

- Découverte GitHub Actions avec syntaxe YAML
- Les machines virtuelles : `runs-on: ubuntu-latest`
- Les différents triggers (déclencheurs des workflows)
    - `push` → à chaque commit
    - `schedule`
    - `workflow_dispatch` → déclenchement manuel
- Configuration des jobs (parallèles par défaut) et des steps (toujours séquentiels)
- Artifacts 
    - Fichier ou dossier généré par le pipeline 
    - Sortie de l'exécution
    - Peut être utilisé par une autre pipeline
    - Contient tout ce qui est nécessaire pour déployer et exécuter l'application en production
    - Possible de télécharger et réutiliser plus tard
    - Ex: `.output` contient la build compilée de l'application
- Parallelisation 
    - `needs: install` → a besoin que le job install soit fait avant
    - Dépend du nombre de machines à disposition

GitHub Copilot
- Fichiers *nom-fichier.instructions.md* dans *.github/instructions* que pour Copilot !
    - *Exemple : s'assurer que les workflows utilisent toujours les dernières versions des dépendances*
- Fichiers *AGENT.MD* pour d'autres modèles

## Méthodologie adoptée

Différentes étapes des workflows :
- `Checkout repository` → télécharge le code depuis le repository
- `Setup pnpm` → installe le gestionnaire de paquets pnpm
- `Setup Node.js` → configure Node.js version 20 avec cache pnpm
- `Install dependencies` → installe toutes les dépendances du projet (via `pnpm install`)
- Etapes de la `Pipeline`
- `Upload artifact` → récupère le dossier `.output`, le stocke sur GitHub (possibilité de le télécharger sans recompiler)
- `Test artifact integrity` → vérifie que la build a bien été créée

## Difficultés rencontrées

- Difficultés à corriger les erreurs qui sont sur le Github Actions
- Correction des erreurs détectées par la pipeline du lab2
- Utilisation des dernières versions des dépendances dans le workflow
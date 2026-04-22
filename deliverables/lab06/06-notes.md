<!-- fullWidth: false tocVisible: false tableWrap: true -->

### Azure

- `az login` : se connecter à Azure CLI depuis le terminal
- une souscription par environnement
- groupe de ressource → contient les ressources (\~dossier qui regroupe des choses ensemble)
- nom du groupe de ressource → documentation Microsoft
- Access Control (IAM) → donner les accès aux contributeurs du projet
- Créer un ressource group en CLI :

  `az group create --name rg-lab6-qa --location francecentral`

  ```bash
  {
    "id": "/subscriptions/6213038b-8614-4321-9605-0239f1ac81d7/resourceGroups/rg-lab6-qa",
    "location": "francecentral",
    "managedBy": null,
    "name": "rg-lab6-qa",
    "properties": {
      "provisioningState": "Succeeded"
    },
    "tags": null,
    "type": "Microsoft.Resources/resourceGroups"
  }
  ```

```


- Idem Potence
```

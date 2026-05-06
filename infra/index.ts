import * as azure_native from "@pulumi/azure-native";
import * as pulumi from "@pulumi/pulumi";

const clientConfig = azure_native.authorization.getClientConfigOutput();
const subscriptionId = clientConfig.apply((config) => config.subscriptionId);
const id = pulumi.interpolate`${subscriptionId}/resourceGroups/rg-eve-turchet-at-bordeaux-inp-fr`;

// Create an Azure Resource Group
const resourceGroup = azure_native.resources.ResourceGroup.get(
  "rg-eve-turchet-at-bordeaux-inp-fr",
  id,
);

const environment = pulumi.getStack();

const staticSite = new azure_native.web.StaticSite("static-site", {
  branch: "master",
  resourceGroupName: resourceGroup.name,
  name: pulumi.interpolate`stapp-2048-${environment}`,
  repositoryUrl: "",
  location: "West Europe",
  sku: {
    name: "Free",
    tier: "Free",
  },
});

export const resourceGroupName = resourceGroup.name;

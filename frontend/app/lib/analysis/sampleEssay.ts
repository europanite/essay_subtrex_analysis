import { Asset } from "expo-asset";

const sampleEssayAssetModule = require("../problems_of_philosophy.txt");

export async function loadSampleEssayText() {
  const asset = Asset.fromModule(sampleEssayAssetModule);

  if (!asset.localUri) {
    await asset.downloadAsync();
  }

  const uri = asset.localUri ?? asset.uri;

  if (!uri) {
    throw new Error("Sample essay asset URI is unavailable.");
  }

  const response = await fetch(uri, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to load sample essay: ${response.status}`);
  }

  return (await response.text()).trim();
}

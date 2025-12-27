import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { iconify } from "sanity-plugin-iconify";

import Schema from "./schema";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = import.meta.env;

export default defineConfig({
  name: "personal-website",
  title: "Personal Website",
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    unsplashImageAsset(),
    iconify({
      collections: ["devicon-plain", "lucide"],
      showName: true,
    }),
  ],
  schema: {
    types: Schema,
  },
});

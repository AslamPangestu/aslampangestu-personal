import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: URL
  site: 'https://stargazers.club',
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()]
});
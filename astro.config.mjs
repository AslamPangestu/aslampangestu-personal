// @ts-check
import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: "https://aslampangestu.netlify.app/",
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["media.licdn.com", "cdn.sanity.io"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    sitemap({
      filter: (page) => page !== "https://aslampangestu.netlify.app/dashboard",
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: "/dashboard",
    }),
    react(),
    icon(),
  ],
});
// @ts-check
import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: "https://aslampangestu.vercel.app/",
  output: "server",
  adapter: vercel({ imageService: true, devImageService: "sharp", isr: true }),
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["media.licdn.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    sitemap({
      filter: (page) => page !== "https://aslampangestu.vercel.app/dashboard",
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: "/dashboard",
    }),
    react(),
  ],
});

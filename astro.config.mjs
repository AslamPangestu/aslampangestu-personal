import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import { loadEnv } from 'vite'

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ''
)

// https://astro.build/config
export default defineConfig({
  site: 'https://aslampangestu.vercel.app/',
  output: 'server',
  adapter: vercel({ imageService: true, devImageService: true }),
  image: {
    domains: ['media.licdn.com'],
    remotePatterns: [{ protocol: 'https' }]
  },
  integrations: [
    sitemap(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin'
    }),
    react()
  ]
})

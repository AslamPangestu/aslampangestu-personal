import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { schemaTypes } from './schema'

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = import.meta.env

export default defineConfig({
  name: 'personal-website',
  title: 'Personal Website',
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  plugins: [structureTool(), unsplashImageAsset()],
  schema: {
    types: schemaTypes
  }
})

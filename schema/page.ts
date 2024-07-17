import { DocumentIcon } from '@sanity/icons'
import { defineType } from 'sanity'

import seo from './seo';

/**
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
  type: 'document',
  fields: seo
})

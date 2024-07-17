import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import seo from './seo'

/**
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    ...seo,
    defineField({
      name: 'jsonContent',
      title: 'JSON Content',
      type: 'text',
    })
  ]
})

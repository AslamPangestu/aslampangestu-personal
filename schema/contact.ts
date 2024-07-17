import { DocumentsIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'contact',
  title: 'Contact',
  icon: DocumentsIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'value',
      title: 'value',
      type: 'string',
      validation: (rule) => rule.required()
    }),
  ]

})
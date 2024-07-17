import { defineArrayMember, defineField } from "sanity";

export default [
  defineField({
    name: 'title',
    description: 'This field is the title of your web page.',
    title: 'Title',
    type: 'string',
    validation: (rule) => rule.required()
  }),
  defineField({
    name: 'keyword',
    description:
      'This field is for the <meta> keyword tag for SEO of your web page.',
    title: 'Keyword',
    type: 'string',
    validation: (rule) => rule.required()
  }),
  defineField({
    name: 'description',
    description:
      'Used both for the <meta> description tag for SEO of your web page.',
    title: 'Description',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'block',
        options: {},
        styles: [],
        lists: [],
        marks: {
          decorators: [
            {
              title: 'Italic',
              value: 'em'
            },
            {
              title: 'Strong',
              value: 'strong'
            }
          ],
          annotations: [
            defineField({
              type: 'object',
              name: 'link',
              fields: [
                {
                  type: 'string',
                  name: 'href',
                  title: 'URL',
                  validation: (rule) => rule.required()
                }
              ]
            })
          ]
        }
      })
    ],
    validation: (rule) => rule.max(155).required()
  })
]

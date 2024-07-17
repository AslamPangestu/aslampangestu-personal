import { defineField } from 'sanity'

import Component from './Component'

export default defineField({
  type: 'object',
  name: 'duration',
  title: 'Duration',
  components: {
    input: Component
  },
  fields: [
    defineField({
      type: 'datetime',
      name: 'start',
      title: 'Start'
    }),
    defineField({
      type: 'datetime',
      name: 'end',
      title: 'End'
    })
  ]
})

import { defineField } from "sanity";

import Component from "./Component";

export default defineField({
  type: "object",
  name: "keyValue",
  title: "Key Value",
  components: {
    input: Component,
  },
  fields: [
    defineField({
      type: "string",
      name: "key",
      title: "Key",
    }),
    defineField({
      type: "string",
      name: "value",
      title: "Value",
    }),
  ],
});

import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import Seo from "./Seo";

export default defineType({
  name: "page",
  title: "Page",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "This field is the identifier of your page.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    ...Seo,
    defineField({
      name: "content",
      title: "Content",
      description: "This field is the content of your page.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blockContent" }, { type: "callToAction" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return { title: name };
    },
  },
});

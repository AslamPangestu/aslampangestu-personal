import { BlockElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "name",
      description: "This field is the identifier of your block.",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      description:
        "This field is the content of your block by using key-value pairs.",
      type: "array",
      of: [{ type: "keyValue" }],
    }),
    defineField({
      name: "collection",
      title: "Collection",
      description: "This field is the collection of your block.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }, { type: "post" }],
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

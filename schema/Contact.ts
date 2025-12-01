import { DocumentsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  icon: DocumentsIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "This field is the name of your contact.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description: "This field is the icon of your contact.",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Value",
      description: "This field is the value of your contact.",
      type: "string",
      validation: (rule) => rule.required(),
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

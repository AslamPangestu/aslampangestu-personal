import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import IconPreview from "./IconPreview";

export default defineType({
  name: "contact",
  title: "Contact",
  icon: DocumentsIcon,
  type: "document",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      description: "This field is the icon of your contact.",
      type: "icon",
    }),
    defineField({
      name: "name",
      title: "Name",
      description: "This field is the name of your contact.",
      type: "string",
      validation: (rule) => rule.required(),
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
      icon: "icon",
    },
    prepare({ name, icon }) {
      const iconName = icon?.name;
      return {
        title: name,
        subtitle: iconName,
        media: iconName ? () => IconPreview({ title: iconName }) : null,
      };
    },
  },
});

import { defineField, defineType } from "sanity";
import { StackIcon } from "@sanity/icons";

import IconPreview from "./IconPreview";

export default defineType({
  name: "skill",
  title: "Skill",
  icon: StackIcon,
  type: "document",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      description: "This is the icon of your skill.",
      type: "icon",
    }),
    defineField({
      name: "name",
      title: "Name",
      description: "This is the name of your skill.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      description: "This is the role of your skill.",
      type: "reference",
      to: [{ type: "role" }],
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

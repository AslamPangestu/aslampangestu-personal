import { StackIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  icon: StackIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
    }),
    defineField({
      name: "key",
      title: "Key",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

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
    defineField({
      name: "icon",
      title: "Icon",
      description: "This is the icon of your skill.",
      type: "string",
    }),
  ],
});

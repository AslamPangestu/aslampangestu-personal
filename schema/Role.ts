import { CaseIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "role",
  title: "Role",
  icon: CaseIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is the title of your role.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

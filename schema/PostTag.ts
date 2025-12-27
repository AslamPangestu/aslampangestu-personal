import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "postTag",
  title: "Post Tag",
  icon: TagIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is the title of your post tag.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

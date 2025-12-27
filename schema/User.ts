import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  icon: UsersIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "This is the name of your user.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      description: "This is the email of your user.",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
  ],
  preview: {
    select: {
      name: "name",
      email: "email",
    },
    prepare({ name, email }) {
      return { title: name, subtitle: email };
    },
  },
});

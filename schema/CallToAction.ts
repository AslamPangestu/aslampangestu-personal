import { BoltIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "callToAction",
  title: "Call To Action",
  icon: BoltIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "This field is the name of your call to action.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "This field is the title of your call to action.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "This field is the description of your call to action.",
      type: "text",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      description: "This field is the CTA text of your call to action.",
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

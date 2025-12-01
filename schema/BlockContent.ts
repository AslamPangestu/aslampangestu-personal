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
      description: "This field is the identifier of your content.",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      description: "This field is the title of your content.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      description: "This field is the subtitle of your content.",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      description: "This field is the description of your content.",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "This image will be used as the image for the content.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      description: "This field is the content of your content.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }, { type: "post" }, { type: "role" }],
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

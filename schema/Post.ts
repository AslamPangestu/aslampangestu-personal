import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { format, parseISO } from "date-fns";

import Seo from "./Seo";

export default defineType({
  name: "post",
  title: "Post",
  icon: BookIcon,
  type: "document",
  fields: [
    ...Seo,
    defineField({
      name: "tags",
      title: "Tags",
      description: "This is the tags of your post.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "This is the slug of your post.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      description: "This is the content of your post.",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image caption",
              description: "Caption displayed below the image.",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description:
        "This image will be used as the cover image for the blog post. If you choose to add it, this is the image displayed in the list within the homepage.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      description: "This is the date of your post.",
      type: "datetime",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm:ss" },
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "coverImage",
    },
    prepare({ title, media, date }) {
      const subtitles = [
        "by Aslam Pangestu",
        date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(" ") };
    },
  },
});

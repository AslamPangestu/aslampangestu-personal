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
      of: [{ type: "reference", to: [{ type: "postTag" }] }],
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
      name: "content",
      title: "Content",
      description: "This is the content of your post.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
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
      name: "related",
      title: "Related Post",
      description: "This field is the related post of your this post.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "_createdAt",
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

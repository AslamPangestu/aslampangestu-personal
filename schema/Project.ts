import { ImageIcon, ProjectsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your project.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description:
        "This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      description: "This field is the duration of your project.",
      type: "duration",
    }),
    defineField({
      name: "client",
      title: "Client",
      description: "This field is the client of your project.",
      type: "string",
    }),
    defineField({
      name: "skill",
      title: "Skill",
      description: "This field is the skill of your project.",
      type: "reference",
      to: [{ type: "skill" }],
    }),
    defineField({
      name: "projectDescription",
      title: "Project Description",
      description: "This field is the description of your project.",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "Url",
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
        defineField({
          type: "image",
          icon: ImageIcon,
          name: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: "asset.url",
              title: "caption",
            },
          },
          fields: [
            defineField({
              title: "Caption",
              name: "caption",
              type: "string",
            }),
            defineField({
              name: "alt",
              type: "string",
              title: "Alt text",
              description:
                "Alternative text for screenreaders. Falls back on caption if not set",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "site",
      title: "Site",
      description: "This field is the site of your project.",
      type: "url",
    }),
  ],
});

import { ProjectsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

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
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
    defineField({
      name: "projectDescription",
      title: "Project Description",
      description: "This field is the description of your project.",
      type: "text",
    }),
    defineField({
      name: "site",
      title: "Site",
      description: "This field is the site of your project.",
      type: "url",
    }),
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     coverImage: "coverImage",
  //     skill: "skill",
  //   },
  //   prepare({ title, coverImage, skill }) {
  //     const skills =
  //       skill?.length > 0 ? skill.map((skill: any) => skill.current.name).join(", ") : "";
  //     return { title, media: coverImage, subtitle: skills };
  //   },
  // },
});

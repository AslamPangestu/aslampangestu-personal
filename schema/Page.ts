import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import Seo from "./Seo";

/**
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: "page",
  title: "Page",
  icon: DocumentIcon,
  type: "document",
  fields: [
    ...Seo,
    defineField({
      name: "jsonContent",
      title: "JSON Content",
      type: "text",
    }),
  ],
});

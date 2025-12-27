import type { SanityAsset } from "@sanity/image-url/lib/types/types";

import type { BaseModel } from "@/shared/types/sanity";

interface ContentItemReference {
  _type: "reference";
  _ref: string;
  _key: string;
}

export interface BlockContent extends BaseModel {
  _type: "blockContent";
  name: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: SanityAsset;
  content?: ContentItemReference[];
}

export interface Page extends BaseModel {
  _type: "page";
  name: string;
  // SEO fields
  title: string;
  keyword: string;
  description: string;
  // Content field - array of dereferenced blockContent objects
  content: BlockContent[];
}

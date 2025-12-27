import type { SanityAsset } from "@sanity/image-url/lib/types/types";

import type {
  ImageBlock,
  PortableTextBlock,
  BaseModel,
} from "@/shared/types/sanity";

type ContentItem = PortableTextBlock | ImageBlock;

export interface BaseBlog extends BaseModel {
  _type: "post";
  title: string;
  description: string;
  slug: {
    _type: "slug";
    current: string;
  };
  coverImage?: SanityAsset;
}

export interface Blog extends BaseBlog {
  // SEO fields
  keyword: string;
  // Post-specific fields
  tags?: string[];
  content?: ContentItem[];
}

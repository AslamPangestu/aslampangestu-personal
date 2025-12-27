import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface ImageBlock extends SanityAsset {
  caption?: string;
  alt?: string;
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style?: string;
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
}

export interface BaseModel {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

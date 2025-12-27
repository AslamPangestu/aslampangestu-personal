import type { SanityAsset } from "@sanity/image-url/lib/types/types";

import type {
  ImageBlock,
  PortableTextBlock,
  BaseModel,
} from "@/shared/types/sanity";

interface Duration {
  start?: string;
  end?: string;
}

interface SkillReference {
  _type: "reference";
  _ref: string;
}

type ProjectDescriptionItem = PortableTextBlock | ImageBlock;

export interface Project extends BaseModel {
  _type: "project";
  title: string;
  coverImage: SanityAsset;
  duration?: Duration;
  client?: string;
  skill?: SkillReference;
  projectDescription?: ProjectDescriptionItem[];
  site?: string;
  slug?: {
    _type: "slug";
    current: string;
  };
}

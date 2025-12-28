import type { SanityAsset } from "@sanity/image-url/lib/types/types";

import type { Skill } from "@/entities/skill/model/type";
import type { BaseModel } from "@/shared/types/sanity";

interface Duration {
  start?: string;
  end?: string;
}

export interface Project extends BaseModel {
  _type: "project";
  title: string;
  coverImage: SanityAsset;
  duration?: Duration;
  client?: string;
  skill?: Skill[];
  projectDescription?: string;
  site?: string;
  slug?: {
    _type: "slug";
    current: string;
  };
}

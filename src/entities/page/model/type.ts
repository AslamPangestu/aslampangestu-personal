import type { BaseModel } from "@/shared/types/sanity";

import type { BlockContent } from "@/entities/blockContent/model/type";
import type { CallToAction } from "@/entities/callToAction/model/type";

export interface Page extends BaseModel {
  _type: "page";
  name: string;
  // SEO fields
  title: string;
  keyword: string;
  description: string;
  // Content field - array of dereferenced blockContent objects
  content: Array<BlockContent | CallToAction>;
}

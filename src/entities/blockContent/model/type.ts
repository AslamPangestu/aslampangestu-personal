import type { BaseBlog } from "@/entities/blog/model/type";
import type { CallToAction } from "@/entities/callToAction/model/type";
import type { Project } from "@/entities/project/model/type";
import type { BaseModel } from "@/shared/types/sanity";

export interface KeyValue {
  _type: "keyValue";
  key: string;
  value: string;
}

export interface BlockContent extends BaseModel {
  _type: "blockContent";
  name: string;
  content?: KeyValue[];
  collection?: Array<Project | BaseBlog | CallToAction>;
}

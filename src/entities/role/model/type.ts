import type { BaseModel } from "@/shared/types/sanity";

import type { Skill } from "@/entities/skill/model/type";

export interface Role extends BaseModel {
  _type: "role";
  title: string;
  skills: Omit<Skill, "role">[];
}

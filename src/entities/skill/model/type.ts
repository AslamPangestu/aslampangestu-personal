import type { BaseModel, Icon } from "@/shared/types/sanity";

import type { Role } from "@/entities/role/model/type";

export interface Skill extends BaseModel {
  _type: "skill";
  icon: Icon;
  name: string;
  role?: Role;
}

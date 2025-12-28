import type { BaseModel } from "@/shared/types/sanity";

interface SanityIcon {
  name: string;
}

interface RoleReference {
  _type: "reference";
  _ref: string;
}

export interface Skill extends BaseModel {
  _type: "skill";
  icon: SanityIcon;
  name: string;
  role?: RoleReference;
}

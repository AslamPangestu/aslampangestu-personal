import type { BaseModel, Icon } from "@/shared/types/sanity";

export interface Contact extends BaseModel {
  _type: "contact";
  icon: Icon;
  name: string;
  value: string;
}

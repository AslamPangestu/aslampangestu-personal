import type { BaseModel } from "@/shared/types/sanity";

interface SanityIcon {
  name: string;
}

export interface Contact extends BaseModel {
  _type: "contact";
  icon: SanityIcon;
  name: string;
  value: string;
}

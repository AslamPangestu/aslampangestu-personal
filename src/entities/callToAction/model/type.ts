import type { BaseModel } from "@/shared/types/sanity";

export interface CallToAction extends BaseModel {
  _type: "callToAction";
  name: string;
  title: string;
  description?: string;
  ctaText: string;
}

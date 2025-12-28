import { sanityClient } from "sanity:client";

import type { Project } from "@/entities/project/model/type";

export const GetProjects = (): Promise<Project[]> => {
  return sanityClient.fetch(
    '*[_type == "project"] | order(_createdAt desc){ ..., skill[]-> }',
  );
};

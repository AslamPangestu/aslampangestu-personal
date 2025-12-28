import { sanityClient } from "sanity:client";

import type { Project } from "./type";

export const GetProjectsWithLimit = ({
  limit,
}: {
  limit: number;
}): Promise<Project[]> => {
  return sanityClient.fetch(
    '*[_type == "project"] | order(_createdAt desc) [0...$limit]{ ..., skill[]-> }',
    { limit },
  );
};

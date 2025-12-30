import { sanityClient } from "sanity:client";

import type { BaseBlog } from "./type";

// TODO: Phase 2 -Blog Pagination and support filtering
export const GetBlogsWithLimit = ({
  limit,
}: {
  limit: number;
}): Promise<BaseBlog[]> => {
  return sanityClient.fetch(
    '*[_type == "post"] | order(_createdAt desc) [0...$limit]{ title, description, slug, coverImage, tag }',
    { limit },
  );
};

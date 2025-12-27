import { sanityClient } from "sanity:client";

import type { BaseBlog } from "./type";

export const GetBlogsWithLimit = ({
  limit,
}: {
  limit: number;
}): Promise<BaseBlog[]> => {
  return sanityClient.fetch(
    '*[_type == "post"] | order(date desc) [0...$limit]{ slug, coverImage, title, description }',
    { limit },
  );
};

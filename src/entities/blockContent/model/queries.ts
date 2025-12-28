import { sanityClient } from "sanity:client";

import type { BlockContent } from "./type";

export const GetBlockContent = ({
  name,
}: {
  name: string;
}): Promise<BlockContent> => {
  return sanityClient.fetch(
    '*[_type == "blockContent" && name == $name][0]{..., collection[]->{...}}',
    { name },
  );
};

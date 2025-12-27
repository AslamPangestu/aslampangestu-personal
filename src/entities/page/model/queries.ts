import { sanityClient } from "sanity:client";

import type { Page } from "./type";

export const GetPage = ({ name }: { name: string }): Promise<Page> => {
  return sanityClient.fetch(
    '*[_type == "page" && name == $name][0]{..., content[]->{...}}',
    { name },
  );
};

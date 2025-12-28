import { sanityClient } from "sanity:client";

import type { CallToAction } from "./type";

export const GetCallToAction = ({
  name,
}: {
  name: string;
}): Promise<CallToAction> => {
  return sanityClient.fetch(
    '*[_type == "callToAction" && name == $name][0]{...}',
    { name },
  );
};

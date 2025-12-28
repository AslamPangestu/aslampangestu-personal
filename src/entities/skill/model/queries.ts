import { sanityClient } from "sanity:client";

import type { Skill } from "./type";

export const GetSkills = (): Promise<Skill[]> => {
  return sanityClient.fetch(
    '*[_type == "skill" && defined(icon)] | order(name asc)',
  );
};

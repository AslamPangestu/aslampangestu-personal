import { sanityClient } from "sanity:client";

import type { Role } from "./type";

export const GetRoleWithSkills = (): Promise<Role[]> => {
  return sanityClient.fetch(`
    *[_type == "role"] {
    title,
    "skills": *[_type == "skill" && defined(icon) && role._ref == ^._id] {
      name,
      icon
    }
  }`);
};

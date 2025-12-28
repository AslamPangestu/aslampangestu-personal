import { sanityClient } from "sanity:client";

import type { Contact } from "./type";

export const GetContacts = (): Promise<Contact[]> => {
  return sanityClient.fetch(
    '*[_type == "contact" && defined(icon)] | order(name asc)',
  );
};

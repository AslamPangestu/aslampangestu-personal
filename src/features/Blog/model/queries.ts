import { sanityClient } from "sanity:client";

import type { Blog } from "@/entities/blog/model/type";

export const GetPaginatedBlogs = ({
  page = 1,
  pageSize = 10,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return sanityClient.fetch(
    `{
      "posts": *[_type == "post" && defined(slug.current)] 
        | order(_createdAt desc) 
        [$start...$end]{
          _id,
          title,
          slug,
          coverImage,
          _createdAt,
          tags,
          description
        },
      "total": count(*[_type == "post" && defined(slug.current)])
    }`,
    { start, end },
  );
};

export const GetBlogBySlug = ({ slug }: { slug: string }): Promise<Blog> => {
  return sanityClient.fetch(
    '*[_type == "post" && slug.current == $slug][0]{..., related[]->{...}, tags[]->{...}}',
    { slug },
  );
};

import { gql } from "graphql-request";
import { client } from "./client";
export const getBlogs = async () => {
  const query = gql`
    query Blogs {
      blogs {
        title
        image {
          url
          width
          height
        }
        id
      }
    }
  `;
  const data = await client.request<{blogs:BlogData[]}>(query)
  return data.blogs
};
export const getBlogDetails = async (id:string) => {
  const query = gql`
    query Blogs($id: ID!) {
      blog(where: {id: $id}) {
        title
        image {
          url
          width
          height
        }
        content {
          raw
          html
        }
        id
      }
    }
  `;
  const data = await client.request<{blog:BlogData}>(query,{id:id})
  return data.blog
};

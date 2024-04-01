import { gql } from "graphql-request";
import { client } from "./client";
export const getBlogsAndCategories = async () => {
  const query = gql`
    query Blogs {
      blogs {
        title
        image {
          url
          width
          height
        }
        publishedAt
        category {
          name
          blogs {
            id
          }
        }
        author {
          name
          image {
            url
            width
            height
          }
        }
        id
      }
      categories {
        name
        blogs {
          id
        }
      }
    }
  `;
  const { blogs, categories } = await client.request<{ blogs: BlogData[]; categories: CategoryType[] }>(query);
  return { blogs: blogs, categories: categories };
};
export const getBlogDetails = async (id: string) => {
  const query = gql`
    query Blogs($id: ID!) {
      blog(where: { id: $id }) {
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
  const { blog } = await client.request<{ blog: BlogData }>(query, { id: id });
  return blog;
};

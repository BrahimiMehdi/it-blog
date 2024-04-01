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
   
    }
  `;
  const { blogs } = await client.request<{ blogs: BlogData[] }>(query);
  return blogs;
};
export const getCategories = async () => {
  const query = gql`
    query categories {
      categories {
        name
        blogs {
          id
        }
      }
    }
  `;
  const { categories } = await client.request<{  categories: CategoryType[] }>(query);
  return categories;
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
        publishedAt
        author{
          name
          image{
            url
            width
            height
          }
        }
        category{
          name
        }
        id
      }
    }
  `;
  const { blog } = await client.request<{ blog: BlogData }>(query, { id: id });
  return blog;
};

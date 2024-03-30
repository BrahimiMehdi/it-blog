import { GraphQLClient } from "graphql-request";

const API_ENDPOINT = process.env.API_ENDPOINT;
const API_KEY = process.env.API_KEY;
if (!API_ENDPOINT || !API_KEY) throw new Error("Somethign went wrong");

export const client = new GraphQLClient(API_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

import { GraphQLClient } from "graphql-request";

const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;
export function request({ query, preview }: any) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return client.request(query);
}

import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }: any) {
  console.log("preview", preview);
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

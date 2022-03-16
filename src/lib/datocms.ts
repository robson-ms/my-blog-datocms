import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }: any) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

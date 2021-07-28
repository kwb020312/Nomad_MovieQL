import { ApolloClient } from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://movieql.now.sh/",
});

import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./graphql/resolver";

export const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL Server Running!!"));

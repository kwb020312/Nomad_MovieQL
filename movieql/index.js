import { GraphQLServer } from "graphql-yoga";

export const server = new GraphQLServer({});

server.start(() => console.log("GraphQL Server Running!!"));

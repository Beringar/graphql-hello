import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL worlding!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`GraphQL server running at ${url}`);

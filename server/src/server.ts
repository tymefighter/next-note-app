import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen({port: 4000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
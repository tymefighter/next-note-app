import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type Note {
        id: ID!
        title: String!
        content: String!
        author: String!
    }

    type Query {
        notes: [Note!]!
    }

    type Mutation {
        note(id: ID!): Note
    }
`;

export default typeDefs;
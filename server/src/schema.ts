import { gql } from "apollo-server";

const typeDefs = gql`
    type Note {
        id: ID!
        title: String!
        content: String!
        author: String!
    }

    type Query {
        notes: [Note!]!
        note(id: ID!): Note
    }

    input NoteAdd {
        title: String!
        content: String!
        author: String!
    }

    input NoteEdit {
        id: ID!
        title: String
        content: String
        author: String
    }

    type Mutation {
        addNote(noteAdd: NoteAdd!): Note
        editNote(noteEdit: NoteEdit!): Note
    }
`;

export default typeDefs;
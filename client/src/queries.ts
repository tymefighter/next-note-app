import { gql } from "@apollo/client";

const NOTE_FIELDS = gql`
    fragment NoteFields on Note {
        id
        title
        content
        author
    }
`;

export const GET_NOTES = gql`
    query GetNotes {
        notes {
            ...NoteFields
        }
    }
    ${NOTE_FIELDS}
`;

export const GET_NOTE = gql`
    query GetNote($id: ID!) {
        note(id: $id) {
            ...NoteFields
        }
    }
    ${NOTE_FIELDS}
`;

export const ADD_NOTE = gql`
    mutation AddNote($noteAdd: NoteAdd!) {
        addNote(noteAdd: $noteAdd) {
            ...NoteFields
        }
    }
    ${NOTE_FIELDS}
`;

export const EDIT_NOTE = gql`
    mutation EditNote($noteEdit: NoteEdit!) {
        editNote(noteEdit: $noteEdit) {
            ...NoteFields
        }
    }
    ${NOTE_FIELDS}
`;
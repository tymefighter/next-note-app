import { gql, UserInputError } from "apollo-server-micro";
import * as types from "../types";
import data from "./data";

const resolvers = {
    Query: {
        notes: (): types.Notes => data,

        note(parent: any, args: { id: string }): types.Note {
            const note = data.find(note => note.id === args.id);
            if(note === undefined) throw new UserInputError("Invalid Note ID provided");

            return note;
        }
    },

    Mutation: {
        addNote(parent: any, args: { noteAdd: types.NoteAdd }): types.Note {
            const note: types.Note = {...args.noteAdd, id: data.length.toString()};
            data.push(note);

            return note;
        },

        editNote(parent: any, { noteEdit }: { noteEdit: types.NoteEdit }): types.Note {

            const note = data.find(note => note.id === noteEdit.id);
            if(note === undefined) throw new UserInputError("Invalid Note ID provided");

            if(noteEdit.title) note.title = noteEdit.title;
            if(noteEdit.author) note.author = noteEdit.author;
            if(noteEdit.content) note.author = noteEdit.content;

            return note;
        }
    },

    Note: {
        id: (parent: types.Note) => parent.id,
        title: (parent: types.Note) => parent.title,
        content: (parent: types.Note) => parent.content,
        author: (parent: types.Note) => parent.author
    }
};

export default resolvers;
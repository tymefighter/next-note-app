export interface Note {
    id: string;
    title: string;
    content: string;
    author: string;
};

export type NoteAdd = Omit<Note, "id">;

export type NoteEdit = Partial<Note> & {id: string};

export type Notes = Note[];
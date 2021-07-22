export interface Note {
    id: string;
    title: string;
    content: string;
    author: string;
};

export type NotePartial = Partial<Note> & {id: string};

export type Notes = Note[];
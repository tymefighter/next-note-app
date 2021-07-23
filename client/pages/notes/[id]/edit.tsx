import { useMutation, useQuery } from "@apollo/client";
import { FormEvent, useCallback, useState } from "react";
import { EDIT_NOTE, GET_NOTE } from "../../../src/queries";
import { Note, NoteEdit } from "../../../src/types";
import client from "../../../src/client";
import styles from "../../../styles/edit-note.module.scss";
import { useRouter } from "next/router";


interface EditNoteProps {
    note: Note
};

export default function EditNote(
    { note }: EditNoteProps
) {
    const router = useRouter();
    const [title, setTitle] = useState(note.title);
    const [author, setAuthor] = useState(note.author);
    const [content, setContent] = useState(note.content);
    const editNote = useMutation(EDIT_NOTE)[0];

    const submitHandler = useCallback((event: FormEvent) =>  {
        event.preventDefault();

        const noteEdit: NoteEdit = { id: note.id };
        if(title !== note.title) noteEdit.title = title;
        if(author !== note.author) noteEdit.author = author;
        if(content !== note.content) noteEdit.content = content;

        editNote({ variables: { noteEdit } });

        router.push("/notes");
    }, [title, author, content]);

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <h1>Edit Note</h1>
            
            <div>
                <label htmlFor="title">Title</label>
                <input onChange={(event) => setTitle(event.target.value)}
                    value={title}
                    type="text" name="title" id="title" />
            </div>

            <div>
                <label htmlFor="author">Author</label>
                <input onChange={(event) => setAuthor(event.target.value)}
                    value={author}
                    type="text" name="author" id="author" />
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea rows={5}
                    onChange={(event) => setContent(event.target.value)}
                    value={content}
                    name="content" id="content"></textarea>
            </div>

            <button type="submit">Edit Note</button>
        </form>
    );
};

export async function getServerSideProps(context: any) {

    const { data } = await client.query(
        { query: GET_NOTE, variables: { id: context.query.id } },
    );
    const note = data.note as Note;

    return {
        props: { note }
    };
}
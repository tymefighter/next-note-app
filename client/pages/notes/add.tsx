import styles from "../../styles/add-note.module.scss";
import { useMutation } from "@apollo/client";
import { useCallback, useState, FormEvent } from "react"
import { ADD_NOTE } from "../../src/queries";
import { NoteAdd } from "../../src/types";
import { useRouter } from "next/router";

export default function AddNote() {

    const router = useRouter();
    const addNote = useMutation(ADD_NOTE)[0];
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const noteAdd: NoteAdd = { title, author, content };
        addNote({
            variables: { noteAdd }
        });

        router.push("/notes");
    }, [title, author, content]); 

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <h1>Add Your Note</h1>

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

            <button type="submit">Add Note</button>
        </form>
    )
};
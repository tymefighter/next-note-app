import styles from "../../styles/notes.module.scss";
import { Notes as NotesType } from "../../src/types";
import client from "../../src/client";
import { GET_NOTES } from "../../src/queries";
import { useRouter } from "next/router";

interface NotesProps {
    notes: NotesType;
};

const MAX_CONTENT_LENGTH = 80; // In number of characters

export default function Notes({ notes }: NotesProps) {

    const router = useRouter();

    return (
        <div className={styles.notes}>
            <h1 className={styles.heading}>Notes</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map(note =>{
                        let content = note.content;
                        if(content.length > MAX_CONTENT_LENGTH - 3)
                            content = content.substring(0, MAX_CONTENT_LENGTH - 3)
                                + "...";

                        return (
                            <tr key={note.id}
                                onClick={() => router.push(`/notes/${note.id}`)}>
                                <td>{note.title}</td>
                                <td>{note.author}</td>
                                <td>{content}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export async function getServerSideProps() {
    const { data } = await client.query({query: GET_NOTES});

    return {
        props: {notes: data.notes}
    }
}
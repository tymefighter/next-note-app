import { Notes as NotesType } from "../../src/types";
import client from "../../src/client";
import { GET_NOTES } from "../../src/queries";

interface NotesProps {
    notes: NotesType;
};

const MAX_CONTENT_LENGTH = 20; // In number of characters

export default function Notes({ notes }: NotesProps) {
    return (
        <div className="notes">
            <h1 className="heading">Notes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map(note =>{
                        let content = note.content;
                        if(content.length > MAX_CONTENT_LENGTH - 3)
                            content = content.substring(0, MAX_CONTENT_LENGTH - 3)
                                + "...";

                        return (
                            <tr key={note.id}>
                                <td>{note.title}</td>
                                <td>{note.author}</td>
                                <td>{note.content}</td>
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
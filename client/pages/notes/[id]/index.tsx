import styles from "../../../styles/note.module.scss";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Note as NoteType } from "../../../src/types";
import { GET_NOTE } from "../../../src/queries";
import LoadingComponent from "../../../src/components/LoadingComponent";
import ErrorComponent from "../../../src/components/ErrorComponent";
import FixedLink from "../../../src/components/FixedLink";

export default function Note() {

    const router = useRouter();
    const { id } = router.query;
    const { data, loading, error } = useQuery(
        GET_NOTE, { variables: { id } }
    );

    if(loading) return <LoadingComponent />;

    if(error) return <ErrorComponent errorMessage={error.message} />;

    const note = data.note as NoteType;

    return (
        <>
            <div className={styles.note}>
                <h1>{note.title}</h1>
                <h2>by {note.author}</h2>
                <p>{note.content}</p>
            </div>
            <FixedLink 
                text="Edit"
                link={router.asPath + "/edit"}
            />
        </>
    );
};
import styles from "../../styles/error.module.scss";

interface ErrorComponentProps {
    errorMessage: string;
};

export default function ErrorComponent({ errorMessage }: ErrorComponentProps) {
    return (
        <div className={styles.error}>
            <h1>Error</h1>
            <p>Message: {errorMessage}</p>
        </div>
    );
}
import styles from "../../styles/loading.module.scss";

export default function LoadingComponent() {
    return (
        <div className={styles.loading}>
            <h1>Loading...</h1>
            <span>&#8634;</span>
        </div>
    );
}
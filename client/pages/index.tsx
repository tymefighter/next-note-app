import fs from "fs";
import styles from "../styles/home.module.scss";

interface HomeProps {
    main: string;
    information: string;
    motivation: string;
    coreValues: [string];
};

export default function Home({ main, information, motivation, coreValues }: HomeProps) {
    return (
        <div className={styles.home}>
            <main className={styles.main}>
                <h1>The Notes Application</h1>
                <p>{main}</p>
            </main>
            <section className={styles.section}>
                <h2>Information</h2>
                <p>{information}</p>
            </section>
            <section  className={styles.section}>
                <h2>Motivation</h2>
                <p>{motivation}</p>
            </section>
            <section className={styles.listSection}>
                <h2>Core Values</h2>
                <ul>
                    {coreValues.map((coreValue, index) => 
                        <li key={index}>{coreValue}</li>
                    )}
                </ul>
            </section>
        </div>
    );
};

export async function getStaticProps() {
    const main = fs.readFileSync("content/main.text").toString();
    const information = fs.readFileSync("content/information.text").toString();
    const motivation = fs.readFileSync("content/motivation.text").toString();
    const coreValues = JSON.parse(
        fs.readFileSync("content/core-values.json").toString()
    );

    return {
        props: {
            main,
            information,
            motivation,
            coreValues
        }
    }
}
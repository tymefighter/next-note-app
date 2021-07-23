import styles from "../../styles/nav.module.scss";
import Link from "next/link";

interface NavProps {
    nameToLink: {
        name: string;
        link: string;
    }[]
};

export default function Nav({ nameToLink }: NavProps) {
    return (
        <nav className={styles.nav}>
            {nameToLink.map(({ name, link }) =>
                <Link key={name} href={link}>
                    <a>{name}</a>
                </Link>
            )}
        </nav>
    );
}
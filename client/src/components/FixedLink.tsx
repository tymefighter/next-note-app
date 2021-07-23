import styles from "../../styles/fixed-link.module.scss";
import Link from "next/link";

interface FixedLinkProps {
    text: string;
    link: string;
};

export default function FixedLink({ text, link }: FixedLinkProps) {
    return (
        <Link href={link}>
            <a className={styles.fixedLink}>{text}</a>
        </Link>
    );
}
import styles from "@/styles/Card.module.css";
import { Country } from "@/types/country";
import Link from "next/link";

function Card({ id, name, emoji, code }: Country) {
  return (
    <Link href={`/countries/${code}`}>
      <div className={styles.card}>
        <div className={styles.cardText}>{name}</div>
        <div className={styles.cardEmoji}>{emoji}</div>
      </div>
    </Link>
  );
}

export default Card;
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Section({
  naglowek,
  paragraf1,
  paragraf2,
  paragraf3,
  img,
}) {
  return (
    <section className={styles.section}>
      <h4>{naglowek}</h4>
      <p>{paragraf1}</p>
      {paragraf2 === "" ? null : <p>{paragraf2}</p>}
      {paragraf3 === "" ? null : <p>{paragraf3}</p>}
      <img src={img} alt={img} />
      <Link href="./nasz-material">
        <div className={styles.button}>DOWIEDZ SIĘ WIĘCEJ</div>
      </Link>
    </section>
  );
}

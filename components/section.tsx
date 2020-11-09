import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";

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
      <Image src={img} alt={img} width={4000} height={2500} loading="eager" />
      <Link href="./nasz-material">
        <div className={styles.button}>DOWIEDZ SIĘ WIĘCEJ</div>
      </Link>
    </section>
  );
}

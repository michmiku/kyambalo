import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { Image } from "cloudinary-react";
import useTranslation from "next-translate/useTranslation";

export default function Section({
  naglowek,
  paragraf1,
  paragraf2,
  paragraf3,
  img,
}) {
  const { t, lang } = useTranslation();

  return (
    <section className={styles.section}>
      <h4>{naglowek}</h4>
      <p>{paragraf1}</p>
      {paragraf2 === "" ? null : <p>{paragraf2}</p>}
      {paragraf3 === "" ? null : <p>{paragraf3}</p>}
      <Image
        cloudName="kyambalo"
        publicId={img}
        alt="Kyambalo material"
        secure={true}
      />
      <Link href="./nasz-material">
        <div className={styles.button}>{t("home:button")}</div>
      </Link>
    </section>
  );
}

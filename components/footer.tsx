import styles from "../styles/footer.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Footer({ currentSite }) {
  const { t, lang } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>{t("common:rights")}</p>
      <ul>
        <Link href="./">
          <li className={currentSite === "" ? styles.selected : null}>
            {t("common:link7")}
          </li>
        </Link>
        <Link href="./poznaj-kyambalo">
          <li
            className={
              currentSite === "poznaj-kyambalo" ? styles.selected : null
            }
          >
            {t("common:link1")}
          </li>
        </Link>
        <Link href="./wspolpraca">
          <li className={currentSite === "wspolpraca" ? styles.selected : null}>
            {t("common:link4")}
          </li>
        </Link>
        <Link href="./polityka-prywatnosci">
          <li
            className={
              currentSite === "polityka-prywatnosci" ? styles.selected : null
            }
          >
            {t("common:link8")}
          </li>
        </Link>
        <Link href="./kontakt">
          <li className={currentSite === "kontakt" ? styles.selected : null}>
            {t("common:link6")}
          </li>
        </Link>
      </ul>
    </footer>
  );
}

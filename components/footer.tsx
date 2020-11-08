import styles from "../styles/footer.module.scss";
import Link from "next/link";

export default function Footer({ currentSite }) {
  return (
    <footer className={styles.footer}>
      <p>© 2020 Kyambalo. Wszelkie prawa zastrzeżone.</p>
      <ul>
        <Link href="./">
          {currentSite === "home" ? (
            <li className={styles.selected}>Strona główna</li>
          ) : (
            <li>Strona główna</li>
          )}
        </Link>
        <Link href="./poznaj-kyambalo">
          {currentSite === "poznaj-kyambalo" ? (
            <li className={styles.selected}>Poznaj Kyambalo</li>
          ) : (
            <li>Poznaj Kyambalo</li>
          )}
        </Link>
        <Link href="./wspolpraca">
          {currentSite === "wspolpraca" ? (
            <li className={styles.selected}>Współpraca</li>
          ) : (
            <li>Współpraca</li>
          )}
        </Link>
        <Link href="./polityka-prywatnosci">
          {currentSite === "polityka-prywatnosci" ? (
            <li className={styles.selected}>Polityka prywatności</li>
          ) : (
            <li>Polityka prywatności</li>
          )}
        </Link>
        <Link href="./kontakt">
          {currentSite === "kontakt" ? (
            <li className={styles.selected}>Kontakt</li>
          ) : (
            <li>Kontakt</li>
          )}
        </Link>
      </ul>
    </footer>
  );
}

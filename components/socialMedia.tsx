import { ReactElement } from "react";
import styles from "../styles/socials.module.scss";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyComponent(): ReactElement {
  return (
    <nav className={styles.social}>
      <ul>
        <li>
          <a
            className={styles.link}
            href="https://www.facebook.com/kyambalo/"
            target="_blank"
          >
            <p>Facebook</p>
            <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://www.instagram.com/kyambalo_arcydzielorakludzkich/"
            target="_blank"
          >
            <p>Instagram</p>
            <FontAwesomeIcon icon={faInstagram} className={styles.instagram} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

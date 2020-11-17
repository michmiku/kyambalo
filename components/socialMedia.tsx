import { ReactElement } from "react";
import styles from "../styles/socials.module.scss";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyComponent(): ReactElement {
  return (
    <nav className={styles.social}>
      <ul>
        <li className={styles.facebook}>
          <a
            className={styles.link}
            href="https://www.facebook.com/kyambalo/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
            <p>Facebook</p>
          </a>
        </li>
        <li className={styles.instagram}>
          <a
            className={styles.link}
            href="https://www.instagram.com/kyambalo_arcydzielorakludzkich/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <p>Instagram</p>
          </a>
        </li>
        <li className={styles.youtube}>
          <a
            className={styles.link}
            href="https://www.youtube.com/channel/UCgCbq5ZGoLe0Qfearg1z4zw/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
            <p>Youtube</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

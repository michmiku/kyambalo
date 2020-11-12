import styles from "../styles/header.module.scss";
import { Image } from "cloudinary-react";

export default function Header({ img, tytul }) {
  return (
    <header className={styles.header}>
      <Image src={"/background-images/" + img} alt="background" width="auto" />
      <div className={styles.img}>
        <h1>{tytul}</h1>
      </div>
    </header>
  );
}

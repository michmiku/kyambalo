import styles from "../styles/header.module.scss";
import { Image } from "cloudinary-react";

export default function Header({ img, tytul }) {
  return (
    <header className={styles.header}>
      <Image
        cloudName="kyambalo"
        publicId={"background-images/" + img}
        alt="Kyambalo background"
        width="auto"
        preload="true"
        secure={true}
      />
      <div className={styles.img}>
        <h1>{tytul}</h1>
      </div>
    </header>
  );
}

import styles from "../styles/header.module.scss";

export default function Header({ img, tytul }) {
  return (
    <header className={styles.header}>
      <div
        className={styles.img}
        style={{ backgroundImage: "url(background-images/" + img + ")" }}
      >
        <h1>{tytul}</h1>
      </div>
    </header>
  );
}

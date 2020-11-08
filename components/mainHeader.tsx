import styles from "../styles/Home.module.scss";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function Header({ files, path }) {
  return (
    <header className={styles.header}>
      <Carousel>
        {files.map((file, key) => (
          <Carousel.Item key={key}>
            <Image
              src={path + file}
              alt={file}
              width={2400}
              height={1000}
              className={styles.img}
              quality={100}
              loading="eager"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.logo}>
        <Image src="/Kyambalo.png" alt="logo" width={630} height={260} />
      </div>
    </header>
  );
}

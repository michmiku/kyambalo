import styles from "../styles/Home.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "cloudinary-react";

export default function Header({ files, path }) {
  return (
    <header className={styles.header}>
      <Carousel>
        {files.map((file, key) => (
          <Carousel.Item key={key}>
            {console.log(file)}
            <Image cloudName="kyambalo" publicId={file} alt="kyambalo" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.logo}>
        <Image src="/Kyambalo.png" alt="logo" width={630} height={260} />
      </div>
    </header>
  );
}

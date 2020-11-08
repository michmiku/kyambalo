import styles from "../styles/images.module.scss";
import Image from "next/image";

export default function Images({ files, path }) {
  return (
    <div className={styles.grid}>
      {files.map((image, key) => (
        <div key={key}>
          <Image src={path + image} alt={image} width={300} height={230} />
        </div>
      ))}
    </div>
  );
}

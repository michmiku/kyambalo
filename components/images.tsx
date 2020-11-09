import styles from "../styles/images.module.scss";
import Image from "next/image";

export default function Images({ files, path, handleClick }) {
  return (
    <div className={styles.grid}>
      {files.map((image, key) => (
        <div key={key} onClick={(e) => handleClick(image, path, true, e)}>
          <Image
            src={path + image.fileName}
            alt={image}
            width={300}
            height={230}
          />
        </div>
      ))}
    </div>
  );
}

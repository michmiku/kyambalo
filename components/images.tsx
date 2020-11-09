import styles from "../styles/images.module.scss";
import Image from "next/image";

export default function Images({ files, alt, path, handleClick }) {
  return (
    <div className={styles.grid}>
      {files.map((image, key) => (
        <div key={key} onClick={() => handleClick(image, alt, path, true, key)}>
          <Image
            src={path + image.fileName}
            alt={alt}
            width={300}
            height={230}
          />
        </div>
      ))}
    </div>
  );
}

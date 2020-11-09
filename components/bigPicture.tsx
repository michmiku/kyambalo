import styles from "../styles/bigPicture.module.scss";
import Image from "next/image";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Images({ file, path, handleClick }) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faTimes}
        className={styles.close}
        onClick={() => {
          handleClick("", "", false);
        }}
      />
      <div className={styles.imgContainer}>
        <Image
          src={path + file.fileName}
          alt="bigPicture"
          width={file.size.width}
          height={file.size.height}
        />
      </div>
    </div>
  );
}

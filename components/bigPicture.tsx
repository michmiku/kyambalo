import styles from "../styles/bigPicture.module.scss";
import { Image } from "cloudinary-react";

import {
  faTimes,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Images({ file, alt, path, handleClick, files, id }) {
  const [image, setImage] = useState({
    id,
  });
  const handleArrowClick = (arrow) => {
    let newId;
    if (arrow === "right") {
      if (image.id === files.length - 1) {
        newId = 0;
      } else {
        newId = image.id + 1;
      }
    } else {
      if (image.id === 0) {
        newId = files.length - 1;
      } else {
        newId = image.id - 1;
      }
    }
    console.log(image.id, newId);
    console.log(path + files[image.id].fileName);
    setImage({
      id: newId,
    });
  };

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faTimes}
        className={styles.close}
        onClick={() => {
          handleClick("", "", false);
        }}
      />
      image, alt, path, true, key
      <FontAwesomeIcon
        icon={faChevronRight}
        className={styles.rightArrow}
        onClick={() => {
          handleArrowClick("right");
        }}
      />
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={styles.leftArrow}
        onClick={() => {
          handleArrowClick("left");
        }}
      />
      <div className={styles.imgContainer}>
        {console.log(files[image.id])}
        <Image
          cloudName="kyambalo"
          publicId={files[image.id]}
          alt={alt}
          key={image.id}
          width="auto"
          secure={true}
        />
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import styles from "../styles/navbar.module.scss";
import { Image } from "cloudinary-react";

const { locales } = i18nConfig;
export default function ChangeLanguage() {
  return (
    <div className={styles.languageContainer}>
      <Link href="/" locale={"pl"} key={"pl"}>
        <div>
          <Image
            src="/pl.png"
            alt="Polski język"
            width={20}
            height={11}
            loading="eager"
          />
        </div>
      </Link>
      <Link href="/en" locale={"en"} key={"en"}>
        <div>
          <Image
            src="/gb.png"
            alt="Angielski język"
            width={20}
            height={11}
            loading="eager"
          />
        </div>
      </Link>
    </div>
  );
}

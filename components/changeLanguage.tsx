import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import styles from "../styles/navbar.module.scss";
import { Image } from "cloudinary-react";

const { locales } = i18nConfig;
export default function ChangeLanguage({ currentSite }) {
  return (
    <div className={styles.languageContainer}>
      <Link
        href={"/" + currentSite + ""}
        locale={"pl"}
        key={"pl"}
        scroll={false}
      >
        <div>
          <Image
            src="/pl.png"
            alt="Polski język"
            width={20}
            height={11}
            loading="eager"
            secure={true}
          />
        </div>
      </Link>
      <Link
        href={"/" + currentSite + ""}
        locale={"en"}
        key={"en"}
        scroll={false}
      >
        <div>
          <Image
            src="/gb.png"
            alt="Angielski język"
            width={20}
            height={11}
            loading="eager"
            secure={true}
          />
        </div>
      </Link>
    </div>
  );
}

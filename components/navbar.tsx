import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLanguage from "../components/changeLanguage";
import useTranslation from "next-translate/useTranslation";
import { Image } from "cloudinary-react";

function Navbar({ currentSite }: any) {
  const { t, lang } = useTranslation();
  const [menuStatus, setMenuStatus] = useState(styles.menuOff);
  const [dimmedBackgroundStatus, setDimmedBackgroundStatus] = useState(
    styles.dimmedBackgroundOff
  );
  const menu: any = useRef(null);
  const navbar: any = useRef(null);
  const handleMenuClick = () => {
    menuStatus == styles.menuOn
      ? (setMenuStatus(styles.menuOff),
        setDimmedBackgroundStatus(styles.dimmedBackgroundOff))
      : (setMenuStatus(styles.menuOn),
        setDimmedBackgroundStatus(styles.dimmedBackgroundOn));
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarScroll);
    if (window.pageYOffset === 0) {
      navbar.current.style.backgroundColor = "transparent";
    } else if (window.pageYOffset !== 0) {
      navbar.current.style.backgroundColor = "rgb(43, 23, 16)";
    }
  }, []);
  const navbarScroll = () => {
    if (navbar.current !== null) {
      if (window.pageYOffset === 0) {
        navbar.current.style.backgroundColor = "transparent";
      } else if (window.pageYOffset !== 0) {
        navbar.current.style.backgroundColor = "rgb(43, 23, 16)";
      }
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar} ref={navbar}>
        <Link href="./">
          <Image src="/navbar-logo.svg" alt="logo" width="auto" />
        </Link>
        <ul className={styles.navbarMenu}>
          <Link href="./poznaj-kyambalo">
            <li
              className={
                currentSite === "poznaj-kyambalo" ? styles.selected : null
              }
            >
              <span className={`${styles.hover} ${styles.hover3}`}>
                {t("common:link1")}
              </span>
            </li>
          </Link>
          <Link href="./nasz-material">
            <li
              className={
                currentSite === "nasz-material" ? styles.selected : null
              }
            >
              <span className={`${styles.hover} ${styles.hover3}`}>
                {t("common:link2")}
              </span>
            </li>
          </Link>
          <Link href="./architektura-wnetrz">
            <li
              className={
                currentSite === "architektura-wnetrz" ? styles.selected : null
              }
            >
              <span className={`${styles.hover} ${styles.hover3}`}>
                {t("common:link3")}
              </span>
            </li>
          </Link>
          <Link href="./wspolpraca">
            <li
              className={currentSite === "wspolpraca" ? styles.selected : null}
            >
              <span className={`${styles.hover} ${styles.hover3}`}>
                {t("common:link4")}
              </span>
            </li>
          </Link>
          <Link href="./showroom">
            <li className={currentSite === "showroom" ? styles.selected : null}>
              <span className={`${styles.hover} ${styles.hover3}`}>
                {t("common:link5")}
              </span>
            </li>
          </Link>
          <Link href="./kontakt">
            <li className={currentSite === "kontakt" ? styles.selected : null}>
              <span className={`${styles.hover} ${styles.hover3}`}>
                {t("common:link6")}
              </span>
            </li>
          </Link>
        </ul>
        <ChangeLanguage currentSite={currentSite} />
        <div className={styles.hamburger} onClick={() => handleMenuClick()}>
          <div className={styles.topBun}></div>
          <div className={styles.meat}></div>
          <div className={styles.bottomBun}></div>
        </div>
      </div>

      <div
        className={dimmedBackgroundStatus}
        onClick={() => handleMenuClick()}
      ></div>
      <div className={menuStatus} ref={menu}>
        <div
          className={styles.closeIconContainer}
          onClick={() => handleMenuClick()}
        >
          <a className={styles.closeButton}>
            <div className={styles.in}>
              <div className={styles.closeButtonBlock}></div>
              <div className={styles.closeButtonBlock}></div>
            </div>
            <div className={styles.out}>
              <div className={styles.closeButtonBlock}></div>
              <div className={styles.closeButtonBlock}></div>
            </div>
          </a>
        </div>
        <ul>
          <Link href="./poznaj-kyambalo">
            <li
              className={
                currentSite === "poznaj-kyambalo" ? styles.selected : null
              }
              onClick={() => handleMenuClick()}
            >
              {t("common:link1")}
            </li>
          </Link>
          <Link href="./nasz-material">
            <li
              className={
                currentSite === "nasz-material" ? styles.selected : null
              }
              onClick={() => handleMenuClick()}
            >
              {t("common:link2")}
            </li>
          </Link>
          <Link href="./architektura-wnetrz">
            <li
              className={
                currentSite === "architektura-wnetrz" ? styles.selected : null
              }
              onClick={() => handleMenuClick()}
            >
              {t("common:link3")}
            </li>
          </Link>
          <Link href="./wspolpraca">
            <li
              className={currentSite === "wspolpraca" ? styles.selected : null}
              onClick={() => handleMenuClick()}
            >
              {t("common:link4")}
            </li>
          </Link>
          <Link href="./showroom">
            <li
              className={currentSite === "showroom" ? styles.selected : null}
              onClick={() => handleMenuClick()}
            >
              {t("common:link5")}
            </li>
          </Link>
          <Link href="./kontakt">
            <li
              className={currentSite === "kontakt" ? styles.selected : null}
              onClick={() => handleMenuClick()}
            >
              {t("common:link6")}
            </li>
          </Link>
        </ul>
        <ul className={styles.socialMedia}>
          <li>
            <div>
              <a
                className={styles.link}
                href="https://www.facebook.com/kyambalo/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.facebook}
                />
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                className={styles.link}
                href="https://www.instagram.com/kyambalo_arcydzielorakludzkich/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instagram}
                />
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                className={styles.link}
                href="https://www.youtube.com/channel/UCgCbq5ZGoLe0Qfearg1z4zw/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} className={styles.youtube} />
              </a>
            </div>
          </li>
        </ul>
        <ChangeLanguage currentSite={currentSite} />
      </div>
    </div>
  );
}
export default Navbar;

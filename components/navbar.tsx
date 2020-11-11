import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLanguage from "../components/changeLanguage";

function Navbar({ currentSite, t }: any) {
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
          <img src="navbar-logo.svg" />
        </Link>
        <ul className={styles.navbarMenu}>
          <Link href="./poznaj-kyambalo">
            <li
              className={
                currentSite === "poznaj-kyambalo" ? styles.selected : null
              }
            >
              <span className={`${styles.hover} ${styles.hover3}`}>
                Poznaj Kyambalo
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
                Nasz Materiał
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
                Architektura
              </span>
            </li>
          </Link>
          <Link href="./wspolpraca">
            <li
              className={currentSite === "wspolpraca" ? styles.selected : null}
            >
              <span className={`${styles.hover} ${styles.hover3}`}>
                Współpraca
              </span>
            </li>
          </Link>
          <Link href="./showroom">
            <li className={currentSite === "showroom" ? styles.selected : null}>
              <span className={`${styles.hover} ${styles.hover3}`}>
                Showroom
              </span>
            </li>
          </Link>
          <Link href="./kontakt">
            <li className={currentSite === "kontakt" ? styles.selected : null}>
              <span className={`${styles.hover} ${styles.hover3}`}>
                Kontakt
              </span>
            </li>
          </Link>
        </ul>
        <ChangeLanguage />
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
              Poznaj Kyambalo
            </li>
          </Link>
          <Link href="./nasz-material">
            <li
              className={
                currentSite === "nasz-material" ? styles.selected : null
              }
              onClick={() => handleMenuClick()}
            >
              Nasz Materiał
            </li>
          </Link>
          <Link href="./architektura-wnetrz">
            <li
              className={
                currentSite === "architektura-wnetrz" ? styles.selected : null
              }
              onClick={() => handleMenuClick()}
            >
              Architektura
            </li>
          </Link>
          <Link href="./wspolpraca">
            <li
              className={currentSite === "wspolpraca" ? styles.selected : null}
              onClick={() => handleMenuClick()}
            >
              Współpraca
            </li>
          </Link>
          <Link href="./showroom">
            <li
              className={currentSite === "showroom" ? styles.selected : null}
              onClick={() => handleMenuClick()}
            >
              Showroom
            </li>
          </Link>
          <Link href="./kontakt">
            <li
              className={currentSite === "kontakt" ? styles.selected : null}
              onClick={() => handleMenuClick()}
            >
              Kontakt
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
        </ul>
        <ChangeLanguage />
      </div>
    </div>
  );
}
export default Navbar;

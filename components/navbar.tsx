import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ currentSite }) {
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
            {currentSite === "poznaj-kyambalo" ? (
              <li className={styles.selected}>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Poznaj Kyambalo
                </span>
              </li>
            ) : (
              <li>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Poznaj Kyambalo
                </span>
              </li>
            )}
          </Link>
          <Link href="./nasz-material">
            {currentSite === "nasz-material" ? (
              <li className={styles.selected}>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Nasz Materiał
                </span>
              </li>
            ) : (
              <li>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Nasz Materiał
                </span>
              </li>
            )}
          </Link>
          <Link href="./architektura-wnetrz">
            {currentSite === "architektura-wnetrz" ? (
              <li className={styles.selected}>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Architektura
                </span>
              </li>
            ) : (
              <li>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Architektura
                </span>
              </li>
            )}
          </Link>
          <Link href="./wspolpraca">
            {currentSite === "wspolpraca" ? (
              <li className={styles.selected}>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Współpraca
                </span>
              </li>
            ) : (
              <li>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Współpraca
                </span>
              </li>
            )}
          </Link>
          <Link href="./showroom">
            {currentSite === "showroom" ? (
              <li className={styles.selected}>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Showroom
                </span>
              </li>
            ) : (
              <li>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Showroom
                </span>
              </li>
            )}
          </Link>
          <Link href="./kontakt">
            {currentSite === "kontakt" ? (
              <li className={styles.selected}>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Kontakt
                </span>
              </li>
            ) : (
              <li>
                <span className={`${styles.hover} ${styles.hover3}`}>
                  Kontakt
                </span>
              </li>
            )}
          </Link>
        </ul>
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
            {currentSite === "poznaj-kyambalo" ? (
              <li className={styles.selected} onClick={() => handleMenuClick()}>
                Poznaj Kyambalo
              </li>
            ) : (
              <li>Poznaj Kyambalo</li>
            )}
          </Link>
          <Link href="./nasz-material">
            {currentSite === "nasz-material" ? (
              <li className={styles.selected} onClick={() => handleMenuClick()}>
                Nasz Materiał
              </li>
            ) : (
              <li>Nasz Materiał</li>
            )}
          </Link>
          <Link href="./architektura-wnetrz">
            {currentSite === "architektura-wnetrz" ? (
              <li className={styles.selected} onClick={() => handleMenuClick()}>
                Architektura
              </li>
            ) : (
              <li>Architektura</li>
            )}
          </Link>
          <Link href="./wspolpraca">
            {currentSite === "wspolpraca" ? (
              <li className={styles.selected} onClick={() => handleMenuClick()}>
                Współpraca
              </li>
            ) : (
              <li>Współpraca</li>
            )}
          </Link>
          <Link href="./showroom">
            {currentSite === "showroom" ? (
              <li className={styles.selected} onClick={() => handleMenuClick()}>
                Showroom
              </li>
            ) : (
              <li>Showroom</li>
            )}
          </Link>
          <Link href="./kontakt">
            {currentSite === "kontakt" ? (
              <li className={styles.selected} onClick={() => handleMenuClick()}>
                Kontakt
              </li>
            ) : (
              <li>Kontakt</li>
            )}
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
      </div>
    </div>
  );
}

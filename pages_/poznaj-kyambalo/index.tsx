import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import { GetStaticProps } from "next";
import path from "path";
import Images from "../../components/images";
import Socials from "../../components/socialMedia";
import React, { useState } from "react";
import BigPicture from "../../components/bigPicture";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "public/poznaj-images")
  );
  const sizeOf = require("image-size");
  let files = [];
  fileNames.map((element, key) => {
    let dimensions = sizeOf(
      path.join(process.cwd(), "public/poznaj-images/" + element + "")
    );
    files = [
      ...files,
      {
        fileName: element,
        size: { width: dimensions.width, height: dimensions.height },
      },
    ];
  });
  return {
    props: {
      files,
    },
  };
};

export default function Home({ files }) {
  const { t, lang } = useTranslation();

  const [bigPicture, setBigPicture] = useState({
    file: "",
    alt: "",
    path: "",
    state: false,
    id: "",
  });

  const handleClick = (file, alt, path, state, id) => {
    setBigPicture({
      file,
      alt,
      path,
      state,
      id,
    });
  };
  const Component = (props) => <p {...props} />;
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>
            Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew
          </title>
          <meta
            name="description"
            content="Naszym celem było wprowadzenie na rynek polski materiału z kory afrykańskich drzew, wytwarzanego ręcznie przez ugandyjskich farmerów z plemienia Baganda."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link rel="canonical" href="https://kyambalo.com/poznaj-kyambalo/" />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew"
          />
          <meta
            property="og:description"
            content="Naszym celem było wprowadzenie na rynek polski materiału z kory afrykańskich drzew, wytwarzanego ręcznie przez ugandyjskich farmerów z plemienia Baganda."
          />
          <meta
            property="og:url"
            content="https://kyambalo.com/poznaj-kyambalo/"
          />
          <meta property="og:image" content="/unia.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Naszym celem było wprowadzenie na rynek polski materiału z kory afrykańskich drzew, wytwarzanego ręcznie przez ugandyjskich farmerów z plemienia Baganda."
          />
          <meta
            name="twitter:title"
            content="Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew"
          />
          <meta name="twitter:image" content="/unia.png" />
        </Head>
        <Navbar currentSite="poznaj-kyambalo" />
        <Header img="bg1.jpg" tytul="POZNAJ KYAMBALO" />
        {bigPicture.state ? (
          <BigPicture
            file={bigPicture.file}
            alt={bigPicture.alt}
            path={bigPicture.path}
            handleClick={handleClick}
            files={files}
            id={bigPicture.id}
          />
        ) : null}
        <main className={styles.main}>
          <Socials />
          <section className={styles.section}>
            <p>{t("poznaj-kyambalo:paragraf1")}</p>
            <p>{t("poznaj-kyambalo:paragraf2")}</p>
            <p>{t("poznaj-kyambalo:paragraf3")}</p>
            <p>{t("poznaj-kyambalo:paragraf4")}</p>
            <p>{t("poznaj-kyambalo:paragraf5")}</p>
            <p>{t("poznaj-kyambalo:paragraf6")}</p>
            <p>{t("poznaj-kyambalo:paragraf7")}</p>
            <div className={styles.unia}>
              <img src="unia.png" alt="unia" />
            </div>
            <Trans
              i18nKey="poznaj-kyambalo:paragraf8"
              components={[<Component />, <b />]}
            />

            <p>
              <strong>{t("poznaj-kyambalo:paragraf9")}</strong>
            </p>
            <ul>
              <li>
                <strong>{t("poznaj-kyambalo:li")}</strong>
              </li>
            </ul>
            <h2>{t("poznaj-kyambalo:naglowek")}</h2>
            <p>{t("poznaj-kyambalo:paragraf10")}</p>
            <p>{t("poznaj-kyambalo:paragraf11")}</p>
            <p>{t("poznaj-kyambalo:paragraf12")}</p>
            <Images
              files={files}
              alt="Poznaj Kyambalo"
              path="/poznaj-images/"
              handleClick={handleClick}
            />
          </section>

          <ContactForm />
        </main>

        <Footer currentSite="poznaj-kyambalo" />
      </div>
    </>
  );
}
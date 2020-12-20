import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import { GetStaticProps } from "next";
import Images from "../../components/images";
import Socials from "../../components/socialMedia";
import React, { useState } from "react";
import BigPicture from "../../components/bigPicture";
import useTranslation from "next-translate/useTranslation";
export const getStaticProps: GetStaticProps = async (context) => {
  const { cloudinary } = require("../../utils/cloudinary");
  const { resources } = await cloudinary.search
    .expression("folder:nasz-material-images")
    .sort_by("public_id", "asc")
    .max_results(100)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  return {
    revalidate: 10,
    props: {
      publicIds,
    },
  };
};

export default function Home({ publicIds }) {
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
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Materiał Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew
        </title>
        <meta
          name="description"
          content="Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://kyambalo.com/nasz-material/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Materiał Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością."
        />
        <meta property="og:url" content="https://kyambalo.com/nasz-material/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kyambalo/image/upload/v1/slider-images/1_z3wrpr"
          key="ogimage"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością."
        />
        <meta
          name="twitter:title"
          content="Materiał Kyambalo - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="nasz-material" />
      <Header img="bg2_ypr9d4" tytul={t("nasz-material:title")} />
      {bigPicture.state ? (
        <BigPicture
          file={bigPicture.file}
          alt={bigPicture.alt}
          path={bigPicture.path}
          handleClick={handleClick}
          files={publicIds}
          id={bigPicture.id}
        />
      ) : null}
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <p>{t("nasz-material:paragraf1")}</p>
          <p>{t("nasz-material:paragraf2")}</p>
          <p>{t("nasz-material:paragraf3")}</p>
          <p>{t("nasz-material:paragraf4")}</p>
          <p>
            {t("nasz-material:paragraf5")}
            życia.
          </p>
          <p>{t("nasz-material:paragraf6")}</p>
          <ul>
            <li>{t("nasz-material:li1")}</li>
            <li>{t("nasz-material:li2")}</li>
            <li>{t("nasz-material:li3")}</li>
            <li>{t("nasz-material:li4")}</li>
          </ul>
          <p>{t("nasz-material:paragraf7")}</p>
          <ul>
            <li>{t("nasz-material:li5")}</li>
            <li>{t("nasz-material:li6")}</li>
            <li>{t("nasz-material:li7")}</li>
            <li>{t("nasz-material:li8")}</li>
          </ul>
          <Images
            files={publicIds}
            alt="Materiał Kyambalo"
            path="/nasz-material-images/"
            handleClick={handleClick}
          />
        </section>
      </main>
      <ContactForm />
      <Footer currentSite="nasz-material" />
    </div>
  );
}

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
    .expression("folder:wspolpraca-images")
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
          Współpraca z Kyambalo - Arcydzieło rąk ludzkich - produkty z kory
          drzew
        </title>
        <meta
          name="description"
          content="Jeśli masz ciekawy pomysł jak wykorzystać nasz materiał w swoim projekcie, zdradź go nam! Zapraszamy osoby z pasją, które są otware na ciekawą współpracę."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://kyambalo.com/wspolpraca/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Współpraca Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Jeśli masz ciekawy pomysł jak wykorzystać nasz materiał w swoim projekcie, zdradź go nam! Zapraszamy osoby z pasją, które są otware na ciekawą współpracę."
        />
        <meta property="og:url" content="https://kyambalo.com/wspolpraca/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kyambalo/image/upload/v1/slider-images/1_z3wrpr"
          key="ogimage"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Jeśli masz ciekawy pomysł jak wykorzystać nasz materiał w swoim projekcie, zdradź go nam! Zapraszamy osoby z pasją, które są otware na ciekawą współpracę."
        />
        <meta
          name="twitter:title"
          content="Współpraca Kyambalo - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="wspolpraca" />
      <Header img="bg7_rt555w" tytul={t("wspolpraca:title")} />
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
          <p>{t("wspolpraca:paragraf1")}</p>
          <ul>
            <li>{t("wspolpraca:li1")}</li>
            <li>{t("wspolpraca:li2")}</li>
            <li>{t("wspolpraca:li3")}</li>
            <li>{t("wspolpraca:li4")}</li>
            <li>{t("wspolpraca:li5")}</li>
            <li>{t("wspolpraca:li6")}</li>
          </ul>
          <p>{t("wspolpraca:paragraf2")}</p>
          <p>{t("wspolpraca:paragraf3")}</p>
          <Images
            files={publicIds}
            alt="Współpraca z Kyambalo"
            path="/wspolpraca-images/"
            handleClick={handleClick}
          />
        </section>
      </main>
      <ContactForm />
      <Footer currentSite="wspolpraca" />
    </div>
  );
}

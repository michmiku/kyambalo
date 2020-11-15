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
    .expression("folder:wzory-probek-materialu-images")
    .sort_by("public_id", "asc")
    .max_results(100)
    .execute();
  const publicIds = resources.map((file) => file.public_id);

  return {
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
        <title>Wzory próbek materiału Kyambalo - Arcydzieło rąk ludzkich</title>
        <meta
          name="description"
          content="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element dekoracji wnętrz. Poznaj wzory próbek materiału Kyambalo."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link
          rel="canonical"
          href="https://kyambalo.com/wzory-probek-materialu/"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Wzory próbek materiału Kyambalo - Arcydzieło rąk ludzkich"
        />
        <meta
          property="og:description"
          content="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element dekoracji wnętrz. Poznaj wzory próbek materiału Kyambalo."
        />
        <meta
          property="og:url"
          content="https://kyambalo.com/wzory-probek-materialu/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element dekoracji wnętrz. Poznaj wzory próbek materiału Kyambalo."
        />
        <meta
          name="twitter:title"
          content="Wzory próbek materiału Kyambalo - Arcydzieło rąk ludzkich"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="wzory-probek-materialu" />
      <Header img="bg1_v3asut" tytul={t("wzory-probek-materialu:title")} />
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
          <Images
            files={publicIds}
            alt="Wzory próbek materiału Kyambalo"
            path="/wzory-probek-materialu-images/"
            handleClick={handleClick}
          />
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>

      <Footer currentSite="wzory-probek-materialu" />
    </div>
  );
}

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
          <p>
            Podoba Ci się nasza idea? Być może materiał Kyambalo oczarował Cię
            na tyle, że widzisz w nim dla siebie ciekawe wyzwanie? Jeżeli tak,
            to dołącz do nas! Jeśli jesteś:
          </p>
          <ul>
            <li>Architektem</li>
            <li>Dekoratorem wnętrz</li>
            <li>Twórcą galanterii</li>
            <li>Projektantem mody</li>
            <li>Producentem mebli</li>
            <li>Producentem mebli tapicerskich</li>
          </ul>
          <p>
            Jeśli masz ciekawy pomysł jak wykorzystać nasz materiał w swoim
            projekcie, zdradź go nam! Zapraszamy do kontaktu osoby z pasją,
            które są otwarte na innowację i ciekawą współpracę.
          </p>
          <p>
            Poniżej prezentujemy przykłady zastosowania materiału w różnych
            dziedzinach.
          </p>
          <Images
            files={publicIds}
            alt="Współpraca z Kyambalo"
            path="/wspolpraca-images/"
            handleClick={handleClick}
          />
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="wspolpraca" />
    </div>
  );
}

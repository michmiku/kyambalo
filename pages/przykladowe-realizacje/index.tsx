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

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "public/przykladowe-realizacje-images")
  );
  const sizeOf = require("image-size");
  let files = [];
  fileNames.map((element, key) => {
    let dimensions = sizeOf(
      path.join(
        process.cwd(),
        "public/przykladowe-realizacje-images/" + element + ""
      )
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
  const [bigPicture, setBigPicture] = useState({
    file: "",
    path: "",
    state: false,
  });

  const handleClick = (file, path, state, e) => {
    setBigPicture({
      file,
      path,
      state,
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Galeria realizacji Kyambalo - produkty z kory afrykańskich drzew
        </title>
        <meta
          name="description"
          content="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element wystroju i dekoracji wnętrz. Poznaj realizacje Kyambalo."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link
          rel="canonical"
          href="https://kyambalo.com/przykladowe-realizacje/"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Galeria realizacji Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element wystroju i dekoracji wnętrz. Poznaj realizacje Kyambalo."
        />
        <meta
          property="og:url"
          content="https://kyambalo.com/przykladowe-realizacje/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element wystroju i dekoracji wnętrz. Poznaj realizacje Kyambalo."
        />
        <meta
          name="twitter:title"
          content="Galeria realizacji Kyambalo - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="przykladowe-realizacje" />
      <Header img="bg1.jpg" tytul="PRZYKLADOWE REALIZACJE" />
      {bigPicture.state ? (
        <BigPicture
          file={bigPicture.file}
          path={bigPicture.path}
          handleClick={handleClick}
        />
      ) : null}
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <Images
            files={files}
            alt="Galeria realizacji Kyambalo"
            path="/przykladowe-realizacje-images/"
            handleClick={handleClick}
          />
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>

      <Footer currentSite="przykladowe-realizacje" />
    </div>
  );
}

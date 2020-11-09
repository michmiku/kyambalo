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
  const sizeOf = require("image-size");
  let files = [];
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "public/showroom-images")
  );
  fileNames.map((element, key) => {
    let dimensions = sizeOf(
      path.join(process.cwd(), "public/showroom-images/" + element + "")
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
        <title>Showroom - produkty z kory afrykańskich drzew</title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Zdjęcia nwowo wykonanego showroomu, który prezentuje przykładowe pozycję wykonane z naszej kory."
        />
        <link rel="canonical" href="https://kyambalo.com/showroom/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="photo gallery" />
        <meta
          property="og:title"
          content="Showroom - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Zdjęcia nwowo wykonanego showroomu, który prezentuje przykładowe pozycję wykonane z naszej kory."
        />
        <meta property="og:url" content="https://kyambalo.com/showroom/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Zdjęcia nwowo wykonanego showroomu, który prezentuje przykładowe pozycję wykonane z naszej kory."
        />
        <meta
          name="twitter:title"
          content="Showroom - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="showroom" />
      <Header img="bg3.jpg" tytul="Showroom" />
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
          <Images
            files={files}
            alt="Kyambalo - showroom"
            path="/showroom-images/"
            handleClick={handleClick}
          />
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="showroom" />
    </div>
  );
}

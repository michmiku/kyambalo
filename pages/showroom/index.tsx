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
  console.log(files);
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
        <title>Showroom - produkty z kory afrykańskich drzew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="showroom" />
      <Header img="bg3.jpg" tytul="Showroom" />
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

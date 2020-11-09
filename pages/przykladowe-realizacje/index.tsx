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

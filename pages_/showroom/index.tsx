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
    .expression("folder:showroom-images")
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
        <title>Showroom - produkty z kory afrykańskich drzew</title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Zdjęcia nowo wykonanego showroomu, który prezentuje przykładowe pozycję wykonane z naszej kory."
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
          content="Zdjęcia nowo wykonanego showroomu, który prezentuje przykładowe pozycję wykonane z naszej kory."
        />
        <meta property="og:url" content="https://kyambalo.com/showroom/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kyambalo/image/upload/v1/slider-images/1_z3wrpr"
          key="ogimage"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Zdjęcia nowo wykonanego showroomu, który prezentuje przykładowe pozycję wykonane z naszej kory."
        />
        <meta
          name="twitter:title"
          content="Showroom - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="showroom" />
      <Header img="bg3_rpjo4a" tytul={t("showroom:title")} />
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

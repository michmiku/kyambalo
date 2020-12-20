import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar";
import Section from "../components/section";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/subHeader";
import { GetStaticProps } from "next";
import Socials from "../components/socialMedia";
import useTranslation from "next-translate/useTranslation";
import { Image } from "cloudinary-react";

export const getStaticProps: GetStaticProps = async (context) => {
  const { cloudinary } = require("../utils/cloudinary");
  const { resources } = await cloudinary.search
    .expression("folder:slider-images")
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
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>
            Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich
            drzew
          </title>
          <meta
            name="google-site-verification"
            content="Bz2pmGMO_nr7ThiH5uz7ZvdN8XCHwO_vzw8oPxA9PAE"
          />
          <meta
            name="description"
            content="Niestety nie ma tu tego co szukasz. Spróbuj przjeść do innej sekcji naszej strony."
          ></meta>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich drzew"
          />
          <meta
            property="og:description"
            content="Niestety nie ma tu tego co szukasz. Spróbuj przjeść do innej sekcji naszej strony."
          />
          <meta property="og:url" content="https://kyambalo.com/" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/kyambalo/image/upload/v1/slider-images/6_dtstky"
            key="ogimage"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Niestety nie ma tu tego co szukasz. Spróbuj przjeść do innej sekcji naszej strony."
          />
          <meta
            name="twitter:title"
            content="Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich drzew"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://kyambalo.com/" />
        </Head>
        <Navbar currentSite="" />
        <Header img="bg4_vupemt" tytul="404" />
        <main className={styles.main}>
          <Socials />
          <section
            style={{
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ marginBottom: "30px" }}>{t("common:404")}</h1>
            <p>{t("common:site")}</p>
          </section>
        </main>
        <ContactForm />
        <Footer currentSite="" />
      </div>
    </>
  );
}

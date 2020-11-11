import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar";
import Section from "../components/section";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/mainHeader";
import { GetStaticProps } from "next";
import path from "path";
import Socials from "../components/socialMedia";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "public/slider-images")
  );
  return {
    props: {
      fileNames,
    },
  };
};

export default function Home({ fileNames }) {
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
            name="description"
            content="Kyambalo to w 100% naturalny materiał powstały w wyniku przetwarzania zewnętrznej kory drzewa Mutuba. Poznaj nasze materiały i produkty. Zapraszamy."
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
            content="Kyambalo to w 100% naturalny materiał powstały w wyniku przetwarzania zewnętrznej kory drzewa Mutuba. Poznaj nasze materiały i produkty. Zapraszamy."
          />
          <meta property="og:url" content="https://kyambalo.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Kyambalo to w 100% naturalny materiał powstały w wyniku przetwarzania zewnętrznej kory drzewa Mutuba. Poznaj nasze materiały i produkty. Zapraszamy."
          />
          <meta
            name="twitter:title"
            content="Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich drzew"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://kyambalo.com/" />
        </Head>
        <Navbar currentSite="home" />
        <Header files={fileNames} path="/slider-images/" />
        <main className={styles.main}>
          <Socials />
          <section className={styles.unia}>
            <Image
              src="/unia.png"
              alt="unia"
              width={1200}
              height={80}
              priority={true}
              loading="eager"
            />
          </section>
          <Section
            naglowek={t("home:section1.naglowek")}
            paragraf1={t("home:section1.paragraf1")}
            paragraf2={t("home:section1.paragraf2")}
            paragraf3={t("home:section1.paragraf3")}
            img="/home-images/IMG_4945.jpg"
          />
          <Section
            naglowek={t("home:section2.naglowek")}
            paragraf1={t("home:section2.paragraf1")}
            paragraf2={t("home:section2.paragraf2")}
            paragraf3={t("home:section2.paragraf3")}
            img="/home-images/IMG_4783.jpg"
          />
          <Section
            naglowek={t("home:section3.naglowek")}
            paragraf1={t("home:section3.paragraf1")}
            paragraf2=""
            paragraf3=""
            img="/home-images/MZ_043.jpg"
          />
          <ContactForm />
        </main>
        <Footer currentSite="home" />
      </div>
    </>
  );
}

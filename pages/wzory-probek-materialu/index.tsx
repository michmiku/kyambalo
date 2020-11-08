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

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "public/wzory-probek-materialu-images")
  );
  return {
    props: {
      fileNames,
    },
  };
};

export default function Home({ fileNames }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wzory próbek materiału Kyambalo - Arcydzieło rąk ludzkich</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="wzory-probek-materialu" />
      <Header img="bg1.jpg" tytul="WZORY PRÓBEK MATERIAŁU" />
      <main className={styles.main}>
        <Socials />

        <section className={styles.section}>
          <Images files={fileNames} path="/wzory-probek-materialu-images/" />
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>

      <Footer currentSite="wzory-probek-materialu" />
    </div>
  );
}

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
    path.join(process.cwd(), "public/przykladowe-realizacje-images")
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
        <title>
          Galeria realizacji Kyambalo - produkty z kory afrykańskich drzew
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="przykladowe-realizacje" />
      <Header img="bg1.jpg" tytul="PRZYKLADOWE REALIZACJE" />
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <Images files={fileNames} path="/przykladowe-realizacje-images/" />
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>

      <Footer currentSite="przykladowe-realizacje" />
    </div>
  );
}

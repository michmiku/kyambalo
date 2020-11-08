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
    path.join(process.cwd(), "public/wspolpraca-images")
  );
  return {
    props: {
      fileNames,
    },
  };
};

export default function Home({ fileNames }) {
  const path = "/wspolpraca-images/";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="wspolpraca" />
      <Header img="bg7.jpg" tytul="WSPÓŁPRACA Z KYAMBALO" />
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
          <Images files={fileNames} path="/wspolpraca-images/" />
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="wspolpraca" />
    </div>
  );
}

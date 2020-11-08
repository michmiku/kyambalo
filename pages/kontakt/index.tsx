import Head from "next/head";
import styles from "./styles.module.scss";
import Map from "../../components/map";
import Navbar from "../../components/navbar";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Header from "../../components/subHeader";
import Socials from "../../components/socialMedia";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kontakt Kyambalo - produkty z kory afrykańskich drzew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="kontakt" />
      <Header img="bg2.jpg" tytul="KONTAKT" />
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <div className={styles.mapContainer}>
            <Map />
          </div>
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>
      <Footer currentSite="kontakt" />
    </div>
  );
}

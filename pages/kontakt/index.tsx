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
        <meta
          name="description"
          content="Chcesz dowiedzieć się czegoś więcej na temat marki Kyambalo? Zapraszamy do kontaktu z nami i naszego showroomu w Krakowie przy ul. Zawiłej 69."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://kyambalo.com/kontakt/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Kontakt Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Chcesz dowiedzieć się czegoś więcej na temat marki Kyambalo? Zapraszamy do kontaktu z nami i naszego showroomu w Krakowie przy ul. Zawiłej 69."
        />
        <meta property="og:url" content="https://kyambalo.com/kontakt/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Chcesz dowiedzieć się czegoś więcej na temat marki Kyambalo? Zapraszamy do kontaktu z nami i naszego showroomu w Krakowie przy ul. Zawiłej 69."
        />
        <meta
          name="twitter:title"
          content="Kontakt Kyambalo - produkty z kory afrykańskich drzew"
        />
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

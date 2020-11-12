import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import { Image } from "cloudinary-react";
import Link from "next/link";
import Socials from "../../components/socialMedia";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Architektura wnętrz Kyambalo - Arcydzieło rąk ludzkich - produkty z
          kory drzew
        </title>
        <meta
          name="description"
          content="Z naszego materiału wytwarzamy niepowtarzalne pokrycia ścienne takie jak tapety, panele, oleiny do mebli i drzwi, a także elementy dekoracyjne wnętrz."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link
          rel="canonical"
          href="https://kyambalo.com/architektura-wnetrz/"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Architektura wnętrz Kyambalo - Arcydzieło rąk ludzkich"
        />
        <meta
          property="og:description"
          content="Z naszego materiału wytwarzamy niepowtarzalne pokrycia ścienne takie jak tapety, panele, oleiny do mebli i drzwi, a także elementy dekoracyjne wnętrz."
        />
        <meta
          property="og:url"
          content="https://kyambalo.com/architektura-wnetrz/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Z naszego materiału wytwarzamy niepowtarzalne pokrycia ścienne takie jak tapety, panele, oleiny do mebli i drzwi, a także elementy dekoracyjne wnętrz."
        />
        <meta
          name="twitter:title"
          content="Architektura wnętrz Kyambalo - Arcydzieło rąk ludzkich"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="architektura-wnetrz" />
      <Header img="bg5.jpg" tytul="ARCHITEKTURA WNĘTRZ" />
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <p>
            Z materiału wytwarzamy wyjątkowe i niepowtarzalne pokrycia ścienne
            takie jak tapety, panele, okleiny do mebli i drzwi, a także elementy
            dekoracyjne wnętrz, które doskonale znajdują zastosowanie w małych
            mieszkaniach, domach jednorodzinnych oraz przestrzeniach biurowych i
            miejscach użyteczności publicznej.
          </p>
          <p>
            Nasza firma zapewnia również kompleksową obsługę
            architektoniczno-wykonawczą, czyli od przygotowania projektu po
            realizację oraz montaż. Wszystkie projekty tworzymy przy współpracy
            z architektami oraz dekoratorami wnętrz, jeśli jednak masz swój
            własny oryginalny pomysł na aranżację, podziel się nim z nami, a my
            go dla Ciebie stworzymy !
          </p>
          <p>
            Przykładowe realizacje można już oglądać w naszym showroom’ie przy
            ul.Zawiłej 69.
          </p>
          <p>Serdecznie zapraszamy !</p>
        </section>
        <section className={styles.imgContainer}>
          <Link href="./przykladowe-realizacje">
            <div>
              <Image
                cloudName="kyambalo"
                publicId="architektura-images/Kyambalo-realizacje_gz7rj3"
                alt="Przykładowe realizacje"
              />
              <p>PRZYKŁADOWE REALIZACJE</p>
            </div>
          </Link>
          <Link href="./wzory-probek-materialu">
            <div>
              <Image
                cloudName="kyambalo"
                publicId="architektura-images/kyambalo-probki-materialow_svv2je"
                alt="Wzory próbek materiału"
              />
              <p>WZORY PRÓBEK MATERIAŁU</p>
            </div>
          </Link>
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="architektura-wnetrz" />
    </div>
  );
}

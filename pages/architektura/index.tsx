import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import Socials from "../../components/socialMedia";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="architektura" />
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
                src="/Kyambalo-realizacje.jpg"
                alt="PRZYKŁADOWE REALIZACJE"
                width={300}
                height={150}
              />
              <p>PRZYKŁADOWE REALIZACJE</p>
            </div>
          </Link>
          <Link href="./wzory-probek-materialu">
            <div>
              <Image
                src="/kyambalo-probki-materialow.jpg"
                alt="WZORY PRÓBEK MATERIAŁU"
                width={300}
                height={150}
              />
              <p>WZORY PRÓBEK MATERIAŁU</p>
            </div>
          </Link>
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="architektura" />
    </div>
  );
}

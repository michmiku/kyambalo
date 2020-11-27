import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import { Image } from "cloudinary-react";
import Link from "next/link";
import Socials from "../../components/socialMedia";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t, lang } = useTranslation();

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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kyambalo/image/upload/v1/slider-images/6_dtstky"
          key="ogimage"
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
      <Header img="bg5_lcnxaw" tytul={t("architektura-wnetrz:title")} />
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <p>{t("architektura-wnetrz:paragraf1")}</p>
          <p>{t("architektura-wnetrz:paragraf2")}</p>
          <p>{t("architektura-wnetrz:paragraf3")}</p>
          <p>{t("architektura-wnetrz:paragraf4")}</p>
        </section>
        <section className={styles.imgContainer}>
          <Link href="./przykladowe-realizacje">
            <div>
              <Image
                cloudName="kyambalo"
                publicId="architektura-images/Kyambalo-realizacje_gz7rj3"
                alt="Przykładowe realizacje"
                secure={true}
              />
              <p>{t("architektura-wnetrz:link1")}</p>
            </div>
          </Link>
          <Link href="./wzory-probek-materialu">
            <div>
              <Image
                cloudName="kyambalo"
                publicId="architektura-images/kyambalo-probki-materialow_svv2je"
                alt="Wzory próbek materiału"
                secure={true}
              />
              <p>{t("architektura-wnetrz:link2")}</p>
            </div>
          </Link>
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="architektura-wnetrz" />
    </div>
  );
}

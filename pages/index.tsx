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
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich
          drzew
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="home" />
      <Header files={fileNames} path="/slider-images/" />
      <main className={styles.main}>
        <Socials />
        <section className={styles.unia}>
          <Image src="/unia.png" alt="unia" width={1200} height={80} />
        </section>
        <Section
          naglowek="Kyambalo – arcydzieło rąk ludzkich"
          paragraf1="KYAMBALO – w narzeczu jednego z plemion “szata”, “odzienie”."
          paragraf2="Produkt będący 600 letnim dziedzictwem plemienia Baganda . Wytwarzany
        ręcznie przez ugandyjskich farmerów w tradycyjny, niezmieniony przez
        wieki sposób poprzez pozyskanie odnawialnych płatów kory drzew
        należących do rodziny Moraceae (m.in. Ficus natalensis)"
          paragraf3="Arcydzieło ludzkich rąk, materiał w pełni naturalny i w 100 %
        ekologiczny, zawierający wyłącznie włókna roślinne. Pozyskiwany bez
        degradacji przyrodniczych zasobów oraz bez dodawania lub powstawania
        jakichkolwiek szkodliwych substancji. Idealnie spełniający postulaty tak
        ważnego w globalnym ujęciu trendu zrównoważonego rozwoju."
          img="IMG_4945.jpg"
        />
        <Section
          naglowek="Wyjątkowy materiał z wyjątkowego miejsca"
          paragraf1="Kyambalo składa się wyłącznie z włókien celulozy, które w efekcie długotrwałej i żmudnej obróbki tworzą jedyną w swoim rodzaju siatkę ułożonych w nieregularny sposób nici."
          paragraf2="W końcowej fazie produkcji układają się one w unikalną oraz niepowtarzalną strukturę."
          paragraf3="Proces powstawania materiału jest skomplikowany i bardzo czasochłonny. Wytwarzany jest w tradycyjny sposób, poprzez usuwanie płatów wewnętrznej kory drzewa figowego. Jest ona pozyskiwana bez uszkodzenia rdzenia drzewa. Dodatkowo, w celu zabezpieczenia pnia, jest on owijany liśćmi bananowca, które chronią go przed wysuszeniem zapewniając mu jednocześnie odpowiednią ilość wilgoci."
          img="IMG_4783.jpg"
        />
        <Section
          naglowek="Niespotykana architektura wnętrz"
          paragraf1="Materiał Kyambalo ze względu na liczne możliwości użytkowe doskonale sprawdza się jako element wystroju i dekoracji wnętrz. Wytwarzamy z niego wyjątkowe i niepowtarzalne pokrycia ścienne takie jak tapety, panele, oleiny do mebli i drzwi, a także elementy dekoracyjne wnętrz, które doskonale znajdują zastosowanie w małych mieszkaniach, domach jednorodzinnych oraz przestrzeniach biurowych i miejscach użyteczności publicznej."
          paragraf2=""
          paragraf3=""
          img="MZ_043.jpg"
        />
        <ContactForm />
      </main>
      <Footer currentSite="home" />
    </div>
  );
}

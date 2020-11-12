import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import { GetStaticProps } from "next";
import Images from "../../components/images";
import Socials from "../../components/socialMedia";
import React, { useState } from "react";
import BigPicture from "../../components/bigPicture";
import useTranslation from "next-translate/useTranslation";
export const getStaticProps: GetStaticProps = async (context) => {
  const { cloudinary } = require("../../utils/cloudinary");
  const { resources } = await cloudinary.search
    .expression("folder:nasz-material-images")
    .sort_by("public_id", "desc")
    .max_results(100)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  return {
    props: {
      publicIds,
    },
  };
};

export default function Home({ publicIds }) {
  const { t, lang } = useTranslation();

  const [bigPicture, setBigPicture] = useState({
    file: "",
    alt: "",
    path: "",
    state: false,
    id: "",
  });

  const handleClick = (file, alt, path, state, id) => {
    setBigPicture({
      file,
      alt,
      path,
      state,
      id,
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Materiał Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew
        </title>
        <meta
          name="description"
          content="Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://kyambalo.com/nasz-material/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Materiał Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością."
        />
        <meta property="og:url" content="https://kyambalo.com/nasz-material/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością."
        />
        <meta
          name="twitter:title"
          content="Materiał Kyambalo - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="nasz-material" />
      <Header img="bg2.jpg" tytul={t("nasz-material:title")} />
      {bigPicture.state ? (
        <BigPicture
          file={bigPicture.file}
          alt={bigPicture.alt}
          path={bigPicture.path}
          handleClick={handleClick}
          files={publicIds}
          id={bigPicture.id}
        />
      ) : null}
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <p>
            Kyambalo składa się wyłącznie z włókien celulozy, które w efekcie
            długotrwałej i żmudnej obróbki tworzą jedyną w swoim rodzaju siatkę
            ułożonych w nieregularny sposób nici.
          </p>
          <p>
            W końcowej fazie produkcji układają się one w unikalną oraz
            niepowtarzalną strukturę.
          </p>
          <p>
            Proces powstawania materiału jest skomplikowany i bardzo
            czasochłonny. Wytwarzany jest w tradycyjny sposób, poprzez usuwanie
            płatów wewnętrznej kory drzewa figowego. Jest ona pozyskiwana bez
            uszkodzenia rdzenia drzewa. Dodatkowo, w celu zabezpieczenia pnia,
            jest on owijany liśćmi bananowca, które chronią go przed wysuszeniem
            zapewniając mu jednocześnie odpowiednią ilość wilgoci.
          </p>
          <p>
            Proces ten, jest potrzebny aby drzewo mogło szybko się regenerować .
            Pozyskane płaty kory, przetwarzane są przez doświadczonych farmerów
            poprzez dalszą obróbkę polegającą na zmiękczaniu i kształtowaniu.Tak
            uzyskany materiał jest parzony, a następnie, w trakcie żmudnego
            procesu obróbki, wielokrotnie uderzany różnej wielkości drewnianymi
            młotkami (mallet) w celu uzyskania należytej miękkości i gładkości
            faktury oraz jednolitego odcienia naturalnego koloru. W dalszej
            kolejności materiał jest suszony w promieniach równikowego słońca,
            co nadaje mu piękną bursztynową barwę. Odcień tej barwy zależy od
            czasu wystawiania go na działanie promieni słonecznych.
          </p>
          <p>
            Wart podkreślenia jest fakt olbrzymiej troski farmerów o drzewa.
            Pozyskiwanie kory jest ograniczane wyłącznie do jednego razu w roku
            i to tylko w porze deszczowej, gdy stopień wilgotności jest
            wystarczająco wysoki. W ten sposób roślina regeneruje się i w
            rezultacie proces może być powtarzany nawet do 40 razy w ciągu jej
            życia.
          </p>
          <p>
            Kyambalo oprócz swej wyjątkowości wynikającej z historii i procesu
            pozyskiwania, zachwyca swoją estetyką oraz niepowtarzalnością.
            Posiada również liczne właściwości użytkowe, które można wykorzystać
            w takich dziedzinach jak:
          </p>
          <ul>
            <li>
              ścienne pokrycia, parawany, panele, lekkie konstrukcje
              przeznaczone na targi, drzwi, akcesoria otoczenia w mieszkaniach
              oraz powierzchniach biurowych szczególnie podkreślane efektami
              świetlnymi,
            </li>
            <li>częściowy substytut forniru, skóry, tkanin czy papieru,</li>
            <li>
              materiał mocno zróżnicowany pod względem potencjału w zastosowaniu
              w marketingu (wizytówki, karty win, menu, ozdobne opakowania)
            </li>
            <li>
              projektowanie mody, produkcja galanterii, introligatorstwo, branża
              obuwnicza.
            </li>
          </ul>
          <p>Walory materiału:</p>
          <ul>
            <li>
              odporność na ścieranie (wg. Testu Martindale’a DIN EN ISO 12947/2)
              : 700-13900 potarć,
            </li>
            <li>
              trwałość kolorów ( DIN EN ISO 105-X16): do klasy 5 w zależności od
              rodzaju Kyambalo,
            </li>
            <li>
              odporność na rozciąganie ( DIN EN ISO 13934-1): do 114,66 N, w
              zależności od rodzaju Kyambalo,
            </li>
            <li>
              posiada Atest Państwowego Zakładu Higieny NR HK/B/ 0318/ 01/2015.
            </li>
          </ul>
          <Images
            files={publicIds}
            alt="Materiał Kyambalo"
            path="/nasz-material-images/"
            handleClick={handleClick}
          />
        </section>
        <ContactForm />
      </main>

      <Footer currentSite="nasz-material" />
    </div>
  );
}

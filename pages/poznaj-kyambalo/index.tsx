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
import React, { useState } from "react";
import BigPicture from "../../components/bigPicture";

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "public/poznaj-images")
  );
  const sizeOf = require("image-size");
  let files = [];
  fileNames.map((element, key) => {
    let dimensions = sizeOf(
      path.join(process.cwd(), "public/poznaj-images/" + element + "")
    );
    files = [
      ...files,
      {
        fileName: element,
        size: { width: dimensions.width, height: dimensions.height },
      },
    ];
  });
  return {
    props: {
      files,
    },
  };
};

export default function Home({ files }) {
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
          Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew
        </title>
        <meta
          name="description"
          content="Naszym celem było wprowadzenie na rynek polski materiału z kory afrykańskich drzew, wytwarzanego ręcznie przez ugandyjskich farmerów z plemienia Baganda."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://kyambalo.com/poznaj-kyambalo/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew"
        />
        <meta
          property="og:description"
          content="Naszym celem było wprowadzenie na rynek polski materiału z kory afrykańskich drzew, wytwarzanego ręcznie przez ugandyjskich farmerów z plemienia Baganda."
        />
        <meta
          property="og:url"
          content="https://kyambalo.com/poznaj-kyambalo/"
        />
        <meta property="og:image" content="/unia.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Naszym celem było wprowadzenie na rynek polski materiału z kory afrykańskich drzew, wytwarzanego ręcznie przez ugandyjskich farmerów z plemienia Baganda."
        />
        <meta
          name="twitter:title"
          content="Poznaj Kyambalo - Arcydzieło rąk ludzkich - produkty z kory drzew"
        />
        <meta name="twitter:image" content="/unia.png" />
      </Head>
      <Navbar currentSite="poznaj-kyambalo" />
      <Header img="bg1.jpg" tytul="POZNAJ KYAMBALO" />
      {bigPicture.state ? (
        <BigPicture
          file={bigPicture.file}
          alt={bigPicture.alt}
          path={bigPicture.path}
          handleClick={handleClick}
          files={files}
          id={bigPicture.id}
        />
      ) : null}
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <p>KYAMBALO – w narzeczu jednego z plemion “szata”, “odzienie”.</p>
          <p>
            Produkt będący 600 letnim dziedzictwem plemienia Baganda .
            Wytwarzany ręcznie przez ugandyjskich farmerów w tradycyjny,
            niezmieniony przez wieki sposób poprzez pozyskanie odnawialnych
            płatów kory drzew należących do rodziny Moraceae (m.in. Ficus
            natalensis)
          </p>
          <p>
            Arcydzieło ludzkich rąk, materiał w pełni naturalny i w 100 %
            ekologiczny, zawierający wyłącznie włókna roślinne. Pozyskiwany bez
            degradacji przyrodniczych zasobów oraz bez dodawania lub powstawania
            jakichkolwiek szkodliwych substancji. Idealnie spełniający postulaty
            tak ważnego w globalnym ujęciu trendu zrównoważonego rozwoju.
          </p>
          <p>
            Proces wytwarzania od wieków kultywowany pośród lokalnych
            społeczności stanowi niezaprzeczalny element kulturowego dziedzictwa
            zarówno plemion Baganda, jak i samej Ugandy.
          </p>
          <p>
            Jako wyjątkowy i niepowtarzalny w skali światowej oraz stanowiący
            podstawę do zachowania dziedzictwa kulturowego Afryki, został on
            doceniony przez światową organizację UNESCO, stojącą m.in. na straży
            dokonań kulturowych ludzkości. Objęła go ona swoim patronatem w 2008
            roku i jako bezcenne osiągnięcie człowieka wpisała na listę
            Niematerialnego Dziedzictwa Kulturowego Ludzkości, aby uchronić go i
            ocalić od zapomnienia.
          </p>
          <p>
            Zafascynowani tradycją jego powstawania, wyglądem oraz wizją
            możliwości, jakie daje, zaczęliśmy sprowadzać go do Polski. Tworzymy
            z niego piękne, niepowtarzalne, a przede wszystkim bliskie naturze
            przedmioty oraz elementy aranżacji i wystroju wnętrz. Nie
            przeszkadza nam w tym nawet fakt, że materiał w swej dziewiczej
            postaci posiada pewne niedoskonałości, nad którymi ciągle pracujemy,
            testując i badając jego możliwości. W procesie badawczym uczestniczą
            firmy i instytuty naukowe w Polsce i za granicą, m.in. współpracują
            z nami Instytut Przemysłu Skórzanego w Łodzi oddział w Krakowie oraz
            firma STERN z Dąbrowy Górniczej. Dostawcą niektórych technologii
            jest także zaprzyjaźnione, niemiecko-ugandyjskie rodzinne
            przedsięwzięcie Barongo-Heintz.
          </p>
          <p>
            Oprócz pomocy niezależnych firm badawczych i instytutów nasza firma
            w 2015 r. otrzymała wsparcie z PARP (badania w ramach opracowania
            technologii przetwórstwa naturalnego materiału otrzymywanego z kory
            figowca na wyroby galanteryjne, obuwie i inne), a w 2018 r. z
            Małopolskich Funduszy Europejskich (Modyfikacja technologii
            przetwórstwa materiału z kory drzew egzotycznych).
          </p>
          <div className={styles.unia}>
            <img src="unia.png" alt="unia" />
          </div>
          <p>
            Aktualnie, po wielu latach żmudnej pracy udało nam się opracować
            autorskie techniki ulepszeń bez ingerencji w jego strukturę.
            Uzyskaliśmy zadowalające wyniki, jeśli chodzi o jego odporność na
            wilgoć i ścieranie. Dysponujemy również technologią zmiany
            naturalnej bursztynowej barwy na inne kolory i wzory. Na materiał
            posiadamy <strong>Atest Polskiego Związku Higieny</strong>, który
            poświadcza jego w pełni 100% naturalne pochodzenie.
          </p>
          <p>
            <strong>
              W dniu 29.05.2020 w Urzędzie Patentowym Rzeczpospolitej Polskiej
              został złożony wniosek o udzielenie patentu na nowatorskie
              rozwiązania :
            </strong>
          </p>
          <ul>
            <li>
              <strong>
                Sposoby obróbki kory figowca z gatunku F.natalensis oraz
                gatunków pokrewnych (zgłoszenie nr P.434132).
              </strong>
            </li>
          </ul>
          <h2>Pomysł na biznes, czy coś więcej?</h2>
          <p>
            Naszym celem i misją jest również konkretna i realna pomoc farmerom,
            poprzez zagwarantowanie im regularnego zapotrzebowania na materiał.
            Efektem tak rozumianej polityki ma być także rewitalizacja obszarów
            rolnych, na których sadzono by młode figowce mające w przyszłości
            zapewnić odnawialne źródło surowca do powstawania kolejnych
            tekstyliów.
          </p>
          <p>
            Wszystko to z poszanowaniem zarówno ludzkiej godności, jak i
            kulturowej spuścizny tego kraju, pozostawionej dzisiejszym farmerom
            przez minione pokolenia. Ma to być także element naszej świadomej
            polityki zapobiegający opuszczaniu przez farmerów swych rodzinnych
            stron w ramach zarobkowej emigracji.
          </p>
          <p>
            Jesteśmy dumni, że jako jedni z nielicznych piszemy historię
            Kyambalo, starając się nadać mu należytą rangę w Polsce, w Europie,
            a nawet na świecie.
          </p>
          <Images
            files={files}
            alt="Poznaj Kyambalo"
            path="/poznaj-images/"
            handleClick={handleClick}
          />
        </section>

        <ContactForm />
      </main>

      <Footer currentSite="poznaj-kyambalo" />
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar";
import Section from "../components/section";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/mainHeader";
import { GetStaticProps } from "next";
import Socials from "../components/socialMedia";
import useTranslation from "next-translate/useTranslation";
import { Image } from "cloudinary-react";

export const getStaticProps: GetStaticProps = async (context) => {
  const { cloudinary } = require("../utils/cloudinary");
  const { resources } = await cloudinary.search
    .expression("folder:slider-images")
    .sort_by("public_id", "asc")
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
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>
            Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich
            drzew
          </title>
          <meta
            name="google-site-verification"
            content="Bz2pmGMO_nr7ThiH5uz7ZvdN8XCHwO_vzw8oPxA9PAE"
          />
          <meta
            name="description"
            content="Kyambalo to w 100% naturalny materiał powstały w wyniku przetwarzania zewnętrznej kory drzewa Mutuba. Poznaj nasze materiały i produkty. Zapraszamy."
          ></meta>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich drzew"
          />
          <meta
            property="og:description"
            content="Kyambalo to w 100% naturalny materiał powstały w wyniku przetwarzania zewnętrznej kory drzewa Mutuba. Poznaj nasze materiały i produkty. Zapraszamy."
          />
          <meta property="og:url" content="https://kyambalo.com/" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/kyambalo/image/upload/v1/slider-images/6_dtstky"
            key="ogimage"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Kyambalo to w 100% naturalny materiał powstały w wyniku przetwarzania zewnętrznej kory drzewa Mutuba. Poznaj nasze materiały i produkty. Zapraszamy."
          />
          <meta
            name="twitter:title"
            content="Kyambalo - Arcydzieło rąk ludzkich - produkty z kory afrykańskich drzew"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://kyambalo.com/" />
        </Head>
        <Navbar currentSite="" />
        <Header files={publicIds} path="/slider-images/" />
        <main className={styles.main}>
          <Socials />
          <section className={styles.unia}>
            <Image
              cloudName="kyambalo"
              publicId="shared-images/unia_rtiaip"
              alt="unia"
              secure={true}
            />
          </section>
          <Section
            naglowek={t("home:section1.naglowek")}
            paragraf1={t("home:section1.paragraf1")}
            paragraf2={t("home:section1.paragraf2")}
            paragraf3={t("home:section1.paragraf3")}
            img="home-images/IMG_4945_cfmfb3"
          />
          <Section
            naglowek={t("home:section2.naglowek")}
            paragraf1={t("home:section2.paragraf1")}
            paragraf2={t("home:section2.paragraf2")}
            paragraf3={t("home:section2.paragraf3")}
            img="home-images/IMG_4783_mybzbr"
          />
          <Section
            naglowek={t("home:section3.naglowek")}
            paragraf1={t("home:section3.paragraf1")}
            paragraf2=""
            paragraf3=""
            img="home-images/MZ_043_mzhoha"
          />
          <ContactForm />
        </main>
        <Footer currentSite="" />
      </div>
    </>
  );
}

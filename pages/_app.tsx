import React, { FC } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>;
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="WYRAŻAM ZGODĘ"
        cookieName="cookies"
        style={{ background: "#2B373B", fontSize: "0.7em" }}
        buttonStyle={{
          color: "white",
          fontSize: "0.7em",
          background: "rgb(150, 97, 61)",
        }}
      >
        Wykorzystujemy pliki cookies („ciasteczka”) własne i firm zewnętrznych,
        analizując sposób użytkowania naszego portalu, w celu ulepszenia naszych
        usług i ułatwienia Państwu korzystanie z nich. Dalsze korzystanie z tej
        witryny oznacza akceptację plików cookies. Więcej informacji można
        znaleźć w dziale{" "}
        <Link href="/polityka-prywatnosci">„Informacja o plikach cookies”</Link>{" "}
      </CookieConsent>
    </React.Fragment>
  );
};

export default MyApp;

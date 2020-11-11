import React, { FC } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>;
  return <Component {...pageProps} />;
};

export default MyApp;

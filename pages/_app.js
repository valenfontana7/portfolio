import "bootswatch/dist/cosmo/bootstrap.min.css";
import React from "react";
import Head from "next/head";
import "../global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

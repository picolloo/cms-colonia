import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Colônia Z-33</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

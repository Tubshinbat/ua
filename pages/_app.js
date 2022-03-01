import Head from "next/head";
import Script from "next/script";
const isServer = typeof window === "undefined";
import { SWRConfig } from "swr";
const WOW = !isServer ? require("wow.js") : null;

import "styles/hovereffects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/banner.css";
import "styles/globals.css";
import "styles/newsBanner.css";
import "styles/book.css";

import "animate.css";
import { useEffect } from "react";
import CustomCursor from "components/cursor";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  }, []);

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 1000,
          fetcher,
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
              // alert("Алдаа");
            }
          },
        }}
      >
        <Head>
          <link href="/fonts/fonts.css" rel="stylesheet" crossorigin />
          <link href="/css/all.min.css" rel="stylesheet" crossorigin />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
            crossorigin
          ></link>
          <script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
          ></script>

          <Script src="/js/all.min.js" crossorigin />
        </Head>
        <CustomCursor />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;

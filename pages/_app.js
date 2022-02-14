import Head from "next/head";
import Script from "next/script";

import "styles/hovereffects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/banner.css";
import "styles/globals.css";
import "styles/newsBanner.css";

import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="/fonts/fonts.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
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
        <Script src="/js/all.min.js" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

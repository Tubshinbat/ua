import Head from "next/head";
import Script from "next/script";
const isServer = typeof window === "undefined";
import { SWRConfig } from "swr";
const WOW = !isServer ? require("wow.js") : null;
import { useCookies } from "react-cookie";
import Router from "next/router";
import Nprogress from "nprogress";
import { useRouter } from "next/router";
import * as gtag from "lib/gtag";

import TimeAgo from "javascript-time-ago";
import mn from "javascript-time-ago/locale/mn.json";
import ru from "javascript-time-ago/locale/ru.json";
TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(ru);

import "nprogress/nprogress.css";
import "styles/hovereffects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/banner.css";
import "styles/globals.css";
import "styles/newsBanner.css";
import "styles/book.css";
import "styles/newNewsHome.css";
import "styles/NewsViewSlide.css";
import "animate.css";

import { useEffect } from "react";
import CustomCursor from "components/cursor";

Router.onRouteChangeStart = (url) => {
  Nprogress.start();
};

Router.onRouteChangeComplete = (url) => {
  Nprogress.done();
};

Router.onRouteChangeError = (url) => {
  Nprogress.done();
};

function MyApp({ Component, pageProps }) {
  const [cookies, setCookie, removeCookie] = useCookies(["language"]);
  useEffect(() => {
    new WOW().init();
    if (!cookies.language) setCookie("language", "mn", { path: "/" });
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

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher,
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
              console.log(error);
            }
          },
        }}
      >
        <Head>
          <link rel="stylesheet" href="/fonts/fonts.css" />
          <link rel="stylesheet" href="/css/all.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          ></link>
          <Script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossorigin
          ></Script>

          <Script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin
          ></Script>

          <Script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
          ></Script>

          <Script src="/js/all.min.js" crossorigin />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <CustomCursor />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;

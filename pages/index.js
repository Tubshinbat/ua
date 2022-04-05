import Head from "next/head";
import { useCookies } from "react-cookie";

import HomeHeader from "components/home-header";
import Slider from "components/home-slider";

import css from "styles/Home.module.css";
import HomeTopLinks from "components/home-top-links";
import HomeNeedLink from "components/home-needLink";
import { Fragment, useEffect, useState } from "react";
import HomeTopNews from "components/home-top-news";
import HomeStatic from "components/home-static";
import HomeFiles from "components/home-files";
import FooterPartners from "components/footer-partners";
import Footer from "components/footer";
import { getInfo } from "lib/webinfo";

export default ({ info }) => {
  const [cookies] = useCookies(["language"]);

  const [lang, setLang] = useState();

  useEffect(() => {
    if (info !== undefined && info !== null && !info) {
      console.log(info);
      console.log(cookies.language);
      if (info[cookies.language] === undefined) {
      } else setLang(cookies.language);
    }
  }, [info, cookies.language]);

  return (
    <Fragment>
      <Head>
        <title>
          {info &&
            info[lang] !== undefined &&
            info[lang].name &&
            info[lang].name}
        </title>
      </Head>

      <div className={css.HomeSection}>
        <HomeHeader />
        <Slider />
        <HomeTopLinks />
      </div>
      <HomeNeedLink />
      <HomeTopNews />
      <HomeStatic />
      <HomeFiles />
      <FooterPartners />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const { info } = await getInfo();

  return {
    props: {
      info,
    },
    revalidate: 10,
  };
};

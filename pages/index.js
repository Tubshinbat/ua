import Head from "next/head";
import { useCookies } from "react-cookie";

import HomeHeader from "components/home-header";
import Slider from "components/home-slider";

import css from "styles/Home.module.css";
import HomeTopLinks from "components/home-top-links";
import HomeNeedLink from "components/home-needLink";
import { Fragment } from "react";
import HomeTopNews from "components/home-top-news";
import HomeStatic from "components/home-static";
import HomeFiles from "components/home-files";
import FooterPartners from "components/footer-partners";
import Footer from "components/footer";
import { getInfo } from "lib/webinfo";

export default ({ info }) => {
  const [cookies] = useCookies(["language"]);

  return (
    <Fragment>
      <Head>
        <title>
          {info !== null && info[cookies.language] !== undefined
            ? info[cookies.language].name !== undefined &&
              info[cookies.language].name
            : (cookies.language === "mn" && info["eng"].name) ||
              (cookies.language === "eng" && info["mn"].name)}
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
    revalidate: 50,
  };
};

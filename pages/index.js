import Head from "next/head";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import HomeHeader from "components/home-header";
import Slider from "components/home-slider";

import css from "styles/Home.module.css";
import HomeTopLinks from "components/home-top-links";
import HomeNeedLink from "components/home-needLink";
import { Fragment, useEffect, useState } from "react";
import HomeTopNews from "components/home-top-news";
// import HomeStatic from "components/home-static";
import HomeFiles from "components/home-files";
import FooterPartners from "components/footer-partners";
import Footer from "components/footer";
import { getInfo } from "lib/webinfo";
import { langCheck } from "lib/language";
import HomeMedia from "components/home-media";

export default ({ info }) => {
  const [cookies] = useCookies(["language"]);
  const [lang, setLang] = useState();

  useEffect(() => {
    if (info !== undefined && info !== null) {
      if (info[cookies.language] === undefined) {
        cookies.language === "mn" ? setLang("eng") : setLang("mn");
      } else setLang(cookies.language);
    }
  }, [info, cookies.language]);

  return (
    <Fragment>
      <Head>
        <title>
          {info[langCheck(info)] !== undefined && info[langCheck(info)].name}
        </title>
        <meta property="og:url" content={`https://naog.lvg.mn`} />
        <meta
          property="og:title"
          content={
            info[langCheck(info)] !== undefined && info[langCheck(info)].name
          }
        />
        <meta
          property="og:description"
          content={
            info[langCheck(info)] !== undefined &&
            info[langCheck(info)].siteInfo
          }
        />
        <meta name="twitter:site" content="@National_Academy_Of_Governance" />
        <meta property="og:url" content={`https://naog.lvg.mn`} />
        <meta
          property="og:title"
          content={
            info[langCheck(info)] !== undefined && info[langCheck(info)].name
          }
        />
        <meta
          property="og:description"
          content={
            info[langCheck(info)] !== undefined &&
            info[langCheck(info)].siteInfo
          }
        />
      </Head>

      <div className={css.HomeSection}>
        <HomeHeader />
        <Slider />
        <HomeTopLinks />
      </div>
      <HomeNeedLink />
      <HomeTopNews />
      <HomeMedia />
      {/* <HomeStatic /> */}
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

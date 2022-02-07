import Head from "next/head";

import HomeHeader from "components/home-header";
import Slider from "components/home-slider";
import CustomCursor from "components/cursor";

import css from "styles/Home.module.css";
import HomeTopLinks from "components/home-top-links";

export default () => {
  return (
    <>
      <Head>
        <title> Удирдлагын академ </title>
      </Head>
      <CustomCursor />
      <div className={css.HomeSection}>
        <HomeHeader />

        <Slider />
        <HomeTopLinks />
      </div>
    </>
  );
};

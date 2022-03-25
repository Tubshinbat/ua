import Head from "next/head";
import { useCookies } from "react-cookie";
import Link from "next/link";

import { Fragment, useEffect, useState } from "react";
import FooterPartners from "components/footer-partners";
import Footer from "components/footer";
import HomeHeader from "components/home-header";
import PageHeader from "components/page-header";

import cssNews from "styles/News.module.css";
import css from "styles/Page.module.css";
import { getNews, getNewsMenus } from "lib/news";
import { getInfo } from "lib/webinfo";
import ReactTimeAgo from "react-time-ago";
import { useNews } from "hooks/use-news";

export default () => {
  return (
    <Fragment>
      <Head>
        <title></title>
      </Head>
      <HomeHeader />
      devloping
      <FooterPartners />
      <Footer />
    </Fragment>
  );
};

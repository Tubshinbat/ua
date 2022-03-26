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

export default ({ info, news, menus }) => {
  const [cookies] = useCookies(["language"]);
  const [infoLang, setinfoLang] = useState();

  useEffect(() => {
    if (info) {
      if (info[cookies.language] === undefined)
        cookies.language === "mn" ? setinfoLang("eng") : setinfoLang("mn");
      else setinfoLang(cookies.language);
    }
  }, [info, cookies.language]);

  const { news: topNews } = useNews(`limit=4&sort={ views: -1 }&star=true`);

  return (
    <Fragment>
      <Head>
        <title>
          {cookies.language === "mn" ? "Мэдээ мэдээлэл" : "News"} -{" "}
          {info[infoLang] && info[infoLang].name}
        </title>
      </Head>
      <HomeHeader />
      <PageHeader
        pageTitle={cookies.language === "mn" ? "Мэдээ мэдээлэл" : "News"}
      />
      <div className={`${cssNews.Page} animate__animated animate__fadeIn`}>
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className={cssNews.NewsList}>
                    {news &&
                      news.map((el) => {
                        let nlang;
                        if (el[cookies.language] === undefined) {
                          cookies.language === "mn"
                            ? (nlang = "eng")
                            : (nlang = "mn");
                        } else nlang = cookies.language;
                        return (
                          <div className={cssNews.NewsList__item} key={el.slug}>
                            <div className={cssNews.NewsList__imgBox}>
                              <Link href={`/news/${el.slug}`}>
                                <img
                                  src={`http://naog-admin.lvg.mn/rest/uploads/350x350/${el.pictures[0]}`}
                                />
                              </Link>
                            </div>
                            <div className={cssNews.NewsList__detials}>
                              <div className={cssNews.NewsList__categories}>
                                {el.categories.map((cat) => {
                                  let langCat;
                                  if (cat[cookies.language] === undefined) {
                                    cookies.language === "mn"
                                      ? (langCat = "eng")
                                      : (langCat = "mn");
                                  } else {
                                    langCat = cookies.language;
                                  }
                                  return (
                                    <a
                                      key={cat.slug}
                                      href={`/n/${el.slug}`}
                                      className={
                                        cssNews.NewsList__categories_item
                                      }
                                    >
                                      {cat[langCat] && cat[langCat].name}
                                    </a>
                                  );
                                })}
                              </div>
                              <Link href={`/news/${el.slug}`}>
                                <h3 className={cssNews.NewsList__name}>
                                  {el[nlang] && el[nlang].name}
                                </h3>
                              </Link>
                              <p className={cssNews.NewsList__shortInfo}>
                                {el[nlang] && el[nlang].shortDetails}
                              </p>
                              <div className={cssNews.NewsList__info}>
                                <div className={cssNews.NewsList__date_item}>
                                  <i class="fa-regular fa-clock"></i>{" "}
                                  <ReactTimeAgo
                                    date={el.createAt}
                                    locale="mn-MN"
                                  />
                                </div>
                                <div className={cssNews.News__date_item}>
                                  <i class="fa fa-bolt"></i> {el.views} үзсэн
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${css.Sides}`}>
                    {menus && (
                      <div className={`${css.Side} `}>
                        <ul className={css.ListSub}>
                          {menus.map((menu) => {
                            let mlang;
                            if (menu[cookies.language] === undefined) {
                              if (cookies.language === "mn") {
                                mlang = "eng";
                              } else if (cookies.language === "eng") {
                                mlang = "mn";
                              }
                            } else {
                              mlang = cookies.language;
                            }
                            return (
                              <li key={menu._id}>
                                <Link href={`/n/${menu.slug}`}>
                                  <a>{menu[mlang] && menu[mlang].name}</a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className={`${css.Side} `}>
                    <div className={css.Side__title}> Эрэлтэй мэдээлэл</div>
                    <div className={css.Title__Border}></div>
                    <div className={css.Side__News}>
                      {topNews &&
                        topNews.map((el, index) => {
                          let language;
                          if (el[cookies.language] === undefined) {
                            cookies.language === "mn"
                              ? (language = "eng")
                              : (language = "mn");
                          } else {
                            language = cookies.language;
                          }
                          return (
                            <a
                              href={`/news/${el.slug}`}
                              className={css.Side__Newsbox}
                              key={el._id}
                            >
                              <div className={css.News__img}>
                                <img
                                  src={`http://naog-admin.lvg.mn/rest/uploads/150x150/${el.pictures[0]}`}
                                />
                              </div>
                              <div className={css.News__detials}>
                                <div className={css.News__date}>
                                  <i class="fa-regular fa-clock"></i>{" "}
                                  <ReactTimeAgo
                                    date={el.createAt}
                                    locale="mn-MN"
                                  />
                                </div>
                                <h4 className={css.News__title}>
                                  {el[language] && el[language].name}
                                </h4>
                              </div>
                            </a>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPartners />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const { info } = await getInfo();
  const { news } = await getNews(`active=true`);
  const { menus } = await getNewsMenus(`active=true`);

  return {
    props: {
      info,
      news,
      menus,
    },
    revalidate: 10,
  };
};

import Footer from "components/footer";
import Partners from "components/footer-partners";
import HomeHeader from "components/home-header";
import PageHeader from "components/page-header";
import { getMenu } from "lib/menus";
import Head from "next/head";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { SimpleShareButtons } from "react-simple-share";
import ReactTimeAgo from "react-time-ago";

import css from "styles/Page.module.css";

import { getTopLink, getTopLinks } from "lib/topLink";
import { getInfo } from "lib/webinfo";
import { getNews } from "lib/news";

const TopLink = ({ info, topLink, topLinks, news }) => {
  const router = useRouter();
  const { asPath } = useRouter();

  const [cookies] = useCookies(["language"]);
  const [infoLang, setinfoLang] = useState();
  const [lang, setLang] = useState();
  const [slang, setSlang] = useState();

  useEffect(() => {
    if (info) {
      if (info[cookies.language] === undefined) {
        cookies.language === "mn" ? setinfoLang("eng") : setinfoLang("mn");
      } else {
        setinfoLang(cookies.language);
      }
    }

    if (topLink) {
      if (topLink[cookies.language] === undefined) {
        cookies.language === "mn" ? setLang("eng") : setLang("mn");
      } else {
        setLang(cookies.language);
      }
    }
  }, [info, topLink, cookies.language]);

  return (
    <Fragment>
      <Head>
        <title>
          {topLink[lang] && topLink[lang].name} -{" "}
          {info[infoLang] && info[infoLang].name}
        </title>
      </Head>
      <HomeHeader />
      <PageHeader pageTitle={topLink[lang] && topLink[lang].name} />
      <div className={`${css.Page} animate__animated animate__fadeIn`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className={css.PageInfo}>
                <div className={css.PageInfo__head}>
                  <h4 className={css.PageName}>
                    {topLink[lang] && topLink[lang].name}
                  </h4>
                  {topLink[lang] && (
                    <SimpleShareButtons
                      whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]}
                      size={"25px"}
                    />
                  )}
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: topLink[lang] && topLink[lang].about,
                  }}
                  className={css.Description}
                ></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${css.Sides}`}>
                {topLinks && (
                  <div className={`${css.Side} `}>
                    <ul className={css.ListSub}>
                      {topLinks.map((el) => {
                        let slang;
                        if (el[cookies.language] === undefined) {
                          if (cookies.language == "mn") slang = "eng";
                          else slang = "mn";
                        } else slang = cookies.language;
                        return (
                          <li key={el._id}>
                            {el.direct && !el.oldDirect && (
                              <Link href={`/toplinks/${el.direct}`}>
                                <a data-effect={el[slang].name}>
                                  {el[slang].name}
                                </a>
                              </Link>
                            )}
                            {el.oldDirect && (
                              <a
                                href={el.oldDirect}
                                target="_blank"
                                data-effect={el[slang].name}
                              >
                                {el[slang].name}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className={`${css.Side} `}>
                  <div className={css.Side__title}> Эрэлтэй мэдээлэл</div>
                  <div className={css.Title__Border}></div>
                  <div className={css.Side__News}>
                    {news &&
                      news.map((el, index) => {
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
      <Partners />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  const { topLink } = await getTopLink(params.slug);
  const { info } = await getInfo();
  const { topLinks } = await getTopLinks();
  const { news } = await getNews(`limit=4&sort={ views: -1 }&star=true`);
  return {
    props: {
      topLink,
      info,
      topLinks,
      news,
    },
    revalidate: 6000,
  };
};

export const getStaticPaths = async () => {
  const { topLinks } = await getTopLinks(`direct=true`);

  return {
    paths: topLinks.map((el) => ({
      params: {
        slug: el.direct,
      },
    })),
    fallback: false,
  };
};

export default TopLink;

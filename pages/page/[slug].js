import Footer from "components/footer";
import Partners from "components/footer-partners";
import HomeHeader from "components/home-header";
import PageHeader from "components/page-header";
import { usePage } from "hooks/use-page";
import { getMenus, getPgMenus } from "lib/menus";
import { getMenu } from "lib/page";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { SimpleShareButtons } from "react-simple-share";

import css from "styles/Page.module.css";

const Page = ({ menu, slug }) => {
  const { page } = usePage(slug);
  const [newPage, setNewPage] = useState(false);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    if (page) {
      setPageData(page.data);
      setNewPage((bf) => true);
    } else setPageData({});
  }, [page]);

  return (
    <Fragment>
      <Head>
        <title> Удирдлагын академ </title>
      </Head>
      <HomeHeader />
      <PageHeader pageTitle={menu && menu.name} />
      <div className={`${css.Page} animate__animated animate__fadeIn`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className={css.PageInfo}>
                <div className={css.PageInfo__head}>
                  <h4 className={css.PageName}>{pageData.name}</h4>
                  {pageData.name && (
                    <SimpleShareButtons
                      whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]}
                      size={"25px"}
                    />
                  )}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: pageData.pageInfo }}
                  className={css.Description}
                ></div>
              </div>
            </div>
            <div className="col-md-4" id="sticky-sidebar">
              <div className={`${css.Sides} sticky-top`}>
                <div className={`${css.Side} `}>
                  <div class={`input-group ${css.Search}`}>
                    <input
                      type="text"
                      className={`${css.Search__input} form-control`}
                      placeholder="Хайлт хийх..."
                    />
                    <span className={`${css.Search__btn} `}>
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </div>
                <div className={`${css.Side} `}>
                  <div className={css.Side__title}> Туслах цэс</div>
                  <div className={css.Title__Border}></div>
                  <ul className={css.Side__nav}>
                    <li>
                      <a href="#"> Элсэлт</a>
                    </li>
                    <li>
                      <a href="#"> Багшлах бүрэлдхүүн </a>
                    </li>
                    <li>
                      <a href="#"> Сонсогчийн вэб</a>
                    </li>
                    <li>
                      <a href="#"> Багшийн вэб</a>
                    </li>
                    <li>
                      <a href="#"> Номын сангийн програм</a>
                    </li>
                    <li>
                      <a href="#"> Холбоо барих</a>
                    </li>
                  </ul>
                </div>
                <div className={`${css.Side} `}>
                  <div className={css.Side__title}> Эрэлтэй мэдээлэл</div>
                  <div className={css.Title__Border}></div>
                  <div className={css.Side__News}>
                    <div className={css.Side__Newsbox}>
                      <div className={css.News__date}>
                        <i class="fa-regular fa-clock"></i> 08-24-2022
                      </div>
                      <h4 className={css.News__title}>
                        Хамтын ажиллагааны санамж бичиг байгууллаа
                      </h4>
                    </div>
                    <div className={css.Side__Newsbox}>
                      <div className={css.News__date}>
                        <i class="fa-regular fa-clock"></i> 08-24-2022
                      </div>
                      <h4 className={css.News__title}>Цахим сургалт боллооs</h4>
                    </div>
                    <div className={css.Side__Newsbox}>
                      <div className={css.News__date}>
                        <i class="fa-regular fa-clock"></i> 08-24-2022
                      </div>
                      <h4 className={css.News__title}>
                        Нээлттэй ажлын байрны зар
                      </h4>
                    </div>
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
  const menu = await getMenu(params.slug);

  return {
    props: {
      menu,
      slug: params.slug,
    },
    revalidate: 10000,
  };
};

export const getStaticPaths = async () => {
  const pages = await getPgMenus();

  return {
    paths: pages.map((el) => ({
      params: {
        slug: el.slug,
      },
    })),
    fallback: true,
  };
};

export default Page;

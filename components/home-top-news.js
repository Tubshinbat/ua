import Section from "./generals/section";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Coverflow, Navigation, Autoplay, Pagination, Scrollbar } from "swiper";
import HomeThreeNews from "./home-three-news";
import { useNews } from "hooks/use-news";
import { useCookies } from "react-cookie";

import css from "styles/HomeNews.module.css";
import { useEffect, useState } from "react";

export default () => {
  const [newsData, setNewsData] = useState(null);
  const [bigNews, setBigNews] = useState(null);
  const { news } = useNews([], "status=true&limit=9");
  const { news: topNews } = useNews([], "status=true&star=true&limit=4");
  const [cookies] = useCookies(["language"]);

  const mnTop = "Онцлох <span> мэдээлэл </span>";
  const engTop = "Recent <span> news </span>";
  const mnNew = " Шинэ <span> мэдээлэл </span>";
  const engNew = "New <span> News </span>";

  const langCheck = (val) => {
    let lang;
    if (val[cookies.language] === undefined) {
      if (cookies.language == "mn") lang = "eng";
      else lang = "mn";
    } else lang = cookies.language;

    return lang;
  };

  useEffect(() => {
    if (news) {
      setBigNews(news.shift());
      setNewsData(news);
    }
  }, [news]);

  useEffect(() => {
    if (bigNews) {
      let lang;
      if (bigNews[cookies.language] === undefined) {
        if (cookies.language == "mn") lang = "eng";
        else lang = "mn";
      } else lang = cookies.language;
    }
  }, [cookies.language]);

  return (
    <>
      <Section ClassPlus={`newsNew  wow animate__animated animate__fadeIn`}>
        <div className="container">
          <div className={css.NewNews}>
            <div className={`section__title`}>
              <h3
                dangerouslySetInnerHTML={{
                  __html:
                    cookies.language === "eng"
                      ? "Lastest <span> News </span>"
                      : "Шинэ <span> мэдээлэл </span>",
                }}
              ></h3>
              <p>
                {cookies.language === "eng"
                  ? "Don't miss daily news"
                  : "Мэдээ мэдээллээс бүү хоцроорой"}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <Swiper
                  modules={[Pagination, Navigation, Scrollbar, Autoplay]}
                  autoplay={{
                    delay: 4000,
                  }}
                  scrollbar={{
                    el: ".newTopNews__scrollbar",
                    draggable: true,
                  }}
                  className="newTopNews"
                >
                  {topNews &&
                    topNews.map((topNews) => (
                      <SwiperSlide
                        className="topNewSlide"
                        key={topNews._id + "top"}
                      >
                        <div className="topNewsBox">
                          <Link href={`/post/${topNews.slug}`}>
                            <div className="topNewsBox__image">
                              {topNews.type !== "default" && (
                                <div className="news__typeBg">
                                  <i
                                    className={`fa-solid  ${
                                      topNews.type === "picture" && "fa-image"
                                    }  ${
                                      topNews.type === "video" && "fa-play"
                                    } ${
                                      topNews.type === "audio" && "fa-music"
                                    }`}
                                  ></i>
                                </div>
                              )}

                              <img
                                src={`https://cdn.lvg.mn/uploads/450/${topNews.pictures[0]}`}
                              />
                            </div>
                          </Link>
                          <div className="topNewsBox__details">
                            <Link href={`/post/${topNews.slug}`}>
                              <h4> {topNews[langCheck(topNews)].name}</h4>
                            </Link>
                            <div className="topNewsBox__dateViews">
                              <div className={`topNewsBox__time`}>
                                <i class="fa fa-clock"></i>
                                <ReactTimeAgo
                                  date={topNews.createAt}
                                  locale="mn-MN"
                                />
                              </div>
                              <div className={`topNewsBox__views`}>
                                <i class="fa fa-bolt"></i> {topNews.views} үзсэн
                              </div>
                            </div>
                            <p>
                              {topNews[langCheck(topNews)].shortDetails &&
                                topNews[
                                  langCheck(topNews)
                                ].shortDetails.substring(0, 150)}
                              ...
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="newTopNews__bottom">
                  <div className="newTopNews__scrollbar_box">
                    <div className="newTopNews__scrollbar swiper-scrollbar"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="home-newNews">
                  <Swiper
                    direction={"vertical"}
                    modules={[Autoplay, Navigation]}
                    slidesPerView={3}
                    navigation={{
                      prevEl: ".newNewsSlider__prev",
                      nextEl: ".newNewsSlider__next",
                    }}
                    autoplay={{
                      delay: 5000,
                    }}
                    className="newNews-swiper"
                  >
                    {news &&
                      news.map((el) => (
                        <SwiperSlide
                          className="newNewsSlide"
                          key={el._id + "new"}
                        >
                          <div className="newListNews">
                            <div className="newListNews__about">
                              <div className="newListNews__categories">
                                {el.categories[0] && (
                                  <div className={`newListNews__category`}>
                                    <a href="/news?category=${el.slug}">
                                      {el.categories[0][cookies.language] !==
                                        undefined &&
                                        el.categories[0][cookies.language].name}
                                    </a>
                                  </div>
                                )}
                              </div>
                              <div className="newListNews__title">
                                <Link href={`/post/${el.slug}`}>
                                  {el[langCheck(el)].name}
                                </Link>
                              </div>
                              <div className="topNewsBox__dateViews">
                                <div className={`topNewsBox__time`}>
                                  <i class="fa fa-clock"></i>
                                  <ReactTimeAgo
                                    date={el.createAt}
                                    locale="mn-MN"
                                  />
                                </div>
                                <div className={`topNewsBox__views`}>
                                  <i class="fa fa-bolt"></i> {el.views} үзсэн
                                </div>
                              </div>
                              <p>
                                {el[langCheck(el)].shortDetails &&
                                  el[langCheck(el)].shortDetails.substring(
                                    0,
                                    150
                                  )}
                                ...
                              </p>
                            </div>
                            <div className="newListNews__image topNewsBox__image">
                              {el.type !== "default" && (
                                <div className="news__typeBg">
                                  <i
                                    className={`fa-solid  ${
                                      el.type === "picture" && "fa-image"
                                    }  ${el.type === "video" && "fa-play"} ${
                                      el.type === "audio" && "fa-music"
                                    }`}
                                  ></i>
                                </div>
                              )}
                              <img
                                src={`https://cdn.lvg.mn/uploads/450/${el.pictures[0]}`}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <div className="newNews__nav">
                    <div className="newNewsSlider__prev swiper-button-prev"></div>
                    <div className="newNewsSlider__next swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

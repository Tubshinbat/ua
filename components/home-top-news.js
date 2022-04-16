import Section from "./generals/section";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { EffectFade, Navigation, Autoplay } from "swiper";
import HomeThreeNews from "./home-three-news";
import { useNews } from "hooks/use-news";
import { useCookies } from "react-cookie";

import css from "styles/HomeNews.module.css";
import { useEffect, useState } from "react";

export default () => {
  const [newsData, setNewsData] = useState(null);
  const [bigNews, setBigNews] = useState(null);
  const { news } = useNews([], "status=true&limit=5");
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
            <div className="row">
              <div className="col-md-8">
                <h5
                  className={css.NewNews__title}
                  dangerouslySetInnerHTML={{
                    __html: cookies.language === "mn" ? mnNew : engNew,
                  }}
                ></h5>
                <div className="row">
                  <div className="col-md-12">
                    {bigNews && (
                      <div className={css.BigNews}>
                        <Link href={`/post/${bigNews.slug}`}>
                          <div className={css.BigNews__image}>
                            {bigNews.type !== "default" && (
                              <div className="news__typeBg">
                                <i
                                  className={`fa-solid  ${
                                    bigNews.type === "picture" && "fa-image"
                                  }  ${bigNews.type === "video" && "fa-play"} ${
                                    bigNews.type === "audio" && "fa-music"
                                  }
                          `}
                                ></i>
                              </div>
                            )}
                            <img
                              src={`https://cdn.lvg.mn/uploads/450/${bigNews.pictures[0]}`}
                            />
                          </div>
                        </Link>
                        <div className={css.BigNews__details}>
                          <Link href={`/post/${bigNews.slug}`}>
                            <h3 className={css.BigNews__title}>
                              {bigNews[langCheck(bigNews)].name}
                            </h3>
                          </Link>
                          <div className={`news__date`}>
                            <div className={`news__date_item`}>
                              <i class="fa-regular fa-clock"></i>{" "}
                              <ReactTimeAgo
                                date={bigNews.createAt}
                                locale="mn-MN"
                              />
                            </div>
                            <div className={`news__date_item`}>
                              <i class="fa fa-bolt"></i> {bigNews.views} үзсэн
                            </div>
                          </div>
                          <p>
                            {bigNews[langCheck(bigNews)].shortDetails.substring(
                              0,
                              180
                            )}
                            ...
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {newsData &&
                    newsData.map((news) => (
                      <div className="col-md-6" key={news._id}>
                        <div className={css.Little_news}>
                          <Link href={`/post/${news.slug}`}>
                            <div className={css.LittleNews__image}>
                              <img
                                src={`https://cdn.lvg.mn/uploads/450/${news.pictures[0]}`}
                              />
                            </div>
                          </Link>
                          <div className={css.LittleNews_detials}>
                            <div className={css.LittleNews__categories}>
                              {news.categories &&
                                news.categories.map((cat) => (
                                  <a href={`news?category=${news.slug}`}>
                                    <div className={css.Category}>
                                      {cat[langCheck(cat)].name}
                                    </div>
                                  </a>
                                ))}
                            </div>
                            <Link href={`/post/${news.slug}`}>
                              <h3 className={css.LittleNews__title}>
                                {news[langCheck(news)].name}
                              </h3>
                            </Link>
                            <div className={`news__date`}>
                              <div className={`news__date_item`}>
                                <i class="fa fa-bolt"></i> {news.views} үзсэн
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col-md-4">
                <h5
                  className={css.NewNews__title}
                  dangerouslySetInnerHTML={{
                    __html: cookies.language === "mn" ? mnTop : engTop,
                  }}
                ></h5>
                {topNews &&
                  topNews.map((news) => (
                    <div className="col-md-12" key={news._id}>
                      <div className={`${css.Little_news} ${css.topNews}`}>
                        <Link href={`/post/${news.slug}`}>
                          <div className={css.LittleNews__image}>
                            <img
                              src={`https://cdn.lvg.mn/uploads/450/${news.pictures[0]}`}
                            />
                          </div>
                        </Link>
                        <div className={css.LittleNews_detials}>
                          <div className={css.LittleNews__categories}>
                            {news.categories &&
                              news.categories.map((cat) => (
                                <a href={`news?category=${news.slug}`}>
                                  <div className={css.Category}>
                                    {cat[langCheck(cat)].name}
                                  </div>
                                </a>
                              ))}
                          </div>
                          <Link href={`/post/${news.slug}`}>
                            <h3 className={css.LittleNews__title}>
                              {news[langCheck(news)].name}
                            </h3>
                          </Link>
                          <div className={`news__date`}>
                            <div className={`news__date_item`}>
                              <i class="fa fa-bolt"></i> {news.views} үзсэн
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <Section ClassPlus={`news  wow animate__animated animate__fadeIn`}>
        <Swiper
          className={`newsTopSlider`}
          modules={[EffectFade, Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          effect="fade"
          navigation={{
            prevEl: ".news__slider_prev",
            nextEl: ".news__slider_next",
          }}
        >
          {topNews &&
            topNews.map((el) => {
              let lang;
              if (el[cookies.language] === undefined) {
                if (cookies.language == "mn") lang = "eng";
                else lang = "mn";
              } else lang = cookies.language;
              return (
                <SwiperSlide className={`newsSlide`}>
                  <div className={`sliderContainer`}>
                    {el.categories[0] && (
                      <a href="news?category=${el.slug}">
                        <div className={`news__category`}>
                          {el.categories[0][cookies.language] !== undefined &&
                            el.categories[0][cookies.language].name}
                        </div>
                      </a>
                    )}
                    <h3 className={`news__title`}>{el[lang].name}</h3>
                    <div className={`news__date`}>
                      <div className={`news__date_item`}>
                        <i class="fa-regular fa-clock"></i>{" "}
                        <ReactTimeAgo date={el.createAt} locale="mn-MN" />
                      </div>
                      <div className={`news__date_item`}>
                        <i class="fa fa-bolt"></i> {el.views} үзсэн
                      </div>
                    </div>
                    <p className={`news__shortDescription`}>
                      {el[lang].shortDetails.substring(0, 150)}...
                    </p>
                    <Link href={`/post/${el.slug}`}>
                      <a class={"news__more"}>Дэлгэрэнгүй</a>
                    </Link>
                  </div>
                  <div className={`news__image`}>
                    {el.pictures[0] && (
                      <Link href={`/post/${el.slug}`}>
                        <img
                          src={`https://cdn.lvg.mn/uploads/${el.pictures[0]}`}
                        />
                      </Link>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          <div className={`news__slider_nav`}>
            <div className={`news__slider_prev swiper-button-prev`}>
              <img src="/images/prev.png" />
            </div>
            <div className={`news__slider_next swiper-button-next`}>
              {" "}
              <img src="/images/next.png" />
            </div>
          </div>
        </Swiper>
      </Section> */}
      {/* <HomeThreeNews /> */}
    </>
  );
};

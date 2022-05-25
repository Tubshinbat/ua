import Section from "./generals/section";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import base from "lib/base";
import { Coverflow, Navigation, Autoplay, Pagination, Scrollbar } from "swiper";
// import HomeThreeNews from "./home-three-news";
import { useNews } from "hooks/use-news";
import { useCookies } from "react-cookie";

import css from "styles/HomeNews.module.css";
import { useEffect, useState } from "react";
import { useMedia, useMediaCat } from "hooks/use-media";

export default () => {
  const [mediaCat, setMediaCat] = useState("");
  const { media } = useMedia(null, `status=true&limit=9&category=${mediaCat}`);
  const [cookies] = useCookies(["language"]);
  const { mediaCategory } = useMediaCat();

  const langCheck = (val) => {
    let lang;
    if (val[cookies.language] === undefined) {
      if (cookies.language == "mn") lang = "eng";
      else lang = "mn";
    } else lang = cookies.language;

    return lang;
  };

  useEffect(() => {
    if (mediaCategory && mediaCategory.length > 0)
      setMediaCat(mediaCategory[0]._id);
  }, [mediaCategory]);

  return (
    <>
      <Section ClassPlus={`mediaSection `}>
        <div
          className="container wow animate__animated animate__fadeIn"
          data-wow-delay={`.5s`}
        >
          <div className={css.NewNews}>
            <div className={`section__title`}>
              <div className="section__header">
                <h3
                  dangerouslySetInnerHTML={{
                    __html:
                      cookies.language === "eng"
                        ? "Media <span> content </span>"
                        : "Медиа <span> контент </span>",
                  }}
                ></h3>
                <p>
                  {cookies.language === "eng"
                    ? "Don't miss daily news"
                    : "Мэдээ мэдээллээс бүү хоцроорой"}
                </p>
              </div>
              <Link href="/medias">
                <button className="allNews">
                  {cookies.language === "eng"
                    ? "Read all media"
                    : "Бүгдийг үзэх"}
                </button>
              </Link>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="mediaCategories">
                  {mediaCategory &&
                    mediaCategory.map((el) => (
                      <button
                        className={`mediaCat ${
                          el._id === mediaCat && "current"
                        }`}
                        onClick={() => setMediaCat(el._id)}
                      >
                        {el[langCheck(el)].name}
                      </button>
                    ))}
                </div>
                <Swiper
                  modules={[Pagination, Navigation, Scrollbar, Autoplay]}
                  autoplay={{
                    delay: 4000,
                  }}
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  preventInteractionOnTransition={true}
                  scrollbar={{
                    el: ".newTopNews__scrollbar",
                    draggable: true,
                  }}
                  breakpoints={{
                    1000: {
                      slidesPerView: 3,
                    },
                    700: {
                      slidesPerView: 2,
                    },
                    200: {
                      slidesPerView: 1,
                    },
                  }}
                  className="newTopNews"
                >
                  {media &&
                    media.map((topNews) => (
                      <SwiperSlide
                        className="topNewSlide"
                        key={topNews._id + "top"}
                      >
                        <div className="topNewsBox">
                          <Link href={`/media/${topNews.slug}`}>
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
                                src={`${base.cdnUrl}/450/${topNews.pictures[0]}`}
                              />
                            </div>
                          </Link>
                          <div className="topNewsBox__details">
                            <div className="newListNews__categories"></div>
                            <Link href={`/media/${topNews.slug}`}>
                              <h4> {topNews[langCheck(topNews)].name}</h4>
                            </Link>
                            <div className="topNewsBox__dateViews">
                              <div className={`topNewsBox__time`}>
                                <i className="fa fa-clock"></i>
                                <ReactTimeAgo
                                  date={topNews.createAt}
                                  locale="mn-MN"
                                />
                              </div>
                              <div className={`topNewsBox__views`}>
                                <i className="fa fa-bolt"></i> {topNews.views}{" "}
                                үзсэн
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
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

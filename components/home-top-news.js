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
import { useTopNews } from "hooks/use-news";
import { useCookies } from "react-cookie";

export default () => {
  const { topNews } = useTopNews();
  const [cookies] = useCookies(["language"]);

  return (
    <>
      <Section ClassPlus={`news  wow animate__animated animate__fadeIn`}>
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
                          src={`http://cdn.lvg.mn/uploads/${el.pictures[0]}`}
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
      </Section>
      <HomeThreeNews />
    </>
  );
};

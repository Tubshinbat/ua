import { Fragment } from "react";
import { useBanners } from "hooks/use-banner";
import { useCookies } from "react-cookie";
import base from "lib/base";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import {
  Pagination,
  EffectFade,
  Navigation,
  Scrollbar,
  Autoplay,
} from "swiper";
import { useSocials } from "hooks/use-links";

export default () => {
  const { banners } = useBanners();
  const [cookies] = useCookies(["language"]);
  const { socialLinks } = useSocials();

  return (
    <Fragment>
      <div className="bannerBg"> </div>
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Scrollbar, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{
          el: ".slider_pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            let indT = total >= 10 ? total : `0${total}`;
            let indC = total >= 10 ? current : `0${current}`;
            return `<b> ${indC} </b> <span></span> ${indT}`;
          },
          clickable: true,
        }}
        scrollbar={{
          el: ".slider__scrollbar",
          draggable: false,
        }}
        runCallbacksOnInit={true}
        navigation={{ prevEl: ".slider__prev", nextEl: ".slider__next" }}
        className="mySwiper"
      >
        {banners &&
          banners.map((banner) => {
            let lang;
            if (banner[cookies.language] === undefined) {
              if (cookies.language == "mn") lang = "eng";
              else lang = "mn";
            } else lang = cookies.language;

            return (
              <SwiperSlide>
                <div className="contentText">
                  <span className="silde__headText">
                    {cookies.language === "mn" ? "Тавтай морил" : "WELCOME TO"}
                  </span>
                  <h4 className="slide__title">{banner[lang].name}</h4>
                  <p className="slide__text">{banner[lang].details}</p>
                  {banner.link && (
                    <a href={banner.link} target="_blank">
                      <button className={`btn bannerBtn btn__defualt`}>
                        {cookies.language === "mn" ? "Дэлгэрэнгүй" : "More"}
                      </button>
                    </a>
                  )}
                </div>
                <div className="imageBox">
                  <div className="imgBg"> </div>
                  <img src={`${base.cdnUrl}/${banner.banner}`} />
                </div>
              </SwiperSlide>
            );
          })}

        <div className="row slider__bottom">
          <div className="slider__pagination-wrapper">
            <div className="slider_pagination swiper-pagination"></div>
          </div>
          <div className="slider__scrollbar_box">
            <div className="slider__scrollbar swiper-scrollbar"></div>
          </div>
          <div className="slider__nav">
            <div className="slider__prev swiper-button-prev"></div>
            <div className="slider__next swiper-button-next"></div>
          </div>
        </div>
        <div className="social_links">
          {socialLinks &&
            socialLinks.map((el) => (
              <a href={el.link} target="_blank">
                <i class={`fa-brands fa-${el.name.toLowerCase()}`}></i>
              </a>
            ))}
        </div>
      </Swiper>
    </Fragment>
  );
};

import Section from "./generals/section";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { EffectFade, Navigation, Autoplay } from "swiper";
import HomeThreeNews from "./home-three-news";

export default () => {
  return (
    <>
      <Section ClassPlus={`news`}>
        <Swiper
          className={`newsTopSlider`}
          modules={[EffectFade, Navigation, Autoplay]}
          autoplay={{
            delay: 6000,
          }}
          effect="fade"
          navigation={{
            prevEl: ".news__slider_prev",
            nextEl: ".news__slider_next",
          }}
        >
          <SwiperSlide className={`newsSlide`}>
            <div className={`sliderContainer`}>
              <div className={`news__category`}> Үйл явдал </div>
              <h3 className={`news__title`}>
                Хамтын ажиллагааны санамж бичиг байгууллаа{" "}
              </h3>
              <div className={`news__date`}>
                <div className={`news__date_item`}>
                  <i class="fa-regular fa-clock"></i>1 Цагийн өмнө нийтлэгдсэн
                </div>
                <div className={`news__date_item`}>
                  <i class="fa fa-bolt"></i> 156 хүн үзсэн
                </div>
              </div>
              <p className={`news__shortDescription`}>
                2021 оны 12 дугаар сарын 10-ны өдөр Монгол улсын Засгийн газрын
                Хэрэг эрхлэх газрын дэргэдэх Удирдлагын академийн захирал,
                доктор Д.Сүрэнчимэг Дархан хотод томилолтоор ажилласан.
                Томилолтын хүрээнд захирал Д.Сүрэнчимэг Дархан-уул аймгийн Засаг
                даргын орлогч А.Түвшинбаттай ажлын уулзалт хийж хоёр тал хамтран
                ажиллах санамж бичигт гарын үсэг зурлаа......
              </p>
            </div>
            <div className={`news__image`}>
              <img src="/images/blog-1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`newsSlide`}>
            <div className={`sliderContainer`}>
              <div className={`news__category`}> Үйл явдал </div>
              <h3 className={`news__title`}>
                Профессор Ч.ЭНХБААТАР Монгол улсын гавьяат багш цол хүртлээ
              </h3>
              <div className={`news__date`}>
                <div className={`news__date_item`}>
                  <i class="fa-regular fa-clock"></i>1 Цагийн өмнө нийтлэгдсэн
                </div>
                <div className={`news__date_item`}>
                  <i class="fa fa-bolt"></i> 156 хүн үзсэн
                </div>
              </div>
              <p className={`news__shortDescription`}>
                Парламентат ёсыг төлөвшүүлэх, төр, нийгмийн шинэчлэлийг
                эхлүүлэхэд оруулсан хувь нэмэр, үндэсний өв соёл, түүх,
                уламжлалыг сэргээн хөгжүүлэх, сурталчлан түгээх үйлсэд оруулсан
                хичээл зүтгэл, шинжлэх ухаан, боловсролын салбарт олон жил үр
                бүтээлтэй ажилласныг нь үнэлэн......
              </p>
            </div>
            <div className={`news__image`}>
              <img src="/images/blog-2.jpg" />
            </div>
          </SwiperSlide>

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

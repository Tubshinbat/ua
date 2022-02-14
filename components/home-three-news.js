import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { EffectFade, Navigation, Autoplay } from "swiper";

export default () => {
  return (
    <div className="home__three_news container">
      <Swiper
        className={`news__three_slider`}
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          prevEl: ".news__three_slider_prev",
          nextEl: ".news__three_slider_next",
        }}
      >
        <SwiperSlide className={`three_slide`}>
          <div className="news__box_t">
            <div className="news__box_t_image">
              <img src="/images/blog-3.jpg" />
            </div>
            <div className="news__box_desciption">
              <div className="news__box_date">
                <div className={`news__date_item`}>
                  <i class="fa-regular fa-clock"></i>1 Цагийн өмнө
                </div>
                <div className={`news__date_item`}>
                  <i class="fa fa-bolt"></i> 156 үзсэн
                </div>
              </div>
              <h5>Сургалтын хаалтын ажиллагаа боллоо</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`three_slide`}>
          <div className="news__box_t">
            <div className="news__box_t_image">
              <img src="/images/blog-4.jpg" />
            </div>
            <div className="news__box_desciption">
              <div className="news__box_date">
                <div className={`news__date_item`}>
                  <i class="fa-regular fa-clock"></i>2 сарын өмнө
                </div>
                <div className={`news__date_item`}>
                  <i class="fa fa-bolt"></i> 126 үзсэн
                </div>
              </div>
              <h5>Пэрэнлэйн Оюун-Эрдэнэ докторын дипломоо гардан авлаа</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`three_slide`}>
          <div className="news__box_t">
            <div className="news__box_t_image">
              <img src="/images/blog-4.jpg" />
            </div>
            <div className="news__box_desciption">
              <div className="news__box_date">
                <div className={`news__date_item`}>
                  <i class="fa-regular fa-clock"></i>2 сарын өмнө
                </div>
                <div className={`news__date_item`}>
                  <i class="fa fa-bolt"></i> 126 үзсэн
                </div>
              </div>
              <h5>Пэрэнлэйн Оюун-Эрдэнэ докторын дипломоо гардан авлаа</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`three_slide`}>
          <div>4</div>
        </SwiperSlide>
        <SwiperSlide className={`three_slide`}>
          <div>6</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

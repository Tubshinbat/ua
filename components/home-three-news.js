import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { EffectFade, Navigation, Autoplay, Scrollbar } from "swiper";

export default () => {
  return (
    <div className="home__three_news container">
      <Swiper
        className={`news__three_slider`}
        modules={[EffectFade, Navigation, Scrollbar, Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          prevEl: ".news__three_prev",
          nextEl: ".news__three_next",
        }}
        scrollbar={{
          el: ".news__three_scrollbar",
          draggable: false,
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
              <img src="/images/blog-5.jpg" />
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
              <h5>Сар шинийн мэндчилгээ</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`three_slide`}>
          <div className="news__box_t">
            <div className="news__box_t_image">
              <img src="/images/blog-6.jpg" />
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
              <h5>Нээлттэй ажлын байрны зар</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`three_slide`}>
          <div className="news__box_t">
            <div className="news__box_t_image">
              <img src="/images/blog-7.jpg" />
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
              <h5>Цахим сургалт боллоо</h5>
            </div>
          </div>
        </SwiperSlide>
        <div className="news__three_bottom">
          <div className="news__three_scrollbar_box">
            <div className="news__three_scrollbar swiper-scrollbar"></div>
          </div>
          <div className="news__three_nav">
            <div className="news__three_prev swiper-button-prev">
              <img src="/images/prev-bl.png" />
            </div>
            <div className="news__three_next swiper-button-next">
              <img src="/images/next-bl.png" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

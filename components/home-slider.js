import { Fragment } from "react";

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

export default () => {
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
        <SwiperSlide>
          <div className="contentText">
            <span className="silde__headText">Тавтай морил</span>
            <h4 className="slide__title">Удирдлагын академи</h4>
            <p className="slide__text">
              Удирдлагын академи нь төрийн албаны хөгжлийн шаардлагад нийцүүлэн
              өндөр мэдлэг, чадвар бүхий албан хаагчдыг бэлтгэх, давтан сургах,
              мэргэшлийг нь дээшлүүлэх, төрийн захиргаа, удирдлагын асуудлаар
              судалгааны ажил гүйцэтгэх, төрийн бодлого боловсруулах чиглэлээр
              төр, захиргааны байгууллагуудад мэргэжил, арга зүйн зөвлөгөө өгөх
              чиг үүрэг бүхий байгууллага юм.
            </p>
            <button className={`btn bannerBtn btn__defualt`}>
              {" "}
              БИДНИЙ ТУХАЙ{" "}
            </button>
          </div>
          <div className="imageBox">
            <div className="imgBg"> </div>
            <img src="/images/slide-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentText">
            <span className="silde__headText"> Онцлох </span>
            <h4 className="slide__title">ТАХ Цахим сургалтын систем</h4>
            <p className="slide__text">
              Цаг үетэйгээ зэрэгцэн цахим шилжилтүүдийг хийж бид ТАХ цахим
              сургалтын системээ нэвтрүүллээ. Энэхүү сургалтын системээр тогтсон
              нарийн цагийн хуваарийн дагуу хичээллэх шаардлагагүй мөн хаанаас ч
              сурч болох юм.
            </p>
            <button className={`btn bannerBtn btn__defualt`}>
              {" "}
              ОНЛАЙН СУРГАЛТ{" "}
            </button>
          </div>
          <div className="imageBox">
            <div className="imgBg"> </div>
            <img src="/images/slide-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentText">
            <span className="silde__headText"> Онцлох </span>
            <h4 className="slide__title">ТАХ Цахим сургалтын систем</h4>
            <p className="slide__text">
              Цаг үетэйгээ зэрэгцэн цахим шилжилтүүдийг хийж бид ТАХ цахим
              сургалтын системээ нэвтрүүллээ. Энэхүү сургалтын системээр тогтсон
              нарийн цагийн хуваарийн дагуу хичээллэх шаардлагагүй мөн хаанаас ч
              сурч болох юм.
            </p>
            <button className={`btn bannerBtn btn__defualt`}>
              {" "}
              ОНЛАЙН СУРГАЛТ{" "}
            </button>
          </div>
          <div className="imageBox">
            <div className="imgBg"> </div>
            <img src="/images/slide-3.jpg" />
          </div>
        </SwiperSlide>
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
      </Swiper>
    </Fragment>
  );
};

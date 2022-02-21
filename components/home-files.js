import Section from "./generals/section";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default () => {
  return (
    <Section>
      <div className="container">
        <h3 className="section__title">
          Цахим <span> файлын сан </span>
        </h3>
        <p className="section_longInfo">
          Судалгаа шинжилгээ болон цахим номнуудыг шууд уншах боломжтой
        </p>
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 2,
            },
            986: {
              slidesPerView: 1,
            },
            782: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            300: {
              slidesPerView: 1,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="bookSlider"
        >
          <SwiperSlide>
            <img src="/images/book-1.png" />
            <div className="book_slider__text">
              <h5>Стратегийн өмгөөлөл Ред</h5>
              <p>
                Монгол улсад ардчилал, хүний эрх, эрх чөлөө оюуны үнэт зүлсийг
                хөгжүүлэхэд үнэлж башгүй хувь нэмэр оруулж ирсэн Нийтийн эрх
                ашгийг нэхэмжлэн хамгаалах.........
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/book-2.png" />
            <div className="book_slider__text">
              <h5>Монгол Улсын шүүх эрх мэдлийн шинэтгэл. </h5>
              <p>
                Монгол Улсын шүүх эрх мэдлийн шинэтгэл. Сүүлийн 20 жилийн тойм
                Ред. Д.Пунцаг, П.Бадамрагчаа.........
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/book-3.png" />
            <div className="book_slider__text">
              <h5>Монгол улс болон БНСУ-ын захиргааны хууль тогтоомж </h5>
              <p>
                2020 онд МУ, БНСУ-ын хооронд дипломат харилцаа тогтоосны 30
                жилийн ой тохионо. Өмгөөллийн "Эл Би Партнерс" ХХН-өөс
                захиргааны эрх зүйн чиглэлээр судалгаа-шинжилгээний ажил хийж
                байгаа эрдэмтэн-судлаачид.........
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/book-4.png" />
            <div className="book_slider__text">
              <h5>Албан харилцааны ёс зүй</h5>
              <p>
                Хооллох соёл Хувцаслах соёл Ажил хэрэгч эмэгтэйн гоо засал
                Нэрийн хуудас хэрэглэх соёл.........
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/book-5.png" />
            <div className="book_slider__text">
              <h5>Хэний ч мэдэхгүй МАО</h5>
              <p>
                Хэний ч мэдэхгүй МАО Орч. Г.Аким, Баабар, Ц.Ганбат,
                Ц.Гомбосүрэн, Ш.Одонтөр | Мао Зэдун 1893 оны 12 сарын 26-д Манж
                Чин Улс Хунань муж Шаошаньд төрж 1976 оны 09 сарын 09-д Хятад
                бээжинд нас барсан. .........
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};

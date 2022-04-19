import Section from "./generals/section";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useBook } from "hooks/use-book";
import { useCookies } from "react-cookie";

export default () => {
  const [cookies] = useCookies(["language"]);
  const { books } = useBook();
  return (
    <Section>
      <div className="container wow animate__animated animate__fadeInUp">
        <div className={`section__title `}>
          <h3
            dangerouslySetInnerHTML={{
              __html:
                cookies.language === "eng"
                  ? " Online <span> library </span>"
                  : " Цахим <span> файлын сан </span>",
            }}
          ></h3>
        </div>

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
          {books.length > 0 &&
            books.map((el) => {
              return (
                <SwiperSlide>
                  <a href={el.link} target="_blank">
                    <img src={`https://cdn.lvg.mn/uploads/${el.picture}`} />
                    <div className="book_slider__text">
                      <h5>{el.name}</h5>
                      <p>{el.about}</p>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </Section>
  );
};

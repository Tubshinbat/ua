import css from "styles/HomeStatic.module.css";
import Section from "./generals/section";
import NumberScroller from "number-scroller";
import { useState } from "react";

export default () => {
  const [number, setNumber] = useState(57458);
  return (
    <Section ClassPlus={css.Static}>
      <div className="container">
        <div className={`${css.Section__Header} `}>
          <h3
            className={`${css.Section_title} section__title wow animate__animated animate__fadeInUp`}
            data-wow-delay={`0.25s`}
          >
            Удирдлагын <span>академи</span>
          </h3>
          <p
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay={`0.35s`}
          >
            Бидний бахархал бол бидний төгсөгчид юм.{" "}
          </p>
        </div>
        <div className={css.Count}>
          <h5>
            <NumberScroller to={number} timeout={1000} /> Төгсөгч
          </h5>
          <p
            className="wow animate__animated animate__fadeInDown"
            data-wow-delay={`0.40s`}
          >
            2022 оны байдлаар нийт төгсөн төгсөгчид
          </p>
        </div>
        <div className={css.Progress}>
          <div
            className={`${css.Progress__Title} wow animate__animated animate__fadeInLeft`}
            data-wow-delay={`0.50s`}
          >
            <div className={css.Progress_item}>
              <div
                className={`${css.Progress__box_color} ${css.Crimson} `}
              ></div>
              <p className={css.Crimson__text}>Докторын сургалт</p>
            </div>
            <div className={css.Progress_item}>
              <div
                className={`${css.Progress__box_color} ${css.OrangeRed}`}
              ></div>
              <p className={css.OrangeRed__text}>Магистрын сургалт</p>
            </div>
            <div className={css.Progress_item}>
              <div className={`${css.Progress__box_color} ${css.Pink}`}></div>
              <p className={css.Pink__text}>Мэргэшүүлэх багц сургалт</p>
            </div>
          </div>
          <div className={css.Progress__box}>
            <div
              className={`${css.Progress__box_item} ${css.Crimson} wow animate__animated animate__fadeInLeft`}
              style={{ width: "30%" }}
              data-wow-delay={`1s`}
            ></div>
            <div
              className={`${css.Progress__box_item}  ${css.OrangeRed} wow animate__animated animate__fadeInLeft`}
              style={{ width: "30%" }}
              data-wow-delay={`1.5s`}
            ></div>
            <div
              className={`${css.Progress__box_item} ${css.Pink} wow animate__animated animate__fadeInLeft`}
              style={{ width: "50%" }}
              data-wow-delay={`2s`}
            ></div>
          </div>
        </div>
        <div className={css.Facts}>
          <div
            className={`${css.Fact} wow animate__animated animate__fadeInDown`}
            data-wow-delay={`0.3s`}
          >
            <h4>#1</h4>
            <p>
              Монголдоо цор ганц төрийн албан хаагчдыг бэлтгэх, давтан сургах,
              мэргэшлийг нь дээшлүүлэх чиг үүрэг бүхий байгууллага
            </p>
          </div>
          <div
            className={`${css.Fact} wow animate__animated animate__fadeInDown`}
            data-wow-delay={`0.5s`}
          >
            <h4>90%</h4>
            <p>Төгсөгчидын 90% дээш хувь нь амжилттай төгсдөг</p>
          </div>
          <div
            className={`${css.Fact} wow animate__animated animate__fadeInDown`}
            data-wow-delay={`0.8s`}
          >
            <h4>1924 </h4>
            <p>
              Бид 1924 оноос эхлэн 2022 он хүртэл тасралтгүй үйл ажиллагаагаа
              явуулж байгаа
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

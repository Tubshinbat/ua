import { Fragment } from "react";
import css from "styles/TopLinks.module.css";

export default () => {
  return (
    <Fragment>
      <div className={`${css.FastBoxs}`}>
        <div
          className={`${css.FastBox}  wow animate__animated animate__fadeInUp`}
          data-wow-delay={`0.20s`}
        >
          <a href="#">
            <div className={css.FastBg}>
              <img src="/images/box-bg1.jpg" />
            </div>
            <div className={css.FastBox__container}>
              <img src="/images/icon-1.png" className={css.Icon} />
              <h5> Сургалт </h5>
            </div>
          </a>
        </div>
        <div
          className={`${css.FastBox}  wow animate__animated animate__fadeInUp`}
          data-wow-delay={`0.30s`}
        >
          <a href="#">
            <div className={css.FastBg}>
              <img src="/images/box-bg2.jpg" />
            </div>
            <div className={css.FastBox__container}>
              <img src="/images/icon-2.png" className={css.Icon} />
              <h5> Судалгаа </h5>
            </div>
          </a>
        </div>
        <div
          className={`${css.FastBox}  wow animate__animated animate__fadeInUp`}
          data-wow-delay={`0.40s`}
        >
          <a href="#">
            <div className={css.FastBg}>
              <img src="/images/box-bg3.jpg" />
            </div>

            <div className={css.FastBox__container}>
              <img src="/images/icon-3.png" className={css.Icon} />
              <h5> Зөвлөх үйлчилгээ </h5>
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

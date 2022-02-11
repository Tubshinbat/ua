import Section from "./generals/section";

import css from "styles/NeedLink.module.css";

export default () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="section__title">Чухал холбоосууд</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it{" "}
            </p>
            <button className="btn btn__primary"> Холбоо барих</button>
          </div>
          <div className="col-md-8">
            <div className={css.Links}>
              <div className={css.Link}>
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              <div className={css.Link}>
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              <div className={css.Link}>
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              <div className={css.Link}>
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              <div className={css.Link}>
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              <div className={css.Link}>
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

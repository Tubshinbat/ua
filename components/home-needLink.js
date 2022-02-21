import Section from "./generals/section";

import css from "styles/NeedLink.module.css";

export default () => {
  return (
    <Section ClassPlus="needLinks">
      <div className="container ">
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-md-12 ">
            <h3
              className="section__title wow animate__animated animate__fadeInDown"
              data-wow-delay={`0.20s`}
            >
              Чухал <span> холбоосууд </span>
            </h3>
            <p
              className="section_longInfo needLink__info wow animate__animated animate__fadeInUp"
              data-wow-delay={`0.30s`}
            >
              Манай чухал холбоосуудыг ашиглаж та хурдан шуурхай өөрийн хайж
              байгаа зүйлсруу орох боломжтой. Танд хэрэгтэй элсэлт, багш болон
              сонсогчийн вэб хуудас, төгсөгчдийн талаарх мэдээлэл, цахим номын
              сангийн програм болон ТАХ цахим сургалтын хэсэгруу түргэн шуурхай
              орох боломжтой.
            </p>
            <button
              className="btn btn__defualt btn__primary btn__contact wow animate__animated animate__fadeInUp"
              data-wow-delay={`0.35s`}
            >
              Холбоо барих
            </button>
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className={css.Links}>
              <div
                className={`${css.Link} wow animate__animated animate__fadeInRight`}
                data-wow-delay={`0.50s`}
              >
                <div className={css.Link__top}>
                  <div className={`${css.TopIcon} ${css.Gray} `}>
                    <img src="/images/ticon-1.png" />
                  </div>
                  <h4 className={css.Link__title}> Элсэлт</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Удирдлагын академиас энэ жилд зарлагадсан элсэлтүүдийг
                    эндээс та харах боломжтой
                  </p>
                </div>
              </div>
              <div
                className={`${css.Link} wow animate__animated animate__fadeInRight`}
                data-wow-delay={`0.60s`}
              >
                <div className={css.Link__top}>
                  <div className={`${css.TopIcon} ${css.Gray} `}>
                    <img src="/images/ticon-2.png" />
                  </div>
                  <h4 className={css.Link__title}> Багшийн вэб</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Багш нарт зориулсан багшийн вэбруу энд дарж орох боломжтой
                  </p>
                </div>
              </div>
              <div
                className={`${css.Link} wow animate__animated animate__fadeInRight`}
                data-wow-delay={`0.70s`}
              >
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-3.png" />
                  </div>
                  <h4 className={css.Link__title}> Сонсогчийн вэб</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Манай сонсогчдод зориулсан сонсогчийн вэб хуудасруу энд дарж
                    нэвтрэх боломжтой
                  </p>
                </div>
              </div>
              <div
                className={`${css.Link} wow animate__animated animate__fadeInRight`}
                data-wow-delay={`0.80s`}
              >
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-4.png" />
                  </div>
                  <h4 className={css.Link__title}> Төгсөгчид</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Төгсөгчидтэй холбоотой мэдээ мэдээлэл, арга хэмжээний талаар
                    энэ холбоос дээр дарж авах боломжтой
                  </p>
                </div>
              </div>
              <div
                className={`${css.Link} wow animate__animated animate__fadeInRight`}
                data-wow-delay={`0.90s`}
              >
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-5.png" />
                  </div>
                  <h4 className={css.Link__title}> Номын сангийн програм</h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Судалгаа шинжилгээний материал болон цахим номуудыг манай
                    номын сангийн програмаас үзэх боломжтой
                  </p>
                </div>
              </div>
              <div
                className={`${css.Link} wow animate__animated animate__fadeInRight`}
                data-wow-delay={`1s`}
              >
                <div className={css.Link__top}>
                  <div className={css.TopIcon}>
                    <img src="/images/ticon-6.png" />
                  </div>
                  <h4 className={css.Link__title}>
                    ТАХ Цахим сургалтын систем
                  </h4>
                </div>
                <div className={css.Link__info}>
                  <p>
                    Алсын зайнаас хаанаас ч хэзээ ч суралцахыг хүсвэл ТАХ Цахим
                    сургалтын системийг ашиглана уу
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

import Section from "./generals/section";

import css from "styles/NeedLink.module.css";
import { useCookies } from "react-cookie";
import { useFastLinks } from "hooks/use-links";

export default () => {
  const [cookies] = useCookies(["language"]);
  const { fastLinks } = useFastLinks();

  return (
    <Section ClassPlus="needLinks">
      <div className="container ">
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-md-12 ">
            <h3
              className="section__title wow animate__animated animate__fadeInDown"
              data-wow-delay={`0.20s`}
              dangerouslySetInnerHTML={
                cookies.language === "mn"
                  ? { __html: `Чухал <span> холбоосууд </span>` }
                  : { __html: `Fast <span> links </span>` }
              }
            ></h3>
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
            <a href="/contact">
              <button
                className="btn btn__defualt btn__primary btn__contact wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.35s`}
              >
                {cookies.language === "mn" ? "Холбоо барих" : "Contact us"}
              </button>
            </a>
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className={css.Links}>
              {fastLinks &&
                fastLinks.map((el, index) => {
                  let lang;
                  if (el[cookies.language] === undefined) {
                    if (cookies.language == "mn") lang = "eng";
                    else lang = "mn";
                  } else lang = cookies.language;
                  let count = 0.2 * index;
                  return (
                    <a
                      href={el.direct}
                      className={`${css.Link} wow animate__animated animate__fadeInRight`}
                      data-wow-delay={`${count}s`}
                    >
                      <div className={css.Link__top}>
                        <div className={`${css.TopIcon} ${css.Gray} `}>
                          <img
                            src={`http://localhost:8000/uploads/${el.picture}`}
                          />
                        </div>
                        <h4 className={css.Link__title}> {el[lang].name}</h4>
                      </div>
                      <div className={css.Link__info}>
                        <p>{el[lang].about}</p>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

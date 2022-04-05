import css from "styles/HomeStatic.module.css";
import Section from "./generals/section";
import NumberScroller from "number-scroller";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useStatistics, useSubStatistics } from "hooks/use-statistics";
import { useFact } from "hooks/use-fact";

export default () => {
  const [cookies] = useCookies(["language"]);
  const [number, setNumber] = useState(57458);
  const { activeStatistic } = useStatistics();
  const [subSt, setSubSt] = useState(0);
  const { facts } = useFact();

  let lang;
  if (activeStatistic[cookies.language] === undefined) {
    if (cookies.language == "mn") lang = "eng";
    else lang = "mn";
  } else lang = cookies.language;

  const { subStatistics } = useSubStatistics(activeStatistic._id);

  useEffect(() => {
    if (subStatistics.length > 0) {
      let count = 0;
      subStatistics.map((el) => {
        count = count + el.count;
      });
      setSubSt(count);
    }
  }, [subStatistics]);

  return (
    <Section ClassPlus={css.Static}>
      <div className="container">
        <div className={`${css.Section__Header} `}>
          <h3
            className={`${css.Section_title} section__title wow animate__animated animate__fadeInUp`}
            data-wow-delay={`0.25s`}
            dangerouslySetInnerHTML={
              cookies.language === "mn"
                ? { __html: `Удирдлагын <span> академи </span>` }
                : { __html: `National Academy <span> of governance </span>` }
            }
          ></h3>
        </div>
        <div className={css.Count}>
          <h5>
            <NumberScroller to={subSt} timeout={10} />
            {activeStatistic[lang] && activeStatistic[lang].name}
          </h5>
        </div>
        <div className={css.Progress}>
          <div
            className={`${css.Progress__Title} wow animate__animated animate__fadeInLeft`}
            data-wow-delay={`0.50s`}
          >
            {subStatistics.length > 0 &&
              subStatistics.map((el, index) => {
                let lang;
                if (el[cookies.language] === undefined) {
                  if (cookies.language == "mn") lang = "eng";
                  else lang = "mn";
                } else lang = cookies.language;
                return (
                  <div className={css.Progress_item}>
                    <div
                      className={`${css.Progress__box_color} ${
                        index === 0 && css.Crimson
                      } ${index === 1 && css.OrangeRed}  ${
                        index === 2 && css.Pink
                      }`}
                    ></div>
                    <p className={css.Crimson__text}>{el[lang].name}</p>
                  </div>
                );
              })}
          </div>
          <div className={css.Progress__box}>
            {subStatistics.length > 0 &&
              subStatistics.map((el, index) => {
                return (
                  <div
                    className={`${css.Progress__box_item} ${
                      index === 0 && css.Crimson
                    } ${index === 1 && css.OrangeRed}  ${
                      index === 2 && css.Pink
                    } wow animate__animated animate__fadeInLeft`}
                    style={{ width: (el.count / 100) * subSt }}
                    data-wow-delay={`${index}s`}
                  ></div>
                );
              })}
          </div>
        </div>
        <div className={css.Facts}>
          {facts &&
            facts.map((el, index) => {
              let lang;
              if (el[cookies.language] === undefined) {
                if (cookies.language == "mn") lang = "eng";
                else lang = "mn";
              } else lang = cookies.language;
              return (
                <div
                  className={`${css.Fact} wow animate__animated animate__fadeInDown`}
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <h4>{el[lang].name}</h4>
                  <p>{el[lang].about}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

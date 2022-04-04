import { useTopLinks } from "hooks/use-links";
import { Fragment } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import css from "styles/TopLinks.module.css";

export default () => {
  const { topLinks } = useTopLinks();
  const [cookies] = useCookies(["language"]);

  return (
    <Fragment>
      <div className={`${css.FastBoxs}`}>
        {topLinks &&
          topLinks.map((el, index) => {
            let lang;
            if (el[cookies.language] === undefined) {
              if (cookies.language == "mn") lang = "eng";
              else lang = "mn";
            } else lang = cookies.language;
            let count = 0.2 * index;
            let link = "#";
            if (el.direct && !el.oldDirect) {
              link = "/toplinks/" + el.direct;
            } else if (el.oldDirect) {
              link = el.oldDirect;
            }
            return (
              <a
                href={link}
                className={`${css.FastBox}  wow animate__animated animate__fadeInUp`}
                data-wow-delay={`${count}s`}
                key={el.direct}
              >
                <div className={css.FastBg}>
                  <img src={`http://cdn.lvg.mn/uploads/${el.picture}`} />
                </div>
                <div className={css.FastBox__container}>
                  <img
                    src={`http://cdn.lvg.mn/uploads/${el.icon}`}
                    className={css.Icon}
                  />
                  <h5> {el[lang].name} </h5>
                </div>
              </a>
            );
          })}
      </div>
    </Fragment>
  );
};

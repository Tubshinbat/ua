import css from "styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMenus } from "hooks/use-menus";
import { useCookies } from "react-cookie";
import { useInfo } from "hooks/use-info";
import base from "base";

const HomeHeader = () => {
  const [cookies, setCookie] = useCookies(["language"]);
  const [show, setShow] = useState(false);
  const [dataMenus, setDataMenus] = useState([]);
  const { menus } = useMenus();
  const { info } = useInfo();

  useEffect(() => {
    if (menus) {
      setDataMenus(menus.data);
    }
  }, [menus]);

  const changeLanguage = (lang) => {
    setCookie("language", lang, { path: "/" });
  };

  const renderCategories = (categories, child = false, parentSlug = "") => {
    let myCategories = [];
    categories &&
      categories.map((el) => {
        let lang;
        if (el[cookies.language].name === undefined) {
          if (cookies.language == "mn") lang = "eng";
          else lang = "mn";
        } else lang = cookies.language;

        myCategories.push(
          <li key={el._id} className={el.children.length > 0 && css.DropMenu}>
            {!el.isDirect && !el.model && (
              <Link href={`/p/${parentSlug}/${el.slug}`}>
                <a
                  className={child ? `` : `effect  slide-down `}
                  data-effect={el[lang].name}
                >
                  {el[lang].name}
                </a>
              </Link>
            )}
            {el.isDirect && (
              <a
                href={el.direct}
                target="_blank"
                className={child ? `` : `effect  slide-down `}
                data-effect={el[lang].name}
              >
                {el[lang].name}
              </a>
            )}
            {el.model && (
              <Link href={`/${el.model}`}>
                <a
                  className={child ? `` : `effect  slide-down `}
                  data-effect={el[lang].name}
                >
                  {el[lang].name}
                </a>
              </Link>
            )}

            {el.children.length > 0 && !child ? (
              <ul
                className={`animate__animated animate__fadeIn animate__fast ${css.DropdownMenu}`}
              >
                {renderCategories(el.children, true, el.slug)}
              </ul>
            ) : null}
          </li>
        );
      });

    return myCategories;
  };

  useEffect(() => {
    window.onscroll = () => {
      let header = document.querySelector(".myHeader");
      let needLink = document.querySelector(".needLinks");
      let sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add(`${css.Sticky}`);
        header.classList.add("animate__animated");
        header.classList.add("animate__slideInDown");
        header.classList.add("animate__delay-0.2s");
      } else {
        header.classList.remove(`${css.Sticky}`);
        header.classList.remove("animate__animated");
        header.classList.remove("animate__slideInDown");
        header.classList.remove("animate__delay-0.2s");
      }
    };
  }, []);

  const menuShow = () => {
    show ? setShow(() => false) : setShow(() => true);
  };
  return (
    <header className={`${css.Header} myHeader `}>
      <div className={css.LogoBox}>
        <img
          src={`https://cdn.lvg.mn/uploads/${
            info[cookies.language] !== undefined
              ? info[cookies.language].whiteLogo
              : info[cookies.language] === "mn" && info.eng.whiteLogo
          }`}
        />
      </div>
      <div className={`custom-container ${css.Navbar}`}>
        <ul className={` ${css.Menus}  ${show && css.Active} `}>
          <li>
            <Link href="/">
              <a className={`effect  slide-down `} data-effect=" Эхлэл">
                Эхлэл
              </a>
            </Link>
          </li>
          {renderCategories(dataMenus)}
          <div className={css.ChangeLanguage}>
            {cookies.language === "mn" ? (
              <img
                src="/images/eng.png"
                onClick={() => changeLanguage("eng")}
              />
            ) : (
              <img src="/images/mn.png" onClick={() => changeLanguage("mn")} />
            )}
          </div>
        </ul>

        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" onClick={menuShow} for="menu__toggle">
          <span></span>
        </label>
      </div>
    </header>
  );
};

export default HomeHeader;

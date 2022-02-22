import css from "styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMenus } from "hooks/use-menus";

const HomeHeader = () => {
  const [show, setShow] = useState(false);
  const [dataMenus, setDataMenus] = useState([]);
  const { menus } = useMenus();

  useEffect(() => {
    if (menus) {
      setDataMenus(menus.data);
      console.log(menus);
    }
  }, [menus]);

  const renderCategories = (categories, child = false) => {
    let myCategories = [];
    categories &&
      categories.map((el) => {
        myCategories.push(
          <li key={el._id} className={el.children.length > 0 && css.DropMenu}>
            {!el.isDirect && !el.model && (
              <Link href={`/page/${el.slug}`}>
                <a
                  className={child ? `` : `effect  slide-down `}
                  data-effect={el.name}
                >
                  {el.name}
                </a>
              </Link>
            )}
            {el.isDirect && (
              <a
                href={el.direct}
                target="_blank"
                className={child ? `` : `effect  slide-down `}
                data-effect={el.name}
              >
                {el.name}
              </a>
            )}
            {el.model && (
              <Link href={`${el.model}`}>
                <a
                  className={child ? `` : `effect  slide-down `}
                  data-effect={el.name}
                >
                  {el.name}
                </a>
              </Link>
            )}

            {el.children.length > 0 ? (
              <ul
                className={`animate__animated animate__fadeIn animate__fast ${css.DropdownMenu}`}
              >
                {renderCategories(el.children, true)}
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
        <img src="/images/white-logo.png" />
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
            <img src="/images/eng.png" />
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

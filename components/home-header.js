import css from "styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default () => {
  const [show, setShow] = useState(false);

  const menuShow = () => {
    show ? setShow(() => false) : setShow(() => true);
  };
  return (
    <header className={css.Header}>
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
          <li>
            <Link href="/">
              <a className={`effect slide-down `} data-effect="Бидний тухай">
                Бидний тухай
              </a>
            </Link>
          </li>
          <li className={css.DropMenu}>
            <Link href="/">
              <a
                className={`effect slide-down ${css.Dropdown}`}
                data-effect="Бүрэлдхүүн сургууль"
              >
                Бүрэлдхүүн сургууль
              </a>
            </Link>
            <ul
              className={`animate__animated animate__fadeIn animate__fast ${css.DropdownMenu}`}
            >
              <li>
                <Link href="#">
                  <a>Төрийн албаны сургууль</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Удирдахуйн ухааны сургууль</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Мэргэшил дээшлүүлэх институт</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <a className={`effect slide-down `} data-effect="Мэдээ мэдээлэл">
                Мэдээ мэдээлэл
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={`effect slide-down `} data-effect="Шилэн данс">
                Шилэн данс
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={`effect slide-down `} data-effect="Үйл ажиллагаа">
                Үйл ажиллагаа
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={`effect slide-down `} data-effect="Ил тод байдал">
                Ил тод байдал
              </a>
            </Link>
          </li>
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

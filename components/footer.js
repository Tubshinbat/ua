import { useFooterMenu } from "hooks/use-menus";
import { useCookies } from "react-cookie";
import css from "styles/Footer.module.css";
import Link from "next/link";
import { useInfo } from "hooks/use-info";
import { useSocials } from "hooks/use-links";

const Footer = () => {
  const { menus } = useFooterMenu();
  const { info } = useInfo();
  const { socialLinks } = useSocials();
  const [cookies] = useCookies(["language"]);

  const renderCategories = (categories, child = false, parentSlug = "") => {
    let myCategories = [];
    let count = 1;
    categories &&
      categories.map((el) => {
        let lang;
        if (el[cookies.language].name === undefined) {
          if (cookies.language == "mn") lang = "eng";
          else lang = "mn";
        } else lang = cookies.language;

        myCategories.push(
          <>
            <div key={el._id} className={`${!child && css.Footer__box}`}>
              {!child && (
                <div className={css.Footer__Title}>{el[lang].name}</div>
              )}

              {!el.isDirect && !el.model && child && (
                <Link href={`/f/${parentSlug}/${el.slug}`}>
                  <a>{el[lang].name}</a>
                </Link>
              )}

              {el.isDirect && child && (
                <a href={el.direct} target="_blank">
                  {el[lang].name}
                </a>
              )}

              {el.model && child && (
                <Link href={`/${el.model}`}>
                  <a>{el[lang].name}</a>
                </Link>
              )}
              {el.children.length > 0 && !child ? (
                <ul className={css.Footer__Links}>
                  {renderCategories(el.children, true, el.slug)}
                </ul>
              ) : null}
            </div>
            {child === false && count++ === 2 ? (
              <div className={css.Footer__logo}>
                <img src="/images/footer-logo.png" />
              </div>
            ) : null}
          </>
        );
      });

    return myCategories;
  };

  return (
    <>
      <footer className={css.Footer}>
        <div className="container">
          <div className={css.Footer__boxs}>
            <div className={css.Footer__logo_m}>
              <img src="/images/footer-logo.png" />
            </div>
            {renderCategories(menus)}

            <div className={`${css.Footer__box}`}>
              <div className={css.Footer__contact}>
                <div className={css.Footer__contact_box}>
                  <i class="fa-solid fa-phone"></i>
                  {info.phone}
                </div>
                <div className={css.Footer__contact_box}>
                  <i class="fa-solid fa-envelope"></i>
                  {info.email}
                </div>
                <div className={css.Footer__socials}>
                  {socialLinks &&
                    socialLinks.map((el) => (
                      <a href={el.link}>
                        <i class={`fa-brands fa-${el.name}`}></i>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={css.Footer__end}>© 2022 УДИРДЛАГЫН АКАДЕМИ</div>
    </>
  );
};

export default Footer;

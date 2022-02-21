import css from "styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={css.Footer}>
        <div className="container">
          <div className={css.Footer__boxs}>
            <div className={css.Footer__logo_m}>
              <img src="/images/footer-logo.png" />
            </div>
            <div className={`${css.Footer__box}`}>
              <div className={css.Footer__Title}>УДИРДЛАГЫН АКАДЕМИ</div>
              <ul className={css.Footer__Links}>
                <li>
                  <a href="#"> ДҮРЭМ ЖУРАМ</a>
                </li>
                <li>
                  <a href="#"> ХОЛБОО БАРИХ</a>
                </li>
                <li>
                  <a href="#"> ВЭБСАЙТ АШИГЛАХ</a>
                </li>
                <li>
                  <a href="#"> МЭДЭЭЛЛИЙН НУУЦЛАЛ</a>
                </li>
              </ul>
            </div>
            <div className={`${css.Footer__box}`}>
              {" "}
              <div className={css.Footer__Title}>
                УДИРДЛАГЫН АКАДЕМИД СУРАЛЦАХ
              </div>
              <ul className={css.Footer__Links}>
                <li>
                  <a href="#"> ДОКТОРЫН СУРГАЛТ</a>
                </li>
                <li>
                  <a href="#">МАГИСТРЫН СУРГАЛТ</a>
                </li>
                <li>
                  <a href="#"> МЭРГЭШҮҮЛЭХ БАГЦ СУРГАЛТ</a>
                </li>
                <li>
                  <a href="#">СЕРТИФИКАТЫН СУРГАЛТ</a>
                </li>
                <li>
                  <a href="#">БОГИНО СУРГАЛТ</a>
                </li>
                <li>
                  <a href="#">ОНЛАЙН СУРГАЛТ</a>
                </li>
              </ul>
            </div>
            <div className={css.Footer__logo}>
              <img src="/images/footer-logo.png" />
            </div>
            <div className={`${css.Footer__box}`}>
              <div className={css.Footer__Title}>ЧУХАЛ ХОЛБООСУУД</div>
              <ul className={css.Footer__Links}>
                <li>
                  <a href="#"> ЭЛСЭЛТ</a>
                </li>
                <li>
                  <a href="#">БАГШЛАХ БҮРЭЛДЭХҮҮН</a>
                </li>
                <li>
                  <a href="#"> СОНСОГЧИЙН ВЕБ</a>
                </li>
                <li>
                  <a href="#">БАГШИЙН ВЕБ</a>
                </li>
                <li>
                  <a href="#">НОМЫН САНГИЙН ПРОГРАМ</a>
                </li>
                <li>
                  <a href="#">ТӨГСӨГЧИД</a>
                </li>
                <li>
                  <a href="#">ХОЛБОО БАРИХ</a>
                </li>
              </ul>
            </div>
            <div className={`${css.Footer__box}`}>
              <div className={css.Footer__contact}>
                <div className={css.Footer__contact_box}>
                  <i class="fa-solid fa-phone"></i>7013-3043
                </div>
                <div className={css.Footer__contact_box}>
                  <i class="fa-solid fa-envelope"></i>info@naog.gov.mn
                </div>
                <div className={css.Footer__socials}>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter-square"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-google-plus-square"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-youtube-square"></i>
                  </a>
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

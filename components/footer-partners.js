import css from "styles/Partners.module.css";

const Partners = () => {
  return (
    <section className={css.Partners}>
      <div className="container">
        <div className={css.Logos}>
          <img src="/images/logo-1.png" />
          <img src="/images/logo-2.png" />
          <img src="/images/logo-1.png" />
          <img src="/images/logo-2.png" />
          <img src="/images/logo-1.png" />
        </div>
      </div>
    </section>
  );
};

export default Partners;

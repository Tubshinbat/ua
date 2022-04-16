import { usePartners } from "hooks/use-partners";
import css from "styles/Partners.module.css";

const Partners = () => {
  const { partners } = usePartners();
  return (
    <section className={css.Partners}>
      <div className="container">
        <div className={css.Logos}>
          {partners &&
            partners.map((el) => {
              return (
                <a href={el.link} target="_blank">
                  <img src={`https://cdn.lvg.mn/uploads/${el.logo}`} />
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Partners;

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
                <img src={`http://naog-admin.lvg.mn/rest/uploads/${el.logo}`} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Partners;

import css from "/styles/Page.module.css";

const PageHeader = (props) => {
  return (
    <div className={css.PageHeader}>
      <div className={css.PageTitle}>
        {props.pageTitle}
        <ul className={css.Bread}>
          <li> Эхлэл </li>
          <li> {props.pageTitle} </li>
        </ul>
      </div>
    </div>
  );
};

export default PageHeader;

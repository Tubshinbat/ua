import { useState } from "react";
import { useCookies } from "react-cookie";
import styles from "styles/Team.module.css";

const Team = ({ memberData, boolenPop = true }) => {
  const [pop, setPop] = useState(false);
  const [cookies] = useCookies(["language"]);

  const handleClick = () => {
    if (boolenPop) {
      setPop((bf) => (bf === true ? false : true));
    }
  };

  let lang;
  if (memberData[cookies.language] === undefined) {
    if (cookies.language == "mn") lang = "eng";
    else lang = "mn";
  } else lang = cookies.language;

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className={styles.Team} onClick={handleClick}>
          <div className={styles.UserImg}>
            {memberData.picture && (
              <img src={`http://cdn.lvg.mn/uploads/${memberData.picture[0]}`} />
            )}
          </div>
          <p>{memberData[lang].name}</p>
          <span>{memberData[lang].degree}</span>
        </div>
      </div>
      <div
        className={`${styles.BlackBg} ${
          pop === true ? styles.DisplayFlex : styles.DisplayOff
        }`}
      >
        <div
          className={`${styles.Window} animate__animated animate__fadeIn ${
            pop === true ? styles.DisplayOn : styles.DisplayOff
          }`}
        >
          <i
            className={`fa fa-circle-xmark ${styles.CloseIcon}`}
            onClick={handleClick}
          ></i>
          {memberData.picture && (
            <img
              src={`http://cdn.lvg.mn/uploads/${memberData.picture[0]}`}
              className={styles.WindowImg}
            />
          )}

          <div className={styles.Info}>
            <h6> {memberData[lang].name} </h6>
            <span> {memberData[lang].degree} </span>
            <p dangerouslySetInnerHTML={{ __html: memberData[lang].about }}></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

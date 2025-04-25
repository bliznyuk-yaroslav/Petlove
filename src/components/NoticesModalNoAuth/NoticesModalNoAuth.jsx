import css from "./NoticesModalNoAuth.module.scss";
import pets from "../../images/pets.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
export default function NoticesModalNoAuth({onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <section className={css.container}>
      <div className={css.boxContent}>
        <svg className={css.iconClosed} onClick={onClose}>
          <use xlinkHref={`/icons/sprite.svg#icon-x`}></use>
        </svg>
        <div className={css.petsBox}>
          <img src={pets} alt="pets" className={css.petsIcon} />
        </div>
        <h1>Attention</h1>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={css.btnWrap}>
          <NavLink to="/login" className={css.btnLog}>
            Log In
          </NavLink>

          <NavLink to="/register" className={css.btnReg}>
            Registration
          </NavLink>
        </div>
      </div>
    </section>
  );
}

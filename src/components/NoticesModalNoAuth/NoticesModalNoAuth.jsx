import css from "./NoticesModalNoAuth.module.scss";
import pets from "../../images/pets.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
export default function NoticesModalNoAuth({ onClose, isOpen }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKeyDown);

    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    isOpen ? setTimeout(() => setVisible(true), 10) : setVisible(false);
  }, [isOpen]);
  return (
    <section className={clsx(css.container, { [css.active]: visible })}>
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

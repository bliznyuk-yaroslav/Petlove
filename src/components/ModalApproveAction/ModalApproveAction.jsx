import css from "./ModalApproveAction.module.scss";
import pets from "../../images/catIcon.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { clearFavorites } from "../../redux/auth/sliceFavorites";
import clsx from "clsx";
export default function ModalApproveAction({ onClose, onConfirm, isOpen }) {
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
        <h1>Already leaving?</h1>
        <div className={css.btnBox}>
          <button className={`${css.btn} ${css.btnY}`} onClick={onConfirm}>
            Yes
          </button>
          <button className={`${css.btn} ${css.btnW}`} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

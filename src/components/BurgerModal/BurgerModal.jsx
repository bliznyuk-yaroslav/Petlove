import clsx from "clsx";
import useIsNewsPage from "../../hooks/useIsNewPage";
import AuthNav from "../AuthNav/AuthNav";
import Nav from "../Nav/Nav";
import css from "./BurgerModal.module.scss";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
export default function BurgerModal({ onClose, isOpen }) {
  const isHome = useIsNewsPage();
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", (e) => {
      const isConfirmModal = document.querySelector(".ModalApproveActionOpen");
      if (isConfirmModal) return;
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    });
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    isOpen ? setTimeout(() => setVisible(true), 10) : setVisible(false);
  }, [isOpen]);
  const login = useSelector(selectIsLoggedIn);
  console.log(login);
  return (
    <div className={css.cont}>
      <div
        ref={modalRef}
        className={`${clsx(css.accInf, { [css.active]: visible })} ${
          isHome && css.accInfHome
        }`}
      >
        <svg
          className={`${css.iconClosed} ${isHome && css.iconCloseHome}`}
          onClick={onClose}
        >
          <use xlinkHref={`/icons/sprite.svg#icon-x`}></use>
        </svg>
        <Nav isMobile={true} onLinkClick={onClose} />
        <div className={css.posAuth}>
          {!login ? (
            <AuthNav onLinkClick={onClose} isMobile={true} />
          ) : (
            <LogOutBtn isMobile={true} style={css.btn} />
          )}
        </div>
      </div>
    </div>
  );
}

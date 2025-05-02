import css from "./AuthNav.module.scss";
import { NavLink, useLocation } from "react-router-dom";
export default function AuthNav({ isMobile = false, onLinkClick }) {
  return (
    <div className={isMobile ? css.navRegMob : css.navReg}>
      <NavLink onClick={onLinkClick} to="/login" className={css.log}>
        Log In
      </NavLink>
      <NavLink onClick={onLinkClick} to="/register" className={css.reg}>
        Registration
      </NavLink>
    </div>
  );
}

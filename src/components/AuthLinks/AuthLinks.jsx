import css from "./AuthLinks.module.scss";
import { NavLink, useLocation } from "react-router-dom";
export default function AuthLinks() {
  return (
    <div className={css.navReg}>
      <NavLink to="/login" className={css.log}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.reg}>
        Registration
      </NavLink>
    </div>
  );
}

import css from "./MainNavigation.module.scss";
import { NavLink } from "react-router-dom";
export default function MainNavigation({ isHomePage }) {
  return (
    <div className={css.button}>
      <NavLink
        to="/news"
        className={`${css.new} ${isHomePage ? css.newBut : ""}`}
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className={`${css.new} ${isHomePage ? css.newBut : ""}`}
      >
        Find pet
      </NavLink>
      <NavLink
        to="/ourFriends"
        className={`${css.new} ${isHomePage ? css.newBut : ""}`}
      >
        Our Friends
      </NavLink>
    </div>
  );
}

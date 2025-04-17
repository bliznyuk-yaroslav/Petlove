import css from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

export default function Logo({ isHomePage }) {
  return (
    <>
      <NavLink
        to="/"
        className={`${css.logo} ${isHomePage ? css.newLogo : ""}`}
      >
        petl
        <svg className={`${css.head} ${isHomePage ? css.newHead : ""}`}>
          <use xlinkHref={`/icons/sprite.svg#icon-heart-circle`}></use>
        </svg>
        ve
      </NavLink>
    </>
  );
}

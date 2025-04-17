import { NavLink } from "react-router-dom";
import useIsNewsPage from "../../hooks/useIsNewPage";
import css from "./Navigate.module.scss";
import { useState } from "react";
import AuthLinks from "../AuthLinks/AuthLinks";
import UserInfo from "../UserInfo/UserInfo";
import BurgerMenu from "../BurgerMenu/BurgerMenuIcon";
import MainNavigation from "../MainNavigation/MainNavigation";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigate() {
  const isHomePage = useIsNewsPage();
  const login = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.cont}>
      <Logo isHomePage={isHomePage} />
      <MainNavigation className={css.mainNav} isHomePage={isHomePage} />
      <div className={css.info}>
        {login ? (
          <UserInfo isHomePage={isHomePage} />
        ) : (
          <AuthLinks isHomePage={isHomePage} />
        )}
        <BurgerMenu isHomePage={isHomePage} />
      </div>
    </nav>
  );
}

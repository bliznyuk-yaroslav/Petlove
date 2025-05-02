import css from "./UserNav.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectorFullInfoUsers, selectUser } from "../../redux/auth/selectors";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { useLocation } from "react-router-dom";
import UserBar from "../UserBar/UserBar";
import useIsNewsPage from "../../hooks/useIsNewPage";
export default function UserNav() {
  const isHomePage = useIsNewsPage();

  return (
    <div className={css.cont}>
      <span className={css.btnNoVis}>
        <LogOutBtn style={isHomePage ? css.btnHome : css.btn} />
      </span>
      <UserBar />
    </div>
  );
}

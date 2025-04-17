import css from "./UserInfo.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { useLocation } from "react-router-dom";
export default function UserInfo() {
  const user = useSelector(selectUser);
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";

  return (
    <>
      <LogOutBtn />
      <div className={css.accInf}>
        <div className={css.account}>
          <svg className={css.iconAc}>
            <use xlinkHref={`/icons/sprite.svg#icon-user-02`}></use>
          </svg>
        </div>
        <NavLink className={isHomeLocation ? css.nameHome : css.name}>
          {user.name}
        </NavLink>
      </div>
    </>
  );
}

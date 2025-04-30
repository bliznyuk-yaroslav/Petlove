import css from "./UserInfo.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectorFullInfoUsers, selectUser } from "../../redux/auth/selectors";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { useLocation } from "react-router-dom";
export default function UserInfo() {
  const user = useSelector(selectorFullInfoUsers);
  console.log(user);
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";

  return (
    <>
      <span className={css.btnVis}>
        <LogOutBtn style={css.btn} />
      </span>
      <div className={css.accInf}>
        <div className={css.account}>
          {Array.isArray(user) && user.length > 0 ? (
            <img
              className={css.avatarImg}
              src={user.avatar}
              alt="User avatar"
            />
          ) : (
            <svg className={css.iconNoIcon}>
              <use xlinkHref={`/icons/sprite.svg#icon-user-02`}></use>
            </svg>
          )}
        </div>

        <NavLink
          to="/profile"
          className={isHomeLocation ? css.nameHome : css.name}
        >
          {user?.name || "User"}
        </NavLink>
      </div>
    </>
  );
}

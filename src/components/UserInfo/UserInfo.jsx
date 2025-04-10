import css from "./UserInfo.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function UserInfo() {
  const [isName] = useState("Anna");
  return (
    <div className={css.accInf}>
      <div className={css.account}>
        <svg className={css.iconAc}>
          <use xlinkHref={`/icons/sprite.svg#icon-user-02`}></use>
        </svg>
      </div>
      <NavLink className={css.name}>{isName}</NavLink>
    </div>
  );
}

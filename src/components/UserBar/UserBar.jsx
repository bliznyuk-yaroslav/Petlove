import { useSelector } from "react-redux";
import { selectorFullInfoUsers } from "../../redux/auth/selectors";
import { NavLink, useLocation } from "react-router-dom";
import css from "./UserBar.module.scss";
export default function UserBar() {
  const user = useSelector(selectorFullInfoUsers);
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";
  return (
    <div>
      <NavLink to="/profile" className={css.accInf}>
        <div className={css.account}>
          {user?.avatar ? (
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
        <p className={isHomeLocation ? css.nameHome : css.name}>
          {user?.name || "User"}
        </p>
      </NavLink>
    </div>
  );
}

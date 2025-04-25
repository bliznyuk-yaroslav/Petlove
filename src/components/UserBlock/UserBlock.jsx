import { useSelector } from "react-redux";
import css from "./UserBlock.module.scss";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
export default function UserBlock() {
  const user = useSelector(selectUser);
  return (
    <>
      <p className={css.user}>
        User
        <svg className={css.icon}>
          <use xlinkHref={`/icons/sprite.svg#icon-user-02`} />
        </svg>
      </p>
      <div className={css.box}>
        {user.avatar ? (
          <div className={css.boxUpload}>
            <div className={css.photoW}>
              <img
                className={css.avatarImg}
                src={user.avatar}
                alt="User avatar"
              />
            </div>
          </div>
        ) : (
          <div className={css.boxUpload}>
            <div className={css.photoW}>
              <svg className={css.iconNoIcon}>
                <use xlinkHref={`/icons/sprite.svg#icon-user-02`}></use>
              </svg>
            </div>
            <p className={css.upload}>Upload photo</p>
          </div>
        )}

        <p className={css.myInf}>My information</p>
        <div className={css.boxInfo}>
          <p className={css.info}>{user.name}</p>
          <p className={css.info}>{user.email}</p>
          <p className={css.info}>{user.phone}</p>
        </div>
      </div>
    </>
  );
}

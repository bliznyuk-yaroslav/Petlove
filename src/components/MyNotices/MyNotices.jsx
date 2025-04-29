import { useState } from "react";
import css from "./MyNotices.module.scss";
import { useSelector } from "react-redux";
import { selectorFullInfoUsers } from "../../redux/auth/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";
export default function MyNotices() {
  const userInfo = useSelector(selectorFullInfoUsers);
  const [myFavorite, setMyFavorite] = useState(true);
  const dataToRender = myFavorite
    ? userInfo.noticesFavorites
    : userInfo.noticesViewed;
  return (
    <div className={css.cont}>
      <div className={css.btnBox}>
        <button
          className={`${css.btn} ${myFavorite ? css.active : ""}`}
          onClick={() => setMyFavorite(true)}
        >
          My favorite pets
        </button>
        <button
          className={`${css.btn} ${myFavorite ? "" : css.active}`}
          onClick={() => setMyFavorite(false)}
        >
          Viewed
        </button>
      </div>
      <ul className={css.boxItem}>
        {dataToRender?.length > 0 ? (
          dataToRender.map((item) => (
            <li key={item._id} className={css.boxCard}>
              <NoticesItem notices={item} styles={css} />
            </li>
          ))
        ) : (
          <li className={css.noPets}>
            Oops,{" "}
            <span className={css.colorTex}>
              looks like there aren't any furries
            </span>{" "}
            on our adorable page yet. Do not worry! View your pets on the "find
            your favorite pet" page and add them to your favorites.
          </li>
        )}
      </ul>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.scss";
import {
  selectorByPopular,
  selectorByPrice,
  selectorSearchNotices,
} from "../../redux/notices/selectors";
import { setPopularity, setPrice, setSearch } from "../../redux/notices/slice";

import FilterForm from "../FilterForm/FilterForm";
import { resetFiltersNotices } from "../../redux/notices/slice";
export default function NoticesFilters() {
  const dispatch = useDispatch();
  const byPopularity = useSelector(selectorByPopular);
  const byPrice = useSelector(selectorByPrice);

  const handlePrice = (e) => {
    dispatch(setPrice(e));
    dispatch(setPopularity(null));
  };

  const handlePopularity = (value) => {
    dispatch(setPopularity(value));
    dispatch(setPrice(null));
  };
  const handleResetFilters = () => {
    dispatch(resetFiltersNotices());
    dispatch(setPrice(null));
    dispatch(setPopularity(null));
  };
  return (
    <div className={css.contSearch}>
      <FilterForm />
      <span className={css.bord}></span>
      <div className={css.reset}>
        <div className={css.popCont}>
          <div
            className={`${css.btn} ${byPopularity === false ? css.active : ""}`}
          >
            <p onClick={() => handlePopularity(false)}>Popular</p>
            <svg
              className={`${css.icon} ${
                byPopularity === false ? css.activeIcon : ""
              }`}
              onClick={() => handlePopularity("")}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-cross-small-sea`} />
            </svg>
          </div>
          <div
            className={`${css.btn} ${byPopularity === true ? css.active : ""}`}
          >
            <p onClick={() => handlePopularity(true)}>Unpopular</p>
            <svg
              className={`${css.icon} ${
                byPopularity === true ? css.activeIcon : ""
              }`}
              onClick={() => handlePopularity("")}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-cross-small-sea`} />
            </svg>
          </div>
          <div className={`${css.btn} ${byPrice === true ? css.active : ""}`}>
            <p onClick={() => handlePrice(true)}>Cheap</p>
            <svg
              className={`${css.icon} ${
                byPrice === true ? css.activeIcon : ""
              }`}
              onClick={() => handlePrice("")}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-cross-small-sea`} />
            </svg>
          </div>
          <div className={`${css.btn} ${byPrice === false ? css.active : ""}`}>
            <p onClick={() => handlePrice(false)}>Expensive</p>
            <svg
              className={`${css.icon} ${
                byPrice === false ? css.activeIcon : ""
              }`}
              onClick={() => handlePrice("")}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-cross-small-sea`} />
            </svg>
          </div>
        </div>

        <p className={css.resetBtn} onClick={handleResetFilters}>
          Reset filter
        </p>
      </div>
    </div>
  );
}

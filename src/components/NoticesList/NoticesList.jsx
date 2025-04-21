import { useDispatch, useSelector } from "react-redux";
import css from "./NoticesList.module.scss";
import { selectorSex, selectorNotices } from "../../redux/notices/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchSex,
  fetchSpecies,
} from "../../redux/notices/operations";

export default function NoticesList() {
  const notices = useSelector(selectorNotices);
  return (
    <ul className={css.box}>
      {notices.results.map((item) => (
        <li key={item._id} className={css.boxCard}>
          <NoticesItem notices={item} />
        </li>
      ))}
    </ul>
  );
}

import { useSelector } from "react-redux";
import css from "./NoticesList.module.scss";
import { selectorNotices } from "../../redux/notices/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";

export default function NoticesList() {
  const notices = useSelector(selectorNotices);
  return (
    <ul className={css.boxCard}>
      {notices.results.map((item) => (
        <li key={item._id}>
          <NoticesItem notices={item} styles={css} />
        </li>
      ))}
    </ul>
  );
}

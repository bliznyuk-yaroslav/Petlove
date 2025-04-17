import { useDispatch, useSelector } from "react-redux";
import css from "./NoticesList.module.scss";
import { selectorNotices } from "../../redux/notices/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";

export default function NoticesList() {
  const notices = useSelector(selectorNotices);
  console.log(notices);
  return (
    <ul className={css.box}>
      {notices.map((item) => (
        <li key={item.__id} className={css.boxCard}>
          <NoticesItem notices={item} />
        </li>
      ))}
    </ul>
  );
}

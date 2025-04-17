import { useSelector } from "react-redux";
import css from "./ListNews.module.scss";
import { selectorNews } from "../../redux/news/selectors";
import CardNews from "../CardNews/CardNews";
export default function ListNews() {
  const news = useSelector(selectorNews);
  return (
    <ul className={css.box}>
      {news.results.map((item) => (
        <li key={item._id} className={css.boxCard}>
          <CardNews news={item} />
        </li>
      ))}
    </ul>
  );
}

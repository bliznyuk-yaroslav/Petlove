import { useSelector } from "react-redux";
import css from "./NewsList.module.scss";
import { selectorNews } from "../../redux/news/selectors";
import CardNews from "../CardNews/CardNews";
export default function NewsList() {
  const news = useSelector(selectorNews);
  return (
    <ul className={css.box}>
      {news.results.map((item) => (
        <li key={item._id} className={css.boxItem}>
          <CardNews news={item} />
        </li>
      ))}
    </ul>
  );
}

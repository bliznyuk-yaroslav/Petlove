import { useDispatch, useSelector } from "react-redux";
import css from "./ListNews.module.scss";
import { useEffect, useState } from "react";
import { fetchNews } from "../../redux/news/operations";
import {
  selectorNews,
  selectorPage,
  selectorSearch,
} from "../../redux/news/selectors";
import CardNews from "../CardNews/CardNews";
export default function ListNews() {
  const page = useSelector(selectorPage);
  const news = useSelector(selectorNews);
  const search = useSelector(selectorSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);
  return (
    <ul className={css.box}>
      {news.map((item) => (
        <li key={item._id} className={css.boxCard}>
          <CardNews news={item} />
        </li>
      ))}
    </ul>
  );
}

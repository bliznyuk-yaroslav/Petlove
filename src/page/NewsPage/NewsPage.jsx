import { useDispatch, useSelector } from "react-redux";
import ListNews from "../../components/ListNews/ListNews";
import Navigate from "../../components/Navigate/Navigate";
import News from "../../components/News/New";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import css from "./NewsPage.module.scss";
import {
  selectorNews,
  selectorPage,
  selectorSearch,
} from "../../redux/news/selectors";
import { fetchNews } from "../../redux/news/operations";
import { useEffect } from "react";

export default function NewsPage() {
  return (
    <section className={css.container}>
      <Navigate />
      <News />
      <ListNews />
      <PaginationComponent />
    </section>
  );
}

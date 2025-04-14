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
import { setPage } from "../../redux/news/slice";

export default function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector(selectorNews);
  const page = useSelector(selectorPage);
  const search = useSelector(selectorSearch);

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);
  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <section className={css.container}>
      <Navigate />
      <News />
      <ListNews />
      <PaginationComponent
        item={news}
        page={page}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

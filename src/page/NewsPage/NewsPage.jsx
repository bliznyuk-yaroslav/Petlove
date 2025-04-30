import { useDispatch, useSelector } from "react-redux";
import ListNews from "../../components/ListNews/ListNews";
import Navigate from "../../components/Navigate/Navigate";
import News from "../../components/News/New";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import css from "./NewsPage.module.scss";
import {
  selectorLoadingNews,
  selectorNews,
  selectorPage,
  selectorSearch,
} from "../../redux/news/selectors";
import { fetchNews } from "../../redux/news/operations";
import { useEffect } from "react";
import { setPage } from "../../redux/news/slice";
import { selectorFullInfoUsers } from "../../redux/auth/selectors";
import { fetchAllCurrent } from "../../redux/auth/operations";

export default function NewsPage() {
  const loading = useSelector(selectorLoadingNews);
  const dispatch = useDispatch();
  const news = useSelector(selectorNews);
  const page = useSelector(selectorPage);
  const search = useSelector(selectorSearch);
  const userInfo = useSelector(selectorFullInfoUsers);
  useEffect(() => {
    dispatch(fetchAllCurrent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);
  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <section className={css.container}>
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

import { useDispatch, useSelector } from "react-redux";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import css from "./NewsPage.module.scss";
import {
  selectorNews,
  selectorPage,
  selectorSearch,
} from "../../redux/news/selectors";
import { fetchNews } from "../../redux/news/operations";
import { useEffect, useState } from "react";
import { setPage, setSearch } from "../../redux/news/slice";

import { fetchAllCurrent } from "../../redux/auth/operations";
import Title from "../../components/Title/Title";
import SearchField from "../../components/SearchField/SearchField";

export default function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector(selectorNews);
  const page = useSelector(selectorPage);
  const search = useSelector(selectorSearch);
  const [locationSearch, setLocationSearch] = useState(search);
  useEffect(() => {
    dispatch(fetchAllCurrent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handleChange = (e) => {
    setLocationSearch(e.target.value);
  };
  const handleSearchSubmit = (val = locationSearch) => {
    dispatch(setSearch(val));
    dispatch(setPage(1));
  };

  return (
    <section className={css.container}>
      <div className={css.contNews}>
        <Title title="News" styles={css} />
        <SearchField
          value={locationSearch}
          onChange={handleChange}
          placeholder="Search"
          styles={css}
          onSubmit={handleSearchSubmit}
        />
      </div>
      <NewsList />
      <Pagination item={news} page={page} onPageChange={handlePageChange} />
    </section>
  );
}

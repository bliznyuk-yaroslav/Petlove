import { useDispatch, useSelector } from "react-redux";
import css from "./News.module.scss";
import { selectorPage, selectorSearch } from "../../redux/news/selectors";
import { setPage, setSearch } from "../../redux/news/slice";
import SearchField from "../SearchField/SearchField";
import Title from "../Title/Title";
import { useEffect } from "react";
import { fetchNews } from "../../redux/news/operations";
export default function News() {
  const dispatch = useDispatch();
  const search = useSelector(selectorSearch);
  const page = useSelector(selectorPage);
  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(setPage(1));
  };

  return (
    <div className={css.contNews}>
      <Title title="News" styles={css} />
      <SearchField
        value={search}
        onChange={handleChange}
        placeholder="Search"
        styles={css}
      />
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.scss";
import {
  selectorPageNotices,
  selectorSearchNotices,
} from "../../redux/notices/selectors";
import { setPage, setSearch } from "../../redux/notices/slice";
import { useEffect } from "react";
import { fetchNotices } from "../../redux/notices/operations";
import FilterForm from "../FilterForm/FilterForm";
export default function NoticesFilters() {
  const dispatch = useDispatch();
  const search = useSelector(selectorSearchNotices);
  const page = useSelector(selectorPageNotices);
  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(setPage(1));
  };
  useEffect(() => {
    dispatch(fetchNotices({ page, search }));
  }, [dispatch, page, search]);

  return (
    <div className={css.contSearch}>
      <SearchField
        value={search}
        onChange={handleChange}
        placeholder="Search"
        styles={css}
      />
      <FilterForm />
    </div>
  );
}

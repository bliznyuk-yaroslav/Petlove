import { useDispatch, useSelector } from "react-redux";
import css from "./FilterForm.module.scss";
import {
  selectorFilters,
  selectorNotices,
} from "../../redux/notices/selectors";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchSex,
  fetchSpecies,
} from "../../redux/notices/operations";

export default function FilterForm() {
  const dispatch = useDispatch();
  const notices = useSelector(selectorNotices);

  return (
    <div>
      <select name="category" className={css.categ}></select>
      <select name="species" className={css.spec}></select>
      <select name="sex" className={css.sex}></select>
    </div>
  );
}

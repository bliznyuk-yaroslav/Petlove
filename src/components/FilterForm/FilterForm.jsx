import { useDispatch, useSelector } from "react-redux";
import css from "./FilterForm.module.scss";
import {
  selectorSetSex,
  selectorCategories,
  selectorSpecies,
} from "../../redux/notices/selectors";
import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchSex,
  fetchSpecies,
} from "../../redux/notices/operations";
import { setSex } from "../../redux/notices/slice";

export default function FilterForm() {
  const dispatch = useDispatch();
  const selectedSex = useSelector(selectorSetSex);

  const sex = useSelector(selectorSetSex);
  console.log(sex);
  const categories = useSelector(selectorCategories);
  const species = useSelector(selectorSpecies);
  const handleSexChange = (e) => {
    dispatch(setSex(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchSex());
    dispatch(fetchCategories());
    dispatch(fetchSpecies());
  }, [dispatch]);

  return (
    <div>
      <select name="category" className={css.categ}>
        <option value="" disabled hidden>
          Category
        </option>
        <option value="all"> Show all</option>
        {categories.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <select
        value={selectedSex}
        onChange={handleSexChange}
        className={css.sex}
      >
        <option value="" disabled hidden>
          By gender
        </option>
        <option value="all"> Show all</option>
        {sex.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <select name="species" className={css.spec}>
        <option value="" disabled hidden>
          By type
        </option>
        <option value="all"> Show all</option>
        {species.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

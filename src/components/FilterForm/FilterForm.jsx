import { useDispatch, useSelector } from "react-redux";
import css from "./FilterForm.module.scss";
import {
  selectorSetSex,
  selectorCategories,
  selectorSpecies,
  selectorSex,
  selectedSetSpecies,
  selectedSetCategories,
} from "../../redux/notices/selectors";
import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchSex,
  fetchSpecies,
} from "../../redux/notices/operations";
import { setCategory, setSex, setSpecies } from "../../redux/notices/slice";
import Select from "react-select";
const customerSelectStyles = {
  control: (base) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: "30px",
    margin: "0",
    border: "none",
    boxShadow: "none",
    cursor: "pointer",
    width: "200px",
    height: "48px",
    color: "rgba(38, 38, 38, 1)",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
  }),
  option: (_, state) => ({
    cursor: "pointer",
    color:
      state.data.value === ""
        ? "rgba(246, 184, 61, 1)"
        : "rgba(38, 38, 38, 0.6)",

    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "-0.48px",
  }),
  menu: (base) => ({
    width: "200px",
    maxHeight: "216px",
    marginTop: "4px",
    padding: "14px",

    borderRadius: "15px",
    overflowY: "auto",
    zIndex: 9999,
    alignItems: "center",
    backgroundColor: "#FFF;",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "-0.48px",
  }),
  dropdownIndicator: (styles, { data }) => ({
    color: "#000",
    padding: "15px 14px",
    height: "48px",
    svg: {
      width: "18px",
      height: "18px",
      ":focus": {
        transform: "rotate(180deg)",
        transition: "transform 0.3s ease",
      },
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "rgba(38, 38, 38, 1)",
    margin: "0",
  }),
};

export default function FilterForm() {
  const dispatch = useDispatch();

  const sex = useSelector(selectorSex);
  const categories = useSelector(selectorCategories);
  const species = useSelector(selectorSpecies);
  const selectedSex = useSelector(selectorSetSex);
  const selectedSpecies = useSelector(selectedSetSpecies);
  const selectedCategories = useSelector(selectedSetCategories);
  console.log(selectedSex);
  console.log(selectedSpecies);
  console.log(selectedCategories);
  const toOptions = (arr) =>
    arr.map((el) => ({
      value: el,
      label: el.charAt(0).toUpperCase() + el.slice(1),
    }));
  const handleSexChange = (selectedOption) => {
    dispatch(setSex(selectedOption?.value));
  };
  const handleCategoriesChange = (selectedOption) => {
    dispatch(setCategory(selectedOption?.value));
  };
  const handleSpeciesChange = (selectedOption) => {
    dispatch(setSpecies(selectedOption?.value));
  };

  useEffect(() => {
    dispatch(fetchSex());
    dispatch(fetchCategories());
    dispatch(fetchSpecies());
  }, [dispatch]);

  return (
    <div className={css.filterBox}>
      <Select
        value={
          selectedCategories
            ? {
                value: selectedCategories,
                label:
                  selectedCategories.charAt(0).toUpperCase() +
                  selectedCategories.slice(1),
              }
            : null
        }
        onChange={handleCategoriesChange}
        options={[{ value: "", label: "Show all" }, ...toOptions(categories)]}
        placeholder="Category"
        styles={customerSelectStyles}
        className={css.select}
      />
      <Select
        value={
          selectedSex
            ? {
                value: selectedSex,
                label:
                  selectedSex.charAt(0).toUpperCase() + selectedSex.slice(1),
              }
            : null
        }
        onChange={handleSexChange}
        options={[{ value: "", label: "Show all" }, ...toOptions(sex)]}
        placeholder="By gender"
        styles={customerSelectStyles}
        className={css.select}
      />
      <Select
        value={
          selectedSpecies
            ? {
                value: selectedSpecies,
                label:
                  selectedSpecies.charAt(0).toUpperCase() +
                  selectedSpecies.slice(1),
              }
            : null
        }
        onChange={handleSpeciesChange}
        options={[{ value: "", label: "Show all" }, ...toOptions(species)]}
        placeholder="By type"
        styles={customerSelectStyles}
        className={css.select}
      />
    </div>
  );
}

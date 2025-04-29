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
import customerSelectStyles from "./FilterSelectStyle";
import {
  selectorCities,
  selectorCitiesLocation,
  selectorCitLoc,
  selectorSetLocation,
} from "../../redux/cities/selectors";
import { setSearchLocations } from "../../redux/cities/slice";
import { useDebounce } from "../../hooks/useDebounce";
import customerSelectStylesLocation from "./FilterLocation";
import {
  CustomDropdownIndicator,
  CustomClearIndicator,
  CustomSearchIndicator,
} from "./CustomDropdownIndicator";
import { setLocation } from "../../redux/cities/slice";
export default function FilterForm() {
  const dispatch = useDispatch();
  const sex = useSelector(selectorSex);
  const categories = useSelector(selectorCategories);
  const species = useSelector(selectorSpecies);
  const selectedSex = useSelector(selectorSetSex);
  const selectedSpecies = useSelector(selectedSetSpecies);

  const selectedCategories = useSelector(selectedSetCategories);
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
  const location = useSelector(selectorSetLocation);
  const citiesLocation = useSelector(selectorCities);
  const citLoc = useSelector(selectorCitiesLocation);
  const selLoc = useSelector(selectorCitLoc);
 
  const locationOptions =
    Array.isArray(citiesLocation) && citiesLocation.length > 0
      ? citiesLocation
      : Array.isArray(citLoc)
      ? citLoc
      : [];

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
        menuPortalTarget={document.body}
        menuPosition="absolute"
        components={{
          DropdownIndicator: CustomDropdownIndicator,
        }}
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
        menuPortalTarget={document.body}
        menuPosition="absolute"
        components={{
          DropdownIndicator: CustomDropdownIndicator,
        }}
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
        menuPortalTarget={document.body}
        menuPosition="absolute"
        components={{
          DropdownIndicator: CustomDropdownIndicator,
        }}
      />
      <Select
        value={
          selLoc?.cityEn
            ? {
                value: selLoc.cityEn,
                label: `${selLoc.stateEn}, ${selLoc.cityEn}`,
              }
            : null
        }
        onChange={(selectedOption) => {
          if (selectedOption) {
            const selectedCity = locationOptions.find(
              (city) => city.cityEn === selectedOption.value
            );
            if (selectedCity) {
              dispatch(setLocation(selectedCity)); // ✅ правильно
            }
          } else {
            dispatch(setLocation([])); // очищаємо масив
            dispatch(setSearchLocations(""));
          }
        }}
        onInputChange={(newValue) => {
          dispatch(setSearchLocations(newValue)); // фільтруємо по введеному
        }}
        options={locationOptions.map((city) => ({
          value: city.cityEn,
          label: `${city.stateEn}, ${city.cityEn}`,
        }))}
        placeholder="Location"
        styles={customerSelectStylesLocation}
        className={css.select}
        components={{
          DropdownIndicator: CustomSearchIndicator,
          ClearIndicator: CustomClearIndicator,
        }}
        menuPortalTarget={document.body}
        menuPosition="absolute"
        isClearable
        isSearchable
        defaultValue={null}
      />
    </div>
  );
}

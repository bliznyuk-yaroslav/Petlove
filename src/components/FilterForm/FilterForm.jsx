import { useDispatch, useSelector } from "react-redux";
import css from "./FilterForm.module.scss";
import {
  selectorSetSex,
  selectorCategories,
  selectorSpecies,
  selectorSex,
  selectedSetSpecies,
  selectedSetCategories,
  selectorSearchNotices,
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

} from "../../redux/cities/selectors";
import { setSearchLocations } from "../../redux/cities/slice";

import customerSelectStylesLocation from "./FilterLocation";
import {
  CustomDropdownIndicator,
  CustomClearIndicator,
  CustomSearchIndicator,
} from "./CustomDropdownIndicator";
import { setLocation } from "../../redux/cities/slice";
import SearchField from "../SearchField/SearchField";
import { setSearch } from "../../redux/notices/slice";
import { useMediaQuery } from "../../hooks/useMediaQuery";
export default function FilterForm() {
  const isTablet = useMediaQuery("(max-width: 768px)");
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

  const citiesLocation = useSelector(selectorCities);
  const citLoc = useSelector(selectorCitiesLocation);
  const selLoc = useSelector(selectorCitLoc);

  const search = useSelector(selectorSearchNotices);
  const locationOptions =
    Array.isArray(citiesLocation) && citiesLocation.length > 0
      ? citiesLocation
      : Array.isArray(citLoc)
      ? citLoc
      : [];
  const [locationSearch, setLocationSearch] = useState(search);
  const handleChangeSearch = (e) => {
    setLocationSearch(e.target.value);
  };
  const handleSearchSubmit = (val = locationSearch) => {
    dispatch(setSearch(val));
  };
  return (
    <div className={css.filterBox}>
      <SearchField
        value={locationSearch}
        onChange={handleChangeSearch}
        placeholder="Search"
        styles={css}
        onSubmit={handleSearchSubmit}
      />
      <div className={css.selectWrapper}>
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
          styles={customerSelectStyles(isTablet)}
          className={css.select}
          menuPortalTarget={document.body}
          menuPosition="absolute"
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
        />
      </div>
      <div className={css.selectWrapper}>
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
          styles={customerSelectStyles(isTablet)}
          className={css.select}
          menuPortalTarget={document.body}
          menuPosition="absolute"
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
        />
      </div>
      <div className={css.selectWrapperType}>
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
          styles={customerSelectStyles(isTablet)}
          className={css.select}
          menuPortalTarget={document.body}
          menuPosition="absolute"
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
        />
      </div>
      <div className={css.selectWrapperLoc}>
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
                dispatch(setLocation(selectedCity));
              }
            } else {
              dispatch(setLocation([]));
              dispatch(setSearchLocations(""));
            }
          }}
          onInputChange={(newValue) => {
            dispatch(setSearchLocations(newValue));
          }}
          options={locationOptions.map((city) => ({
            value: city.cityEn,
            label: `${city.stateEn}, ${city.cityEn}`,
          }))}
          placeholder="Location"
          styles={customerSelectStylesLocation(isTablet)}
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
    </div>
  );
}

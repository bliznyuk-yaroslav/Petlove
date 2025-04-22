import { useDispatch, useSelector } from "react-redux";
import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.scss";
import {
  selectedSetCategories,
  selectedSetSpecies,
  selectorCitLoc,
  selectorPageNotices,
  selectorSearchNotices,
  selectorSetSex,
} from "../../redux/notices/selectors";
import { resetFilters, setPage, setSearch } from "../../redux/notices/slice";
import { useEffect } from "react";
import { fetchNotices } from "../../redux/notices/operations";
import FilterForm from "../FilterForm/FilterForm";
import {
  fetchCities,
  fetchCitiesLocation,
} from "../../redux/cities/operations";
import { selectorSetLocation } from "../../redux/cities/selectors";
import { resetFiltersCities } from "../../redux/cities/slice";
import NoticesPage from "../../page/NoticesPage/NoticesPage";
export default function NoticesFilters() {
  const dispatch = useDispatch();
  const search = useSelector(selectorSearchNotices);
  const page = useSelector(selectorPageNotices);
  const locationCities = useSelector(selectorSetLocation);
  const location = useSelector(selectorCitLoc);
  const locId = location?._id || "";
  const selectedSex = useSelector(selectorSetSex);
  const selectedSpecies = useSelector(selectedSetSpecies);
  const selectedCategories = useSelector(selectedSetCategories);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
 
  // useEffect(() => {
  //   dispatch(fetchCitiesLocation());
  // }, [dispatch]);
  // useEffect(() => {
  //   if (!location || !location._id) return;

  //   dispatch(fetchNotices(page, search, { locationId: location._id }));
  //   dispatch(fetchCities({ location: locationCities }));
  // }, [dispatch, page, search, locationCities, location?._id]);



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

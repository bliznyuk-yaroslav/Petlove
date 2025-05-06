import Title from "../../components/Title/Title";
import css from "./NoticesPage.module.scss";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectedSetCategories,
  selectedSetSpecies,
  selectorByPopular,
  selectorByPrice,
  selectorCitLoc,
  selectorNotices,
  selectorPageNotices,
  selectorSearchNotices,
  selectorSetSex,
} from "../../redux/notices/selectors";
import { fetchNotices } from "../../redux/notices/operations";
import Pagination from "../../components/Pagination/Pagination";
import { resetFiltersNotices, setPageNotices } from "../../redux/notices/slice";
import { selectorSetLocation } from "../../redux/cities/selectors";
import { fetchCitiesLocation } from "../../redux/cities/operations";
import { selectorFav } from "../../redux/auth/selectors";
import { fetchCities } from "../../redux/cities/operations";

export default function NoticesPage() {
  const notices = useSelector(selectorNotices);
  const page = useSelector(selectorPageNotices);
  const location = useSelector(selectorCitLoc);
  const selectedSex = useSelector(selectorSetSex);
  const selectedSpecies = useSelector(selectedSetSpecies);
  const selectedCategories = useSelector(selectedSetCategories);
  const search = useSelector(selectorSearchNotices);
  const locationCities = useSelector(selectorSetLocation);
  const byPopularity = useSelector(selectorByPopular);
  const byPrice = useSelector(selectorByPrice);
  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNotices(1));
    dispatch(resetFiltersNotices());
    setFirstLoad(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCitiesLocation());
  }, [dispatch]);

  useEffect(() => {
    if (firstLoad) return;
    dispatch(
      fetchNotices({
        page,
        search,
        locationId: location?._id || undefined,
        sex: selectedSex || undefined,
        species: selectedSpecies || undefined,
        category: selectedCategories || undefined,
        byPopularity,
        byPrice,
      })
    );
    if (locationCities && locationCities.length >= 2) {
      dispatch(fetchCities({ location: locationCities }));
    }
  }, [
    dispatch,
    page,
    search,
    locationCities,
    location,
    selectedSex,
    selectedSpecies,
    selectedCategories,
    byPopularity,
    byPrice,
    firstLoad,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(setPageNotices(newPage));
  };

  return (
    <section className={css.container}>
      <Title title="Find your favorite pet" styles={css} />
      <NoticesFilters />
      <NoticesList />
      <Pagination item={notices} page={page} onPageChange={handlePageChange} />
    </section>
  );
}

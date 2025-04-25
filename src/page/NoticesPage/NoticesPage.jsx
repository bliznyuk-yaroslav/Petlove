import { Pagination } from "@mui/material";
import Navigate from "../../components/Navigate/Navigate";
import Title from "../../components/Title/Title";
import css from "./NoticesPage.module.scss";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import { resetFilters, setPage } from "../../redux/notices/slice";
import { selectorSetLocation } from "../../redux/cities/selectors";
import { fetchCitiesLocation } from "../../redux/cities/operations";
import { selectorFav, selectToken } from "../../redux/auth/selectors";

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
  const token = useSelector(selectorFav);
  console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCitiesLocation());
  }, [dispatch]);
  useEffect(() => {
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
  ]);

  const handlePageChange = (noticesPage) => {
    dispatch(setPage(noticesPage));
  };

  return (
    <section className={css.container}>
      <Title title="Find your favorite pet" />
      <NoticesFilters />
      <NoticesList />
      <PaginationComponent
        item={notices}
        page={page}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

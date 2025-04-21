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
  selectorNotices,
  selectorPageNotices,
  selectorSearchNotices,
  selectorSetSex,
} from "../../redux/notices/selectors";
import { fetchNotices } from "../../redux/notices/operations";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import { setPage } from "../../redux/notices/slice";

export default function NoticesPage() {
  const notices = useSelector(selectorNotices);
  const page = useSelector(selectorPageNotices);
  const sexSelector = useSelector(selectorSetSex);
  const categorySelector = useSelector(selectedSetCategories);
  const speciesSelector = useSelector(selectedSetSpecies);
  const search = useSelector(selectorSearchNotices);
  console.log(page);
  console.log(notices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchNotices({
        page,
        search,
        category: categorySelector,
        sex: sexSelector,
        species: speciesSelector,
      })
    );
  }, [dispatch, categorySelector, sexSelector, speciesSelector]);

  const handlePageChange = (noticesPage) => {
    dispatch(setPage(noticesPage));
  };

  return (
    <section className={css.container}>
      <Navigate />
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

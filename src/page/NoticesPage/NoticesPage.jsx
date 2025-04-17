import { Pagination } from "@mui/material";
import Navigate from "../../components/Navigate/Navigate";
import Title from "../../components/Title/Title";
import css from "./NoticesPage.module.scss";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectorNotices } from "../../redux/notices/selectors";
import { fetchNotices } from "../../redux/notices/operations";
export default function NoticesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  return (
    <section className={css.container}>
      <Navigate />
      <Title title="Find your favorite pet" />
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </section>
  );
}

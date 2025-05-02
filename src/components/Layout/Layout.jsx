import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigate from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./Layout.module.scss";
import { useSelector } from "react-redux";
import { selectorLoadingCit } from "../../redux/cities/selectors";
import { selectorLoadingNews } from "../../redux/news/selectors";
import {
  selectorAuthLoading,
  selectorLoadingFav,
} from "../../redux/auth/selectors";
import { selectorLoadingFriends } from "../../redux/friends/selectors";
import { selectorLoadingNotices } from "../../redux/notices/selectors";
export default function Layout() {
  const location = useLocation();
  const citiesLoading = useSelector(selectorLoadingCit);
  const newsLoading = useSelector(selectorLoadingNews);
  const authLoading = useSelector(selectorAuthLoading);
  const favLoading = useSelector(selectorLoadingFav);
  const friendLoading = useSelector(selectorLoadingFriends);
  const noticesLoading = useSelector(selectorLoadingNotices);
  const isAnyLoading = false;
  // authLoading ||
  // favLoading ||
  // citiesLoading ||
  // newsLoading ||
  // friendLoading ||
  // noticesLoading;

  return (
    <>
      {isAnyLoading && <Loader />}
      <div className={css.cont}>
        {location.pathname !== "/" && <Navigate />}
        <Outlet />
        <Toaster position="top-right" />
      </div>
    </>
  );
}

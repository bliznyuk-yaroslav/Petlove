import { useDispatch } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.scss";
import { useEffect } from "react";
import { fetchAllCurrent } from "../../redux/auth/operations";
import MyNotices from "../../components/MyNotices/MyNotices";

export default function ProfilePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCurrent());
  }, [dispatch]);
  return (
    <section className={css.container}>
      <UserCard />
      <MyNotices />
    </section>
  );
}

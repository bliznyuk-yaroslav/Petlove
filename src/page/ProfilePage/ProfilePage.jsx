import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.scss";
import { useEffect } from "react";
import { fetchAllCurrent } from "../../redux/auth/operations";
import { selectorFullInfoUsers } from "../../redux/auth/selectors";
import MyNotices from "../../components/MyNotices/MyNotices";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectorFullInfoUsers);
  console.log(userInfo);
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

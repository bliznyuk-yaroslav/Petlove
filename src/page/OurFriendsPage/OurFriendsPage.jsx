import Navigate from "../../components/Navigate/Navigate";
import Title from "../../components/Title/Title";
import css from "./OurFriendsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import { selectFriends } from "../../redux/friends/selectors";
import FriendsList from "../../components/FriendsList/FriendsList";
export default function OurFriendsPage() {
  const friends = useSelector(selectFriends);
  console.log(friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <section className={css.container}>
      <Navigate />
      <Title title="Our Friends" />
      <FriendsList />
    </section>
  );
}

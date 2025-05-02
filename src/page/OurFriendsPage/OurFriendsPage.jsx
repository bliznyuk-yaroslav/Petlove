
import Title from "../../components/Title/Title";
import css from "./OurFriendsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import { selectFriends } from "../../redux/friends/selectors";
import FriendsList from "../../components/FriendsList/FriendsList";
export default function OurFriendsPage() {
  const friends = useSelector(selectFriends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <section className={css.container}>
      <Title title="Our Friends" />
      <FriendsList />
    </section>
  );
}

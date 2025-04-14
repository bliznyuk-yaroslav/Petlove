import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "../../redux/friends/selectors";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import NoticesItem from "../FriendsItem/FriendsItem";
import css from "./FriendsList.module.scss";

export default function FriendsList() {
  const friends = useSelector(selectFriends);
  console.log(friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <ul className={css.boxCard}>
      {friends.map((item) => (
        <li key={item._id} className={css.card}>
          <NoticesItem item={item} />
        </li>
      ))}
    </ul>
  );
}

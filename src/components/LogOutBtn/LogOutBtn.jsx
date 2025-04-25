import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { clearFavorites } from "../../redux/auth/sliceFavorites";
export default function LogOutBtn({ style }) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearFavorites());
  };
  return (
    <button className={style} onClick={handleLogOut}>
      Log out
    </button>
  );
}

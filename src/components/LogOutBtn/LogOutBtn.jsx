import { useDispatch } from "react-redux";
import css from "./LogOutBtn.module.scss";
import { logout } from "../../redux/auth/operations";
export default function LogOutBtn() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <button className={css.btn} onClick={handleLogOut}>
      Log out
    </button>
  );
}

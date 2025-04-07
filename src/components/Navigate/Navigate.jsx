import { NavLink } from "react-router-dom";
import css from "./Navigate.module.scss";
import head from "../../assets/icon/heart-circle.svg";

export default function Navigate() {
  return (
    <nav>
      <NavLink>
        petl<span className={css.han}>{head}</span>ve
      </NavLink>
      {/* <NavLink> News</NavLink>;<NavLink>Find pet</NavLink>;
      <NavLink>Our Friends</NavLink>; */}
    </nav>
  );
}

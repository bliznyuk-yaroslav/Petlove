import useIsNewsPage from "../../hooks/useIsNewPage";
import css from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
export default function Nav({ isMobile = false, onLinkClick }) {
  const isHomePage = useIsNewsPage();
  return (
    <div className={isMobile ? css.mobileMenu : css.button}>
      <NavLink
        to="/news"
        onClick={onLinkClick}
        className={({ isActive }) =>
          `${css.new} ${isHomePage ? css.newBut : ""} ${
            isActive ? css.active : ""
          }`
        }
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        onClick={onLinkClick}
        className={({ isActive }) =>
          `${css.new} ${isHomePage ? css.newBut : ""} ${
            isActive ? css.active : ""
          }`
        }
      >
        Find pet
      </NavLink>
      <NavLink
        to="/ourFriends"
        onClick={onLinkClick}
        className={({ isActive }) =>
          `${css.new} ${isHomePage ? css.newBut : ""} ${
            isActive ? css.active : ""
          }`
        }
      >
        Our Friends
      </NavLink>
    </div>
  );
}

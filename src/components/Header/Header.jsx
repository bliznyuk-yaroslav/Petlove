import { NavLink, useLocation } from "react-router-dom";
import useIsNewsPage from "../../hooks/useIsNewPage";
import css from "./Header.module.scss";
import { useState } from "react";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import BurgerModal from "../BurgerModal/BurgerModal";

export default function Header() {
  const isHomePage = useIsNewsPage();
  const login = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const isRootPage = location.pathname === "/";
  const [showBurger, setShowBurger] = useState(false);
  const isOpenBurger = () => setShowBurger(true);
  const isCloseBurger = () => setShowBurger(false);
  return (
    <nav className={`${css.cont} ${!isRootPage ? css.contNav : ""}`}>
      <Logo isHomePage={isHomePage} />
      <Nav />
      <div className={css.info}>
        {login ? <UserNav /> : <AuthNav isHomePage={isHomePage} />}
        <div className={css.burgerMenu} onClick={isOpenBurger}>
          <svg className={isHomePage ? css.burgerIconHome : css.burgerIcon}>
            <use xlinkHref={`/icons/sprite.svg#icon-menu-01`} />
          </svg>
        </div>
      </div>
      {showBurger && (
        <BurgerModal onClose={isCloseBurger} isOpen={isOpenBurger} />
      )}
    </nav>
  );
}

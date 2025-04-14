import { useLocation } from "react-router-dom";
import css from "./BurgerMenuIcon.module.scss";
export default function BurgerMenu() {
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";
  return (
    <div className={css.burgerMenu}>
      <svg className={isHomeLocation ? css.burgerIconHome : css.burgerIcon}>
        <use xlinkHref={`/icons/sprite.svg#icon-menu-01`} />
      </svg>
    </div>
  );
}

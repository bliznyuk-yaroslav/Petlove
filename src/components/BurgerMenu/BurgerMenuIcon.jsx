import css from "./BurgerMenuIcon.module.scss";
export default function BurgerMenu() {
  return (
    <div className={css.burgerMenu}>
      <svg className={css.burgerIcon}>
        <use xlinkHref={`/icons/sprite.svg#icon-menu-01`} />
      </svg>
    </div>
  );
}

import css from "./AuthLinks.module.scss";
export default function AuthLinks() {
  return (
    <div className={css.navReg}>
      <NavLink className={css.log}>Log In</NavLink>
      <NavLink className={css.reg}>Registration</NavLink>
    </div>
  );
}

import css from "./Title.module.scss";
export default function Title({ title }) {
  return <h1 className={css.newsHead}>{title}</h1>;
}

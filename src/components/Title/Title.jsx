import css from "./Title.module.scss";
export default function Title({ title, styles }) {
  return <h1 className={styles.newsHead}>{title}</h1>;
}

import ListNews from "../../components/ListNews/ListNews";
import Navigate from "../../components/Navigate/Navigate";
import News from "../../components/News/New";
import css from "./NewsPage.module.scss";

export default function NewsPage() {
  return (
    <section className={css.container}>
      <Navigate />
      <News />
      <ListNews />
    </section>
  );
}

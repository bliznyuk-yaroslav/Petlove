import Navigate from "../../components/Navigate/Navigate";
import Title from "../../components/Title/Title";
import css from "./OurFriendsPage.module.scss";
import News from "../../components/News/New";
import ListNews from "../../components/ListNews/ListNews";
export default function OurFriendsPage() {
  return (
    <section className={css.container}>
      <Navigate />
      <Title title="Our Friends" />
      {/* <ListNews /> */}
    </section>
  );
}

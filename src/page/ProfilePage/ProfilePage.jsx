import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.scss";

export default function ProfilePage() {
  return (
    <section className={css.container}>
      <UserCard />
    </section>
  );
}

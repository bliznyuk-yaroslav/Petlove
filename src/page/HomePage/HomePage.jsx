import HeroHome from "../../components/HeroHome/HeroHome";
import css from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <section className={css.container}>
      <HeroHome />
    </section>
  );
}

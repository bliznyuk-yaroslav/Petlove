import Navigate from "../../components/Navigate/Navigate";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./RegistrationPage.module.scss";
export default function RegistrationPage() {
  return (
    <section className={css.container}>
      <Navigate />
      <PetBlock />
    </section>
  );
}

import Navigate from "../../components/Navigate/Navigate";
import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.scss";

export default function RegistrationPage() {
  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock />
        <RegistrationForm />
      </div>
    </section>
  );
}

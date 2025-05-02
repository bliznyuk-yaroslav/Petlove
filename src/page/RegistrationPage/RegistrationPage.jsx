import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.scss";
import cat from "../../images/acd82b0cfe1e554de6fa5022aac492a2abaad8ca.png";
export default function RegistrationPage() {
  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock photo={cat} styles={css} />
        <RegistrationForm />
      </div>
    </section>
  );
}

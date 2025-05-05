import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.scss";

import catIcon from "../../images/catIcon.png";
export default function RegistrationPage() {
  const data = "18.10.2021";
  const name = "Jack";
  const description =
    "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.";

  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock
          styles={css}
          desc={description}
          data={data}
          name={name}
          pets={catIcon}
        />
        <RegistrationForm />
      </div>
    </section>
  );
}

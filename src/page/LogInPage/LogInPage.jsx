import LogInForm from "../../components/LogInForm/LogInForm";
import Navigate from "../../components/Navigate/Navigate";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./LogInPage.module.scss";
export default function LogInPage() {
  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock />
        <LogInForm />
      </div>
    </section>
  );
}

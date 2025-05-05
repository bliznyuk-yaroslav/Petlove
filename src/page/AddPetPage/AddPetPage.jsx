import AddPetForm from "../../components/AddPetForm/AddPetForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./AddPetPage.module.scss";
import dog from "../../images/Dog.png";
export default function AddPetPage() {
  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock photo={dog} styles={css} />
        <AddPetForm />
      </div>
    </section>
  );
}

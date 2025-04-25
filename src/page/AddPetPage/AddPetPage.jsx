import AddPetForm from "../../components/AddPetForm/AddPetForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./AddPetPage.module.scss";

export default function AddPetPage() {
  return (
    <section className={css.container}>
      <PetBlock />
      <AddPetForm />
    </section>
  );
}

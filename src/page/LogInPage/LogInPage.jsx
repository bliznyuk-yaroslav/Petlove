import { useDispatch } from "react-redux";
import LogInForm from "../../components/LogInForm/LogInForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./LogInPage.module.scss";
import pets from "../../images/pets.png";
import bigPets from "../../images/telegram-cloud-document-2-5460905295997845524 1.png";
export default function LogInPage() {
  const data = "21.09.2020";
  const name = "Rich";
  const descriptoin =
    "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!";
  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock
          photo={bigPets}
          styles={css}
          desc={descriptoin}
          data={data}
          name={name}
          pets={pets}
        />
        <LogInForm />
      </div>
    </section>
  );
}

import { useDispatch } from "react-redux";
import LogInForm from "../../components/LogInForm/LogInForm";
import Navigate from "../../components/Navigate/Navigate";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./LogInPage.module.scss";
import { useEffect } from "react";
import { fetchAllCurrent } from "../../redux/auth/operations";
import bigPets from "../../images/telegram-cloud-document-2-5460905295997845524 1.png";
export default function LogInPage() {
  return (
    <section className={css.container}>
      <div className={css.contHead}>
        <PetBlock photo={bigPets} styles={css} />
        <LogInForm />
      </div>
    </section>
  );
}

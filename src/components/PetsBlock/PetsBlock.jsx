import PetsList from "../PetsList/PetsList";
import css from "./PetsBlock.module.scss";

import { NavLink } from "react-router-dom";
export default function PetsBlock() {
  return (
    <>
      <div className={css.boxAdd}>
        <p>My pets</p>
        <NavLink to={"/add-pet"} className={css.btnAddPets}>
          Add pet{" "}
          <svg className={css.iconPlus}>
            <use xlinkHref={`/icons/sprite.svg#icon-plus`}></use>
          </svg>
        </NavLink>
      </div>
      <PetsList />
    </>
  );
}

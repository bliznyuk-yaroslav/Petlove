import css from "./PetBlock.module.scss";

import { useLocation } from "react-router-dom";
export default function PetBlock({ styles, desc, data, name, pets }) {
  const location = useLocation();
  const isAddPetPage = location.pathname === "/add-pet";
  return (
    <div className={styles.cont}>
      <svg className={css.icon}>
        <use xlinkHref={`/icons/sprite.svg#icon-Rectangle-4561`}></use>
      </svg>
      <div className={styles.boxPhoto}></div>
      {!isAddPetPage && (
        <div className={css.pertInf}>
          <div className={css.petsBox}>
            <img src={pets} alt="pets" className={css.petsIcon} />
          </div>
          <div className={css.pets}>
            <div className={css.petsBirth}>
              <p className={css.name}>{name}</p>
              <p className={css.birthday}>
                Birthday: <span className={css.birthCol}>{data}</span>
              </p>
            </div>
            <p className={css.petsDescription}>{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

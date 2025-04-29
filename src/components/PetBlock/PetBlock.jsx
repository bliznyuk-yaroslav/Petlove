import css from "./PetBlock.module.scss";
import pets from "../../images/pets.png";
import { useLocation } from "react-router-dom";
export default function PetBlock({ photo, styles }) {
  const location = useLocation();
  const isAddPetPage = location.pathname === "/add-pet";
  return (
    <div className={css.cont}>
      <svg className={css.icon}>
        <use xlinkHref={`/icons/sprite.svg#icon-Rectangle-4561`}></use>
      </svg>
      <div className={styles.boxPhoto}>
        <img src={photo} alt="pets" className={styles.petsBig} />
      </div>
      {!isAddPetPage && (
        <div className={css.pertInf}>
          <div className={css.petsBox}>
            <img src={pets} alt="pets" className={css.petsIcon} />
          </div>
          <div className={css.pets}>
            <div className={css.petsBirth}>
              <p className={css.name}>Rich</p>
              <p className={css.birthday}>
                Birthday: <span className={css.birthCol}>21.09.2020</span>
              </p>
            </div>
            <p className={css.petsDescription}>
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

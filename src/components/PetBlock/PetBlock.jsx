import css from "./PetBlock.module.scss";
import pets from "../../images/pets.png";
import bigPets from "../../images/c6702a27050bc31d6e56df7fbdf681de.png";
export default function PetBlock() {
  return (
    <div className={css.cont}>
      <div className={css.backImg}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="531"
        height="601"
        viewBox="0 0 531 601"
        fill="none"
        className={css.bgShape}
      >
        <path
          d="M1.75137 116.255C-7.32649 44.9662 57.5465 -13.4711 127.503 2.97834L451.075 79.0632C507.859 92.4153 542.233 150.214 526.855 206.482L485.991 356.005C480.732 375.249 478.067 395.109 478.067 415.058V531.167C478.067 604.223 404.122 654.057 336.408 626.636L67.716 517.832C26.662 501.207 0.833023 460.198 3.57281 415.991L13.8807 249.67C14.9389 232.595 14.3838 215.458 12.2227 198.486L1.75137 116.255Z"
          fill="white"
          fillOpacity="0.1"
        />
      </svg>

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
            Rich would be the perfect addition to an active family that loves to
            play and go on walks. I bet he would love having a doggy playmate
            too!
          </p>
        </div>
      </div>
    </div>
  );
}

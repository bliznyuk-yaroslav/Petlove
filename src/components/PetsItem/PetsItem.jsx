import css from "./PetsItem.module.scss";
import { capitalizeWords } from "../../hooks/useCapitalizeWords";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deletePetsId } from "../../redux/auth/operations";
import toast from "react-hot-toast";
export default function PetsItem({ pets }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePetsId(pets._id));
    toast.success("Success delete pets!");
  };
  return (
    <div className={css.cont}>
      <img src={pets.imgURL} alt={pets.title} className={css.img} />
      <div className={css.text}>
        <h2>{pets.title}</h2>
        <div className={css.categoryBox}>
          <div>
            <h5 className={css.headCat}>Name</h5>
            <p className={css.specCat}>{capitalizeWords(pets.name)}</p>
          </div>
          <div>
            <h5 className={css.headCat}>Birthday</h5>
            <p className={css.specCat}>{pets.birthday}</p>
          </div>
          <div>
            <h5 className={css.headCat}>Sex</h5>
            <p className={css.specCat}>{capitalizeWords(pets.sex)}</p>
          </div>
          <div>
            <h5 className={css.headCat}>Species</h5>
            <p className={css.specCat}>{capitalizeWords(pets.species)}</p>
          </div>
        </div>
      </div>
      <span className={css.boxIcon} onClick={handleDelete}>
        <svg className={css.icon}>
          <use xlinkHref={`/icons/sprite.svg#icon-trash-2`}></use>
        </svg>
      </span>
    </div>
  );
}

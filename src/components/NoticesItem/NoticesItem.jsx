import css from "./NoticesItem.module.scss";
import { capitalizeWords } from "../../hooks/useCapitalizeWords";
import { useState } from "react";
import NoticesModal from "../NoticesModal/NoticesModal";
export default function NoticesItem({ notices }) {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className={css.box}>
      <img
        src={`${notices.imgURL}`}
        alt={notices.title}
        className={css.imgCard}
      />
      <div className={css.boxContent}>
        <div className={css.boxText}>
          <h2>{notices.title}</h2>
          <div className={css.iconBox}>
            <svg className={css.icon}>
              <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
            </svg>
            <p>{notices.popularity}</p>
          </div>
        </div>
        <div className={css.flexCat}>
          <div className={css.categoryBox}>
            <div>
              <h5 className={css.headCat}>Name</h5>
              <p className={css.specCat}>{capitalizeWords(notices.name)}</p>
            </div>
            <div>
              <h5 className={css.headCat}>Birthday</h5>
              <p className={css.specCat}>{notices.birthday}</p>
            </div>
            <div>
              <h5 className={css.headCat}>Sex</h5>
              <p className={css.specCat}>{capitalizeWords(notices.sex)}</p>
            </div>
            <div>
              <h5 className={css.headCat}>Species</h5>
              <p className={css.specCat}>{capitalizeWords(notices.species)}</p>
            </div>
            <div>
              <h5 className={css.headCat}>Category</h5>
              <p className={css.specCat}>{capitalizeWords(notices.category)}</p>
            </div>
          </div>
          <p className={css.comment}>{notices.comment}</p>
        </div>
      </div>
      <div>
        <p className={css.price}>
          {notices.price ? `$${notices.price}` : "Currently unavailable"}
        </p>
        <div className={css.btnWrap}>
          <button className={css.btnLearn} onClick={handleOpenModal}>
            Learn more
          </button>
          <span className={css.iconBoxFavorite}>
            <svg className={css.iconFavorite}>
              <use xlinkHref={`/icons/sprite.svg#icon-heart`}></use>
            </svg>
          </span>
        </div>
      </div>
      {showModal && (
        <NoticesModal notices={notices} onClose={handleCloseModal} />
      )}
    </div>
  );
}

import css from "./NoticesModal.module.scss";
import { useEffect } from "react";
import { capitalizeWords } from "../../hooks/useCapitalizeWords";
export default function NoticesModal({ notices, onClose }) {
  console.log(notices);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <section className={css.container}>
      <div className={css.boxContent}>
        <svg className={css.iconClosed} onClick={onClose}>
          <use xlinkHref={`/icons/sprite.svg#icon-x`}></use>
        </svg>
        <img
          src={`${notices.imgURL}`}
          alt={notices.title}
          className={css.imgCard}
        />
        <p className={css.sell}>Sell</p>
        <div className={css.star}>
          <svg className={css.iconStar}>
            <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
          </svg>
        </div>
        <h2>{notices.title}</h2>

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
        <p className={css.price}>
          {notices.price ? `$${notices.price}` : "Currently unavailable"}
        </p>

        <div className={css.btnWrap}>
          <button className={css.btnLearn}>
            Add to{" "}
            <svg className={css.iconFavorite}>
              <use xlinkHref={`/icons/sprite.svg#icon-heart`}></use>
            </svg>
          </button>

          <button className={css.btnCont}>Contact</button>
        </div>
      </div>
    </section>
  );
}

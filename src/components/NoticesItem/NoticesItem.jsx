import { capitalizeWords } from "../../hooks/useCapitalizeWords";
import { useEffect, useState } from "react";
import NoticesModal from "../NoticesModal/NoticesModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectorFav,
  selectorFullInfoUsers,
} from "../../redux/auth/selectors";
import NoticesModalNoAuth from "../NoticesModalNoAuth/NoticesModalNoAuth";
import {
  addNoticesFavorites,
  deleteFavorite,
} from "../../redux/auth/operations";
import { setFavorites } from "../../redux/auth/sliceFavorites";

export default function NoticesItem({ notices, styles, myFavorite }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showNoAuthModal, setShowNoAuthModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const login = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectorFav);
  const isFavorite = favorites.some(
    (fav) => fav._id === notices._id || fav === notices._id
  );

  const handleToggleFavorite = async () => {
    if (!login) {
      setShowNoAuthModal(true);
      return;
    }

    try {
      if (isFavorite) {
        await dispatch(deleteFavorite(notices._id)).unwrap();
        const updatedFavorites = favorites.filter(
          (item) => (item._id || item) !== notices._id
        );
        dispatch(setFavorites(updatedFavorites));
      } else {
        await dispatch(addNoticesFavorites(notices._id)).unwrap();
        dispatch(setFavorites([...favorites, notices]));
      }
    } catch (error) {
      console.error("Favorite toggle failed:", error);
    }
  };
  const currentIcon = isFavorite ? "icon-trash-2" : "icon-heart";
  return (
    <div className={styles.box}>
      <img
        src={`${notices.imgURL}`}
        alt={notices.title}
        className={styles.imgCard}
      />
      <div className={styles.boxContent}>
        <div className={styles.boxText}>
          <h2>{notices.title}</h2>
          <div className={styles.iconBox}>
            <svg className={styles.icon}>
              <use xlinkHref={`/icons/sprite.svg#icon-star`}></use>
            </svg>
            <p className={styles.priceText}>{notices.popularity}</p>
          </div>
        </div>
        <div className={styles.flexCat}>
          <div className={styles.categoryBox}>
            <div>
              <h5 className={styles.headCat}>Name</h5>
              <p className={styles.specCat}>{capitalizeWords(notices.name)}</p>
            </div>
            <div>
              <h5 className={styles.headCat}>Birthday</h5>
              <p className={styles.specCat}>{notices.birthday}</p>
            </div>
            <div>
              <h5 className={styles.headCat}>Sex</h5>
              <p className={styles.specCat}>{capitalizeWords(notices.sex)}</p>
            </div>
            <div>
              <h5 className={styles.headCat}>Species</h5>
              <p className={styles.specCat}>
                {capitalizeWords(notices.species)}
              </p>
            </div>
            <div>
              <h5 className={styles.headCat}>Category</h5>
              <p className={styles.specCat}>
                {capitalizeWords(notices.category)}
              </p>
            </div>
          </div>
          <p className={styles.comment}>{notices.comment}</p>
        </div>
      </div>
      <div>
        <p className={styles.price}>
          {notices.price ? `$${notices.price}` : "Currently unavailable"}
        </p>
        <div className={styles.btnWrap}>
          <button
            className={`${styles.btnLearn} ${
              myFavorite ? styles.btnVeiwed : ""
            }`}
            onClick={handleOpenModal}
          >
            Learn more
          </button>
          {!myFavorite ? (
            <span
              className={
                isFavorite ? styles.favoriteBackground : styles.iconBoxFavorite
              }
              onClick={handleToggleFavorite}
            >
              <svg className={styles.iconFavorite}>
                <use xlinkHref={`/icons/sprite.svg#${currentIcon}`}></use>
              </svg>
            </span>
          ) : null}
        </div>
      </div>
      {showModal &&
        (login ? (
          <NoticesModal
            notices={notices}
            onClose={handleCloseModal}
            isOpen={handleOpenModal}
          />
        ) : (
          <NoticesModalNoAuth
            onClose={handleCloseModal}
            isOpen={handleOpenModal}
          />
        ))}
      {showNoAuthModal && (
        <NoticesModalNoAuth
          onClose={() => setShowNoAuthModal(false)}
          isOpen={handleOpenModal}
        />
      )}
    </div>
  );
}

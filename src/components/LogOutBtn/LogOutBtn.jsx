import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { clearFavorites } from "../../redux/auth/sliceFavorites";
import { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import { selectorAuthLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
export default function LogOutBtn({ style }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectorAuthLoading);
  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearFavorites());
  };
  console.log(loading);
  return (
    <>
      <button className={style} onClick={openModal}>
        Log out
      </button>
      {showModal && (
        <>
          {loading && <Loader />}
          <ModalApproveAction
            onClose={closeModal}
            onConfirm={handleLogOut}
            isOpen={openModal}
          />
        </>
      )}
    </>
  );
}

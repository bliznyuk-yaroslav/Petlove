import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { clearFavorites } from "../../redux/auth/sliceFavorites";
import { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import { selectorAuthLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
export default function LogOutBtn({ style }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectorAuthLoading);
  const navigate = useNavigate();
  const handleLogOut = () => {
    console.log("LOGOUT CLICKED");
    dispatch(logout());
    dispatch(clearFavorites());
    navigate("/");
  };
  return (
    <>
      <button className={style} onClick={openModal}>
        Log out
      </button>
      {showModal && (
        <ModalApproveAction
          onClose={closeModal}
          onConfirm={handleLogOut}
          isOpen={showModal}
        />
      )}
    </>
  );
}

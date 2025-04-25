import { useState } from "react";
import css from "./EditUserBtn.module.scss";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
export default function EditUserBtn() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className={css.edit} onClick={handleOpenModal}>
      <svg className={css.icon}>
        <use xlinkHref={`/icons/sprite.svg#icon-edit-2`} />
      </svg>
      {showModal && <ModalEditUser onClose={() => setShowModal(false)} />}
    </div>
  );
}

import css from "./NoticesModal.module.scss";
import { useEffect } from "react";
export default function NoticesModal({ notices, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // ❗ Закривання по Escape
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // При розмонтуванні: повертаємо прокрутку та знімаємо слухача
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
      </div>
    </section>
  );
}

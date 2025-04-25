import css from "./ModalEditUser.module.scss";
import { use, useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editCurrent } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { uploadImageToCloudinary } from "../../hooks/cloudinary";
const schema = yup.object().shape({
  email: yup
    .string()
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .notRequired()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    ),
  name: yup
    .string()
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .notRequired(),
  avatar: yup
    .string()
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .notRequired()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Enter a valid Url photo"
    ),
  phone: yup
    .string()
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .notRequired()
    .matches(/^\+38\d{10}$/, "Enter a valid phone number"),
});
export default function ModalEditUser({ onClose }) {


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

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const user = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const onSubmit = (data) => {
    const updatedData = {};
    const fields = ["name", "email", "phone", "avatar"];

    fields.forEach((field) => {
      const currentValue = data[field]?.trim?.() || "";
      const originalValue = user[field]?.trim?.() || "";

      if (currentValue && currentValue !== originalValue) {
        updatedData[field] = currentValue;
      }
    });

    if (Object.keys(updatedData).length === 0) {
      console.log("Нічого не змінено — не відправляємо");
      return;
    }

    dispatch(editCurrent(updatedData));
    onClose();
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const uploadedUrl = await uploadImageToCloudinary(file);
      const imageUrl = URL.createObjectURL(file);
      setValue("avatar", uploadedUrl); 
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <section className={css.container}>
      <div className={css.boxContent}>
        <svg
          onClick={(e) => {
            e.stopPropagation();
            console.log("Closing modal");
            onClose();
          }}
          className={css.iconClosed}
        >
          <use xlinkHref={`/icons/sprite.svg#icon-x`}></use>
        </svg>
        <h1>Edit information</h1>
        <div className={css.photoBox}>
          {user.avatar ? (
            <img
              className={css.avatarImg}
              src={user.avatar}
              alt="User avatar"
            />
          ) : (
            <svg className={css.iconNoIcon}>
              <use xlinkHref={`/icons/sprite.svg#icon-user-02`}></use>
            </svg>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.photoUrlBox}>
            <input
              type="text"
              placeholder="Your photo url"
              className={css.inputPhoto}
              defaultValue={user.avatar}
              {...register("avatar")}
            />
            <label className={css.uploadPhoto}>
              Upload photo
              <svg className={css.iconUpload}>
                <use xlinkHref={`/icons/sprite.svg#icon-upload-cloud`}></use>
              </svg>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e)}
              />
            </label>
          </div>
          <div className={css.boxName}>
            <div className={css.contEmail}>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user.name}
                className={`${css.input} ${
                  errors.name && watch("name")
                    ? css.inputError
                    : watch("name") && !errors.name
                    ? css.inputValid
                    : ""
                }`}
                {...register("name")}
              />
              {errors.name && watch("name") ? (
                <div>
                  <p className={css.error}>{errors.name.message}</p>
                  <svg
                    className={css.icon}
                    onClick={() => setValue("name", "")}
                  >
                    <use xlinkHref={`/icons/sprite.svg#icon-cross-small`} />
                  </svg>
                </div>
              ) : (
                watch("name") && (
                  <svg className={css.icon}>
                    <use xlinkHref={`/icons/sprite.svg#icon-check`} />
                  </svg>
                )
              )}
            </div>
            <div className={css.contEmail}>
              <input
                type="text"
                placeholder="Email"
                defaultValue={user.email}
                className={`${css.input} ${
                  errors.email && watch("email")
                    ? css.inputError
                    : watch("email") && !errors.email
                    ? css.inputValid
                    : ""
                }`}
                {...register("email")}
              />
              {errors.email && watch("email") ? (
                <div>
                  <p className={css.error}>{errors.email.message}</p>
                  <svg
                    className={css.icon}
                    onClick={() => setValue("email", "")}
                  >
                    <use xlinkHref={`/icons/sprite.svg#icon-cross-small`} />
                  </svg>
                </div>
              ) : (
                watch("email") && (
                  <svg className={css.icon}>
                    <use xlinkHref={`/icons/sprite.svg#icon-check`} />
                  </svg>
                )
              )}
            </div>
            <div className={css.contEmail}>
              <input
                type="text"
                placeholder="Phone number +380"
                defaultValue={user.phone}
                className={`${css.input} ${
                  errors.phone && watch("phone")
                    ? css.inputError
                    : watch("phone") && !errors.phone
                    ? css.inputValid
                    : ""
                }`}
                {...register("phone")}
              />
              {errors.phone && watch("phone") ? (
                <div>
                  <p className={css.error}>{errors.phone.message}</p>
                  <svg
                    className={css.icon}
                    onClick={() => setValue("phone", "")}
                  >
                    <use xlinkHref={`/icons/sprite.svg#icon-cross-small`} />
                  </svg>
                </div>
              ) : (
                watch("phone") && (
                  <svg className={css.icon}>
                    <use xlinkHref={`/icons/sprite.svg#icon-check`} />
                  </svg>
                )
              )}
            </div>
          </div>
          <button type="submit" className={css.btnSave}>
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

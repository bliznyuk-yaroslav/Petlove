import css from "./AddPetForm.module.scss";
import { useRef, useState } from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { selectorSpecies } from "../../redux/notices/selectors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import customerSelectStyles from "./customerSelectStyles";
import { NavLink, useNavigate } from "react-router-dom";
import { addPets } from "../../redux/auth/operations";
import { uploadImageToCloudinary } from "../../hooks/cloudinary";
import toast from "react-hot-toast";
import { useMediaQuery } from "../../hooks/useMediaQuery";
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  imgURL: yup
    .string()
    .required("Image URL is required")
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/i,
      "Enter a valid Url photo"
    ),
  species: yup.string().required("Species is required"),
  birthday: yup
    .string()
    .required("Birthday is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid birthday (YYYY-MM-DD)"),
  sex: yup.string().required("Sex is required"),
});
export default function AddPetForm() {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const navigateProfile = useNavigate();
  const dispatch = useDispatch();
  const [img, setImg] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  // Data
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // Data end

  const user = useSelector(selectUser);
  const fileInputRef = useRef(null);
  const species = useSelector(selectorSpecies);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleDateChange = (date) => {
    setStartDate(date);
    setValue("birthday", date.toISOString().split("T")[0]);
    setShowCalendar(false);
  };
  const handleIconClick = () => {
    setShowCalendar(!showCalendar);
  };
  const toOptions = (arr) =>
    arr.map((el) => ({
      value: el,
      label: el.charAt(0).toUpperCase() + el.slice(1),
    }));
  const speciesOptions = toOptions(species);
  const handleSpeciesChange = (selectedOption) => {
    setValue("species", selectedOption.value);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const uploadedUrl = await uploadImageToCloudinary(file);
      setValue("imgURL", uploadedUrl);
      const localPreviewUrl = URL.createObjectURL(file);
      setImg(localPreviewUrl);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const onSubmit = async (data) => {
    const petInfo = {
      title: data.title,
      name: data.name,
      imgURL: data.imgURL,
      species: data.species,
      birthday: data.birthday,
      sex: data.sex,
    };

    dispatch(addPets(petInfo));
    toast.success("Success add pets!");
    navigateProfile("/profile");
  };

  return (
    <section className={css.cont}>
      <h1 className={css.headLog}>
        Add my pet/ <span className={css.persDet}>Personal details</span>
      </h1>
      <div className={css.boxCharacter}>
        <div className={css.photoBox}>
          {img ? (
            <img className={css.avatarImg} src={img} alt="User avatar" />
          ) : (
            <svg className={css.iconNoIcon}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-icons8_cat-footprint`}
              ></use>
            </svg>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.genderGroup}>
            <div
              className={`${css.genderErrorPos} ${
                errors.sex && !watch("sex") ? css.inputError : watch("sex")
              }`}
            >
              <label className={`${css.genderOption} ${css.female}`}>
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  className={css.genderInput}
                  {...register("sex")}
                />
                <svg className={css.femaleIcon}>
                  <use xlinkHref="/icons/sprite.svg#icon-female" />
                </svg>
              </label>

              <label className={`${css.genderOption} ${css.male}`}>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  className={css.genderInput}
                  {...register("sex")}
                />
                <svg className={css.maleIcon}>
                  <use xlinkHref="/icons/sprite.svg#icon-male" />
                </svg>
              </label>
              <label className={`${css.genderOption} ${css.multiple}`}>
                <input
                  type="radio"
                  name="sex"
                  value="multiple"
                  className={css.genderInput}
                  {...register("sex")}
                />
                <svg className={css.multipleIcon}>
                  <use xlinkHref="/icons/sprite.svg#icon-healthicons_sexual-reproductive-health" />
                </svg>
              </label>
            </div>
            {errors.sex && !watch("sex") && (
              <p className={css.errorMessageGend}>{errors.sex.message}</p>
            )}
          </div>

          <div className={css.photoUrlBox}>
            <div>
              <input
                type="text"
                placeholder="Enter URL"
                className={`${css.inputPhoto} ${
                  errors.imgURL && !watch("imgURL")
                    ? css.inputError
                    : watch("imgURL")
                    ? css.inputValid
                    : ""
                }`}
                {...register("imgURL")}
              />
              {errors.imgURL && !watch("imgURL") && (
                <p className={css.errorMessage}>{errors.imgURL.message}</p>
              )}
            </div>
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
                placeholder="Title"
                className={`${css.input} ${
                  errors.title
                    ? css.inputError
                    : watch("title")
                    ? css.inputValid
                    : ""
                }`}
                {...register("title")}
              />
              {errors.title && !watch("title") && (
                <p className={css.errorMessage}>{errors.title.message}</p>
              )}
            </div>
            <div className={css.contEmail}>
              <input
                type="text"
                placeholder="Pet’s Name"
                className={`${css.input} ${
                  errors.name
                    ? css.inputError
                    : watch("name")
                    ? css.inputValid
                    : ""
                }`}
                {...register("name")}
              />
              {errors.name && !watch("name") && (
                <p className={css.errorMessage}>{errors.name.message}</p>
              )}
            </div>
            <div className={css.boxBith}>
              <div className={css.contEmail}>
                <input
                  type="text"
                  placeholder="Select birthday"
                  className={`${css.inputBrirth} ${
                    errors.birthday && !watch("birthday")
                      ? css.inputError
                      : watch("birthday")
                      ? css.inputValid
                      : ""
                  }`}
                  value={
                    watch("birthday")
                      ? new Date(watch("birthday")).toLocaleDateString("en-GB")
                      : ""
                  }
                  onClick={handleIconClick}
                  {...register("birthday")}
                />
                <svg className={css.iconCalen} onClick={handleIconClick}>
                  <use xlinkHref={`/icons/sprite.svg#icon-calendar`} />
                </svg>
                {showCalendar && (
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    inline
                    popperPlacement="top-start"
                    calendarClassName={css.customCalendar}
                  />
                )}
                {errors.birthday && !watch("birthday") && (
                  <p className={css.errorMessage}>{errors.birthday.message}</p>
                )}
              </div>
              <span>
                <Controller
                  name="species"
                  control={control}
                  rules={{ required: "Species is required" }}
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      value={speciesOptions.find(
                        (option) => option.value === watch("species")
                      )}
                      onChange={handleSpeciesChange}
                      options={toOptions(species)}
                      styles={{
                        ...customerSelectStyles(isTablet),
                        control: (base, state) => {
                          const customStyles = customerSelectStyles(isTablet);
                          return {
                            ...customStyles.control(base, state),
                            border:
                              fieldState.invalid &&
                              !state.isFocused &&
                              !state.hasValue
                                ? "1px solid red"
                                : state.hasValue
                                ? "1px solid #08aa83"
                                : "1px solid rgba(38, 38, 38, 0.15)",
                          };
                        },
                      }}
                      placeholder="Type of pet"
                      menuPortalTarget={document.body}
                      menuPosition="absolute"
                      isInvalid={!!fieldState.error}
                    />
                  )}
                />
                {errors.species && !watch("species") && (
                  <p className={css.errorMessage}>{errors.species.message}</p>
                )}
              </span>
            </div>
          </div>
          <div className={css.btnBox}>
            <NavLink to={"/profile"} className={`${css.btn} ${css.back}`}>
              Back
            </NavLink>
            <button type="submit" className={`${css.btn} ${css.submit}`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import css from "./AddPetForm.module.scss";
import { useRef, useState } from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { selectorSpecies } from "../../redux/notices/selectors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import customerSelectStyles from "./customerSelectStyles";
import { NavLink } from "react-router-dom";
import { addPets } from "../../redux/auth/operations";
import { uploadImageToCloudinary } from "../../hooks/cloudinary";
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  imgUrl: yup
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
  const dispatch = useDispatch();
  const [img, setImg] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  // Data
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  console.log(selectedSpecies);
  // Data end

  const user = useSelector(selectUser);
  const fileInputRef = useRef(null);
  const species = useSelector(selectorSpecies);
  console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSpeciesChange = (selectedOption) => {
    setSelectedSpecies(selectedOption);
  };
  const handleDateChange = (date) => {
    setStartDate(date);
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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const uploadedUrl = await uploadImageToCloudinary(file);
      const imageUrl = URL.createObjectURL(file);
      setValue("imgUrl", uploadedUrl);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    const petInfo = {
      title: data.title,
      name: data.name,
      imgUrl: data.imgUrl,
      species: selectedSpecies ? selectedSpecies.value : "",
      birthday: startDate ? startDate.toISOString().split("T")[0] : "",
      sex: data.sex,
    };

    dispatch(addPets(petInfo));
  };
  return (
    <section className={css.cont}>
      <h1 className={css.headLog}>
        Add my pet/ <span className={css.persDet}>Personal details</span>
      </h1>
      <div className={css.boxCharacter}>
        <div className={css.photoBox}>
          {img ? (
            <img
              className={css.avatarImg}
              src={user.avatar}
              alt="User avatar"
            />
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
            <label className={`${css.genderOption} ${css.female}`}>
              <input
                type="radio"
                name="sex"
                value="male"
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
                value="female"
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
          <div className={css.photoUrlBox}>
            <input
              type="text"
              placeholder="Enter URL"
              className={css.inputPhoto}
              defaultValue={user.avatar}
              {...register("imgUrl")}
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
                placeholder="Title"
                className={`${css.input} ${
                  errors.title && watch("title")
                    ? css.inputError
                    : watch("title") && !errors.title
                    ? css.inputValid
                    : ""
                }`}
                {...register("title")}
              />
              {/* {errors.title && watch("title") ? (
                <div>
                  <p className={css.error}>{errors.title.message}</p>
                  <svg
                    className={css.icon}
                    onClick={() => setValue("title", "")}
                  >
                    <use xlinkHref={`/icons/sprite.svg#icon-cross-small`} />
                  </svg>
                </div>
              ) : (
                watch("title") && (
                  <svg className={css.icon}>
                    <use xlinkHref={`/icons/sprite.svg#icon-check`} />
                  </svg>
                )
              )} */}
            </div>
            <div className={css.contEmail}>
              <input
                type="text"
                placeholder="Pet’s Name"
                className={`${css.input} ${
                  errors.name && watch("name")
                    ? css.inputError
                    : watch("name") && !errors.name
                    ? css.inputValid
                    : ""
                }`}
                {...register("name")}
              />
              {/* {errors.name && watch("name") ? (
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
              )} */}
            </div>
            <div className={css.boxBith}>
              <div className={css.contEmail}>
                <input
                  type="text"
                  placeholder={new Date().toLocaleDateString("en-GB")}
                  className={`${css.inputBrirth} `}
                  value={startDate ? startDate.toLocaleDateString() : ""}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
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
              </div>
              <Select
                value={selectedSpecies}
                onChange={handleSpeciesChange}
                options={[...toOptions(species)]}
                styles={customerSelectStyles}
                placeholder="Type of pet"
                className={css.select}
                menuPortalTarget={document.body}
                menuPosition="absolute"
              />
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

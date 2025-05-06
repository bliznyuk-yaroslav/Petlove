import css from "./RegistrationForm.module.scss";
import * as yup from "yup";
import { fetchRegister } from "../../redux/auth/operations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Title from "../Title/Title";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});
export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    watch,
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    const { confirmPassword, ...dataToSend } = data;

    try {
      await dispatch(fetchRegister(dataToSend)).unwrap();
      toast.success("Successfully registered!");
      reset();
    } catch (error) {
      toast.update("Registration failed");
    }
  };

  return (
    <div className={css.boxLogIn}>
      <div className={css.contText}>
        <Title title="Registration" styles={css} />
        <p className={css.textLog}>
          Thank you for your interest in our platform.
        </p>
      </div>
      <form className={css.formLog} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formPos}>
          <div className={css.contEmail}>
            <input
              type="text"
              placeholder="Name"
              className={`${css.input} ${
                errors.name
                  ? css.inputError
                  : watch("name") && !errors.name
                  ? css.inputValid
                  : ""
              }`}
              {...register("name")}
            />
            {errors.name ? (
              <p className={css.error}>{errors.name.message}</p>
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
                <svg className={css.icon} onClick={() => setValue("email", "")}>
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`${css.input} ${
                errors.password && watch("password")
                  ? css.inputError
                  : dirtyFields.password && !errors.password
                  ? css.inputValid
                  : ""
              }`}
              {...register("password")}
            />
            <svg
              className={css.icon}
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-eye-off`} />
            </svg>
            {errors.password && watch("password") ? (
              <div>
                <p className={css.error}>{errors.password.message}</p>
                <svg
                  className={css.iconPas}
                  onClick={() => setValue("password", "")}
                >
                  <use xlinkHref={`/icons/sprite.svg#icon-cross-small`} />
                </svg>
              </div>
            ) : (
              watch("password") && (
                <div>
                  <p className={css.successful}>Password is secure</p>
                  <svg className={css.iconPas}>
                    <use xlinkHref={`/icons/sprite.svg#icon-check`} />
                  </svg>
                </div>
              )
            )}
          </div>
          <div className={css.contEmail}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className={`${css.input} ${
                errors.confirmPassword && watch("confirmPassword")
                  ? css.inputError
                  : dirtyFields.confirmPassword && !errors.confirmPassword
                  ? css.inputValid
                  : ""
              }`}
              {...register("confirmPassword")}
            />
            <svg
              className={css.icon}
              onMouseDown={() => setShowConfirmPassword(true)}
              onMouseUp={() => setShowConfirmPassword(false)}
              onMouseLeave={() => setShowConfirmPassword(false)}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-eye-off`} />
            </svg>
            {errors.confirmPassword && watch("confirmPassword") ? (
              <div>
                <p className={css.error}>{errors.confirmPassword.message}</p>
                <svg
                  className={css.iconPas}
                  onClick={() => setValue("confirmPassword", "")}
                >
                  <use xlinkHref={`/icons/sprite.svg#icon-cross-small`} />
                </svg>
              </div>
            ) : (
              watch("confirmPassword") &&
              watch("confirmPassword") === watch("password") && (
                <div>
                  <p className={css.successful}>Password confirmed</p>
                  <svg className={css.iconPas}>
                    <use xlinkHref={`/icons/sprite.svg#icon-check`} />
                  </svg>
                </div>
              )
            )}
          </div>
        </div>
        <div className={css.btnForm}>
          <button className={css.btn} type="submit">
            Registration
          </button>
          <p className={css.textFromReg}>
            Already have an account?{" "}
            <NavLink to={"/login"} className={css.regCol}>
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

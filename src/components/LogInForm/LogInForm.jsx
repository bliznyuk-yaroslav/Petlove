import {  NavLink, useNavigate } from "react-router-dom";
import css from "./LogInForm.module.scss";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import Title from "../Title/Title";
const schema = yup.object().shape({
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
});
export default function LogInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    watch,
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      await dispatch(logIn(data)).unwrap();
      toast.success("Success Login!");

      reset();
      navigate("/news");
    } catch (error) {
      toast.update("Login error");
    }
  };
  return (
    <div className={css.boxLogIn}>
      <div className={css.contText}>
        <Title title="Log in" styles={css} />
        <p className={css.textLog}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>
      <form className={css.formLog} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formPos}>
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
        </div>
        <div className={css.btnForm}>
          <button className={css.btn} type="submit">
            LOG IN
          </button>
          <p className={css.textFromReg}>
            Don’t have an account?{" "}
            <NavLink to={"/register"} className={css.regCol}>
              Register
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import { useFormik } from "formik";
import { BiLockAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { ILogin } from "../../interfaces";
import { LoginSchema } from "../../schemas";
import { authStore } from "../../store";
import logo from "/images/logos/logo-white.svg";
import { toastError } from "../../helpers";

export const Login = () => {
  const {isLoading,error,reset,validateLogin} = useStore(authStore);

  const formik = useFormik<ILogin>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      validateLogin(data);
    },
  })

  const { email, password } = formik.values;

  
  useEffect(() => {
   if(error === "user_not_found"){
      toastError('Incorrect email or password');
   }
   if(error === "user_unauthorized"){
      toastError('The user has been disabled');
   }
   reset();
  }, [error])
  

  return (
    <div className="container--auth">
      <div className="login login--container">
        <div className="login__form">
          <h1 className="login__title">Hello again! <span className="login__span">Revu partner.</span></h1>
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="form__row">
              <div className="form__col">
                <div className="form__group">
                  <div className="form__icon">
                    <HiOutlineMail className="form__icons--blue" size={20} color="white"/>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="radius"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <small className="form__error">{formik.errors.email}</small>
                )}
              </div>
            </div>
            <div className="form__row">
              <div className="form__col">
                <div className="form__group">
                  <div className="form__icon">
                    <BiLockAlt className="form__icons--blue" size={22} color="white" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="radius"
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <small className="form__error">{formik.errors.password}</small>
                )}
              </div>
            </div>
            <div className="login__container__btn">
              <Link className="login__link" to={"/auth/recoverPassword"}>I forgot my password</Link>
              {isLoading?
                <input
                type="submit"
                value="Loading ..."
                className="login__btn"
                disabled
              />:
              <input
                type="submit"
                value="Let's get started!"
                className="login__btn"
              />}
            </div>
          </form>
        </div>
        <div className="login__image">
          <img src={logo} alt="" className="login__logo" />
        </div>
      </div>
    </div>
  )
}

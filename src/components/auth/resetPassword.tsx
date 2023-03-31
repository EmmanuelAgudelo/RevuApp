import { useFormik } from 'formik';
import { useEffect } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { useLocation, useParams } from 'react-router-dom';
import { useStore } from 'zustand';
import { toastError, toastSuccess } from '../../helpers';
import { ResetPasswordSchema } from '../../schemas';
import { authStore } from '../../store';
import logo from "/images/logo_blanco.svg";


export const ResetPassword = () => {
    const { search } = useLocation();

    const { code, isLoading, error, resetPassword, validateResetPassword, validateCode, reset } = useStore(authStore);

    const formik = useFormik<{ password: string, confirmPassword: string }>({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: (data) => {
            const { password } = data;
            validateResetPassword({ password, id: code?.data.user_id });
        },
    })

    useEffect(() => {
        validateCode(search.split('=')[1] ?? '')
    },[])

    useEffect(() => {
        if (resetPassword && resetPassword.message === "success") {
            toastSuccess('Contraseña actulizada');
            setTimeout(() => {
                window.location.href = "/auth/login";
            }, 3000);
        }     
    }, [resetPassword])

    useEffect(() => {
        if (error && error === "code_not_found_or_expired") {
            toastError('ya el codigo expiró');
            console.log(error);
            
        }
        reset();
    }, [error])



    const { password, confirmPassword } = formik.values;
    return (
        <div className="container--auth">
            <div className="reset">
                <div className="reset__image">
                </div>
                <div className="reset__form">
                    <img src={logo} alt="logo" />
                    <h1 className="reset__title">Crea tu nueva contraseña</h1>
                    {(code && code.data) ?
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <BiLockAlt className="form__icons--blue" size={30} />
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.password && formik.errors.password && (
                                    <small className="form__error">{formik.errors.password}</small>
                                )}
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <BiLockAlt className="form__icons--blue" size={30} />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirmar Contraseña"
                                        value={confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                    <small className="form__error">{formik.errors.confirmPassword}</small>
                                )}
                            </div>
                        </div>
                        {isLoading ?
                            <input
                                type="submit"
                                value="Cargando ..."
                                className="reset__btn"
                                disabled
                            /> :
                            <input
                                type="submit"
                                value="Recuperar contraseña"
                                className="reset__btn"
                            />}

                    </form> :
                    <form  className="form">
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <BiLockAlt className="form__icons--blue" size={30} />
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Contraseña"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <BiLockAlt className="form__icons--blue" size={30} />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirmar Contraseña"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <input
                            type="button"
                            value="Recuperar contraseña"
                            className="reset__btn"
                            disabled
                            />
                    </form>}

                </div>
            </div>
        </div>
    )
}

import { useFormik } from 'formik';
import { useEffect } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { useStore } from 'zustand';
import { toastError, toastSuccess } from '../../helpers';
import { ResetPasswordSchema } from '../../schemas';
import { authStore } from '../../store';
import logo from "/images/logos/logo-blue.svg";

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
        validateCode(search.split('=')[1] ?? '');
    },[])

    useEffect(() => {
        if (resetPassword && resetPassword.message === "success") {
            toastSuccess('Password updated');
            setTimeout(() => {
                window.location.href = "/auth/login";
            }, 3000);
        }     
    }, [resetPassword])

    useEffect(() => {
        if (error && error === "code_not_found_or_expired") {
            toastError('The code has expired');
        }
        reset();
    }, [error])



    const { password, confirmPassword } = formik.values;
    return (
        <div className="container--auth">
            <div className="reset reset--container">
                <div className="reset__image">
                </div>
                <div className="reset__form">
                    <img src={logo} className='reset__logo' alt="logo" />
                    <h1 className="reset__title">Create your new password</h1>
                    {(code && code.data) ?
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <div className="form__icon">
                                        <BiLockAlt className="form__icons--blue" size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className='radius'
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
                                    <div className="form__icon">
                                        <BiLockAlt className="form__icons--blue" size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className='radius'
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
                                value="Loading ..."
                                className="reset__btn"
                                disabled
                            /> :
                            <input
                                type="submit"
                                value="Recover password"
                                className="reset__btn"
                            />}

                    </form> :
                    <form  className="form">
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <div className="form__icon">
                                        <BiLockAlt className="form__icons--blue" size={20} color='white' />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        disabled
                                        className='radius'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <div className="form__icon">
                                        <BiLockAlt className="form__icons--blue" size={20} color='white' />
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm password"
                                        disabled
                                        className='radius'
                                    />
                                </div>
                            </div>
                        </div>
                        <input
                            type="button"
                            value="Recover password"
                            className="reset__btn"
                            disabled
                            />
                    </form>}

                </div>
            </div>
        </div>
    )
}

import { useFormik } from 'formik';
import { useEffect } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { useStore } from 'zustand';
import { toastError, toastSuccess } from '../../helpers';
import { RecoverSchema } from '../../schemas';
import { authStore } from '../../store';
import logo from "/images/logos/logo-blue.svg";

export const RecoverPassword = () => {
    const { isLoading,recoverPassword,error, validateRecoverPassword,reset } = useStore(authStore);

    const formik = useFormik<{ email: string }>({
        initialValues: {
            email: '',
        },
        validationSchema: RecoverSchema,
        onSubmit: (data) => {
            validateRecoverPassword(data)
        },
    })

    useEffect(() => {
      if(recoverPassword && recoverPassword.message === "mail_send_success"){
        toastSuccess('We have sent a message to your email');
        setTimeout(()=>{
            reset();
        },3000);
      }
    }, [recoverPassword])

    useEffect(() => {
      if (error === 'user_not_found') {
        toastError("The email doesn't exist!");
      }
      if (error === 'server_error') {
        toastError('Server error"');
      }
      reset();
    }, [error])
    
    
    const { email } = formik.values;
    return (
        <div className="container--auth">
            <div className="recover recover--container">
                <div className="recover__image">
                </div>
                <div className="recover__form">
                    <img src={logo} className='recover__logo' alt="logo" />
                    <h1 className="recover__title">Recover your password</h1>
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <div className="form__icon">
                                        <HiOutlineMail className="form__icons--blue" size={20} color='white' />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className='radius'
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email && (
                                    <small className="form__error">{formik.errors.email}</small>
                                )}
                            </div>
                        </div>
                        {isLoading ?
                            <input
                                type="submit"
                                value="Loading ..."
                                className="recover__btn"
                                disabled
                            /> :
                            <input
                                type="submit"
                                value="Send"
                                className="recover__btn"
                            />}

                    </form>
                </div>
            </div>
        </div>
    )
}

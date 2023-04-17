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
        toastSuccess('Hemos enviado un mensaje a tu email');
        setTimeout(()=>{
            reset();
        },3000);
      }
    }, [recoverPassword])

    useEffect(() => {
      if (error === 'user_not_found') {
        toastError('El email no existe!');
      }
      if (error === 'server_error') {
        toastError('Error en el servidor');
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
                    <h1 className="recover__title">Recupera tu contraseña</h1>
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className="form__row">
                            <div className="form__col">
                                <div className="form__group">
                                    <HiOutlineMail className="form__icons--blue" size={30} />
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Correo electrónico"
                                        value={email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
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
                                value="Cargando ..."
                                className="recover__btn"
                                disabled
                            /> :
                            <input
                                type="submit"
                                value="Enviar"
                                className="recover__btn"
                            />}

                    </form>
                </div>
            </div>
        </div>
    )
}

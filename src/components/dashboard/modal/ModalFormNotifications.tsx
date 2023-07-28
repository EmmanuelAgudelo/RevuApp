import { useFormik } from "formik";
import { IBusinesseForm, INotification, INotificationSettings } from "../../../interfaces";
import { BusinessSchema, NotificationSchema } from "../../../schemas";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { useEffect } from "react";
import { useStore } from "zustand";
import { notificationStore } from "../../../store/notificationStore";

interface IProps {
    notification: INotificationSettings | undefined;
}

export const ModalFormNotifications = ({ notification }: IProps) => {

    const {updateNotification } = useStore(notificationStore)

    const formik = useFormik<Pick<INotification, 'message'>>({
        initialValues: {
            message: '',
        },
        validationSchema: NotificationSchema,
        onSubmit: (data) => {
            if (notification) {
                updateNotification(notification.id, data)
            }
        },
    });

    const { message } = formik.values;

    useEffect(() => {
        if (notification) {
            formik.setValues({ message: notification.message })
        }
    }, [])


    return (
        <>
            <h1 className='documentPartner__title'><HiOutlineBellAlert className='documentPartner__title--icon' />Editar Mensaje</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <textarea
                                style={{ marginLeft: '1.5rem' }}
                                placeholder="Mensaje"
                                id="message"
                                value={message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                rows={5}
                            />
                        </div>
                        {formik.touched.message && formik.errors.message && (
                            <small className="form__error">{formik.errors.message}</small>
                        )}
                    </div>
                </div>
                <div className='agentForm__btn' style={{ marginTop: '3rem' }}>
                    <button type='submit' className="btn btn--orange">Guardar Mensaje</button>
                </div>
            </form>
        </>
    )
}

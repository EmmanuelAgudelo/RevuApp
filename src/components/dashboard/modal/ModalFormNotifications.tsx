import { useFormik } from "formik";
import { IBusinesseForm } from "../../../interfaces";
import { BusinessSchema } from "../../../schemas";
import { HiOutlineBellAlert } from "react-icons/hi2";

export const ModalFormNotifications = () => {

    const formik = useFormik<IBusinesseForm>({
        initialValues: {
            name: '',
            category: '',
        },
        validationSchema: BusinessSchema,
        onSubmit: (data) => {
            console.log(data);

        },
    });

    const { name, category } = formik.values;

    return (
        <>
            <h1 className='documentPartner__title'><HiOutlineBellAlert className='documentPartner__title--icon' />Editar Notificación</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="price">Mensaje:</label>
                            <textarea
                                style={{ marginLeft: '1.5rem' }}
                                placeholder="Mensaje"
                                id="message"
                                value={name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.name && formik.errors.name && (
                            <small className="form__error">{formik.errors.name}</small>
                        )}
                    </div>
                </div>
                <div className='agentForm__btn' style={{ marginTop: '3rem' }}>
                    <button type='submit' className="btn btn--orange">Guardar establecimiento</button>
                </div>
            </form>
        </>
    )
}

import { useFormik } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';
import { ISupport } from '../../../interfaces/support.interface';
import { SupportSchema } from '../../../schemas/support.schema';
import { supportStore } from '../../../store';
import { useStore } from 'zustand';
import { useEffect } from 'react';
import { toastSuccess } from '../../../helpers';

export const ModalFormSupport = () => {

    const { createSupport, createSupportResponse } = useStore(supportStore)

    const formik = useFormik<Pick<ISupport, "question">>({
        initialValues: {
            question: '',
        },
        validationSchema: SupportSchema,
        onSubmit: (data) => {
            createSupport(data)
        },
    });

    const { question } = formik.values;

    return (
        <div className='supportForm'>
            <h1 className='documentPartner__title'><HiOutlineMail className='documentPartner__title--icon' size={25} />New message</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="question">Message:</label>
                            <textarea
                                placeholder="Enter your message"
                                id="question"
                                value={question}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                rows={9}
                            />
                        </div>
                        {formik.touched.question && formik.errors.question && (
                            <small className="form__error">{formik.errors.question}</small>
                        )}
                    </div>
                </div>
                <div className='agentForm__btn' style={{ marginTop: '3rem' }}>
                    <button type='submit' className="btn btn--orange">Send Message</button>
                </div>
            </form>
        </div>
    )
}

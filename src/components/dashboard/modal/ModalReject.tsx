import { useFormik } from 'formik';
import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { StateReject } from '../../../interfaces';
import { SupportSchema } from '../../../schemas/support.schema';
import { RejectFileSchema } from '../../../schemas';

interface Props {
    uploadReject: (message: string) => void;
}

export const ModalReject = ({uploadReject}: Props) => {

    const formik = useFormik<Pick<StateReject, "message">>({
        initialValues: {
            message: '',
        },
        validationSchema: RejectFileSchema,
        onSubmit: (data) => {
            uploadReject(data.message);
        },
    });

    const { message } = formik.values;

    return (
        <div className='supportForm'>
            <h1 className='documentPartner__title'><HiOutlineMail className='documentPartner__title--icon' size={25} />Reason for rejection</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="question">Message:</label>
                            <textarea
                                placeholder="Enter the reason for rejection"
                                id="message"
                                value={message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                rows={9}
                            />
                        </div>
                        {formik.touched.message && formik.errors.message && (
                            <small className="form__error">{formik.errors.message}</small>
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

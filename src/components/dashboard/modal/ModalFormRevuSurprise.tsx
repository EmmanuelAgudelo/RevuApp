import { useFormik } from 'formik';
import { IRevuSurprise } from '../../../interfaces';
import { useParams } from 'react-router-dom';
import { useStore } from 'zustand';
import { businesseStore } from '../../../store';
import { RevuSurprise } from '../../../schemas';
import { BsBank } from 'react-icons/bs';
import { revuSurpriseStore } from '../../../store/revuSurpriseStore';

export const ModalFormRevuSurprise = () => {

    const { id } = useParams();
    const { businessesByOwner } = useStore(businesseStore);
    const { createRevuSurprise } = useStore(revuSurpriseStore);


    const formik = useFormik<Omit<IRevuSurprise, 'id' | 'status' | 'revu_price'>>({
        initialValues: {
            businesse: businessesByOwner ? businessesByOwner.id : '',
            branch: id ?? '',
            price: 0,
            amount: 0,
            description: '',
            start_pickup_time: '',
            end_pickup_time: '',
            images: []
        },
        validationSchema: RevuSurprise,
        onSubmit: (data) => {
            createRevuSurprise(data)
        },
    });
    const { price, description, amount, start_pickup_time, end_pickup_time } = formik.values;

    return (
        <>
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Crear Revu sorpresa</h1>
            <form onSubmit={formik.handleSubmit} className='form'>

                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="price">Precio:</label>
                            <input
                                style={{ marginLeft: '1.5rem' }}
                                type="number"
                                placeholder="Precio"
                                id="price"
                                value={price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.price && formik.errors.price && (
                            <small className="form__error">{formik.errors.price}</small>
                        )}
                    </div>
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="amount">Cantidad:</label>
                            <input
                                style={{ marginLeft: '1.5rem' }}
                                type="number"
                                placeholder="Cantidad"
                                id="amount"
                                value={amount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.amount && formik.errors.amount && (
                            <small className="form__error">{formik.errors.amount}</small>
                        )}
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="price">Descripción:</label>
                            <textarea
                                style={{ marginLeft: '1.5rem' }}
                                placeholder="Descripción"
                                id="description"
                                value={description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.description && formik.errors.description && (
                            <small className="form__error">{formik.errors.description}</small>
                        )}
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="">Fecha de recogida</label>
                            <input
                                type="time"
                                placeholder=""
                                id="start_pickup_time"
                                value={start_pickup_time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.start_pickup_time && formik.errors.start_pickup_time && (
                            <small className="form__error">{formik.errors.start_pickup_time}</small>
                        )}
                    </div>
                    <div className="form__col">
                        <div className="form__group">
                            <label htmlFor="">Fecha de recogida</label>
                            <input
                                type="time"
                                placeholder=""
                                id="end_pickup_time"
                                value={end_pickup_time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.end_pickup_time && formik.errors.end_pickup_time && (
                            <small className="form__error">{formik.errors.end_pickup_time}</small>
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

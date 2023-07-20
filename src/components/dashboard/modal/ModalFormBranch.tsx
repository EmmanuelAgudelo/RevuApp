import { useFormik } from 'formik';
import { IBranches } from '../../../interfaces';
import { BranchSchema } from '../../../schemas';
import { BsBank, BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { useStore } from 'zustand';
import { branchStore, businesseStore } from '../../../store';
import { useEffect } from 'react';


export const ModalFormBranch = () => {

    const { businessesByOwner } = useStore(businesseStore);

    const { createBranch } = useStore(branchStore);

    const formik = useFormik<Omit<IBranches, '_id'>>({
        initialValues: {
            id: businessesByOwner ? businessesByOwner.id : '',
            number: 0,
            department: '',
            city: '',
            address: '',
            phone: '',
            card_number: '',
            status: '',
        },
        validationSchema: BranchSchema,
        onSubmit: (data) => {
            const { status, ...data2 } = data;
            createBranch(data2);
        },
    });
    const { number, department, city, address, phone, card_number} = formik.values;

    return (
        <>
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Crear nueva sede</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <input
                                style={{ marginLeft: '3.5rem' }}
                                type="number"
                                placeholder="Número de sede"
                                id="number"
                                value={number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.number && formik.errors.number && (
                            <small className="form__error">{formik.errors.number}</small>
                        )}
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">

                            <input
                                style={{ marginLeft: '3.5rem' }}
                                type="text"
                                placeholder="Departamento"
                                id="department"
                                value={department}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.department && formik.errors.department && (
                            <small className="form__error">{formik.errors.department}</small>
                        )}
                    </div>
                    <div className="form__col">
                        <div className="form__group">
                            <input
                                style={{ marginLeft: '3.5rem' }}
                                type="text"
                                placeholder="Ciudad"
                                id="city"
                                value={city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.city && formik.errors.city && (
                            <small className="form__error">{formik.errors.city}</small>
                        )}
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <CiLocationOn className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
                            <input
                                type="text"
                                placeholder="Dirección"
                                id="address"
                                value={address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.address && formik.errors.address && (
                            <small className="form__error">{formik.errors.address}</small>
                        )}
                    </div>
                    <div className="form__col">
                        <div className="form__group">
                            <BsTelephone className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
                            <input
                                type="text"
                                placeholder="Teléfono"
                                id="phone"
                                value={phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                            <small className="form__error">{formik.errors.phone}</small>
                        )}
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <AiOutlineCreditCard className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
                            <input
                                type="text"
                                placeholder="Número de la tarjeta"
                                id="card_number"
                                value={card_number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.card_number && formik.errors.card_number && (
                            <small className="form__error">{formik.errors.card_number}</small>
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

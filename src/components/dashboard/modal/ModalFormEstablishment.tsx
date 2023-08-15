import { useFormik } from 'formik';
import { IBusinesseForm } from '../../../interfaces';
import { BusinessSchema } from '../../../schemas';
import { RiHotelLine, RiRestaurantLine } from 'react-icons/ri';
import { BsBank } from 'react-icons/bs';

export const ModalFormEstablishment = () => {

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
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Create new Business</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <RiHotelLine className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
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
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <RiRestaurantLine className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
                            <select
                                id="Category"
                                value={category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">Business category</option>

                                <option value="BAKERY">Bakery</option>
                                <option value="RESTAURANT">Restaurant</option>
                                <option value="SUPERMARKET">Supermarket</option>
                            </select>
                        </div>
                        {formik.touched.category && formik.errors.category && (
                            <small className="form__error">{formik.errors.category}</small>
                        )}
                    </div>
                </div>
                <div className='agentForm__btn' style={{marginTop: '3rem'}}>
                    <button type='submit' className="btn btn--orange">Save Business</button>
                </div>
            </form>
        </>
    )
}

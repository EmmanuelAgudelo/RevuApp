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
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Crear nuevo establecimiento</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <RiHotelLine className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
                            <input
                                type="text"
                                placeholder="Nombre"
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
                                id="category"
                                value={category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">Categoría del establecimiento</option>

                                <option value="BAKERY">Panadería</option>
                                <option value="RESTAURANT">Restaurante</option>
                                <option value="SUPERMARKET">Supermecado</option>
                            </select>
                        </div>
                        {formik.touched.category && formik.errors.category && (
                            <small className="form__error">{formik.errors.category}</small>
                        )}
                    </div>
                </div>
                <div className='agentForm__btn' style={{marginTop: '3rem'}}>
                    <button type='submit' className="btn btn--orange">Guardar establecimiento</button>
                </div>
            </form>
        </>
    )
}

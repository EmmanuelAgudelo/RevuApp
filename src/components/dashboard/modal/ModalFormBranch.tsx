import { useFormik } from 'formik';
import { IBranches } from '../../../interfaces';
import { BranchSchema } from '../../../schemas';
import { BsBank, BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCreditCard, AiOutlineInfoCircle } from 'react-icons/ai';
import { useStore } from 'zustand';
import { branchStore, businesseStore } from '../../../store';
import { useEffect, useRef, useState } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { string } from 'yup';
import { IoLocationOutline } from 'react-icons/io5';


export const ModalFormBranch = () => {

    const { businessesByOwner } = useStore(businesseStore);
    const { createBranch } = useStore(branchStore);

    const formik = useFormik<Omit<IBranches, '_id' | 'legal_documents'>>({
        initialValues: {
            id: businessesByOwner ? businessesByOwner.id : '',
            number: 0,
            address: '',
            phone: '',
            status: '',
            coordinates: [0, 0],
        },
        validationSchema: BranchSchema,
        onSubmit: (data) => {
            const { status, ...data2 } = data;
            createBranch({ ...data2, coordinates: [location.lat, location.lng] });
        },
    });
    const { number, phone, address } = formik.values;


    // ***************** GOOGLE MAPS ********************
    
    const [location, setLocation] = useState({
        lat: 0,
        lng: 0
    })

    const addressRef = useRef<HTMLInputElement>(null);

    let autocomplete: google.maps.places.Autocomplete | null = null;

    useEffect(() => {
        const addresField = addressRef.current;

        if (addresField) {
            autocomplete = new window.google.maps.places.Autocomplete(addresField, {
                fields: ["formatted_address", "geometry"],
            });

            autocomplete.addListener("place_changed", fillInAddress);

            return () => {
                if (autocomplete) {
                    google.maps.event.clearInstanceListeners(autocomplete);
                }
            };
        }
    }, []);


    const { } = useJsApiLoader(
        {
            googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
            libraries: ['places'],
        }
    )

    function fillInAddress() {

        if (!autocomplete) return;

        const place = autocomplete.getPlace();

        formik.setFieldValue('address', place.formatted_address ?? '');
        setLocation({ ...location, lat: place.geometry?.location?.lat() ?? 0, lng: place.geometry?.location?.lng() ?? 0 })
    }

    return (
        <>
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Create new branch</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <input
                                style={{ marginLeft: '3.5rem' }}
                                type="number"
                                placeholder="Branch number"
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
                            <IoLocationOutline className="form__icons--blue" size={20} style={{ marginRight: '1rem' }} />
                            <input
                                ref={addressRef}
                                type="text"
                                id="ship-address"
                                name="address"
                                value={address}
                                onChange={({ target }) => { formik.setFieldValue('address', target.value) }}
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
                                placeholder="Phone"
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
                <div className='agentForm__btn' style={{ marginTop: '3rem' }}>
                    <button type='submit' className="btn btn--orange">Save Branch</button>
                </div>
            </form>
        </>
    )
}

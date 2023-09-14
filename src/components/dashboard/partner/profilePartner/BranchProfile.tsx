import { useStore } from "zustand";
import { IBranches } from "../../../../interfaces";
import { branchStore } from "../../../../store";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { BranchSchema } from "../../../../schemas";
import Modal from "../../modal/Modal";
import { ModalDocumentPartner } from "../../modal/ModalDocumentPartner";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineCreditCard, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";


interface Props {
    branch: IBranches;
    business: string;
}

export const BranchProfile = ({ branch, business }: Props) => {

    const { updateBranch } = useStore(branchStore);
    const [isOpen, setIsOpen] = useState(false);

    // GOOGLE MAPS

    const [addressLocation, setAddressLocation] = useState('')
    const [location, setLocation] = useState({
        lat: 0,
        lng: 0,
    })

    const addressRef = useRef<HTMLInputElement>(null);

    let autocomplete: google.maps.places.Autocomplete | null = null;
    
    const formik = useFormik<Omit<IBranches, 'status' | '_id' | 'legal_documents'>>({
        initialValues: {
            id: '',
            number: 0,
            address: '',
            phone: '',
            coordinates: [0, 0]
        },
        validationSchema: BranchSchema,
        onSubmit: (data) => {
            updateBranch(branch._id, { ...data, coordinates: [location.lat, location.lng], address: addressLocation });
        },
    });

    const { number, phone, address } = formik.values;

    useEffect(() => {
        formik.setValues({
            id: business,
            number: branch.number,
            address: branch.address,
            phone: branch.phone,
            coordinates: branch.coordinates
        })
        setAddressLocation(branch.address)
    }, [])


    useEffect(() => {
        const addresField = addressRef.current;

        if (addresField) {
            autocomplete = new window.google.maps.places.Autocomplete(addresField, {
                fields: ["formatted_address", "geometry"],
            });

            addresField.focus();

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

        setAddressLocation(place.formatted_address ?? '');
        setLocation({ ...location, lat: place.geometry?.location?.lat() ?? 0, lng: place.geometry?.location?.lng() ?? 0 })
    }

    // Manejo del modal
    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='agentForm__cards'>
            <span className='agentForm__branches--title'>branch {number}</span>
            <div className='agentForm__branches--card'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__row">
                        <div className="form__col">
                            <div className="agentForm__branches--form-group">
                                <IoLocationOutline className="form__icons--blue" size={20} />
                                <input
                                    ref={addressRef}
                                    type="text"
                                    id="ship-address"
                                    value={addressLocation}
                                    onChange={({ target }) => { setAddressLocation(target.value) }}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.address && formik.errors.address && (
                                <small className="form__error">{formik.errors.address}</small>
                            )}
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col">
                            <div className="agentForm__branches--form-group">
                                <BsTelephone className="form__icons--blue" size={20} />
                                <input
                                    placeholder="Phone"
                                    type="text"
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

                    <div className='agentForm__btn' style={{ margin: '2rem 0 0 0' }}>
                        <button className='btn btn--blue' type='button' onClick={handleOpenModal}>Documents</button>
                        <button className='btn btn--orange' type='submit'>Save</button>
                    </div>
                </form>
            </div >
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalDocumentPartner branch={branch} business={business} />
            </Modal>
        </div >
    )
}

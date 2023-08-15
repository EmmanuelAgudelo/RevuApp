import { useStore } from "zustand";
import { IBranches } from "../../../../interfaces";
import { branchStore } from "../../../../store";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { BranchSchema } from "../../../../schemas";
import Modal from "../../modal/Modal";
import { ModalDocumentPartner } from "../../modal/ModalDocumentPartner";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineCreditCard, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

interface Props {
    branch: IBranches;
    business: string;
}

export const BranchProfile = ({ branch, business }: Props) => {

    const { updateBranch } = useStore(branchStore);
    const [isOpen, setIsOpen] = useState(false);

    const formik = useFormik<Omit<IBranches, 'status' | '_id'>>({
        initialValues: {
            id: '',
            number: 0,
            city: '',
            department: '',
            address: '',
            card_number: '',
            phone: '',
        },
        validationSchema: BranchSchema,
        onSubmit: (data) => {
            updateBranch(branch._id, data);
        },
    });

    const { city, department, number, address, card_number, phone } = formik.values;

    useEffect(() => {
        formik.setValues({
            id: business,
            number: branch.number,
            department: branch.department,
            city: branch.city,
            address: branch.address,
            phone: branch.phone,
            card_number: branch.card_number,
        })
    }, [])


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
                                <input style={{ marginLeft: '2.5rem' }}
                                    placeholder="City"
                                    type="text"
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
                        <div className="form__col">
                            <div className="agentForm__branches--form-group">
                                <input
                                    style={{ marginLeft: '2.5rem' }}
                                    placeholder="Department"
                                    type="text"
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
                    </div>

                    <div className="form__row">
                        <div className="form__col">
                            <div className="agentForm__branches--form-group">
                                <IoLocationOutline className="form__icons--blue" size={20} />
                                <input
                                    placeholder="Address"
                                    type="text"
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

                        <div className="form__col">
                            <div className="agentForm__branches--form-group">
                                <AiOutlineCreditCard className="form__icons--blue" size={20} />
                                <input
                                    placeholder="Card number"
                                    type="text"
                                    id="card_number"
                                    value={card_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <a className="agentForm__tooltip">
                                    <AiOutlineInfoCircle className="icon" />
                                    <span className="agentForm__tooltip-box">This will be the bank account where the money will be sent. </span>
                                </a>
                            </div>
                            {formik.touched.card_number && formik.errors.card_number && (
                                <small className="form__error">{formik.errors.card_number}</small>
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
                <ModalDocumentPartner />
            </Modal>
        </div >
    )
}

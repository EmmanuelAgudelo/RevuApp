import { useStore } from "zustand";
import { IBranches } from "../../../../interfaces";
import { branchStore } from "../../../../store";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { BranchSchema } from "../../../../schemas";
import { IoLocationOutline } from "react-icons/io5";
import Modal from "../../modal/Modal";
import { ModalDocumentPartner } from "../../modal/ModalDocumentPartner";

interface IBranch {
    branch: IBranches;
}

export const BranchProfile = ({ branch }: IBranch) => {

    const { updateBranchResponse, updateBranch } = useStore(branchStore);
    const [isOpen, setIsOpen] = useState(false);

    const formik = useFormik<Pick<IBranches, 'city' | 'department'>>({
        initialValues: {
            city: '',
            department: '',
        },
        validationSchema: BranchSchema,
        onSubmit: (data) => {
            console.log(data);
        },
    });

    const { city, department } = formik.values;

    useEffect(() => {
        formik.setValues({ department: branch.department, city: branch.city })
    }, [])


    // Manejo del modal
    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div key={branch._id} className='agentForm__cards'>
            <span className='agentForm__branches--title'>sede {branch.number}</span>
            <div className='agentForm__branches--card'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="agentForm__branches--form-group">
                        <IoLocationOutline className='agentForm__branches--icon' size={30} />
                        <input
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
                    <div className="agentForm__branches--form-group">
                        <input
                            style={{ marginLeft: '3.4rem' }}
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
                    <div className='agentForm__btn' style={{ margin: '2rem 0 0 0' }}>
                        <button className='btn btn--blue' type='button' onClick={handleOpenModal}>Documentos</button>
                        <button className='btn btn--orange' type='submit'>Guardar</button>
                    </div>
                </form>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalDocumentPartner />
            </Modal>
        </div>
    )
}

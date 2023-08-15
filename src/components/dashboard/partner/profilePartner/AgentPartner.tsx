import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegAddressCard } from 'react-icons/fa';
import { MdSettingsCell } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useStore } from 'zustand';
import { authStore, businesseStore } from '../../../../store';
import { useFormik } from 'formik';
import { IOwner } from '../../../../interfaces';
import { OwnerSchema } from '../../../../schemas';
import { userStore } from '../../../../store/userStore';
import { useEffect, useState } from 'react';
import { toastSuccess } from '../../../../helpers';
import Modal from '../../modal/Modal';
import { ModalFormEstablishment } from '../../modal/ModalFormEstablishment';

export const AgentPartner = () => {

  const { authentication } = useStore(authStore);
  const { updateUser, updateUserResponse, reset } = useStore(userStore);
  const { findBusinessesByOwner } = useStore(businesseStore);
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik<IOwner>({
    initialValues: {
      names: '',
      last_names: '',
      email: '',
      cellphone: '',
      document_type: '',
      document: ''
    },
    validationSchema: OwnerSchema,
    onSubmit: (data) => {
      const { document_type, document, ...data2 } = data;
      if (authentication !== 'verifying' && authentication !== "unauthenticated") {
        updateUser(authentication?.id, data2)
      }
    },
  })

  const { names, last_names, email, cellphone, document_type, document } = formik.values;


  useEffect(() => {
    if (authentication !== 'verifying' && authentication !== "unauthenticated") {
      formik.setValues({
        names: authentication.names,
        last_names: authentication.last_names,
        email: authentication.email,
        cellphone: authentication.cellphone,
        document_type: authentication.document_type,
        document: authentication.document
      })
    }
  }, [authentication])

  useEffect(() => {
    if (updateUserResponse && updateUserResponse.message === 'success') {
      toastSuccess('Data updated successfully.');
      findBusinessesByOwner()
      reset();
    }
  }, [updateUserResponse])

  // Manejo del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='agentForm'>
      <form onSubmit={formik.handleSubmit} className='form'>
        <div className="form__row">
          <div className="form__col">
            <div className="form__group">
              <BiUserCircle className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
              <input
                type="text"
                placeholder="Name"
                id="names"
                value={names}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.names && formik.errors.names && (
              <small className="form__error">{formik.errors.names}</small>
            )}
          </div>
        </div>
        <div className="form__row">
          <div className="form__col">
            <div className="form__group">
              <input style={{ marginLeft: '3.5rem' }}
                type="text"
                placeholder="Last names"
                id="last_names"
                value={last_names}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.last_names && formik.errors.last_names && (
              <small className="form__error">{formik.errors.last_names}</small>
            )}
          </div>
        </div>
        <div className="form__row">
          <div className="form__col">
            <div className="form__group">
              <HiOutlineMail className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <small className="form__error">{formik.errors.email}</small>
            )}
          </div>
          <div className="form__col">
            <div className="form__group">
              <MdSettingsCell className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
              <input
                type="text"
                id="cellphone"
                placeholder="Cellphone"
                value={cellphone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.cellphone && formik.errors.cellphone && (
              <small className="form__error">{formik.errors.cellphone}</small>
            )}
          </div>
        </div>

        <div className="form__row">
          <div className="form__col">
            <div className="form__group">
              <FaRegAddressCard className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
              <select
                id="document_type"
                value={document_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled
              >
                <option value="">Document type</option>
                <option value="C.C">National ID</option>
                <option value="T.I">Identity Card</option>
                <option value="C.E">Foreigner ID</option>
              </select>
            </div>
            {formik.touched.document_type && formik.errors.document_type && (
              <small className="form__error">{formik.errors.document_type}</small>
            )}
          </div>
          <div className="form__col">
            <div className="form__group">
              <input style={{ marginLeft: '3.5rem' }}
                type="text"
                id="document"
                placeholder="Document Number"
                value={document}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled
              />
            </div>
            {formik.touched.document && formik.errors.document && (
              <small className="form__error">{formik.errors.document}</small>
            )}
          </div>
        </div>
        <div className='agentForm__btn'>
          <button type='submit' className="btn btn--orange">Save Changes</button>
          {/* <button type='button' className="btn btn--orange btn--icon" onClick={handleOpenModal}><AiOutlinePlusCircle size={20} /> Agregar un nuevo establecimiento</button> */}
        </div>
      </form>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormEstablishment />
      </Modal>
    </div>
  )
}

import { RiHotelLine, RiRestaurantLine } from 'react-icons/ri'
import { IoImageOutline } from 'react-icons/io5'
import { TbCameraPlus } from 'react-icons/tb'
import { ChangeEvent, useEffect, useState } from 'react';
import Modal from '../../modal/Modal';
import { useStore } from 'zustand';
import { branchStore, businesseStore, uploadFileStore } from '../../../../store';
import { useFormik } from 'formik';
import { IBusinesseUser } from '../../../../interfaces';
import { BusinessSchema } from '../../../../schemas/business.schema';
import { BiPlusCircle } from 'react-icons/bi';
import { ModalFormBranch } from '../../modal/ModalFormBranch';
import { BranchProfile } from './BranchProfile';
import { toastError, toastSuccess } from '../../../../helpers';
import ModalImageBusiness from '../../modal/ModalImageBusiness';

export const BusinessProfile = () => {

  const { businessesByOwner, updateBusiness, updateBusinessResponse, findBusinessesByOwner, resetBusiness, uploadCoverPhotoResponse, uploadLogoResponse } = useStore(businesseStore);
  const { updateBranchResponse, createBranchResponse, error, reset } = useStore(branchStore);
  const { uploadFilesResponse, reset: resetFile, updateFileResponse } = useStore(uploadFileStore);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [changeName, setChangeName] = useState('');


  // FORMIK
  const formik = useFormik<Pick<IBusinesseUser, "name" | "category">>({
    initialValues: {
      name: '',
      category: '',
    },
    validationSchema: BusinessSchema,
    onSubmit: (data) => {
      if (businessesByOwner) {
        updateBusiness(businessesByOwner.id, data)
      }
    },
  });

  const { name, category } = formik.values;

  useEffect(() => {
    if (businessesByOwner) {
      formik.setValues({ name: businessesByOwner.name, category: businessesByOwner.category })
    }
  }, [businessesByOwner])

  // UPDATE BUSINESS

  useEffect(() => {
    if (updateBusinessResponse && updateBusinessResponse.message === 'success') {
      toastSuccess('Data updated successfully.');
      resetBusiness();
    }
  }, [updateBusinessResponse])

  // UPDATE IMAGES

  useEffect(() => {
    if (uploadCoverPhotoResponse && uploadCoverPhotoResponse.message === 'success' || uploadLogoResponse && uploadLogoResponse.message === 'success') {
      handleCloseModal2();
      toastSuccess('Image updated successfully.');
      resetBusiness();
      findBusinessesByOwner()
    }

  }, [uploadCoverPhotoResponse, uploadLogoResponse])

  // UPDATE BRANCH

  useEffect(() => {
    if (updateBranchResponse && updateBranchResponse.message === 'success') {
      toastSuccess('Branch updated successfully.');
      reset();
    }
  }, [updateBranchResponse]);

  // CREATE BRANCH

  useEffect(() => {
    if (createBranchResponse && createBranchResponse.message === 'success') {
      handleCloseModal();
      toastSuccess('Branch created successfully.');
      reset();
      findBusinessesByOwner()
    }
    if (error && error === 'address_already_exists') {
      toastError('The branch already exists.');
      resetFile();
    }
  }, [createBranchResponse, error])

  // UPLOAD LEGAL DOCUMENTS

  useEffect(() => {
    if (uploadFilesResponse && uploadFilesResponse.message == 'success') {
      toastSuccess('Files were uploaded successfully.');
      reset();
      findBusinessesByOwner()
    }
  }, [uploadFilesResponse]);

  useEffect(() => {
    if (updateFileResponse && updateFileResponse.message == 'success') {
      toastSuccess('File uploaded successfully.');
      reset();
      findBusinessesByOwner()
    }
  }, [updateFileResponse])


  // MODALS
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal2 = (type: string) => {
    setIsOpen2(true);
    setChangeName(type)
  };

  const handleCloseModal2 = () => {
    setIsOpen2(false);
    setChangeName('')
  };

  return (
    <div className='agentForm'>
      <div className='agentForm__btn'>
        <button className='btn btn--icon btn--blue' onClick={() => handleOpenModal2('LOGO')}><TbCameraPlus size={20} />Change Logo</button>
        <button className='btn btn--icon btn--blue' onClick={() => handleOpenModal2('COVER_PHOTO')}><TbCameraPlus size={20} />Change cover photo</button>
      </div>
      {businessesByOwner &&
        <div className='agentForm__images'>
          <div className='agentForm__image'>
            <img src={businessesByOwner.logo ? businessesByOwner.logo.url : '/images/no_image.jpg'} alt="" />
            <span>Logo</span>
          </div>
          <div className='agentForm__image'>
            <img src={businessesByOwner.cover_photo ? businessesByOwner.cover_photo.url : '/images/no_image.jpg'} alt="" />
            <span>Cover Photo</span>
          </div>
        </div>
      }

      {businessesByOwner &&
        <form className='form' onSubmit={formik.handleSubmit}>
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
                  id="category"
                  value={category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Establishment Category</option>

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
          <div className='agentForm__btn'>
            <button type='submit' className="btn btn--orange"> Save changes</button>
          </div>
        </form>
      }
      <div className='agentForm__branches'>
        {businessesByOwner?.branches?.map((branch) => (
          branch.status === 'ACTIVE' &&
          <BranchProfile key={branch._id} branch={branch} business={businessesByOwner.id} />
        ))}
        <div className='agentForm__cards agentForm__cards-add'>
          <div className='agentForm__branches--card-add'>
            <div className="agentForm__branches--form-group agentForm__branches--form-group-add">
              <button type='button' onClick={handleOpenModal} className='btn btn--icon btn--gray'>
                <BiPlusCircle size={20} />
                <span>Add branch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormBranch />
      </Modal>

      <Modal isOpen={isOpen2} onClose={handleCloseModal2}>
        <ModalImageBusiness type={changeName} />
      </Modal>
    </div>

  )
}


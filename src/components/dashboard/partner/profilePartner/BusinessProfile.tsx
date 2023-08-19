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
import { ModalImageBusiness } from '../../modal/ModalImageBusiness';

export const BusinessProfile = () => {

  const { businessesByOwner, updateBusiness, updateBusinessResponse, findBusinessesByOwner, resetBusiness, uploadCoverPhotoResponse, uploadLogoResponse } = useStore(businesseStore);
  const { updateBranchResponse, createBranchResponse, error, reset } = useStore(branchStore);
  const { uploadFilesResponse, reset:resetFile } = useStore(uploadFileStore)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [image, setImage] = useState<string>();
  const [nameImage, setnameImage] = useState<string>();

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
      setImage('')
      setnameImage('')
      toastSuccess('Image updated successfully.');
      resetBusiness();
    }

  }, [uploadCoverPhotoResponse, uploadLogoResponse])

  // UPDATE BRANCH

  useEffect(() => {
    if (updateBranchResponse && updateBranchResponse.message === 'success') {
      toastSuccess('Branch updated successfully.');
      reset();
    }
  }, [updateBranchResponse]);

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
      toastSuccess('Se subieron los archivos correctamente');
      reset();
      findBusinessesByOwner()
    }
  }, [uploadFilesResponse])


  // Manejo del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsOpen2(false);
    setImage('')
    setnameImage('')
  };

  //imagenes

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setnameImage(e.target.name);
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let newImage = image;
        newImage = reader.result as string;
        setImage(newImage);
      };
      reader.readAsDataURL(file);
      handleOpenModal2();
    }
  }

  return (
    <div className='agentForm'>
      <div className='agentForm__btn'>
        <input type="file" name="logo" id="logo" style={{ display: 'none' }} onChange={(e) => handleImage(e)} accept="image/*" />
        <label htmlFor="logo" className='btn btn--icon btn--blue'><TbCameraPlus size={20} /> Upload Logo</label>

        <input type="file" name="coverPhoto" id="coverPhoto" style={{ display: 'none' }} onChange={(e) => handleImage(e)} accept="image/*" />
        <label htmlFor="coverPhoto" className='btn btn--icon btn--blue'><IoImageOutline size={20} /> Upload Cover Photo</label>
      </div>
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
          <BranchProfile key={branch._id} branch={branch} business={businessesByOwner.id} />
        ))}
        <div className='agentForm__cards agentForm__cards-add'>
          <div className='agentForm__branches--card agentForm__branches--card-add'>
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
        <ModalImageBusiness image={image} name={nameImage} />
      </Modal>
    </div>

  )
}


import { RiHotelLine, RiRestaurantLine } from 'react-icons/ri'
import { IoImageOutline } from 'react-icons/io5'
import { TbCameraPlus } from 'react-icons/tb'
import { ChangeEvent, useEffect, useState } from 'react';
import Modal from '../../modal/Modal';
import { useStore } from 'zustand';
import { branchStore, businesseStore } from '../../../../store';
import { useFormik } from 'formik';
import { IBusinesseUser, IFormImage } from '../../../../interfaces';
import { BusinessSchema } from '../../../../schemas/business.schema';
import { BiPlusCircle } from 'react-icons/bi';
import { ModalFormBranch } from '../../modal/ModalFormBranch';
import { convertToBase64, toastSuccess } from '../../../../helpers';
import { BranchProfile } from './BranchProfile';

export const BusinessProfile = () => {

  const { businessesByOwner, updateBusiness, updateBusinessResponse, findBusinessesByOwner, resetBusiness, uploadLogo, uploadCoverPhoto, uploadCoverPhotoResponse, uploadLogoResponse } = useStore(businesseStore);
  const { createBranchResponse, reset } = useStore(branchStore);
  const [isOpen, setIsOpen] = useState(false);

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
    if (createBranchResponse && createBranchResponse.message === 'success') {
      toastSuccess('Se creó correctamente');
      handleCloseModal();
      findBusinessesByOwner();
      reset();
    }

  }, [createBranchResponse])

  useEffect(() => {
    if (businessesByOwner) {
      formik.setValues({ name: businessesByOwner.name, category: businessesByOwner.category })
    }
  }, [businessesByOwner])

  useEffect(() => {
    if (updateBusinessResponse && updateBusinessResponse.message === 'success') {
      toastSuccess('Datos actualizados correctamente.');
      findBusinessesByOwner()
      resetBusiness();
    }
  }, [updateBusinessResponse])

  useEffect(() => {
    if (uploadCoverPhotoResponse && uploadCoverPhotoResponse.message === 'success' || uploadLogoResponse && uploadLogoResponse.message === 'success') {
      toastSuccess('Se actualizó la imagen correctamente');
      resetBusiness();
    }

  }, [uploadCoverPhotoResponse, uploadLogoResponse])


  // Manejo del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //imagenes

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const img = await convertToBase64(e.target.files[0]);

      const format: string = e.target.files[0].type.split('/')[1];
      const data: IFormImage = { base64: img, format: format }
      if (e.target.name === 'logo') {
        if (businessesByOwner) {
          uploadLogo(businessesByOwner.id, data)
        }
      }
      if (e.target.name === 'coverPhoto') {
        if (businessesByOwner) {
          uploadCoverPhoto(businessesByOwner.id, data)
        }
      }

    }
  }

  return (
    <div className='agentForm'>
      <div className='agentForm__btn'>
        <input type="file" name="logo" id="logo" style={{ display: 'none' }} onChange={(e) => handleImage(e)} accept="image/*" />
        <label htmlFor="logo" className='btn btn--icon btn--blue'><TbCameraPlus size={20} /> Subir logo</label>

        <input type="file" name="coverPhoto" id="coverPhoto" style={{ display: 'none' }} onChange={(e) => handleImage(e)} accept="image/*" />
        <label htmlFor="coverPhoto" className='btn btn--icon btn--blue'><IoImageOutline size={20} /> Subir foto de portada</label>
      </div>
      {businessesByOwner &&
        <form className='form' onSubmit={formik.handleSubmit}>
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
          <div className='agentForm__btn'>
            <button type='submit' className="btn btn--orange"> Guardar cambios</button>
          </div>
        </form>
      }
      <div className='agentForm__branches'>
        {businessesByOwner?.branches?.map((branch) => (
          <BranchProfile key={branch._id} branch={branch} />
        ))}
        <div className='agentForm__cards agentForm__cards-add'>
          <div className='agentForm__branches--card agentForm__branches--card-add'>
            <div className="agentForm__branches--form-group agentForm__branches--form-group-add">
              <button type='button' onClick={handleOpenModal} className='btn btn--icon btn--gray'>
                <BiPlusCircle size={20} />
                <span>Agregar sede</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormBranch />
      </Modal>
    </div>

  )
}


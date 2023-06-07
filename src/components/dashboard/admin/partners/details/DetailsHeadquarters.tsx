import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiBuildings, BiMobile } from 'react-icons/bi'
import { TbPointFilled } from 'react-icons/tb'
import ModalPartnersDetails from '../../../../../pages/dashboard/admin/partners/ModalPartnersDetails'

export const DetailsHeadquarters = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="headquarters">
      <div className="headquarters__header">
        <img src="https://pbs.twimg.com/profile_images/1380267041790300166/uXdEuQ_D_400x400.png" alt="" />
      </div>
      <div className="headquarters__body">
        <div className="headquarters__active">
          <span className="headquarters__body-title"><strong>Frisby</strong></span>
          <select name="headquarters" id="headquarters" disabled>
            <option value="">Sede 1</option>
          </select>
            <span><TbPointFilled color="red" />Activo</span>
        </div>

        <div className="headquarters__body-inputs">
          <input type="text" disabled value={'Comidas'}/>
          <input type="text" disabled value={'Comidas'}/>
          <input type="text" disabled value={'Comidas'}/>
          <input type="text" disabled value={'Comidas'}/>
          <input type="text" disabled value={'Comidas'}/>
          <input type="text" disabled value={'Comidas'}/>
        </div>
      </div>
      <div className="headquarters__footer">
        <button className='headquarters__btn headquarters__btn--blue' onClick={handleOpenModal}>
          <BiBuildings size={20} className='headquarters__btn--icon'/>
          <span>Documentos legales</span>
        </button>
        <div className="headquarters__icons">
          <AiOutlineMail size={25}/>
          <BiMobile size={25}/>
        </div>
        <button className="headquarters__btn headquarters__btn--orange">
          Desactivar establecimiento
        </button>
      </div>

      <ModalPartnersDetails isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Modal Title</h2>
        <p>Modal Content</p>
      </ModalPartnersDetails>
    </div>
  )
}

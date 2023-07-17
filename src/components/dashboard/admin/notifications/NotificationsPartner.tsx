import { useState } from "react";
import { FaRegEdit } from "react-icons/fa"
import Modal from "../../modal/Modal";
import { ModalFormNotifications } from "../../modal/ModalFormNotifications";

export const NotificationsPartner = () => {

  const [isOpen, setIsOpen] = useState(false);


  // Manejo del modal

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="notifications">
      <div className="partnersAdmin__conatinerTable">
        <table className="partnersAdmin__table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Mensaje</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Información</td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus excepturi accusamus necessitatibus possimus </td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
              <td className="center"><span className="status--green">Activo</span></td>
              {/* :
              <td className="status--red  ">Inactivo</td> */}
              <td className="center">
                <div className="icons">
                  <label className="partnersAdmin__switch">
                    {/* <input type="checkbox" id={`switch__btn ${partner.id}`} onChange={() => handleChange(partner.id)} checked={partner.status} />
                  <label htmlFor={`switch__btn ${partner.id}`} title="Cambiar estado"></label> */}
                    <input type="checkbox" id={`switch__btn`} />
                    <label htmlFor={`switch__btn`} title="Cambiar estado" style={{ display: 'flex' }}></label>
                  </label>
                  <FaRegEdit className="partnersAdmin__icon" style={{ cursor: 'pointer' }} onClick={handleOpenModal} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormNotifications />
      </Modal>
    </div>
  )
}

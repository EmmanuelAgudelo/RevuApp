import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa"
import Modal from "../../modal/Modal";
import { ModalFormNotifications } from "../../modal/ModalFormNotifications";
import { useStore } from "zustand";
import { notificationStore } from "../../../../store/notificationStore";

export const NotificationsPartner = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { getNotificationsPartner, notificationsPartner } = useStore(notificationStore)

  useEffect(() => {
    getNotificationsPartner();
  }, [])


  // Manejo del modal

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (id: string) => {
    console.log(id);

  }

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
            {notificationsPartner?.map((notification) => (
              <tr>
                <td>{notification.type}</td>
                <td>{notification.message}</td>
                <td>{notification.description}</td>
                {notification.status ?
                  <td className="center"><span className="status--green">Activo</span></td>
                  :
                  <td className="center"><span className="status--red">Incativo</span></td>
                }
                <td className="center">
                  <div className="icons">
                    <label className="partnersAdmin__switch">
                      <input type="checkbox" id={`switch__btn ${notification.id}`} onChange={() => handleChange(notification.id)} checked={notification.status} />
                      <label htmlFor={`switch__btn ${notification.id}`} title="Cambiar estado"></label>
                    </label>
                    <FaRegEdit className="partnersAdmin__icon" style={{ cursor: 'pointer' }} onClick={handleOpenModal} />
                  </div>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormNotifications />
      </Modal>
    </div>
  )
}

import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa"
import Modal from "../../modal/Modal";
import { ModalFormNotifications } from "../../modal/ModalFormNotifications";
import { useStore } from "zustand";
import { notificationStore } from "../../../../store/notificationStore";
import { getType, toastSuccess } from "../../../../helpers";
import { INotificationSettings } from "../../../../interfaces";

export const NotificationsPartner = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { getNotificationsPartner, notificationsPartner, updateState, updateStateResponse, updateNotificationResponse, reset } = useStore(notificationStore);
  const [notificationState, setNotificationState] = useState<INotificationSettings>()

  useEffect(() => {
    getNotificationsPartner('PARTNER');
  }, [])

  useEffect(() => {
    if (updateStateResponse && updateStateResponse.message === 'success') {
      toastSuccess('Se actualizó el estado correctamente');
      getNotificationsPartner('PARTNER');
      reset();
    }
  }, [updateStateResponse])


  useEffect(() => {
    if (updateNotificationResponse && updateNotificationResponse.message === 'success') {
      toastSuccess('Se actualizó el mensaje correctamente');
      handleCloseModal();
      getNotificationsPartner('PARTNER');
      reset();
    }
  }, [updateNotificationResponse])


  // Manejo del modal

  const handleOpenModal = (notification: INotificationSettings) => {
    setIsOpen(true);
    setNotificationState(notification);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (id: string) => {
    updateState(id)
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
            {notificationsPartner?.map((notification, index) => (
              <tr key={index}>
                <td>{getType(notification.notification_type)}</td>
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
                    <FaRegEdit className="partnersAdmin__icon" style={{ cursor: 'pointer' }} onClick={() => handleOpenModal(notification)} />
                  </div>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormNotifications notification={notificationState} />
      </Modal>
    </div>
  )
}

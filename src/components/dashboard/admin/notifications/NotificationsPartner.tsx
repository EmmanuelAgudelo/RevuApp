import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa"
import Modal from "../../modal/Modal";
import { ModalFormNotifications } from "../../modal/ModalFormNotifications";
import { useStore } from "zustand";
import { notificationStore } from "../../../../store/notificationStore";
import { getTypeNotification, toastSuccess } from "../../../../helpers";
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
      toastSuccess('Status updated successfully.');
      getNotificationsPartner('PARTNER');
      reset();
    }
  }, [updateStateResponse])


  useEffect(() => {
    if (updateNotificationResponse && updateNotificationResponse.message === 'success') {
      toastSuccess('Message updated successfully.');
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

  function getTypeNotificion(notification_type: string): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="notifications">
      <div className="partnersAdmin__conatinerTable">
        <table className="partnersAdmin__table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Message</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notificationsPartner?.map((notification, index) => (
              <tr key={index}>
                <td>{getTypeNotification(notification.notification_type)}</td>
                <td>{notification.message}</td>
                <td>{notification.description}</td>
                {notification.status ?
                  <td className="center"><span className="status--green">Active</span></td>
                  :
                  <td className="center"><span className="status--red">Inactive</span></td>
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

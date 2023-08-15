import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { INotification } from "../../../../interfaces";
import { formatDate, getTypeNotification } from "../../../../helpers";
import { notificationStore } from "../../../../store/notificationStore";
import { useStore } from "zustand";

interface Props {
  notification: INotification;
  userId: string;
}

export const NotificationsCard = ({ notification, userId }: Props) => {

  const { getNotifications, updateRead } = useStore(notificationStore)

  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevState) => !prevState);
    if (!notification.read_by_users.includes(userId)) {
      updateRead(notification.id)
    }
  };

  return (
    <div className={`notifications__card ${!notification.read_by_users.includes(userId) && 'notifications__card--orange'}`}>
      {notification.read_by_users.includes(userId) ?
        <>
          <div className={`notifications__header`}>
            <div className={`notifications__text`}>
              <BsFillCircleFill className="notifications__icon" />
              <p>{getTypeNotification(notification.notification_type)}</p>
            </div>
            <div className="notifications__actions">
              <span className="notifications__date">{formatDate(notification.created_at)}</span>
              <div className="notifications__icons">
                {expanded ? (
                  <AiFillCaretDown onClick={toggleExpansion} style={{ cursor: 'pointer' }} />
                ) : (
                  <AiFillCaretRight onClick={toggleExpansion} style={{ cursor: 'pointer' }} />
                )}
                <AiOutlineCloseCircle style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
          {expanded && (
            <div className="notifications__body">
              {notification.message}
            </div>
          )}
        </>
        :
        <>
          <div className={`notifications__header notifications__header--orange`}>
            <div className={`notifications__text notifications__text--white`}>
              <BsFillCircleFill className="notifications__icon" />
              <p>{getTypeNotification(notification.notification_type)}</p>
            </div>
            <div className="notifications__actions notifications__actions--white">
              <span className="notifications__date notifications__date--white">{formatDate(notification.created_at)}</span>
              <div className="notifications__icons">
                {expanded ? (
                  <AiFillCaretDown onClick={toggleExpansion} style={{ cursor: 'pointer', color: '#fff' }} />
                ) : (
                  <AiFillCaretRight onClick={toggleExpansion} style={{ cursor: 'pointer', color: '#fff' }} />
                )}
                <AiOutlineCloseCircle style={{ cursor: 'pointer', color: '#fff' }} />
              </div>
            </div>
          </div>
          {expanded && (
            <div className="notifications__body notifications__body--white">
              {notification.message}
            </div>
          )}
        </>
      }
    </div>
  );
};

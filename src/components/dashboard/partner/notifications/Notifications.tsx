import React, { useEffect, useState } from "react";
import { NotificationsCard } from "./NotificationsCard";
import { useStore } from "zustand";
import { notificationStore } from "../../../../store/notificationStore";
import { BsFillCircleFill } from "react-icons/bs";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineCloseCircle,
} from "react-icons/ai";

export const Notifications = () => {
  const { notifications, getNotifications } = useStore(notificationStore);

  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="notifications">
      <p className="notifications__title">Notificaciones</p>
      <div className="notifications__cards">
        {notifications &&
          notifications.map((notification, index) => (
            <NotificationsCard key={index} notification={notification} />
          ))}
      </div>
    </div>
  );
};

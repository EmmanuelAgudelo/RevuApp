import { useEffect, useState } from "react";
import { NotificationsCard } from "./NotificationsCard";
import { useStore } from "zustand";
import { notificationStore } from "../../../../store/notificationStore";
import { authStore } from "../../../../store";

export const Notifications = () => {
  const { notifications, getNotifications } = useStore(notificationStore);
  const { authentication } = useStore(authStore);
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
         authentication !== 'verifying' && authentication !== "unauthenticated" &&
          notifications.map((notification, index) => (
            <NotificationsCard key={index} notification={notification} userId={authentication.id} />
          ))}
      </div>
    </div>
  );
};

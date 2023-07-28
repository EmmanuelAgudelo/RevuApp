import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { INotification } from "../../../../interfaces";
import { formatDate } from "../../../../helpers";

interface Props {
  notification: INotification;
  userId: string;
}

export const NotificationsCard = ({ notification, userId }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className='notifications__card'>
      {/* <div className={`notifications__header ${notification.read_by_users.includes(userId) && 'notifications__header--orange'}`}>
       */}
      <div className={`notifications__header`}>
        <div className={`notifications__text`}>
          <BsFillCircleFill className="notifications__icon" />
          <p> Aliados Revu: Revisa que tus datos estén completos</p>
        </div>
        <div className="notifications__actions">
          <span className="notifications__date">{formatDate(notification.created_at)}</span>
          <div className="notifications__icons">
            {expanded ? (
              <AiFillCaretDown onClick={toggleExpansion} style={{cursor: 'pointer'}} />
            ) : (
              <AiFillCaretRight onClick={toggleExpansion} style={{cursor: 'pointer'}} />
            )}
            <AiOutlineCloseCircle style={{cursor: 'pointer'}}/>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="notifications__body">
          {notification.message}
        </div>
      )}
    </div>
  );
};

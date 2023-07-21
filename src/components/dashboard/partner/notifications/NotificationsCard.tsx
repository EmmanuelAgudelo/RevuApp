import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { INotification } from "../../../../interfaces";

interface Props {
  notification: INotification;
}

export const NotificationsCard = ({ notification }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="notifications__card">
      <div className="notifications__header">
        <div className="notifications__text">
          <BsFillCircleFill className="notifications__icon" />
          Aliados Revu: Revisa que tus datos estén completos
        </div>
        <div className="notifications__actions">
          <span className="notifications__date">16/05/2023</span>
          <div className="notifications__icons">
            {expanded ? (
              <AiFillCaretDown onClick={toggleExpansion} />
            ) : (
              <AiFillCaretRight onClick={toggleExpansion} />
            )}
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
      {expanded && (
        <div className="notifications__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          quos fugit. Consequuntur perferendis minima, nisi porro laudantium
          iste sint ab tempora quae natus suscipit ut dolore, vero, non
          perspiciatis animi?
        </div>
      )}
    </div>
  );
};

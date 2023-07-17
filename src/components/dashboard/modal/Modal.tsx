import { FC } from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children : JSX.Element | JSX.Element[]
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="modal-close" onClick={onClose}>
          <AiOutlineClose size={22}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
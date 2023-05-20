import { useState } from 'react';
import { useStore } from 'zustand';
import { authStore } from '../../../../store/authStore';
import { HiOutlineDesktopComputer,HiOutlineMail,HiOutlineDocumentText } from 'react-icons/hi';
import { RiHotelLine } from 'react-icons/ri';
import { GoGift } from 'react-icons/go';

export const SidebarPartner = () => {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const {validateLogout,authentication } = useStore(authStore);

  const handleSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };


  
  return (
    <div className="sidebarPartner">
      <div className="sidebarPartner__logo">
        <img src="/images/icono_koala.png" alt="Logo" />
        <p className='sidebarPartner__greeting'>Hola, <span className='sidebarPartner__greeting--span'>Jairo</span></p>
      </div>
      <ul className="sidebarPartner__links">
        <li>
          <a href="#">
            <HiOutlineDesktopComputer className='sidebarPartner__icon' /> Inicio
          </a>
        </li>
        <li>
          <a href="#">
            <RiHotelLine className='sidebarPartner__icon' /> Mis datos
          </a>
        </li>
        <li>
          <a href="#">
            <GoGift className='sidebarPartner__icon' /> Revu sorpresa
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlineMail className='sidebarPartner__icon' /> Notificaciones
          </a>
        </li>
        <li>
          <a onClick={handleSubMenuClick} style={{cursor:'pointer'}}>
            <HiOutlineDocumentText className='sidebarPartner__icon' /> Términos legales
          </a>
          {showSubMenu && (
            <ul className="sidebarPartner__submenu">
              <li>
                <a href="#">Superintendencia</a>
              </li>
              <li>
                <a href="#">Terminos y condciones</a>
              </li>
              <li>
                <a href="#">Politicas y tratamiento de datos</a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="sidebarPartner__btns">
        <button className='sidebarPartner__btn sidebarPartner__btn--support'>Contacto soporte</button>
        <button className='sidebarPartner__btn sidebarPartner__btn--logout' onClick={()=>validateLogout()}>Cerrar sesion</button>
      </div>
    </div>
  );
}

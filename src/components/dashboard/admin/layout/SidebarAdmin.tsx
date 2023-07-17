import { Link } from 'react-router-dom';
import { useStore } from 'zustand';
import { authStore } from '../../../../store/authStore';
import { HiMenu, HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiHotelLine, RiUserSettingsLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineBellAlert } from 'react-icons/hi2';

interface Props {
  showMenu: boolean;
  onUpdate: () => void;
}

export const SidebarAdmin = ({ showMenu, onUpdate }: Props) => {
  const { validateLogout, authentication } = useStore(authStore);

  return (
    <div className={`${showMenu ? 'show' : ''}`}>
      <div className={`sidebarAdmin ${showMenu ? 'sidebarAdmin--show' : 'sidebarAdmin--collapse'}`}>
        <p className="sidebarAdmin__hamburguer"><HiMenu size={30} style={{ marginRight: 10, color: '#FFF' }} onClick={onUpdate} /></p>
        <div className="sidebarAdmin__logo">
          <img src="/images/logos/logo-white.svg" alt="Logo" />
        </div>
        <ul className="sidebarAdmin__links">
          <li>
            <Link to='home'>
              <HiOutlineDesktopComputer className='sidebarAdmin__icon' /> Inicio
            </Link>
          </li>
          <li>
            <Link to='partners'>
              <RiHotelLine className='sidebarAdmin__icon' /> Aliados Revu
            </Link>
          </li>
          <li>
            <Link to='ratings'>
              <AiOutlineStar className='sidebarAdmin__icon' /> Calificaciones
            </Link>
          </li>
          <li>
            <Link to='support'>
              <RiUserSettingsLine className='sidebarAdmin__icon' /> Soporte
            </Link>
          </li>
          <li>
            <Link to='notifications/partner'>
              <HiOutlineBellAlert className='sidebarAdmin__icon' /> Notificaciones
            </Link>
          </li>
        </ul>

        <div className="sidebarAdmin__btns">
          <button className='sidebarAdmin__btn sidebarAdmin__btn--logout' onClick={() => validateLogout()}>Cerrar sesion</button>
        </div>
      </div>
    </div>

  );
}

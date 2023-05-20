import { Link } from 'react-router-dom';
import { useStore } from 'zustand';
import { authStore } from '../../../../store/authStore';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiHotelLine,RiUserSettingsLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

export const SidebarAdmin = () => {
  const {validateLogout,authentication } = useStore(authStore);
  
  return (
    <div className="sidebarAdmin">
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
          <Link to=''>
            <AiOutlineStar className='sidebarAdmin__icon' /> Calificaciones
          </Link>
        </li>
        <li>
          <Link to=''>
            <RiUserSettingsLine className='sidebarAdmin__icon' /> Soporte
          </Link>
        </li>
      </ul>

      <div className="sidebarAdmin__btns">
        <button className='sidebarAdmin__btn sidebarAdmin__btn--logout' onClick={()=>validateLogout()}>Cerrar sesion</button>
      </div>
    </div>
  );
}

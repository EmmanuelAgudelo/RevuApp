import { useState } from 'react';
import { useStore } from 'zustand';
import { authStore } from '../../../../store/authStore';
import { HiOutlineDesktopComputer, HiOutlineMail, HiOutlineDocumentText, HiMenu } from 'react-icons/hi';
import { RiHotelLine } from 'react-icons/ri';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { GoGift } from 'react-icons/go';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { businesseStore } from '../../../../store';

interface Props {
  showMenu: boolean;
  onUpdate: () => void;
}

export const SidebarPartner = ({ showMenu, onUpdate }: Props) => {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const { validateLogout, authentication } = useStore(authStore);
  const { businessesByOwner } = useStore(businesseStore);


  const handleSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={`${showMenu ? 'show' : ''}`}>
      <div className={`sidebarPartner ${showMenu ? 'sidebarAdmin--show' : 'sidebarAdmin--collapse'}`}>
        <p className="sidebarAdmin__hamburguer"><HiMenu size={30} style={{ marginRight: 10, color: '#FFF' }} onClick={onUpdate} /></p>
        <div className="sidebarPartner__logo">
          <img src="/images/icono_koala.png" alt="Logo" />
          <p className='sidebarPartner__greeting'>Hello <span className='sidebarPartner__greeting--span'></span></p>
        </div>
        <ul className="sidebarPartner__links">
          <li>
            <Link to='home'>
              <HiOutlineDesktopComputer className='sidebarAdmin__icon' /> Home
            </Link>
          </li>
          <li>
            <Link to='profile/agent'>
              <RiHotelLine className='sidebarPartner__icon' /> My Data
            </Link>
          </li>
          <li>
            {businessesByOwner && businessesByOwner.branches.length > 0 &&
              <Link to={businessesByOwner?.branches.length !== 0 ? `revu-surprise/revu/${businessesByOwner?.branches[0]._id}` : 'revu-surprise/revu'}>
                <GoGift className='sidebarPartner__icon' /> Revu surprise
              </Link>
            }

          </li>
          <li>
            <Link to="notifications">
              <HiOutlineBellAlert className='sidebarPartner__icon' /> Notifications
            </Link>
          </li>
          <li>
            <a onClick={handleSubMenuClick} style={{ cursor: 'pointer' }}>
              <HiOutlineDocumentText className='sidebarPartner__icon' /> Legal terms
              {showSubMenu ?
                <MdArrowDropUp style={{ marginLeft: '2rem' }} />
                :
                <MdArrowDropDown style={{ marginLeft: '2rem' }} />
              }
            </a>
            {showSubMenu && (
              <ul className="sidebarPartner__submenu">
                <li>
                  <a href="/dashboard/partner/terms-and-conditions">Terms and conditions</a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="sidebarPartner__btns">
          <Link to="supports" style={{ display: 'flex' }}>
            <button className='sidebarPartner__btn sidebarPartner__btn--support'>Support contact</button>
          </Link>
          <button className='sidebarPartner__btn sidebarPartner__btn--logout' onClick={() => validateLogout()}>Log out</button>
        </div>
      </div>
    </div>
  );
}

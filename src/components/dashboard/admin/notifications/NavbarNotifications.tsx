import { Link, useLocation } from 'react-router-dom';

export const NavbarNotifications = () => {
    const location = useLocation();

    return (
        <ul className='navbarNotifications'>
                <li><Link to={`partner`} className={`${location.pathname === `/dashboard/admin/notifications/partner` ? 'active' : ''}`}>Partners </Link></li>
                {/* <li><Link to={`user`} className={`${location.pathname === `/dashboard/admin/notifications/user` ? 'active' : ''}`}>Usuarios </Link></li> */}
                <li><Link to={`#`} style={{color: '#c4c4c4'}} className={`${location.pathname === `/dashboard/admin/notifications/user` ? 'active' : ''}`}>Users </Link></li>

        </ul>
    )
}

import { Link, useLocation } from 'react-router-dom'
import { useStore } from 'zustand';
import { businesseStore } from '../../../../store';
import { IBusinesse } from '../../../../interfaces';

export const NavbarProfilePartner = () => {
    const location = useLocation();
    const { businessesByOwner } = useStore(businesseStore);

    return (
        <ul className='navbarProfile'>
            <li><Link to='agent' className={`${location.pathname === '/dashboard/partner/profile/agent' ? 'active' : ''}`}>Mis datos <span>Representante</span></Link></li>
            <li><Link to='password' className={`${location.pathname === '/dashboard/partner/profile/password' ? 'active' : ''}`}>Contraseña</Link></li>
            {businessesByOwner &&
                    <li key={businessesByOwner.id}><Link to={'establishment'} className={`${location.pathname === `/dashboard/partner/establishment` ? 'active' : ''}`}>Mis datos <span>{businessesByOwner.name}</span></Link></li>
            }
        </ul>
    )
}

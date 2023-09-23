import { Link, useLocation } from 'react-router-dom';
import { businesseStore } from '../../../../store';
import { useStore } from 'zustand';

export const NavbarRevuSurprise = () => {
    const location = useLocation();
    const { businessesByOwner } = useStore(businesseStore);

    return (
        <ul className='navbarProfile'>
            {businessesByOwner?.branches.map((branch) => (
                // branch.status === 'ACTIVE' &&
                <li key={branch._id}><Link to={`revu/${branch._id}`} className={`${location.pathname === `/dashboard/partner/revu-surprise/revu/${branch._id}` ? 'active' : ''}`}>{businessesByOwner.name} - Branch {branch.number}</Link></li>
            ))
            }
        </ul>
    )
}

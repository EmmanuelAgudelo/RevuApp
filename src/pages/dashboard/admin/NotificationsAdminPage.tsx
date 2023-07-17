import React from 'react'
import { NotificationsUser, NotificationsPartner } from '../../../components'
import { useLocation } from 'react-router-dom'

const NotificationsAdminPage = () => {

    const location = useLocation();
    
    if (location.pathname === '/dashboard/admin/notifications/user') {
        return (
            <NotificationsUser />
        )
    }
    return (
        <NotificationsPartner />
    )
}

export default NotificationsAdminPage
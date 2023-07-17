import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LayoutNotificationsAdmin } from '../components'
import NotificationsAdminPage from '../pages/dashboard/admin/NotificationsAdminPage'

export const NotificationsRouter = () => {
    return (
        <LayoutNotificationsAdmin>
            <Routes>
                <Route path="/user" element={<NotificationsAdminPage />} />
                <Route path="/partner" element={<NotificationsAdminPage />} />
                <Route path="*" element={<Navigate to='/error-404' />} />
            </Routes>
        </LayoutNotificationsAdmin>
    )
}

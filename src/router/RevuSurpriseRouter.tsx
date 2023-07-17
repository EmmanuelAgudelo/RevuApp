import { Navigate, Route, Routes } from 'react-router-dom'
import { LayoutRevuSurprisePartner } from '../components'
import RevuSurprisePartnerPage from '../pages/dashboard/partner/RevuSurprisePartnerPage'
import { useStore } from 'zustand';
import { businesseStore } from '../store';

export const RevuSurpriseRouter = () => {

    const { businessesByOwner } = useStore(businesseStore);

    return (
        <LayoutRevuSurprisePartner>
            <Routes>
                <Route path="revu/:id" element={<RevuSurprisePartnerPage />} />
                <Route path="/revu" element={<RevuSurprisePartnerPage />} />
                <Route path="*" element={<Navigate to='/error-404' />} />
            </Routes>
        </LayoutRevuSurprisePartner>
    )
}

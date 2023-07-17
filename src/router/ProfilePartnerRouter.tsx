import { Navigate, Route, Routes } from "react-router-dom";
import { BusinessProfile, LayoutProfilePartner, PasswordPartner } from "../components";
import ProfilePartnerPage from "../pages/dashboard/partner/ProfilePartnerPage";


export const ProfilePartnerRouter = () => {
    return (
        <LayoutProfilePartner>
            <Routes>
                <Route path="/" element={<ProfilePartnerPage />} />
                <Route path="/agent" element={<ProfilePartnerPage />} />
                <Route path="/password" element={<PasswordPartner />} />
                <Route path="/establishment" element={<BusinessProfile />} />
                <Route path="*" element={<Navigate to='/error-404' />} />
            </Routes>
        </LayoutProfilePartner>
    )
}

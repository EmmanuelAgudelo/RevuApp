import { Routes, Route,Navigate } from "react-router-dom";
import ProfilePage from "../pages/dashboard/partner/ProfilePage";
import { LayoutPartner } from "../components";

export const PartnerRouter = () => {
  
  return (
    <LayoutPartner>
      <Routes>
        <Route path="/home" element={<ProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/revu-surprise" element={<ProfilePage />} />
        <Route path="/notifications" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to='/error-404'/>}/>
      </Routes>
    </LayoutPartner>
  )
}
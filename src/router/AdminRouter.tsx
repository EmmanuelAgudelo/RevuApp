import { Routes, Route,Navigate } from "react-router-dom";
import { LayoutAdmin } from "../components";
import HomeAdminPage from "../pages/dashboard/admin/HomeAdminPage";
import PartnersAdminPage from "../pages/dashboard/admin/partners/PartnersAdminPage";
import { PartnersAdminDetailsPage } from "../pages/dashboard/admin/partners/PartnersAdminDetailsPage";
import RatingsAdminPage from "../pages/dashboard/admin/RatingsAdminPage";
import SupportAdminPage from "../pages/dashboard/admin/SupportAdminPage";
import { NotificationsRouter } from "./NotificationsRouter";

export const AdminRouter = () => {
  
  return (
    <LayoutAdmin>
      <Routes>
        <Route path="/home" element={<HomeAdminPage />} />
        <Route path="/partners" element={<PartnersAdminPage />} />
        <Route path="/partner/:id" element={<PartnersAdminDetailsPage />} />
        <Route path="/ratings" element={<RatingsAdminPage />} />
        <Route path="/support" element={<SupportAdminPage />} />
        <Route path="notifications/*" element={<NotificationsRouter />} />
        <Route path="*" element={<Navigate to='/error-404'/>}/>
      </Routes>
    </LayoutAdmin>
  )
}
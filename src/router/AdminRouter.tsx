import { Routes, Route,Navigate } from "react-router-dom";
import { LayoutAdmin } from "../components";
import HomeAdminPage from "../pages/dashboard/admin/HomeAdminPage";
import PartnersAdminPage from "../pages/dashboard/admin/partners/PartnersAdminPage";
import { PartnersAdminDetailsPage } from "../pages/dashboard/admin/partners/PartnersAdminDetailsPage";

export const AdminRouter = () => {
  
  return (
    <LayoutAdmin>
      <Routes>
        <Route path="/home" element={<HomeAdminPage />} />
        <Route path="/partners" element={<PartnersAdminPage />} />
        <Route path="/partners/:id" element={<PartnersAdminDetailsPage />} />
        <Route path="*" element={<Navigate to='/error-404'/>}/>
      </Routes>
    </LayoutAdmin>
  )
}
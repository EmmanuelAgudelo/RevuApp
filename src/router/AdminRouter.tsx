import { Routes, Route,Navigate } from "react-router-dom";
import { LayoutAdmin } from "../components";
import HomeAdminPage from "../pages/dashboard/admin/HomeAdminPage";
import PartnersAdminPage from "../pages/dashboard/admin/PartnersAdminPage";

export const AdminRouter = () => {
  
  return (
    <LayoutAdmin>
      <Routes>
        <Route path="/home" element={<HomeAdminPage />} />
        <Route path="/partners" element={<PartnersAdminPage />} />
        <Route path="*" element={<Navigate to='/error-404'/>}/>
      </Routes>
    </LayoutAdmin>
  )
}
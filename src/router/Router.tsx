import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LadingRouter } from "./LadingRouter";
import { DashboardRouter } from "./DashboardRouter";
import { AuthRouter } from "./AuthRouter";
import Error404Page from "../pages/Error404Page";

export const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>

        {/* routes for the landing */}
        <Route path="/*" element={<LadingRouter/>}/>

        {/* routes for the auth */}
        <Route path="auth/*" element={<AuthRouter/>}/>

        {/* routes for the dashboard */}
        <Route path="dashboard/*" element={<DashboardRouter />}/>
        
        {/* error 404  */}
        <Route path="error-404" element={<Error404Page />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

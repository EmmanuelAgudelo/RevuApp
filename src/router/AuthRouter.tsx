import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecoverPassword from "../pages/auth/RecoverPassword";
import ResetPassword from "../pages/auth/ResetPassword";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="recoverPassword" element={<RecoverPassword/>}/>
      <Route path="resetPassword" element={<ResetPassword/>}/>
      <Route path="*" element={<>Error 404 landing</>}/>
    </Routes>
  )
}

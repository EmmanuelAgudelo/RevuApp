import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { authStore } from "../store";
import { setLocalStorage } from "../localstorage";
import { Layout, Loading } from "../components";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import RecoverPasswordPage from "../pages/auth/RecoverPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import { toastSuccess } from "../helpers";


export const AuthRouter = () => {
  const { authentication, login, validateAuthentication } = useStore(authStore);


  useEffect(() => {
    if (authentication === 'verifying') {
      validateAuthentication();
    }
  }, [])

  useEffect(() => {
    if (login && login.message === "success") {
      setLocalStorage('token_authorization', login.data.access_token);
      toastSuccess('Welcome!');
      setTimeout(() => {
        window.location.href = login.data.role === 'ADMIN' ? "/dashboard/admin/home" : "/dashboard/partner/home";
      }, 2000);
    }
  }, [login])



  if (authentication !== 'verifying' && authentication !== 'unauthenticated') {
    return <Navigate to='/' />
  };

  if (authentication === "verifying") {
    return <Loading />
  }


  return (
    <Layout>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="recoverPassword" element={<RecoverPasswordPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="*" element={<Navigate to='/error-404' />} />
      </Routes>
    </Layout>
  )
}

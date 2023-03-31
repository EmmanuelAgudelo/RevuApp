import { useEffect } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { authStore } from "../store";
import { setLocalStorage } from "../localstorage";
import { Layout } from "../components";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import RecoverPasswordPage from "../pages/auth/RecoverPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import { toastSuccess } from "../helpers";


export const AuthRouter = () => {
  const {authentication,login,validateAuthentication} = useStore(authStore);


  useEffect(() => {
    if (authentication === 'verifying') {
      validateAuthentication();
    }
  }, [authentication])

  useEffect(() => {
    if (login && login.message === "success") {
      setLocalStorage('token_authorization',login.data.access_token);
      toastSuccess('Bienvenido');
      setTimeout(()=>{
        window.location.href = "/dashboard/user";
      },2000);
    }    
  }, [login])



  if(authentication !== 'verifying' && authentication !== 'unauthenticated'){
    return <Navigate to='/'/>
  };
  
  if(authentication === "verifying"){
    return <>Loading...</>
  }


  return (
    <Layout>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="recoverPassword" element={<RecoverPasswordPage/>}/>
        <Route path="resetPassword" element={<ResetPasswordPage/>}/>
        <Route path="*" element={<>Error 404 landing</>}/>
      </Routes>
    </Layout>
  )
}

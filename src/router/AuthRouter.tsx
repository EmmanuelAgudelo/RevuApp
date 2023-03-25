import { useEffect } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { authStore } from "../store";
import { setLocalStorage } from "../localstorage";
import { Layout } from "../components";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecoverPassword from "../pages/auth/RecoverPassword";
import ResetPassword from "../pages/auth/ResetPassword";


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
      window.location.href = "/dashboard/user"
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
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="recoverPassword" element={<RecoverPassword/>}/>
        <Route path="resetPassword" element={<ResetPassword/>}/>
        <Route path="*" element={<>Error 404 landing</>}/>
      </Routes>
    </Layout>
  )
}

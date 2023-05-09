import { useEffect } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { removeLocalStorage } from "../localstorage";
import Users from "../pages/dashboard/Users";
import ProfilePage from "../pages/dashboard/partner/ProfilePage";
import { authStore } from "../store";

export const DashboardRouter = () => {
  const {authentication,logout,validateAuthentication} = useStore(authStore);
  

  useEffect(() => {
    validateAuthentication();
  }, [])

  /* validate the close session */
  useEffect(() => {
    if (logout && logout.message === "success") {
      removeLocalStorage('token_authorization');
      window.location.href = "/auth/login"
    }    
  }, [logout])
  

  if(authentication === 'unauthenticated'){
    return <Navigate to='/auth/login'/>
  };

  if(authentication === "verifying"){
    return <>Loading...</>
  }

  
  return (
    <Routes>
      <Route path="/partner/home" element={<ProfilePage />} />
      <Route path="/partner/profile" element={<ProfilePage />} />
      <Route path="/partner/revu-surprise" element={<ProfilePage />} />
      <Route path="/partner/notifications" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to='/error-404'/>}/>
    </Routes>
  )
}
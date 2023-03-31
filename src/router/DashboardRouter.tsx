import { useEffect } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { removeLocalStorage } from "../localstorage";
import Users from "../pages/dashboard/Users";
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
      <Route path="/user" element={<Users/>}/>
      <Route path="*" element={<>Error 404 dash</>}/>
    </Routes>
  )
}
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { removeLocalStorage } from "../localstorage";
import Users from "../pages/dashboard/Users";
import { authStore } from "../store";
import { PartnerRouter } from "./PartnerRouter";
import { AdminRouter } from "./AdminRouter";
import { Loading } from "../components";

export const DashboardRouter = () => {
  const { authentication, logout, validateAuthentication } = useStore(authStore);


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


  if (authentication === 'unauthenticated') {
    return <Navigate to='/auth/login' />
  };

  if (authentication === "verifying") {
    return <Loading />

  }


  return (
    <Routes>
      <Route path="partner/*" element={<PartnerRouter />} />
      <Route path="admin/*" element={<AdminRouter />} />
      <Route path="*" element={<Navigate to='/error-404'/>}/>
    </Routes>
  )
}
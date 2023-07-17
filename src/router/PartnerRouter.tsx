import { Routes, Route, Navigate } from "react-router-dom";
import { LayoutPartner } from "../components";
import HomePartnerPage from "../pages/dashboard/partner/HomePartnerPage";
import { ProfilePartnerRouter } from "./ProfilePartnerRouter";
import SupportsPartnerPage from "../pages/dashboard/partner/SupportsPartnerPage";
import RevuSurprisePartnerPage from "../pages/dashboard/partner/RevuSurprisePartnerPage";
import { RevuSurpriseRouter } from "./RevuSurpriseRouter";
import { useStore } from "zustand";
import { businesseStore } from "../store";
import { useEffect } from "react";
import TermsAndConditionsPage from "../pages/dashboard/partner/TermsAndConditionsPage";

export const PartnerRouter = () => {

  const { findBusinessesByOwner } = useStore(businesseStore);

  useEffect(() => {
    findBusinessesByOwner();
  }, [])

  return (
    <LayoutPartner>
      <Routes>
        <Route path="/home" element={<HomePartnerPage />} />
        <Route path="profile/*" element={<ProfilePartnerRouter />} />
        <Route path="revu-surprise/*" element={<RevuSurpriseRouter />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        {/* <Route path="/superintendence" element={<SuperintendencePage />} /> */}
        <Route path="/supports" element={<SupportsPartnerPage />} />
        <Route path="*" element={<Navigate to='/error-404' />} />
      </Routes>
    </LayoutPartner>
  )
}
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components";
import AboutPage from "../pages/landing/AboutPage";
import TycPage from "../pages/landing/TycPage";


export const LadingRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/tyc" element={<TycPage />} />
        <Route path="*" element={<Navigate to='/error-404'/>}/>
      </Routes>
    </Layout>
  );
};

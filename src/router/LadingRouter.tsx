import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components";
import AboutPage from "../pages/landing/AboutPage";


export const LadingRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="*" element={<Navigate to='/error-404'/>}/>
      </Routes>
    </Layout>
  );
};

import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import AboutPage from "../pages/landing/AboutPage";
import DownloadPage from "../pages/landing/DownloadPage";
import HomePage from "../pages/landing/HomePage";
import QuestionsPage from "../pages/landing/QuestionsPage";

export const LadingRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aboutMe" element={<AboutPage />} />
        <Route path="questions" element={<QuestionsPage />} />
        <Route path="download" element={<DownloadPage />} />

        <Route path="*" element={<>Error 404 landing</>} />
      </Routes>
    </Layout>
  );
};

import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import AboutPage from "../pages/landing/AboutPage";
import DownloadPage from "../pages/landing/DownloadPage";
import HomePage from "../pages/landing/HomePage";
import QuestionsPage from "../pages/landing/QuestionsPage";
import Error404Page from "../pages/Error404Page";

export const LadingRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aboutMe" element={<AboutPage />} />
        <Route path="questions" element={<QuestionsPage />} />
        <Route path="download" element={<DownloadPage />} />

        <Route path="*" element={<Error404Page/>} />
      </Routes>
    </Layout>
  );
};

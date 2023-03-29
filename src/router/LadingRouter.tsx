import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import About from "../pages/landing/About";
import Home from "../pages/landing/Home";
import Questions from "../pages/landing/Questions";

export const LadingRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="aboutMe" element={<About />} />
        <Route path="questions" element={<Questions />} />

        <Route path="*" element={<>Error 404 landing</>} />
      </Routes>
    </Layout>
  );
};

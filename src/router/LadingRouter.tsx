import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import Home from "../pages/landing/Home";


export const LadingRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="*" element={<>Error 404 landing</>}/>
      </Routes>
    </Layout>
  )
}

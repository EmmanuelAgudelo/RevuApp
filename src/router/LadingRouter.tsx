import { Routes, Route } from "react-router-dom";
import Home from "../pages/landing/Home";


export const LadingRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="*" element={<>Error 404 landing</>}/>
    </Routes>
  )
}

import { Routes, Route } from "react-router-dom";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/users" element={<>user</>}/>
      <Route path="*" element={<>Error 404 dash</>}/>
    </Routes>
  )
}
import { Route, Routes } from "react-router-dom"
// Pages
import { LoginPage } from "../auth/pages/LoginPage"
import { ThewayRoute } from "../theway/router/ThewayRoute"

export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ThewayRoute />} />
      </Routes>
    </>
  )
}

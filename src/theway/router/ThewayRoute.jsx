import { Navigate, Route, Routes } from "react-router-dom"
// LOCALES
import { Navbars } from "../../ui/components/Navbars"
import { StorePages, TripsPages, HomePage, StoreListPage } from "../pages"
import { NotFoundPage } from "../pages/NotFoundPage"

export const ThewayRoute = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/sucursales" element={<StorePages />} />
        <Route path="/listado-sucursales" element={<StoreListPage />} />
        <Route path="/viajes" element={<TripsPages />} />

        <Route path='/' element={<Navigate to="/home" />} />
        {/* Ruta de error 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

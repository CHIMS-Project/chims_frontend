import { useContext } from "react"
import { AuthContext } from "../serviceProviders/contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

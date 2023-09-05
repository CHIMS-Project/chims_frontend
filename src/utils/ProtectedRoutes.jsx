import { useContext } from "react"
import { AuthContext } from "../serviceProviders/contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

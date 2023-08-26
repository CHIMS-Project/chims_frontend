import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./views/Auth/Login"
import { Dashboard } from "./views/Dashboard/Dashboard"
import { AuthProvider } from "./serviceProviders/providers/AuthProvider"
import { ProtectedRoutes } from "./utils/ProtectedRoutes"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<ProtectedRoutes />} >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

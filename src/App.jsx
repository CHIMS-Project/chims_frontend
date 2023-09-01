import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./views/Auth/Login"
import { Dashboard } from "./views/Dashboard/Dashboard"
import { AuthProvider } from "./serviceProviders/providers/AuthProvider"
import { ProtectedRoutes } from "./utils/ProtectedRoutes"
import { MainLayout } from "./layouts/MainLayout"
import { AppConfigsProvider } from "./serviceProviders/providers/AppConfigsProvider"

function App() {

  return (
    <AuthProvider>
      <AppConfigsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />} >
              <Route  path="main" element={<MainLayout />} >
                <Route index element={<Dashboard />} />
                <Route path="*" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppConfigsProvider>
    </AuthProvider> 
  )
}

export default App

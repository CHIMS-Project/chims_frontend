import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./views/Auth/Login"
import { Overview } from "./views/Dashboard/overviews/Overview"
import { AuthProvider } from "./serviceProviders/providers/AuthProvider"
import { ProtectedRoutes } from "./utils/ProtectedRoutes"
import { MainLayout } from "./layouts/MainLayout"
import { AppConfigsProvider } from "./serviceProviders/providers/AppConfigsProvider"
import { UserProvider } from "./serviceProviders/providers/UserProvider"

function App() {

  return (
    <UserProvider>
      <AuthProvider>
        <AppConfigsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoutes />} >
                <Route  path="app" element={<MainLayout />} >
                  <Route index element={<Overview />} />
                  <Route path="*" element={<Overview />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </AppConfigsProvider>
      </AuthProvider> 
    </UserProvider>
  )
}

export default App

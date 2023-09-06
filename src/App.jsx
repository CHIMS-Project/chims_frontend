import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./views/Auth/Login"
import { Overview } from "./views/Dashboard/overviews/Overview"
import { AuthProvider } from "./serviceProviders/providers/AuthProvider"
import { ProtectedRoutes } from "./utils/ProtectedRoutes"
import { MainLayout } from "./layouts/MainLayout"
import { AppConfigsProvider } from "./serviceProviders/providers/AppConfigsProvider"
import { UserProvider } from "./serviceProviders/providers/UserProvider"
import { Hospitals } from "./views/Dashboard/hospitals/Hospitals"
import { HospitalsLayout } from "./layouts/HospitalsLayout"
import { Hospital } from "./views/Dashboard/hospitals/Hospital"
import { AddHospital } from "./views/Dashboard/hospitals/AddHospital"
import { HospitalDetails } from "./views/Dashboard/hospitals/HospitalDetails"

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
                  <Route path="hospitals" element={<HospitalsLayout />} >
                    <Route index element={<Hospitals />} />
                    <Route path="add" element={<AddHospital />} />
                    <Route path=":id" element={<Hospital />} >
                      <Route index element={<HospitalDetails />} />
                      {/* <Route path="edit" element={<AddHospital />} /> */}
                    </Route>
                  </Route>
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

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
import { HospitalPatients } from "./views/Dashboard/hospitals/HospitalPatients"
import { HospitalStaff } from "./views/Dashboard/hospitals/HospitalStaff"
import { PatientsLayout } from "./views/Dashboard/patients/PatientsLayout"
import { AllPatients } from "./views/Dashboard/patients/AllPatients"
import { Patient } from "./views/Dashboard/patients/Patient"
import { StaffLayout } from "./views/Dashboard/staff/StaffLayout"
import { AllStaff } from "./views/Dashboard/staff/AllStaff"
import { Staff } from "./views/Dashboard/staff/Staff"
import { AllDoctors } from "./views/Dashboard/staff/AllDoctors"
import { AllNurses } from "./views/Dashboard/staff/AllNurses"
import { EditHospital } from "./views/Dashboard/hospitals/EditHospital"
import { PopUp } from "./components/popups/PopUp"
import { AdmissionLayout } from "./layouts/AdmissionLayout"
import { AllStaffAdmissions } from "./components/widgets/AllStaffAdmissions"
import { AddAdmissionForm } from "./components/form/admissions-form/AddAdmissionForm"

function App() {

  return (
    <UserProvider>
      <AuthProvider>
        <AppConfigsProvider>
          <PopUp />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoutes />} >
                <Route  path="app" element={<MainLayout />} >
                  <Route index element={<Overview />} />

                  {/* Hospital Routes */}
                  <Route path="hospitals" element={<HospitalsLayout />} >
                    <Route index element={<Hospitals />} />
                    <Route path="add" element={<AddHospital />} />

                    {/* Hospital details routes */}
                    <Route path=":id" element={<Hospital />} >
                      <Route index element={<HospitalDetails />} />
                      <Route path="patients" element={<HospitalPatients />} />
                      <Route path="staff" element={<HospitalStaff />} />
                      <Route path="edit" element={<EditHospital />} /> 
                    </Route>
                  </Route>

                  {/*  Patients routes */}
                  <Route path="patients" element={<PatientsLayout />} >
                    <Route index element={<AllPatients meta />} />
                    <Route path=":id" element={<Patient />} />
                  </Route>

                  {/* Staff routes */}
                  <Route path="staff" element={<StaffLayout />} >
                    <Route index element={<AllStaff meta />} />
                    <Route path="doctors" element={<AllDoctors />} />
                    <Route path="nurses" element={<AllNurses />} />
                    <Route path=":id" element={<Staff />} />
                  </Route>

                  {/* Admissions routes */}
                  <Route path="admissions" element={<AdmissionLayout />} >
                    <Route index element={<AllStaffAdmissions meta />} />
                    <Route path="add" element={<AddAdmissionForm />} />
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

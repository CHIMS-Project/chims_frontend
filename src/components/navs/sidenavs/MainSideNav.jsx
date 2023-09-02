import { useRole } from "../../../hooks/useRole"
import { SuperAdminSideNav } from "./SuperAdminSideNav"
import { HospitalAdminSideNav } from "./HospitalAdminSideNav"
import { PatientSideNav } from "./PatientSideNav";
import { DepartmentSideNav } from "./DepartmentSideNav";
import { DoctorSideNav } from "./DoctorSideNav";
import { NurseSideNav } from "./NurseSideNav";

export const MainSideNav = () => {
  const userRole = useRole();

  switch (userRole) {
    case "super-admin":
      return <SuperAdminSideNav />
    case "hospital-admin":
      return <HospitalAdminSideNav />
    case "patient":
      return <PatientSideNav />
    case "department-admin":
      return <DepartmentSideNav />
    case "doctor":
      return <DoctorSideNav />
    case "nurse":
      return <NurseSideNav />
    default:
      return <SuperAdminSideNav />
  }


}

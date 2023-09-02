import { faDashboard, faGears, faUsers } from "@fortawesome/free-solid-svg-icons"
import { SideNavBtn } from "../../buttons/SideNavBtn"
import { faFileClipboard } from "@fortawesome/free-regular-svg-icons"

export const DoctorSideNav = () => {
  return (
    <nav className="flex flex-col gap-10 px-6 mt-3" >

        <SideNavBtn to="." text="Dashboard" end icon={faDashboard} />
        <SideNavBtn to="appointments" text="Appointments" icon={faFileClipboard} />
        <SideNavBtn to="patients" text="Patients" icon={faUsers} />
        <SideNavBtn to="settings" text="Settings" icon={faGears} />
    </nav>
  )
}

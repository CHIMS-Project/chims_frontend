import { faDashboard, faGears } from "@fortawesome/free-solid-svg-icons"
import { SideNavBtn } from "../../buttons/SideNavBtn"
import { faClock, faFileClipboard } from "@fortawesome/free-regular-svg-icons"

export const PatientSideNav = () => {
  return (
    <nav className="flex flex-col gap-10 px-6 mt-3" >
        <SideNavBtn to="." text="Dashboard" end icon={faDashboard} />
        <SideNavBtn to="appointments" text="Appointments" icon={faFileClipboard} />
        <SideNavBtn to="history" text="History" icon={faClock} />
        <SideNavBtn to="settings" text="Settings" icon={faGears} />
    </nav>
  )
}

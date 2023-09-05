import { faClock, faDashboard, faGears, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { SideNavBtn } from "../../buttons/SideNavBtn"

export const NurseSideNav = () => {
  return (
    <nav className="flex flex-col gap-10 px-6 mt-3" >

        <SideNavBtn to="." text="Dashboard" end icon={faDashboard} />
        <SideNavBtn to="patients" text="Patients" icon={faUsers} />
        <SideNavBtn to="admissions" text="Admissions" icon={faUserPlus} />
        <SideNavBtn to="history" text="History" icon={faClock} />
        <SideNavBtn to="settings" text="Settings" icon={faGears} />
    </nav>
  )
}

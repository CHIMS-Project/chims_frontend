import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SearchBar } from "../form/SearchBar"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import profilePicture from '../../assets/images/profile-pic.jpg'

export const MainHeader = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3 shadow-xl shadow-primary-200/10">
        <SearchBar />

        <div className="flex items-center gap-4" >
            <button className="hover:bg-slate-200 px-2 py-1 rounded-md text-lg" >
                <FontAwesomeIcon icon={faBell}  />
            </button>

            <div className=" w-0.5 h-7 bg-primary-100"></div>

            <div className="w-10 h-10 rounded-full bg-gray-100" >
                <img src={profilePicture} alt="profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <span>Micheal Osborn</span>
            <button className="hover:bg-slate-200 px-2 py-1 rounded-md text-xs" >
                <FontAwesomeIcon icon={faChevronDown}  />
            </button>

        </div>
    </header>
  )
}

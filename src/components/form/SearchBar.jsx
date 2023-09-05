import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SearchBar = () => {
  return (
    <form className="flex items-center gap-2">
        <div className="text-primary-400" >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input type="search" className="ring-0 border-0 border-b border-b-slate-200 bg-inherit focus:ring-0 focus:border-b-primary-500" placeholder="Search for anything" />
    </form>
  )
}

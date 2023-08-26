import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { UserMenuDropdown } from "./UserMenuDropdown";
import { useState } from 'react'
export const UserHeaderOptions = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setShowDropdown(!showDropdown)}
				className="hover:bg-slate-100 px-2 py-1 rounded-md text-xs">
				<FontAwesomeIcon icon={faChevronDown} />
			</button>

			<AnimatePresence>
				{showDropdown && <UserMenuDropdown />}
			</AnimatePresence>
		</div>
	);
};

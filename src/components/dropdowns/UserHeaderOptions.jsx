import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { UserMenuDropdown } from "./UserMenuDropdown";
import { useState } from "react";
import { DropdownContainer } from "./DropdownContainer";

export const UserHeaderOptions = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<DropdownContainer>
			<button
				onClick={() => setShowDropdown(!showDropdown)}
				className="hover:bg-slate-100 px-2 py-1 rounded-md text-xs">
				<FontAwesomeIcon icon={faChevronDown} />
			</button>

			<AnimatePresence>
				{showDropdown && <UserMenuDropdown />}
			</AnimatePresence>
		</DropdownContainer>
	);
};

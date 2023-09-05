import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { DropdownContainer } from "./DropdownContainer";

export const Notification = () => {
	const [showNotifications, setShowNotifications] = useState(false);

	return (
		<DropdownContainer>
			<button
				onClick={() => setShowNotifications(!showNotifications)}
				className="hover:bg-slate-100 px-2 py-1 rounded-md text-lg text-primary-500">
				<FontAwesomeIcon icon={faBell} />
			</button>
			<AnimatePresence>
				{showNotifications && <NotificationsDropdown />}
			</AnimatePresence>
		</DropdownContainer>
	);
};

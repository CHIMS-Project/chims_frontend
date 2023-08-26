import { Link } from "react-router-dom";
import { DropdownContentContainer } from "./DropdownContentContainer";

export const UserMenuDropdown = () => {
	return (
		<DropdownContentContainer>
			<Link
				to="profile"
				className="w-full inline-block text-primary-700 hover:text-primary-700 hover:no-underline p-1 rounded-md hover:bg-slate-100">
				Profile
			</Link>
			<button className="w-full text-primary-700 hover:text-primary-700 hover:no-underline p-1 rounded-md hover:bg-slate-100 text-left">
				Logout
			</button>
		</DropdownContentContainer>
	);
};

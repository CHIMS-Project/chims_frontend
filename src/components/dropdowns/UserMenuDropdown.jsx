import { Link } from "react-router-dom";
import { DropdownContentContainer } from "./DropdownContentContainer";
import { useContext } from "react";
import { AuthContext } from "../../serviceProviders/contexts/AuthContext";

export const UserMenuDropdown = () => {
	const { logout } = useContext(AuthContext);
	return (
		<DropdownContentContainer>
			<Link
				to="profile"
				className="w-full inline-block text-primary-700 hover:text-primary-700 hover:no-underline p-1 rounded-md hover:bg-slate-100">
				Profile
			</Link>
			<button
				className="w-full text-primary-700 hover:text-primary-700 hover:no-underline p-1 rounded-md hover:bg-slate-100 text-left"
				onClick={logout}>
				Logout
			</button>
		</DropdownContentContainer>
	);
};

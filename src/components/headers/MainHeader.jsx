// import { SearchBar } from "../form/SearchBar";
import profilePicture from "../../assets/images/profile-pic.jpg";
import { Notification } from "../dropdowns/Notification";
import { UserHeaderOptions } from "../dropdowns/UserHeaderOptions";
import { useContext } from "react";
import { UserContext } from "../../serviceProviders/contexts/UserContext";

export const MainHeader = () => {
	const { user } = useContext(UserContext);
	const userType = user.type.toUpperCase().replace("-"," ");


	return (
		<header className="flex items-center justify-between px-10 py-3 shadow-xl shadow-primary-200/10">
			{/* <SearchBar /> */}
			<h1 className="text-2xl font-bold text-primary-700">{userType}</h1>
			<div className="flex items-center gap-4">
				<Notification />
				
				<div className=" w-0.5 h-7 bg-primary-100"></div>

				<div className="w-10 h-10 rounded-full bg-gray-100">
					<img
						src={profilePicture}
						alt="profile"
						className="w-full h-full object-cover rounded-full"
					/>
				</div>
				
				<span>{user.firstName} {user.lastName}</span>
				<UserHeaderOptions />
			</div>
		</header>
	);
};

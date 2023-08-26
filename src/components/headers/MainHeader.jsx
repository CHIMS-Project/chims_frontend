import { SearchBar } from "../form/SearchBar";
import profilePicture from "../../assets/images/profile-pic.jpg";
import { Notification } from "../dropdowns/Notification";
import { UserHeaderOptions } from "../dropdowns/UserHeaderOptions";

export const MainHeader = () => {
	return (
		<header className="flex items-center justify-between px-10 py-3 shadow-xl shadow-primary-200/10">
			<SearchBar />

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
				<span>Micheal Osborn</span>
                <UserHeaderOptions />
			</div>
		</header>
	);
};

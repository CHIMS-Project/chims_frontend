import { NavLink } from "react-router-dom";

export const StaffFilter = () => {
	const activeClass =
		"bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white";
	const inactiveClass =
		"bg-primary-200 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white";

	return (
		<div className="flex flex-row mb-4">
			<NavLink
				to={`.`}
				end
				className={({ isActive }) =>
					isActive ? activeClass : inactiveClass
				}>
				All
			</NavLink>
			<NavLink
				to={`doctors`}
				className={({ isActive }) =>
					isActive ? activeClass : inactiveClass
				}>
				Doctors
			</NavLink>
			<NavLink
				to={`nurses`}
				className={({ isActive }) =>
					isActive ? activeClass : inactiveClass
				}>
				Nurses
			</NavLink>
		</div>
	);
};

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppConfigsContext } from "../../serviceProviders/contexts/AppConfigsContext";
import { useContext } from 'react'
export const SideNavBtn = ({ to, text, icon, end = false }) => {
	const activeClass =
		"flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md hover:text-white hover:no-underline shadow-xl transition-all";
	const inactiveClass =
		"flex items-center gap-2 hover:bg-slate-100 text-primary-300 px-4 py-1 hover:no-underline rounded-md hover:text-primary-500 transition-all font-normal";

    const { sideNavOpen } = useContext(AppConfigsContext)

	return (
		<>
			<NavLink
				to={to}
                end={end}
				className={({ isActive }) =>
					isActive ? activeClass : inactiveClass
				}>
				<FontAwesomeIcon icon={icon} />
				{sideNavOpen && <span>{text}</span>}
			</NavLink>
		</>
	);
};

SideNavBtn.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
    end: PropTypes.bool
};

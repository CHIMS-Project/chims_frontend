import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SecondaryBtnLink = ({ to, children}) => {
	return (
		<>
			<Link
				to={to}
				className="hover:no-underline bg-primary-100 hover:bg-primary-500 text-primary-500 hover:text-white px-4 py-1 rounded-md transition-all mt-4">
				{children}
			</Link>
		</>
	);
};

SecondaryBtnLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

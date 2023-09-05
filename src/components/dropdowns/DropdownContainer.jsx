import PropTypes from "prop-types";

export const DropdownContainer = ({ children }) => (
	<div className="relative">{children}</div>
);

DropdownContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

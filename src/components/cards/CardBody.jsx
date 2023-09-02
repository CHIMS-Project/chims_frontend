import PropTypes from "prop-types";

export const CardBody = ({ children, className }) => (
	<div className={`flex items-center p-3 gap-3 ${className || ""}`}>{children}</div>
);

CardBody.propTypes = {
	children: PropTypes.node.isRequired,
    className: PropTypes.string
};

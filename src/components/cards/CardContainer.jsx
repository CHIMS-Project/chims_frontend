import PropTypes from "prop-types";

export const CardContainer = ({ children, className }) => {
  return (
    <div className={`p-5 border rounded-xl shadow-lg shadow-black/5 h-full ${className || ''}`}>
        {children}
    </div>
  )
}

CardContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

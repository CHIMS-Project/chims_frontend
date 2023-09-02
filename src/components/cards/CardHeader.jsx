import PropTypes from "prop-types";

export const CardHeader = ({ title }) => {
  return (
    <h1 className="text-primary-700 text-xl font-semibold px-3 py-1 bg-slate-100 rounded-md">{title}</h1>
  )
}

CardHeader.propTypes = {
    title: PropTypes.string
}

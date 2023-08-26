import PropTypes from 'prop-types'
export const InputField = ({ children}) => {
  return (
    <div className="relative w-full rounded-xl ring-1 ring-primary-100 px-3 py-1 input-field transition flex items-center mb-5" >{children}</div>
  )
}

InputField.propTypes = {
    children: PropTypes.node.isRequired
}

import PropTypes from "prop-types";
export const Input = ({ label, id, type = 'text', onChange, isRequired, defaultValue }) => {
	return (
		<>
			<label
				htmlFor={id}
				className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-200 transition-all cursor-text">
				{label}
			</label>
			<input
				type={type}
				name={id}
				id={id}
				className="w-full border-0 bg-inherit focus:ring-0"
                required={isRequired}
                onChange={onChange}
				placeholder=""
				defaultValue={defaultValue}
			/>
		</>
	);
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
	defaultValue: PropTypes.string
}
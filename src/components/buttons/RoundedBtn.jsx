import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const RoundedBtn = ({ icon, onClick, isLoading = false }) => {
	return (
		<button
			onClick={onClick}
			disabled={isLoading}
			className="w-7 h-7 ring-1 grid place-items-center ring-primary-100 rounded-full text-primary-200 hover:bg-primary-200/40 hover:text-white">
			{isLoading ? (
				<FontAwesomeIcon
					icon={faSpinner}
					className="animate-spin"
				/>
			) : (
				<FontAwesomeIcon icon={icon} />
			)}
		</button>
	);
};

RoundedBtn.propTypes = {
	icon: PropTypes.object.isRequired,
	onClick: PropTypes.func,
	isLoading: PropTypes.bool,
};

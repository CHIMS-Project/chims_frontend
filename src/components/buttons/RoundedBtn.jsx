import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

export const RoundedBtn = ({ icon, onClick }) => {
	return (
		<button
        onClick={onClick} 
        className="w-7 h-7 ring-1 grid place-items-center ring-primary-100 rounded-full text-primary-200 hover:bg-primary-200/40 hover:text-white">
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

RoundedBtn.propTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

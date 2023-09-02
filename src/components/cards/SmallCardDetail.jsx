import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const SmallCardDetail = ({ figure, detailTitle, icon}) => {
	return (
		<div className="flex items-end gap-1 mt-3 p-2">
			<span className="text-5xl font-black text-primary-700">{figure}</span>
			<div className="p-2 rounded-md">
				<span className="mr-2 text-primary-800">{detailTitle}</span>
				<FontAwesomeIcon
					icon={icon}
					className="text-xl text-primary-500"
				/>
			</div>
		</div>
	);
};

SmallCardDetail.propTypes = {
    figure: PropTypes.number.isRequired,
    detailTitle: PropTypes.string.isRequired,
    icon: PropTypes.object
}

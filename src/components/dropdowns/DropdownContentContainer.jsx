import { motion } from "framer-motion";
import PropTypes from "prop-types";
export const DropdownContentContainer = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className="absolute min-w-[11rem] right-0 top-full bg-slate-50 border border-slate-200 p-2 rounded-md mt-2 shadow-xl shadow-primary-100/50">
			{children}
		</motion.div>
	)
};

DropdownContentContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
